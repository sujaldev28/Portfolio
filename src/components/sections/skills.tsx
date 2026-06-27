"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Layout, Server, Cpu, Wrench } from "lucide-react";
import { skillsData, SkillCategory } from "@/data/skills";

const iconMap: Record<string, React.ComponentType<any>> = {
  Code,
  Layout,
  Server,
  Cpu,
  Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 border-t border-border/30">
      <div className="absolute top-[20%] right-[-10%] h-[350px] w-[350px] rounded-full bg-primary/5 blur-[90px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs font-semibold tracking-widest uppercase text-primary"
          >
            Technical Skills
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Technologies &amp; Competencies
          </motion.h3>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category: SkillCategory, idx: number) => {
            const IconComponent = iconMap[category.iconName] || Code;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glow-card p-6 flex flex-col justify-between transition-all duration-300 min-h-[220px]"
              >
                <div>
                  {/* Title & Icon */}
                  <div className="flex items-center gap-3 text-primary mb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <IconComponent size={20} />
                    </span>
                    <h4 className="font-sans text-base font-bold text-foreground">
                      {category.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills lists */}
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skillName) => (
                      <span
                        key={skillName}
                        className="rounded-lg px-2.5 py-1 text-[11px] font-semibold border border-border/50 bg-secondary/40 text-muted-foreground transition-all hover:border-primary/20 hover:text-foreground hover:bg-primary/5"
                      >
                        {skillName}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
