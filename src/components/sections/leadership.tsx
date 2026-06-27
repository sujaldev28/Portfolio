"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Calendar, MapPin, CheckCircle, ShieldAlert } from "lucide-react";
import { leadershipData } from "@/data/leadership";

export function Leadership() {
  return (
    <section id="leadership" className="relative py-24 border-t border-border/30">
      <div className="absolute bottom-[20%] right-[-10%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-[95px] pointer-events-none" />

      <div className="mx-auto max-w-5xl px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs font-semibold tracking-widest uppercase text-primary"
          >
            Leadership &amp; Influence
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Positions of Responsibility
          </motion.h3>
        </div>

        {/* Leadership Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipData.map((item, idx) => {
            const isSecretary = item.id.includes("secretary");

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`glow-card p-6 md:p-8 flex flex-col justify-between ${
                  isSecretary ? "md:col-span-2 border-primary/20 bg-primary/[0.01]" : ""
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/30 pb-4 mb-5">
                    <div>
                      <h4 className="font-sans text-lg font-bold text-foreground">
                        {item.role}
                      </h4>
                      <div className="flex items-center gap-2 text-primary font-bold text-xs mt-1">
                        <Users size={13} />
                        <span>{item.organization}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs font-semibold text-muted-foreground sm:text-right">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} className="text-primary/70" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={12} className="text-primary/70" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet points detailing responsibilities */}
                  <ul className="flex flex-col gap-2.5">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed">
                        <CheckCircle size={13} className="text-primary mt-0.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
