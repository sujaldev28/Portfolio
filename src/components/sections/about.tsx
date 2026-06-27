"use client";

import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { summaryData } from "@/data/summary";

export function About() {
  return (
    <section id="about" className="relative py-24 border-t border-border/30">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs font-semibold tracking-widest uppercase text-primary"
          >
            Summary
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Professional Summary
          </motion.h3>
        </div>

        {/* Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="glow-card p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start bg-secondary/5"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-[0_0_15px_rgba(99,102,241,0.1)]">
            <User size={24} />
          </div>
          <div>
            <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
              {summaryData.summaryParagraph}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
