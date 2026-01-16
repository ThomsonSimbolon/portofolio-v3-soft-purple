"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const lastScrollTime = useRef(0);

  const handleScroll = useCallback(() => {
    // Throttle using requestAnimationFrame for 60fps max
    const now = performance.now();
    if (now - lastScrollTime.current < 16) return; // ~60fps throttle
    
    lastScrollTime.current = now;
    
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll]);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 z-[60] overflow-hidden"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    >
      {/* Use scaleX for GPU-accelerated animation */}
      <div
        className="h-full w-full bg-gradient-primary"
        style={{
          transform: `scaleX(${progress / 100})`,
          transformOrigin: "left center",
          transition: "transform 100ms ease-out",
          willChange: "transform",
        }}
      />
    </div>
  );
}

