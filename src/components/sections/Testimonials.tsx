"use client";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Thomson delivered exceptional work on our e-commerce platform. His attention to detail and deep understanding of React made a significant impact on our product's performance and user experience.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechVenture Inc.",
  },
  {
    quote:
      "Working with Thomson was a game-changer for our team. He not only delivered high-quality code but also mentored our junior developers, elevating the entire team's capabilities.",
    author: "Michael Rodriguez",
    role: "Engineering Manager",
    company: "ScaleUp Labs",
  },
  {
    quote:
      "Thomson's expertise in frontend architecture helped us reduce our bundle size by 40% and improve load times significantly. Highly recommend him for any complex frontend challenges.",
    author: "Emily Watson",
    role: "Product Director",
    company: "FinTech Solutions",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding relative bg-dark-card/30">
      <Container>
        <FadeIn>
          <SectionHeader
            accent="Testimonials"
            title="What People Say"
            subtitle="Feedback from clients and colleagues I've had the pleasure to work with."
          />
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={100 + index * 100}>
              <Card className="p-6 h-full flex flex-col" hover>
                {/* Quote Icon */}
                <svg
                  className="w-8 h-8 text-primary/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                {/* Quote Text */}
                <p className="text-text-muted leading-relaxed flex-1 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="border-t border-dark-border pt-4">
                  <div className="font-medium text-text-main">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-text-muted">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
