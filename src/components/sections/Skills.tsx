"use client";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";
import SkillBar from "@/components/ui/SkillBar";
import { Palette, RefreshCw, CheckCircle, Wrench, LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  icon: LucideIcon;
  description: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    icon: Palette,
    description: "Building modern, responsive user interfaces",
    skills: [
      { name: "React / Next.js", level: 87 },
      { name: "TypeScript", level: 87 },
      { name: "JavaScript (ES6+)", level: 87 },
      { name: "HTML5 / CSS3", level: 92 },
      { name: "TailwindCSS", level: 90 },
      { name: "Bootstrap 5", level: 90 },
    ],
  },
  {
    name: "State & Data",
    icon: RefreshCw,
    description: "Managing application state and data flow",
    skills: [
      { name: "Redux Toolkit", level: 88 },
      { name: "React Query / SWR", level: 85 },
      { name: "Zustand", level: 0 },
      { name: "GraphQL", level: 0 },
      { name: "REST APIs", level: 92 },
    ],
  },
  {
    name: "Backend Development",
    icon: CheckCircle,
    description: "Ensuring code reliability and performance",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "PHP", level: 82 },
      { name: "Python", level: 78 },
      { name: "PostgreSQL", level: 65 },
      { name: "MySQL", level: 90 },
    ],
  },
  {
    name: "Tools & DevOps",
    icon: Wrench,
    description: "Streamlining development workflows",
    skills: [
      { name: "Git / GitHub / Gitlab", level: 92 },
      { name: "Docker", level: 70 },
      { name: "Vercel / GCP", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "AI Tools", level: 95 },
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
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <FadeIn key={index} delay={100 + index * 100}>
                <Card className="p-8 h-full" hover gradientBorder glow>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
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
            );
          })}
        </div>
      </Container>
    </section>
  );
}

