"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Typewriter from "@/components/ui/Typewriter";
import FadeIn from "@/components/ui/FadeIn";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  const roles = [
    "Fullstack Developer",
    // "React Specialist",
    // "Next Enthusiast",
    // "UI/UX Developer",
    // "TypeScript Expert",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Glow Effect */}
      <div
        className="absolute inset-0 bg-hero-glow"
        aria-hidden="true"
      />

      {/* Decorative Elements */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-card border border-dark-border mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-text-muted">
                Available for new opportunities
              </span>
            </div>
          </FadeIn>

          {/* Main Headline */}
          <FadeIn delay={200}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="text-text-main">Hi, I&apos;m </span>
              <span className="text-primary">Thomson</span>
              <br />
              <Typewriter
                words={roles}
                className="text-text-accent"
                typingSpeed={80}
                deletingSpeed={40}
                pauseDuration={2500}
              />
            </h1>
          </FadeIn>

          {/* Subtitle */}
          <FadeIn delay={400}>
            <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
              Fullstack Developer specializing in building scalable web applications,
              from modern front-end interfaces to robust back-end systems. Experienced with{" "}
              <span className="text-primary-light">React</span>,{" "}
              <span className="text-primary-light">Next.js</span>,{" "}
              <span className="text-primary-light">NodeJS</span>,{" "}
              <span className="text-primary-light">PHP</span>,{" "}
              <span className="text-primary-light">Python</span>, and{" "}
              <span className="text-primary-light">RESTful APIs</span>, delivering
              high-performance, production-ready solutions.
            </p>
          </FadeIn>


          {/* CTA Buttons with Magnetic Effect */}
          <FadeIn delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <MagneticButton strength={0.2}>
                <Button href="#projects" size="lg" className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-text-main border border-dark-border rounded-lg hover:border-primary/50 hover:bg-dark-card transition-all duration-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  View My Work
                </Button>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <Button href="#contact" variant="secondary" size="lg" className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-text-main border border-dark-border rounded-lg hover:border-primary/50 hover:bg-dark-card transition-all duration-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  Get in Touch
                </Button>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <a
                  href="/assets/Thomson's-CV.pdf"
                  download="Thomson's-CV.pdf"
                  className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-text-main border border-dark-border rounded-lg hover:border-primary/50 hover:bg-dark-card transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download CV
                </a>
              </MagneticButton>
            </div>
          </FadeIn>

          {/* Scroll Indicator */}
          <FadeIn delay={800}>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
              <div className="w-6 h-10 rounded-full border-2 border-dark-border flex justify-center pt-2">
                <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
