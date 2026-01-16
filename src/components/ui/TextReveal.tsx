"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number; // Delay between each word
  duration?: number;
  threshold?: number;
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  staggerDelay = 50,
  duration = 500,
  threshold = 0.2,
}: TextRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

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

  // Convert children to string and split into words
  const text = typeof children === "string" ? children : String(children);
  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline ${className}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden"
          style={{ marginRight: "0.25em" }}
        >
          <span
            className="inline-block"
            style={{
              transform: isVisible ? "translateY(0)" : "translateY(100%)",
              opacity: isVisible ? 1 : 0,
              transition: `transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay + index * staggerDelay}ms, opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay + index * staggerDelay}ms`,
              willChange: isVisible ? "auto" : "transform, opacity",
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}
