"use client";

import { ReactNode, useState, useRef, MouseEvent } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  gradientBorder?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = false,
  glow = false,
  gradientBorder = false,
}: CardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !gradientBorder) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const baseStyles =
    "bg-dark-card rounded-2xl backdrop-blur-sm relative overflow-hidden";

  const hoverStyles = hover
    ? "transition-all duration-300 hover:-translate-y-1"
    : "";

  const glowStyles = glow && isHovered ? "shadow-glow-lg" : "";

  return (
    <div
      ref={cardRef}
      className={`${baseStyles} ${hoverStyles} ${glowStyles} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Gradient border effect */}
      {gradientBorder && (
        <>
          {/* Static border */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              padding: "1px",
              background: isHovered
                ? "linear-gradient(135deg, rgba(130, 71, 255, 0.5) 0%, rgba(110, 38, 217, 0.3) 50%, rgba(130, 71, 255, 0.5) 100%)"
                : "rgba(255, 255, 255, 0.1)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              transition: "background 0.3s ease",
            }}
          />
          {/* Mouse-following glow */}
          {isHovered && (
            <div
              className="absolute pointer-events-none"
              style={{
                width: "200px",
                height: "200px",
                left: mousePosition.x - 100,
                top: mousePosition.y - 100,
                background:
                  "radial-gradient(circle, rgba(130, 71, 255, 0.15) 0%, transparent 70%)",
                borderRadius: "50%",
                transition: "left 0.1s ease, top 0.1s ease",
              }}
            />
          )}
        </>
      )}
      {/* Regular border for non-gradient cards */}
      {!gradientBorder && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none border border-dark-border"
          style={{
            borderColor: isHovered && hover ? "rgba(130, 71, 255, 0.3)" : undefined,
            transition: "border-color 0.3s ease",
          }}
        />
      )}
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

