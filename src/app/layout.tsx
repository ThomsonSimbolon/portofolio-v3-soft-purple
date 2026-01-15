import type { Metadata } from "next";
import "./globals.css";
import FloatingParticles from "@/components/ui/FloatingParticles";
import GradientOrbs from "@/components/ui/GradientOrbs";
import GridPattern from "@/components/ui/GridPattern";
import NoiseTexture from "@/components/ui/NoiseTexture";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CursorSpotlight from "@/components/ui/CursorSpotlight";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import JsonLd from "@/components/JsonLd";
import PageTransition from "@/components/ui/PageTransition";

export const metadata: Metadata = {
  title: "Thomson | Full Stack Developer",
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
  authors: [{ name: "Thomson" }],
  openGraph: {
    title: "Thomson | Full Stack Developer",
    description:
      "Fullstack Developer specializing in React, Next.js, and TypeScript. Building high-performance web applications with modern technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thomson | Full Stack Developer",
    description:
      "Fullstack Developer specializing in React, Next.js, and TypeScript.",
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
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen overflow-x-hidden">
        <Providers>
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
          <div className="relative z-10">
            <PageTransition>{children}</PageTransition>
          </div>
        </Providers>
      </body>
    </html>
  );
}

