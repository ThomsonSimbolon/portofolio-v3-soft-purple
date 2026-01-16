"use client";

import { useEffect, useState, useCallback, useRef } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const rafRef = useRef<number | null>(null);
  const targetPosition = useRef({ x: 0, y: 0 });

  const updateCursor = useCallback(() => {
    // Smooth lerp for cursor following
    setPosition((prev) => ({
      x: prev.x + (targetPosition.current.x - prev.x) * 0.15,
      y: prev.y + (targetPosition.current.y - prev.y) * 0.15,
    }));
    rafRef.current = requestAnimationFrame(updateCursor);
  }, []);

  useEffect(() => {
    // Only enable custom cursor on desktop
    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Detect hoverable elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer") ||
        target.closest(".cursor-pointer") ||
        target.getAttribute("role") === "button";

      // Check for custom cursor text
      const cursorLabel =
        target.getAttribute("data-cursor") ||
        target.closest("[data-cursor]")?.getAttribute("data-cursor");

      setIsHovering(!!isInteractive);
      setCursorText(cursorLabel || "");
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousemove", handleElementHover, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    rafRef.current = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", handleElementHover);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible, updateCursor]);

  // Don't render on mobile/touch devices
  if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) {
    return null;
  }

  return (
    <>
      {/* Hide default cursor globally */}
      <style jsx global>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Main Cursor Dot */}
      <div
        className={`fixed top-0 left-0 z-[9999] pointer-events-none transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      >
        <div
          className={`w-2 h-2 rounded-full bg-primary transition-transform duration-150 ${
            isClicking ? "scale-50" : "scale-100"
          }`}
          style={{
            boxShadow: "0 0 10px rgba(130, 71, 255, 0.5)",
          }}
        />
      </div>

      {/* Cursor Ring */}
      <div
        className={`fixed top-0 left-0 z-[9998] pointer-events-none transition-all duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translate(${position.x - (isHovering ? 24 : 16)}px, ${
            position.y - (isHovering ? 24 : 16)
          }px)`,
        }}
      >
        <div
          className={`rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
            isHovering
              ? "w-12 h-12 border-primary bg-primary/10"
              : "w-8 h-8 border-primary/50"
          } ${isClicking ? "scale-75" : "scale-100"}`}
        >
          {/* Cursor Text */}
          {cursorText && isHovering && (
            <span className="text-[8px] font-medium text-primary uppercase tracking-wider">
              {cursorText}
            </span>
          )}
        </div>
      </div>

      {/* Trail Effect (optional subtle trail) */}
      <div
        className={`fixed top-0 left-0 z-[9997] pointer-events-none transition-opacity duration-500 ${
          isVisible && isHovering ? "opacity-30" : "opacity-0"
        }`}
        style={{
          transform: `translate(${position.x - 32}px, ${position.y - 32}px)`,
        }}
      >
        <div className="w-16 h-16 rounded-full bg-primary/20 blur-xl" />
      </div>
    </>
  );
}
