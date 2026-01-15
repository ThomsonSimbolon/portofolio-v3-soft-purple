"use client";

import Image from "next/image";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function Avatar({
  src,
  alt = "Profile",
  size = "lg",
  className = "",
}: AvatarProps) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-40 h-40",
  };

  const ringSize = {
    sm: "w-[72px] h-[72px]",
    md: "w-[104px] h-[104px]",
    lg: "w-[136px] h-[136px]",
    xl: "w-[168px] h-[168px]",
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Animated Ring */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${ringSize[size]} rounded-full`}
        style={{
          background: "conic-gradient(from 0deg, #8247FF, #6E26D9, #A78BFA, #8247FF)",
          animation: "spin 4s linear infinite",
        }}
      />

      {/* Inner mask to create ring effect */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${sizeClasses[size]} rounded-full bg-dark-bg`}
        style={{
          transform: "translate(-50%, -50%) scale(0.92)",
        }}
      />

      {/* Avatar Image */}
      <div className={`relative ${sizeClasses[size]} rounded-full overflow-hidden border-2 border-dark-card`}>
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 128px, 160px"
            priority
          />
        ) : (
          // Default avatar placeholder
          <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
            <span className="text-4xl font-bold text-text-main">T</span>
          </div>
        )}
      </div>

      {/* Glow effect */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${sizeClasses[size]} rounded-full bg-primary/20 blur-xl -z-10`}
      />

      <style jsx>{`
        @keyframes spin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
