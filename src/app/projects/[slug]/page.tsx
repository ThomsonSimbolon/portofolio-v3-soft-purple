import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Thomson`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="pt-24 pb-16">
      <Container>
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-8 group"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {project.featured && (
              <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30">
                Featured Project
              </span>
            )}
            <span className="text-sm text-text-muted">{project.year}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-4">
            {project.title}
          </h1>

          <p className="text-xl text-text-muted max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Project Info Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card className="p-8">
              <h2 className="text-xl font-semibold text-text-main mb-4">
                About This Project
              </h2>
              <div className="text-text-muted leading-relaxed whitespace-pre-line">
                {project.longDescription.trim()}
              </div>
            </Card>

            {/* Features */}
            <Card className="p-8">
              <h2 className="text-xl font-semibold text-text-main mb-4">
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-text-muted">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Details */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-text-main mb-4">
                Project Details
              </h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-text-muted">Role</dt>
                  <dd className="text-text-main font-medium">{project.role}</dd>
                </div>
                <div>
                  <dt className="text-sm text-text-muted">Duration</dt>
                  <dd className="text-text-main font-medium">{project.duration}</dd>
                </div>
                <div>
                  <dt className="text-sm text-text-muted">Year</dt>
                  <dd className="text-text-main font-medium">{project.year}</dd>
                </div>
              </dl>
            </Card>

            {/* Tech Stack */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-text-main mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <Badge key={index}>{tech}</Badge>
                ))}
              </div>
            </Card>

            {/* Links */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-text-main mb-4">
                Links
              </h3>
              <div className="space-y-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-dark-bg border border-dark-border hover:border-primary/50 transition-colors group"
                  >
                    <svg
                      className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors"
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
                    <span className="text-text-main group-hover:text-primary transition-colors">
                      Live Demo
                    </span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-dark-bg border border-dark-border hover:border-primary/50 transition-colors group"
                  >
                    <svg
                      className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="text-text-main group-hover:text-primary transition-colors">
                      Source Code
                    </span>
                  </a>
                )}
              </div>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-semibold text-text-main mb-4">
            Interested in working together?
          </h2>
          <p className="text-text-muted mb-6 max-w-xl mx-auto">
            I&apos;m always open to discussing new projects and opportunities. Let&apos;s
            create something amazing together.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-text-main font-medium rounded-lg shadow-glow-sm hover:shadow-glow-lg transition-all"
          >
            Get in Touch
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
          </Link>
        </Card>
      </Container>
    </main>
  );
}
