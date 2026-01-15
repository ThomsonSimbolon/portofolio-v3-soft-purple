"use client";

import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((link) => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "py-4 bg-dark-bg/80 backdrop-blur-lg border-dark-border"
          : "py-6 bg-transparent border-transparent"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold text-text-main hover:text-primary transition-colors"
          >
            <span className="text-primary">T</span>homson
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    activeSection === link.href.slice(1)
                      ? "text-primary"
                      : "text-text-muted hover:text-text-main"
                  }`}
                >
                  {link.name}
                  {/* Active indicator */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      activeSection === link.href.slice(1) ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center px-4 py-2 text-sm font-medium text-text-main bg-gradient-primary rounded-lg shadow-glow-sm hover:shadow-glow-lg transition-all duration-300"
          >
            Let&apos;s Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-text-muted hover:text-text-main transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-6 py-6 border-t border-dark-border">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full text-center">
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-base font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? "text-primary"
                      : "text-text-muted hover:text-text-main"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center px-6 py-2.5 text-base font-medium text-text-main bg-gradient-primary rounded-lg"
              >
                Let&apos;s Talk
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
}
