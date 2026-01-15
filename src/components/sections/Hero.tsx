import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-card border border-dark-border mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-text-muted">
              Available for new opportunities
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-text-main">Hi, I&apos;m </span>
            <span className="text-primary">Thomson</span>
            <br />
            <span className="text-text-main">Senior Frontend </span>
            <span className="text-text-accent">Engineer</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            I craft high-performance web applications with modern technologies.
            Specializing in{" "}
            <span className="text-primary-light">React</span>,{" "}
            <span className="text-primary-light">Next.js</span>, and{" "}
            <span className="text-primary-light">TypeScript</span> to deliver
            exceptional user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="#projects" size="lg">
              View My Work
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Get in Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
            <div className="w-6 h-10 rounded-full border-2 border-dark-border flex justify-center pt-2">
              <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
