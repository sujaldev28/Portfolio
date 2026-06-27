"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalData } from "@/data/personal";
import { navigationData } from "@/data/navigation";

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative border-t border-border/40 bg-secondary/10 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start pb-12 border-b border-border/20">
          
          {/* Column 1: Info & Copyright */}
          <div className="flex flex-col gap-4">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="text-lg font-bold tracking-tight text-foreground"
            >
              &lt;Sujal.dev /&gt;
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Computer Science student building clean, production-ready interfaces and intelligent backend integrations.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              &copy; {new Date().getFullYear()} Sujal Pradeep Hadge. All rights reserved.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground">Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navigationData.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors py-0.5"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Social & Tech Stack */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground">Connect</h4>
            <div className="flex items-center gap-4 text-muted-foreground">
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-foreground transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-foreground transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                aria-label="Email"
                className="hover:text-foreground transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            <div className="text-xs text-muted-foreground leading-relaxed mt-2">
              <div className="flex items-center gap-1">
                <span>Handcrafted with</span>
                <Heart size={10} className="text-red-500 fill-red-500 animate-pulse" />
                <span>using Next.js 15, React 19,</span>
              </div>
              <div>Tailwind CSS &amp; Framer Motion.</div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & back to top */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
          <div className="text-xs text-muted-foreground">
            Nagpur, Maharashtra, India
          </div>
          
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span>Back to top</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-secondary/30 transition-all group-hover:-translate-y-0.5 group-hover:border-primary/40">
                <ArrowUp size={14} />
              </span>
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}
