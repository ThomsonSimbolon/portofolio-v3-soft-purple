"use client";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/ui/FadeIn";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    title: "Building Scalable React & Next Applications with Clean Architecture",
    excerpt:
      "Learn how to structure your React projects for maintainability and scalability using clean architecture principles and best practices.",
    date: "Jan 10, 2026",
    readTime: "8 min read",
    category: "React",
    slug: "scalable-react-clean-architecture",
    featured: true,
  },
  {
    title: "Advanced TypeScript Patterns for Frontend Developers",
    excerpt:
      "Explore advanced TypeScript patterns including discriminated unions, template literal types, and conditional types to write safer code.",
    date: "Jan 5, 2026",
    readTime: "12 min read",
    category: "TypeScript",
    slug: "advanced-typescript-patterns",
    featured: true,
  },
  {
    title: "Optimizing Next.js Performance: A Complete Guide",
    excerpt:
      "Discover techniques to optimize your Next.js applications including code splitting, image optimization, and caching strategies.",
    date: "Dec 28, 2025",
    readTime: "10 min read",
    category: "Next.js",
    slug: "nextjs-performance-optimization",
  },
  {
    title: "State Management in 2026: Redux vs Zustand vs Jotai",
    excerpt:
      "A comprehensive comparison of modern state management solutions for React applications with real-world examples and benchmarks.",
    date: "Dec 20, 2025",
    readTime: "15 min read",
    category: "State Management",
    slug: "state-management-comparison-2026",
  },
  {
    title: "Creating Stunning Animations with Framer Motion",
    excerpt:
      "Master Framer Motion to create smooth, performant animations that enhance user experience in your React applications.",
    date: "Dec 15, 2025",
    readTime: "7 min read",
    category: "Animation",
    slug: "framer-motion-animations",
  },
  {
    title: "Testing React Components: A Practical Approach",
    excerpt:
      "Learn practical testing strategies for React components using Jest and React Testing Library with real-world examples.",
    date: "Dec 10, 2025",
    readTime: "11 min read",
    category: "Testing",
    slug: "testing-react-components",
  },
];

const categoryColors: Record<string, string> = {
  React: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  TypeScript: "bg-sky-500/10 text-sky-400 border-sky-500/30",
  "Next.js": "bg-purple-500/10 text-purple-400 border-purple-500/30",
  "State Management": "bg-green-500/10 text-green-400 border-green-500/30",
  Animation: "bg-pink-500/10 text-pink-400 border-pink-500/30",
  Testing: "bg-orange-500/10 text-orange-400 border-orange-500/30",
};

export default function Blog() {
  return (
    <section id="blog" className="section-padding relative">
      <Container>
        <FadeIn>
          <SectionHeader
            accent="Latest Articles"
            title="Insights & Tutorials"
            subtitle="I write about frontend development, React ecosystem, and best practices for building modern web applications."
          />
        </FadeIn>

        {/* Featured Posts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {blogPosts
            .filter((post) => post.featured)
            .map((post, index) => (
              <FadeIn key={post.slug} delay={100 + index * 100}>
                <Card className="p-0 overflow-hidden group h-full" hover glow>
                  {/* Featured Banner */}
                  <div className="h-48 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-20" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30">
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full border ${
                          categoryColors[post.category] || "bg-gray-500/10 text-gray-400"
                        }`}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-text-muted mb-3">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 bg-text-muted rounded-full" />
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-text-main mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-text-muted leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <a
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors font-medium"
                    >
                      Read Article
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                    </a>
                  </div>
                </Card>
              </FadeIn>
            ))}
        </div>

        {/* Other Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts
            .filter((post) => !post.featured)
            .map((post, index) => (
              <FadeIn key={post.slug} delay={300 + index * 100}>
                <Card className="p-6 h-full group" hover>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full border ${
                        categoryColors[post.category] || "bg-gray-500/10 text-gray-400"
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-sm text-text-muted">{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-text-main mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm text-text-muted">{post.date}</span>
                    <a
                      href={`/blog/${post.slug}`}
                      className="text-primary hover:text-primary-light transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </Card>
              </FadeIn>
            ))}
        </div>

        {/* View All Link */}
        <FadeIn delay={600}>
          <div className="text-center mt-12">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-text-main border border-dark-border rounded-lg hover:border-primary/50 hover:bg-dark-card transition-all duration-300"
            >
              View All Articles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
