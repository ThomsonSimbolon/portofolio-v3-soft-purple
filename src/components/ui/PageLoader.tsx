"use client";

import { useState, useEffect } from "react";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Fast at start, slow near end for realistic feel
        const increment = prev < 70 ? 8 : prev < 90 ? 3 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 50);

    // Hide loader after animation completes
    const hideTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-bg transition-opacity duration-500 ${
        progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Logo Animation */}
      <div className="relative mb-8">
        <div className="text-4xl md:text-5xl font-bold">
          <span
            className="text-primary inline-block animate-bounce"
            style={{ animationDelay: "0ms", animationDuration: "1s" }}
          >
            T
          </span>
          <span
            className="text-text-main inline-block"
            style={{
              opacity: progress > 20 ? 1 : 0,
              transform: progress > 20 ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.3s ease",
            }}
          >
            h
          </span>
          <span
            className="text-text-main inline-block"
            style={{
              opacity: progress > 30 ? 1 : 0,
              transform: progress > 30 ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.3s ease",
            }}
          >
            o
          </span>
          <span
            className="text-text-main inline-block"
            style={{
              opacity: progress > 40 ? 1 : 0,
              transform: progress > 40 ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.3s ease",
            }}
          >
            m
          </span>
          <span
            className="text-text-main inline-block"
            style={{
              opacity: progress > 50 ? 1 : 0,
              transform: progress > 50 ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.3s ease",
            }}
          >
            s
          </span>
          <span
            className="text-text-main inline-block"
            style={{
              opacity: progress > 60 ? 1 : 0,
              transform: progress > 60 ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.3s ease",
            }}
          >
            o
          </span>
          <span
            className="text-text-main inline-block"
            style={{
              opacity: progress > 70 ? 1 : 0,
              transform: progress > 70 ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.3s ease",
            }}
          >
            n
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-48 h-1 bg-dark-card rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-primary rounded-full transition-all duration-100 ease-out"
          style={{
            width: `${progress}%`,
            boxShadow: "0 0 10px rgba(130, 71, 255, 0.5)",
          }}
        />
      </div>

      {/* Loading Text */}
      <p className="mt-4 text-text-muted text-sm">
        Loading<span className="animate-pulse">...</span>
      </p>

      {/* Decorative Glow */}
      <div
        className="absolute w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        style={{
          animation: "pulse 2s ease-in-out infinite",
        }}
      />
    </div>
  );
}
