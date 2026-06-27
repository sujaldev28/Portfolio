import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

// Simple in-memory cache for rate-limiting (keyed by client IP address)
// Limit: 5 submissions per hour
const rateLimitCache = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const requests = rateLimitCache.get(ip) || [];
  
  // Keep only requests in the current window
  const activeRequests = requests.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);
  
  if (activeRequests.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  
  activeRequests.push(now);
  rateLimitCache.set(ip, activeRequests);
  return false;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, botField } = body;

    // 1. Honeypot Spam Protection Check
    // If the hidden 'botField' input is filled out, quietly ignore and return fake success
    if (botField && botField.trim() !== "") {
      console.log("Spam bot detected via honeypot. Swallowing request silently.");
      return NextResponse.json(
        { success: true, message: "Message processed successfully." },
        { status: 200 }
      );
    }

    // 2. Server-side Rate Limiting
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown-ip";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many messages sent. Please try again in an hour." },
        { status: 429 }
      );
    }

    // 3. Server-side Input Validation
    if (!name || name.trim() === "") {
      return NextResponse.json({ success: false, message: "Name is required." }, { status: 400 });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ success: false, message: "A valid email is required." }, { status: 400 });
    }
    if (!subject || subject.trim() === "") {
      return NextResponse.json({ success: false, message: "Subject is required." }, { status: 400 });
    }
    if (!message || message.trim() === "") {
      return NextResponse.json({ success: false, message: "Message details are required." }, { status: 400 });
    }

    const payload = {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
      read: false,
    };

    let savedToSupabase = false;
    let emailSent = false;
    let savedToDisk = false;

    // 4. Supabase DB Storage Integration (Option 1)
    const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      try {
        const { createClient } = await import("@supabase/supabase-js");
        const supabase = createClient(supabaseUrl, supabaseKey);
        const { error } = await supabase.from("messages").insert([payload]);
        if (!error) {
          savedToSupabase = true;
          console.log("Contact submission saved successfully to Supabase database.");
        } else {
          console.error("Supabase insert error: ", error.message);
        }
      } catch (err) {
        console.error("Failed to write to Supabase client: ", err);
      }
    }

    // 5. Resend Email Sending Integration (Option 2)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(resendApiKey);
        const emailResponse = await resend.emails.send({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: "sujalhadge.dev@gmail.com",
          subject: `New Portfolio Message: ${payload.subject}`,
          text: `Name: ${payload.name}\nEmail: ${payload.email}\nDate: ${payload.timestamp}\n\nMessage:\n${payload.message}`,
        });
        if (!emailResponse.error) {
          emailSent = true;
          console.log("Contact email notification sent successfully via Resend API.");
        } else {
          console.error("Resend delivery error: ", emailResponse.error);
        }
      } catch (err) {
        console.error("Failed to deliver mail via Resend client: ", err);
      }
    }

    // 6. Local JSON File Database Fallback Storage
    // Saves submissions to a root 'messages.json' file if no database/email keys are active
    if (!savedToSupabase && !emailSent) {
      try {
        const filePath = path.join(process.cwd(), "messages.json");
        let data: any[] = [];
        
        try {
          const fileContents = await fs.readFile(filePath, "utf-8");
          data = JSON.parse(fileContents);
        } catch (e) {
          // File does not exist, start with empty array
        }

        data.push(payload);
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
        savedToDisk = true;
        console.log("Contact submission saved successfully to local file database (messages.json).");
      } catch (err) {
        console.error("Failed to append message to local disk: ", err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message processed successfully.",
        details: { savedToSupabase, emailSent, savedToDisk }
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Server API handler error: ", err);
    return NextResponse.json(
      { success: false, message: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
