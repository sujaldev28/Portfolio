"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Github, ExternalLink, CheckCircle } from "lucide-react";
import { projectsData, ProjectItem } from "@/data/projects";
import { cn } from "@/lib/utils";

export function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Full Stack" | "Data Science">("All");

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      
      const lowercaseQuery = searchQuery.toLowerCase();
      const matchesSearch =
        project.title.toLowerCase().includes(lowercaseQuery) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(lowercaseQuery)) ||
        project.bullets.some((bullet) => bullet.toLowerCase().includes(lowercaseQuery));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="projects" className="relative py-24 border-t border-border/30">
      <div className="absolute top-[10%] left-[-10%] h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs font-semibold tracking-widest uppercase text-primary"
          >
            Projects
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Academic &amp; Independent Projects
          </motion.h3>
        </div>

        {/* Controls: Search + Filter */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by title, technology, or details..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-border/40 bg-secondary/20 py-2.5 pl-10 pr-4 text-sm text-foreground placeholder-muted-foreground outline-none transition-all focus:border-primary/40 focus:bg-secondary/40 focus:shadow-[0_0_15px_rgba(99,102,241,0.15)]"
            />
          </div>

          {/* Filter Options */}
          <div className="flex gap-2 p-1 rounded-xl border border-border/30 bg-secondary/10 self-start md:self-auto shrink-0">
            {(["All", "Full Stack", "Data Science"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "rounded-lg px-4 py-1.5 text-xs font-bold transition-all duration-300",
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: ProjectItem) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glow-card p-6 flex flex-col justify-between min-h-[280px]"
              >
                <div>
                  {/* Card Header Category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[10px] font-bold text-primary">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-sans text-lg font-bold text-foreground">
                    {project.title}
                  </h4>

                  {/* Bullet points */}
                  <ul className="flex flex-col gap-2.5 mt-4">
                    {project.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed">
                        <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom tech tags and github link */}
                <div className="mt-6 border-t border-border/30 pt-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-secondary/50 px-2 py-0.5 text-[9px] font-bold text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1.5 text-xs font-bold text-primary hover:underline self-end sm:self-auto"
                  >
                    <Github size={13} />
                    <span>Repository</span>
                    <ExternalLink size={11} className="transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State Fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 border border-dashed border-border/40 rounded-2xl bg-secondary/5">
            <p className="text-sm text-muted-foreground">No projects match your search query.</p>
          </div>
        )}
      </div>
    </section>
  );
}
