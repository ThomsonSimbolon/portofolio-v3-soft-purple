"use client";

import { useEffect, useRef } from "react";

export default function GradientOrbs() {
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orbs = [orb1Ref.current, orb2Ref.current, orb3Ref.current];
    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.005;

      orbs.forEach((orb, index) => {
        if (!orb) return;

        const offset = index * (Math.PI * 2) / 3;
        const x = Math.sin(time + offset) * 100;
        const y = Math.cos(time * 0.7 + offset) * 50;

        orb.style.transform = `translate(${x}px, ${y}px)`;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Primary large orb - top center */}
      <div
        ref={orb1Ref}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(130, 71, 255, 0.4) 0%, rgba(130, 71, 255, 0) 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Secondary orb - bottom left */}
      <div
        ref={orb2Ref}
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(110, 38, 217, 0.5) 0%, rgba(110, 38, 217, 0) 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Tertiary orb - right side */}
      <div
        ref={orb3Ref}
        className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(167, 139, 250, 0.4) 0%, rgba(167, 139, 250, 0) 70%)",
          filter: "blur(50px)",
        }}
      />
    </div>
  );
}
