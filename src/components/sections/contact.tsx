"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Copy, Check, Github, Linkedin, AlertCircle } from "lucide-react";
import { personalData } from "@/data/personal";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "", botField: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Could not copy email text: ", err);
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setApiError(null);
    setSubmitSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        import("canvas-confetti").then((module) => {
          const confetti = module.default;
          confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 },
            colors: ["#6366f1", "#a855f7", "#3b82f6"],
          });
        });
        setFormData({ name: "", email: "", subject: "", message: "", botField: "" });
        
        // Clean up success status message after 6s
        setTimeout(() => setSubmitSuccess(false), 6000);
      } else {
        setIsSubmitting(false);
        setApiError(result.message || "Failed to deliver contact message.");
      }
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setApiError("A network error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative py-24 border-t border-border/30">
      <div className="absolute top-1/2 left-[5%] h-[350px] w-[350px] rounded-full bg-indigo-500/5 blur-[95px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs font-semibold tracking-widest uppercase text-primary"
          >
            Get In Touch
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Let&apos;s Build Something Together
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-stretch">
          
          {/* Left Column: Direct info cards */}
          <div className="lg:col-span-2 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-6">
              {/* Direct coordinates grid */}
              <div className="flex flex-col gap-4">
                {/* Email (with Copy utility) */}
                <div className="flex items-center justify-between rounded-xl border border-border/50 bg-secondary/10 p-4 transition-all hover:border-primary/20">
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Mail size={18} />
                    </span>
                    <div className="overflow-hidden">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Email Directly</span>
                      <a href={`mailto:${personalData.email}`} className="block text-sm font-bold text-foreground truncate hover:underline">
                        {personalData.email}
                      </a>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleCopyEmail}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground transition-all hover:bg-secondary"
                    title="Copy to clipboard"
                  >
                    {copied ? <Check size={14} className="text-green-400 animate-scale" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3.5 rounded-xl border border-border/50 bg-secondary/10 p-4 transition-all hover:border-primary/20">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone size={18} />
                  </span>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Phone Number</span>
                    <a href={`tel:${personalData.phone}`} className="block text-sm font-bold text-foreground hover:underline">
                      {personalData.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3.5 rounded-xl border border-border/50 bg-secondary/10 p-4 transition-all hover:border-primary/20">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Work Location</span>
                    <span className="block text-sm font-bold text-foreground">
                      {personalData.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social channels bottom segment */}
            <div className="border-t border-border/30 pt-6">
              <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block mb-3">Professional Profiles</span>
              <div className="flex items-center gap-4">
                <a
                  href={personalData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-border bg-secondary/20 px-4 py-2.5 text-xs font-bold text-foreground hover:bg-secondary transition-colors"
                >
                  <Github size={15} />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-border bg-secondary/20 px-4 py-2.5 text-xs font-bold text-foreground hover:bg-secondary transition-colors"
                >
                  <Linkedin size={15} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Custom contact form */}
          <div className="lg:col-span-3 glow-card p-6 md:p-8 flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
              {/* Bot Honeypot field (hidden from screen reader and screen layout) */}
              <div className="absolute opacity-0 pointer-events-none h-0 w-0" aria-hidden="true">
                <label htmlFor="botField">Leave this field blank</label>
                <input
                  type="text"
                  id="botField"
                  name="botField"
                  tabIndex={-1}
                  value={formData.botField}
                  onChange={handleInputChange}
                  autoComplete="off"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`rounded-xl border bg-secondary/20 px-4 py-2.5 text-sm text-foreground outline-none transition-all ${
                      errors.name ? "border-red-500/50 focus:border-red-500" : "border-border/40 focus:border-primary/40"
                    }`}
                    placeholder="Enter name"
                  />
                  {errors.name && (
                    <span className="text-[10px] text-red-400 flex items-center gap-1">
                      <AlertCircle size={10} />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`rounded-xl border bg-secondary/20 px-4 py-2.5 text-sm text-foreground outline-none transition-all ${
                      errors.email ? "border-red-500/50 focus:border-red-500" : "border-border/40 focus:border-primary/40"
                    }`}
                    placeholder="name@example.com"
                  />
                  {errors.email && (
                    <span className="text-[10px] text-red-400 flex items-center gap-1">
                      <AlertCircle size={10} />
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`rounded-xl border bg-secondary/20 px-4 py-2.5 text-sm text-foreground outline-none transition-all ${
                    errors.subject ? "border-red-500/50 focus:border-red-500" : "border-border/40 focus:border-primary/40"
                  }`}
                  placeholder="How can I help you?"
                />
                {errors.subject && (
                  <span className="text-[10px] text-red-400 flex items-center gap-1">
                    <AlertCircle size={10} />
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`rounded-xl border bg-secondary/20 px-4 py-2.5 text-sm text-foreground outline-none transition-all resize-none ${
                    errors.message ? "border-red-500/50 focus:border-red-500" : "border-border/40 focus:border-primary/40"
                  }`}
                  placeholder="Write your message details..."
                />
                {errors.message && (
                  <span className="text-[10px] text-red-400 flex items-center gap-1">
                    <AlertCircle size={10} />
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Trigger */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-indigo-600 hover:shadow-indigo-500/30 hover:scale-[1.01] disabled:opacity-50 disabled:scale-100 disabled:pointer-events-none"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                    <span>Sending message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>

              {/* Success Alert */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center gap-2.5 rounded-lg border border-green-500/20 bg-green-500/5 p-4 text-xs text-green-400"
                  >
                    <CheckCircle size={16} className="shrink-0" />
                    <span>Your message has been successfully received. I will respond to your email as soon as possible!</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Alert */}
              <AnimatePresence>
                {apiError && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center gap-2.5 rounded-lg border border-red-500/20 bg-red-500/5 p-4 text-xs text-red-400"
                  >
                    <AlertCircle size={16} className="shrink-0" />
                    <span>{apiError}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
