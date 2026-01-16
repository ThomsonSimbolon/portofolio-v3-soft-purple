"use client";

import ParallaxSection from "./ParallaxSection";
import TextReveal from "./TextReveal";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  accent?: string;
  className?: string;
  align?: "left" | "center";
  parallax?: boolean;
  parallaxSpeed?: number;
  textReveal?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  accent,
  className = "",
  align = "center",
  parallax = true,
  parallaxSpeed = 0.15,
  textReveal = true,
}: SectionHeaderProps) {
  const alignStyles = align === "center" ? "text-center" : "text-left";

  const content = (
    <div className={`mb-16 ${alignStyles} ${className}`}>
      {accent && (
        <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-3">
          {textReveal ? (
            <TextReveal delay={0} staggerDelay={30} duration={400}>
              {accent}
            </TextReveal>
          ) : (
            accent
          )}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main">
        {textReveal ? (
          <TextReveal delay={100} staggerDelay={50} duration={500}>
            {title}
          </TextReveal>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
          {textReveal ? (
            <TextReveal delay={300} staggerDelay={20} duration={400}>
              {subtitle}
            </TextReveal>
          ) : (
            subtitle
          )}
        </p>
      )}
    </div>
  );

  if (parallax) {
    return (
      <ParallaxSection speed={parallaxSpeed} direction="up">
        {content}
      </ParallaxSection>
    );
  }

  return content;
}


