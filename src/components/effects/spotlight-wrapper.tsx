"use client";

import React, { useRef } from "react";

interface SpotlightWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function SpotlightWrapper({ children, className = "" }: SpotlightWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty("--x", `${x}px`);
    containerRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 radial-glow transition-opacity duration-300" />
      {children}
    </div>
  );
}
