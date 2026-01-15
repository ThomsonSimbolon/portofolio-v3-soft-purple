import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = false,
  glow = false,
}: CardProps) {
  const baseStyles =
    "bg-dark-card border border-dark-border rounded-2xl backdrop-blur-sm";

  const hoverStyles = hover
    ? "transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
    : "";

  const glowStyles = glow ? "hover:shadow-glow-lg" : "";

  return (
    <div className={`${baseStyles} ${hoverStyles} ${glowStyles} ${className}`}>
      {children}
    </div>
  );
}
