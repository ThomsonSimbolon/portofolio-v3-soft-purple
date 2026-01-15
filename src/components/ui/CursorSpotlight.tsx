"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return;
      
      const { clientX, clientY } = e;
      spotlightRef.current.style.left = `${clientX}px`;
      spotlightRef.current.style.top = `${clientY}px`;
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className={`fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        width: "400px",
        height: "400px",
        background:
          "radial-gradient(circle, rgba(130, 71, 255, 0.15) 0%, rgba(130, 71, 255, 0.05) 30%, transparent 60%)",
        filter: "blur(1px)",
      }}
      aria-hidden="true"
    />
  );
}
