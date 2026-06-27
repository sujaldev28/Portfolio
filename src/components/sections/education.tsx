"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { educationData } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="relative py-24 border-t border-border/30">
      <div className="absolute top-1/3 right-[5%] h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-[90px] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs font-semibold tracking-widest uppercase text-primary"
          >
            Education
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Academic Qualifications
          </motion.h3>
        </div>

        {/* Education Timeline */}
        <div className="flex flex-col gap-8">
          {educationData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glow-card p-6 md:p-8"
            >
              {/* Institution and Degree Title */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/30 pb-4 mb-6">
                <div>
                  <div className="flex items-center gap-2.5 text-primary">
                    <GraduationCap size={22} />
                    <h4 className="font-sans text-xl font-bold text-foreground">
                      {item.institution}
                    </h4>
                  </div>
                  <p className="text-sm font-semibold text-muted-foreground mt-1.5 leading-relaxed">
                    {item.degree}
                  </p>
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

              {/* CGPA & Academic Stats Highlight */}
              <div className="flex items-center justify-between gap-6 bg-secondary/20 rounded-xl p-6 border border-border/30">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Award size={24} />
                  </span>
                  <div>
                    <h5 className="font-bold text-foreground text-sm">Academic Standings</h5>
                  </div>
                </div>
                
                <div className="text-right shrink-0">
                  <div className="text-2xl font-extrabold text-primary tracking-tight">
                    {item.grade}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Cumulative Grade</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
