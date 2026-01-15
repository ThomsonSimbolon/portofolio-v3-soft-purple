import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

interface SkillCategory {
  name: string;
  description: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    description: "Building modern, responsive user interfaces",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "TailwindCSS",
      "Framer Motion",
    ],
  },
  {
    name: "State & Data",
    description: "Managing application state and data flow",
    skills: [
      "Redux Toolkit",
      "Zustand",
      "React Query",
      "GraphQL",
      "REST APIs",
      "SWR",
    ],
  },
  {
    name: "Testing & Quality",
    description: "Ensuring code reliability and performance",
    skills: [
      "Jest",
      "React Testing Library",
      "Cypress",
      "Playwright",
      "ESLint",
      "Prettier",
    ],
  },
  {
    name: "Tools & DevOps",
    description: "Streamlining development workflows",
    skills: [
      "Git",
      "GitHub Actions",
      "Docker",
      "Vercel",
      "AWS",
      "Figma",
      "VS Code",
      "Webpack",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative bg-dark-card/30">
      <Container>
        <SectionHeader
          accent="Skills & Expertise"
          title="Technologies I Work With"
          subtitle="A curated set of modern tools and technologies I use to build exceptional digital products."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-8" hover>
              <h3 className="text-xl font-semibold text-text-main mb-2">
                {category.name}
              </h3>
              <p className="text-text-muted text-sm mb-6">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex}>{skill}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
