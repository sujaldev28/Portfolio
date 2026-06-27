"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, ArrowRight, Download, ChevronDown } from "lucide-react";
import { personalData } from "@/data/personal";
import { summaryData } from "@/data/summary";

const cyclingPhrases = [
  "scalable products.",
  "intelligent systems.",
  "software people love.",
  "the digital future.",
];

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % cyclingPhrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offsetTop = contactSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const offsetTop = aboutSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Aurora Radial Backdrop Accent */}
      <div className="absolute top-[-10%] left-[-10%] h-[60%] w-[60%] rounded-full bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[60%] w-[60%] rounded-full bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center md:px-8">

        {/* Full Name Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-sans text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-7xl"
        >
          {personalData.name}
        </motion.h1>

        {/* Sub-headline cycling animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 flex flex-col items-center justify-center gap-1.5 font-sans text-2xl font-bold tracking-tight text-muted-foreground sm:text-3xl md:text-5xl"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-3">
            <span>Building</span>
            <div className="relative inline-block h-[40px] sm:h-[50px] md:h-[65px] min-w-[240px] text-left sm:text-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={phraseIndex}
                  initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -15, filter: "blur(5px)" }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-0 sm:left-auto right-0 text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-purple-400 font-extrabold inline-block"
                >
                  {cyclingPhrases[phraseIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Narrative Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl font-medium leading-relaxed"
        >
          {summaryData.heroSubtitle}
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
        >
          <button
            onClick={handleScrollToContact}
            className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-indigo-600 hover:shadow-indigo-500/35 hover:scale-[1.02]"
          >
            <span>Let&apos;s Connect</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
          
          <a
            href={personalData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-border bg-secondary/30 px-6 py-3.5 text-base font-bold text-foreground transition-all hover:bg-secondary/60 hover:border-primary/30"
          >
            <span>Download Resume</span>
            <Download size={16} className="transition-transform group-hover:translate-y-[1px]" />
          </a>
        </motion.div>

        {/* Terminal Code Snippet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mx-auto mt-12 w-full max-w-2xl overflow-hidden rounded-xl border border-border/40 bg-black/40 backdrop-blur-md text-left shadow-2xl"
        >
          {/* Top bar controls */}
          <div className="flex items-center justify-between border-b border-border/40 bg-secondary/10 px-4 py-2">
            <div className="flex gap-1.5 select-none">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
            </div>
            <div className="text-[10px] font-mono text-muted-foreground select-none">sujal.ts</div>
            <div className="w-10" />
          </div>
          {/* Code content */}
          <pre className="p-5 font-mono text-xs leading-relaxed overflow-x-auto selection:bg-primary/20 text-muted-foreground select-text">
            <code>
              <div>
                <span className="text-pink-400 font-bold">const</span>{" "}
                <span className="text-blue-400 font-bold">developer</span> = {"{"}
              </div>
              <div className="pl-4">
                <span className="text-indigo-300 font-bold">name:</span>{" "}
                <span className="text-emerald-400">&quot;Sujal Pradeep Hadge&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-indigo-300 font-bold">role:</span>{" "}
                <span className="text-emerald-400">&quot;Full Stack Developer&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-indigo-300 font-bold">education:</span>{" "}
                <span className="text-emerald-400">&quot;B.Tech in CSE (JIT Nagpur)&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-indigo-300 font-bold">academicCGPA:</span>{" "}
                <span className="text-purple-400">9.81</span>,
              </div>
              <div className="pl-4">
                <span className="text-indigo-300 font-bold">coreStack:</span> [
                <span className="text-emerald-400">&quot;React.js&quot;</span>,{" "}
                <span className="text-emerald-400">&quot;Node.js&quot;</span>,{" "}
                <span className="text-emerald-400">&quot;MongoDB&quot;</span>,{" "}
                <span className="text-emerald-400">&quot;Python&quot;</span>
                ],
              </div>
              <div className="pl-4">
                <span className="text-indigo-300 font-bold">positions:</span> [
                <span className="text-emerald-400">&quot;ACM Secretary&quot;</span>,{" "}
                <span className="text-emerald-400">&quot;NSS Vice President&quot;</span>
                ]
              </div>
              <div>{"};"}</div>
            </code>
          </pre>
        </motion.div>

        {/* Core Contact Shortcuts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm font-semibold text-muted-foreground border-t border-border/30 pt-8 w-full max-w-2xl"
        >
          <a
            href={personalData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
          <a
            href={personalData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${personalData.email}`}
            className="flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <Mail size={16} />
            <span>Email</span>
          </a>
          <div className="flex items-center gap-1.5 select-none">
            <MapPin size={16} className="text-primary/70" />
            <span>{personalData.location}</span>
          </div>
        </motion.div>
      </div>

      {/* Interactive Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-auto">
        <a
          href="#about"
          onClick={handleScrollToAbout}
          className="flex flex-col items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          <span>Discover More</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-border/50 bg-secondary/10"
          >
            <ChevronDown size={14} />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
