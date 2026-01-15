export default function GridPattern() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
      aria-hidden="true"
      style={{
        backgroundImage: `
          linear-gradient(rgba(130, 71, 255, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(130, 71, 255, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
      }}
    />
  );
}
