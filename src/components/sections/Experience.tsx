"use client";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";

interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
  current?: boolean;
}

const experiences: Experience[] = [
  {
    year: "2023 - Present",
    title: "Senior Frontend Engineer",
    company: "TechCorp Global",
    description:
      "Leading frontend architecture for enterprise SaaS platform. Implemented micro-frontend strategy, reducing deployment time by 60%.",
    current: true,
  },
  {
    year: "2021 - 2023",
    title: "Frontend Engineer",
    company: "StartupXYZ",
    description:
      "Built core product features from scratch using React and TypeScript. Led migration from class components to hooks, improving code maintainability.",
  },
  {
    year: "2020 - 2021",
    title: "Junior Frontend Developer",
    company: "WebAgency Pro",
    description:
      "Developed responsive web applications for various clients. Collaborated with designers to implement pixel-perfect UI components.",
  },
  {
    year: "2019 - 2020",
    title: "Frontend Intern",
    company: "Digital Solutions Ltd",
    description:
      "Started my journey in web development. Learned React fundamentals and contributed to client projects under senior mentorship.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <Container>
        <FadeIn>
          <SectionHeader
            accent="Career Path"
            title="Professional Experience"
            subtitle="My journey in software development, from intern to senior engineer."
          />
        </FadeIn>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-dark-border md:-translate-x-1/2"
            aria-hidden="true"
          />

          {experiences.map((exp, index) => (
            <FadeIn
              key={index}
              delay={100 + index * 150}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div
                className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                  index % 2 === 0
                    ? "md:pr-[calc(50%+2rem)] md:text-right"
                    : "md:pl-[calc(50%+2rem)]"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-2 ${
                    exp.current
                      ? "bg-primary border-primary shadow-glow-sm"
                      : "bg-dark-card border-dark-border"
                  } md:-translate-x-1/2 -translate-y-1`}
                />

                {/* Year Badge */}
                <div
                  className={`inline-block px-3 py-1 rounded-full bg-dark-card border border-dark-border text-sm text-text-muted mb-3`}
                >
                  {exp.year}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-text-main mb-1">
                  {exp.title}
                </h3>
                <div className="text-primary-light font-medium mb-3">
                  {exp.company}
                </div>
                <p className="text-text-muted leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
