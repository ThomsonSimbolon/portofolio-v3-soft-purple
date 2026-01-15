"use client";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";
import SkillBar from "@/components/ui/SkillBar";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  icon: string;
  description: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    icon: "🎨",
    description: "Building modern, responsive user interfaces",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "HTML5 / CSS3", level: 92 },
      { name: "TailwindCSS", level: 90 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    name: "State & Data",
    icon: "🔄",
    description: "Managing application state and data flow",
    skills: [
      { name: "Redux Toolkit", level: 88 },
      { name: "React Query / SWR", level: 85 },
      { name: "Zustand", level: 82 },
      { name: "GraphQL", level: 75 },
      { name: "REST APIs", level: 92 },
    ],
  },
  {
    name: "Testing & Quality",
    icon: "✅",
    description: "Ensuring code reliability and performance",
    skills: [
      { name: "Jest", level: 85 },
      { name: "React Testing Library", level: 82 },
      { name: "Cypress / Playwright", level: 78 },
      { name: "ESLint / Prettier", level: 90 },
    ],
  },
  {
    name: "Tools & DevOps",
    icon: "🛠️",
    description: "Streamlining development workflows",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "Docker", level: 75 },
      { name: "Vercel / AWS", level: 80 },
      { name: "CI/CD (GitHub Actions)", level: 78 },
      { name: "Figma", level: 70 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative bg-dark-card/30">
      <Container>
        <FadeIn>
          <SectionHeader
            accent="Skills & Expertise"
            title="Technologies I Work With"
            subtitle="A curated set of modern tools and technologies I use to build exceptional digital products."
          />
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <FadeIn key={index} delay={100 + index * 100}>
              <Card className="p-8 h-full" hover>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl" role="img" aria-label={category.name}>
                    {category.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-text-main">
                      {category.name}
                    </h3>
                    <p className="text-text-muted text-sm">{category.description}</p>
                  </div>
                </div>

                {/* Skills with Progress Bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skillIndex}
                      name={skill.name}
                      level={skill.level}
                      delay={skillIndex * 100}
                    />
                  ))}
                </div>

                {/* Quick Tags */}
                <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-dark-border">
                  {category.skills.slice(0, 4).map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline">
                      {skill.name.split(" / ")[0]}
                    </Badge>
                  ))}
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

