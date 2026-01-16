"use client";

import Image from "next/image";
import { useState } from "react";

interface BlurImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function BlurImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  priority = false,
  sizes,
}: BlurImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Skeleton/Blur Placeholder */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-dark-card to-dark-bg transition-opacity duration-700 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Animated shimmer effect */}
        <div
          className="absolute inset-0 -translate-x-full animate-shimmer"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(130, 71, 255, 0.08), transparent)",
          }}
        />
      </div>

      {/* Actual Image */}
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover transition-all duration-700 ${
            isLoaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-105"
          }`}
          onLoad={() => {
            setIsLoading(false);
            setIsLoaded(true);
          }}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={`transition-all duration-700 ${
            isLoaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-105"
          }`}
          onLoad={() => {
            setIsLoading(false);
            setIsLoaded(true);
          }}
        />
      )}

      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
