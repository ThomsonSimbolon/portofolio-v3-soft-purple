"use client";

import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  name: string;
  level: number; // 0-100
  delay?: number;
}

export default function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  const [isAnimated, setIsAnimated] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            setTimeout(() => {
              setIsAnimated(true);
            }, delay);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={barRef} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-text-main font-medium text-sm group-hover:text-primary transition-colors duration-200">
          {name}
        </span>
        <span className="text-text-muted text-xs">{level}%</span>
      </div>
      <div className="h-2 bg-dark-bg rounded-full overflow-hidden border border-dark-border">
        {/* Use scaleX instead of width for GPU-accelerated animation */}
        <div
          className="h-full w-full bg-gradient-primary rounded-full relative"
          style={{
            transform: `scaleX(${isAnimated ? level / 100 : 0})`,
            transformOrigin: "left center",
            transition: "transform 1s cubic-bezier(0.4, 0, 0.2, 1)",
            willChange: "transform",
          }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      </div>
    </div>
  );
}
