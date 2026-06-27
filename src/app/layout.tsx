import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/layout/footer";
import { AmbientBackground } from "@/components/effects/ambient-background";
import { SpotlightWrapper } from "@/components/effects/spotlight-wrapper";
import { seoData } from "@/data/seo";
import { JsonLd } from "@/components/common/json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: seoData.title,
  description: seoData.description,
  keywords: seoData.keywords,
  metadataBase: new URL(seoData.siteUrl),
  openGraph: {
    title: seoData.openGraph.title,
    description: seoData.openGraph.description,
    url: seoData.openGraph.url,
    siteName: seoData.openGraph.siteName,
    type: "website",
    locale: seoData.openGraph.locale,
    images: seoData.openGraph.images,
  },
  twitter: {
    card: "summary_large_image",
    title: seoData.openGraph.title,
    description: seoData.openGraph.description,
    creator: seoData.twitter.handle,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full bg-background font-sans text-foreground antialiased selection:bg-primary/30 selection:text-foreground">
        <JsonLd />
        <ThemeProvider>
          {/* Mouse follow spotlight wrapper surrounding the full page layout */}
          <SpotlightWrapper className="relative min-h-screen flex flex-col z-10">
            <AmbientBackground />
            <Navbar />
            <main className="flex-grow relative z-10">
              {children}
            </main>
            <Footer />
          </SpotlightWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
