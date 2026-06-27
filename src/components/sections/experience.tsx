"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Terminal, CheckCircle } from "lucide-react";
import { experienceData, ExperienceItem } from "@/data/experience";

// Mapping of custom commit details strictly matching resume bullet details
const gitCommits: Record<string, { hash: string; branch: string; bullets: { msg: string; hash: string }[] }> = {
  "whatsapp-saas": {
    hash: "f73a2bc",
    branch: "origin/main",
    bullets: [
      { msg: "Developing a multi-tenant WhatsApp Business API SaaS platform using the MERN stack.", hash: "e2b10a2" },
      { msg: "Built the MVP with CRM, campaigns, and multi-agent support.", hash: "b8f01b4" }
    ]
  },
  "campus-iq": {
    hash: "c810e82",
    branch: "JIT/Campus-IQ",
    bullets: [
      { msg: "Leading the development of a centralized college management platform using the MERN stack.", hash: "3b01f92" },
      { msg: "Collaborating with faculty and stakeholders to gather requirements and deliver production-ready features.", hash: "a90e21a" }
    ]
  }
};

export function Experience() {
  return (
    <section id="experience" className="relative py-24 border-t border-border/30">
      <div className="absolute bottom-[10%] left-[-5%] h-[350px] w-[350px] rounded-full bg-indigo-500/5 blur-[90px] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs font-semibold tracking-widest uppercase text-primary"
          >
            Experience
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Git Commit History Log
          </motion.h3>
        </div>

        {/* Timeline Path Container */}
        <div className="relative border-l border-dashed border-border/80 pl-6 md:pl-10 ml-4 md:ml-6 flex flex-col gap-16">
          {experienceData.map((item: ExperienceItem, idx: number) => {
            const gitInfo = gitCommits[item.id] || { hash: "7c1e82a", branch: "main", bullets: [] };

            return (
              <div key={item.id} className="relative">
                {/* Timeline Git Commit Node */}
                <span className="absolute -left-[31px] md:-left-[47px] top-1.5 flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full border-2 border-indigo-400 bg-background shadow-[0_0_15px_rgba(99,102,241,0.6)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                </span>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
                  className="glow-card p-6 md:p-8 overflow-hidden"
                >
                  {/* Job Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/30 pb-4 mb-6">
                    <div>
                      <h4 className="font-sans text-xl font-bold text-foreground flex items-center gap-2">
                        <span>{item.role}</span>
                      </h4>
                      <div className="flex items-center gap-2 text-primary font-bold text-sm mt-1">
                        <Briefcase size={14} />
                        <span>{item.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-muted-foreground md:text-right">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-primary/70" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={13} className="text-primary/70" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Terminal CLI Git commit metadata */}
                  <div className="font-mono rounded-lg border border-border/60 bg-black/40 p-4 mb-6 text-xs text-muted-foreground leading-relaxed">
                    <div className="flex items-center gap-2 text-primary/80 mb-2 font-bold select-none border-b border-border/20 pb-2">
                      <Terminal size={12} />
                      <span>git show --summary {gitInfo.hash}</span>
                    </div>
                    <div>
                      <span className="text-yellow-500 font-bold">commit {gitInfo.hash}0b8d21ea2f9c8d19ab38</span>
                      <span className="text-indigo-400 font-bold ml-2">({gitInfo.branch})</span>
                    </div>
                    <div className="mt-1">
                      <span className="font-bold text-foreground">Author: </span>
                      <span>Sujal Hadge &lt;sujalhadge.dev@gmail.com&gt;</span>
                    </div>
                    <div>
                      <span className="font-bold text-foreground">Date: </span>
                      <span>{item.duration.split(" – ")[0]}</span>
                    </div>
                  </div>

                  {/* Commit messages / bullets */}
                  <div className="flex flex-col gap-4 pl-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-primary/80 select-none">Commit messages</span>
                    {gitInfo.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex gap-3 items-start">
                        <span className="font-mono text-xs text-indigo-400/70 select-none shrink-0 pt-0.5 font-semibold">
                          * {bullet.hash}
                        </span>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {bullet.msg}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies tags */}
                  <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-border/30">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-secondary/80 border border-border/50 px-2 py-0.5 text-[9px] font-bold text-muted-foreground font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
