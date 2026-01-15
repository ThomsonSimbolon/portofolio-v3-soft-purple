import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline";
}

export default function Badge({
  children,
  className = "",
  variant = "default",
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300";

  const variants = {
    default:
      "bg-primary/10 text-primary-light border border-primary/20 hover:border-primary/40 hover:shadow-glow-sm",
    outline:
      "bg-transparent text-text-muted border border-dark-border hover:border-primary/30 hover:text-primary-light",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
