import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard. Built for scale with optimized performance and SEO.",
    techStack: ["Next.js", "TypeScript", "Prisma", "Stripe", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "SaaS Analytics Dashboard",
    description:
      "Interactive analytics dashboard with real-time data visualization, custom reporting, and user management. Features complex charts and data filtering.",
    techStack: ["React", "D3.js", "Redux Toolkit", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "AI Content Generator",
    description:
      "AI-powered content generation tool leveraging GPT models for creating marketing copy, blog posts, and social media content with customizable templates.",
    techStack: ["Next.js", "OpenAI API", "Vercel AI SDK", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real-Time Collaboration Tool",
    description:
      "A collaborative workspace application featuring real-time document editing, video conferencing integration, and team communication channels.",
    techStack: ["React", "Socket.io", "WebRTC", "Redis", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <Container>
        <SectionHeader
          accent="Featured Work"
          title="Projects I&apos;ve Built"
          subtitle="A selection of projects that showcase my expertise in frontend development and full-stack capabilities."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-8 group"
              hover
              glow
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-text-main group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-text-muted mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="text-sm text-text-muted hover:text-primary transition-colors inline-flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="text-sm text-text-muted hover:text-primary transition-colors inline-flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Source Code
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
