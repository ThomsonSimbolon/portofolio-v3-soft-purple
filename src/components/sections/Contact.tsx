import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const contactLinks = [
  {
    name: "Email",
    value: "hello@thomsonsimbolon.dev",
    href: "mailto:hello@thomsonsimbolon.dev",
    icon: (
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
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/thomsonsimbolon",
    href: "https://linkedin.com/in/thomsonsimbolon",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    value: "github.com/thomsonsimbolon",
    href: "https://github.com/thomsonsimbolon",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      {/* Background Glow */}
      <div
        className="absolute inset-0 bg-hero-glow opacity-50"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <SectionHeader
          accent="Get in Touch"
          title="Let&apos;s Work Together"
          subtitle="I'm currently open to new opportunities. Whether you have a project in mind or just want to chat, feel free to reach out."
        />

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 md:p-12 text-center">
            <p className="text-xl text-text-muted mb-8 leading-relaxed">
              I&apos;m always interested in hearing about new projects and opportunities.
              If you&apos;re looking for a dedicated frontend engineer who cares about
              quality and user experience, let&apos;s connect.
            </p>

            {/* Primary CTA */}
            <Button
              href="mailto:hello@thomsonsimbolon.dev"
              size="lg"
              className="mb-12"
            >
              Send Me an Email
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-dark-border" />
              <span className="text-text-muted text-sm">or connect with me on</span>
              <div className="flex-1 h-px bg-dark-border" />
            </div>

            {/* Social Links */}
            <div className="grid sm:grid-cols-3 gap-4">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 rounded-xl bg-dark-bg border border-dark-border hover:border-primary/50 hover:shadow-glow-sm transition-all duration-300 group"
                >
                  <span className="text-text-muted group-hover:text-primary transition-colors">
                    {link.icon}
                  </span>
                  <span className="text-text-main font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </Card>

          {/* Footer */}
          <footer className="mt-16 text-center">
            <p className="text-text-muted text-sm">
              © {new Date().getFullYear()} Thomson Simbolon. Built with{" "}
              <span className="text-primary-light">Next.js</span> &{" "}
              <span className="text-primary-light">TailwindCSS</span>
            </p>
          </footer>
        </div>
      </Container>
    </section>
  );
}
