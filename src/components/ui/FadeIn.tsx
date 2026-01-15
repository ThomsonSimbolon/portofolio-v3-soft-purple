"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  threshold?: number;
}

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 600,
  threshold = 0.1,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const directionStyles = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
  };

  return (
    <div
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : undefined,
      }}
      {...(!isVisible && {
        style: {
          transitionDuration: `${duration}ms`,
          transitionDelay: `${delay}ms`,
          opacity: 0,
          transform: directionStyles[direction].includes("translate-y")
            ? `translateY(${direction === "up" ? "2rem" : "-2rem"})`
            : `translateX(${direction === "left" ? "2rem" : "-2rem"})`,
        },
      })}
    >
      {children}
    </div>
  );
}
