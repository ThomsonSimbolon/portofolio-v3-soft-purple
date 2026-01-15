import type { Metadata } from "next";
import "./globals.css";
import FloatingParticles from "@/components/ui/FloatingParticles";
import GradientOrbs from "@/components/ui/GradientOrbs";
import GridPattern from "@/components/ui/GridPattern";
import NoiseTexture from "@/components/ui/NoiseTexture";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CursorSpotlight from "@/components/ui/CursorSpotlight";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Thomson Simbolon | Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer specializing in React, Next.js, and TypeScript. Building high-performance web applications with modern technologies.",
  keywords: [
    "Frontend Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Web Development",
    "UI Engineer",
  ],
  authors: [{ name: "Thomson Simbolon" }],
  openGraph: {
    title: "Thomson Simbolon | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer specializing in React, Next.js, and TypeScript. Building high-performance web applications with modern technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thomson Simbolon | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer specializing in React, Next.js, and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen overflow-x-hidden">
        {/* Scroll Progress Indicator */}
        <ScrollProgress />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Animated Background Effects */}
        <CursorSpotlight />
        <FloatingParticles />
        <GradientOrbs />
        <GridPattern />
        <NoiseTexture />
        
        {/* Main Content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
