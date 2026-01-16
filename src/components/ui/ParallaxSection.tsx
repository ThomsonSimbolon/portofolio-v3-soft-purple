"use client";

import { useEffect, useRef, useState, ReactNode, useCallback } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number; // 0.1 = slow, 0.5 = medium, 1 = fast
  direction?: "up" | "down";
}

export default function ParallaxSection({
  children,
  className = "",
  speed = 0.3,
  direction = "up",
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);
  const rafRef = useRef<number | null>(null);
  const lastScrollTime = useRef(0);

  const handleScroll = useCallback(() => {
    // Throttle to ~60fps
    const now = performance.now();
    if (now - lastScrollTime.current < 16) return;
    lastScrollTime.current = now;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element is from the center of the viewport
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = elementCenter - viewportCenter;
      
      // Apply parallax effect based on distance from center
      const parallaxOffset = distanceFromCenter * speed * (direction === "up" ? -1 : 1);
      
      setTranslateY(parallaxOffset);
    });
  }, [speed, direction]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll]);

  return (
    <div
      ref={sectionRef}
      className={className}
      style={{
        transform: `translate3d(0, ${translateY}px, 0)`,
        transition: "transform 0.1s ease-out",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
