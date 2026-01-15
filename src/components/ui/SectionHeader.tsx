interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  accent?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  title,
  subtitle,
  accent,
  className = "",
  align = "center",
}: SectionHeaderProps) {
  const alignStyles = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-16 ${alignStyles} ${className}`}>
      {accent && (
        <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-3">
          {accent}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
