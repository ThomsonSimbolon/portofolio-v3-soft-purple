"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ProjectImage from "@/components/ui/ProjectImage";
import FadeIn from "@/components/ui/FadeIn";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <Container>
        <FadeIn>
          <SectionHeader
            accent="Featured Work"
            title="Projects I&apos;ve Built"
            subtitle="A selection of projects that showcase my expertise in frontend development and full-stack capabilities."
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={100 + index * 100}>
              <Link href={`/projects/${project.slug}`} className="block">
                <Card className="p-0 overflow-hidden group" hover glow>
                  {/* Project Image */}
                  <ProjectImage title={project.title} index={index} />

                  {/* Project Content */}
                  <div className="p-6">
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-3">
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
                    <p className="text-text-muted mb-4 leading-relaxed text-sm line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 4).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 4 && (
                        <Badge variant="outline">+{project.techStack.length - 4}</Badge>
                      )}
                    </div>

                    {/* View Project Link */}
                    <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                      View Project
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
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

