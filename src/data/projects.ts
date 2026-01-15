export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  year: string;
  role: string;
  duration: string;
}

export const projects: Project[] = [
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard. Built for scale with optimized performance and SEO.",
    longDescription: `
      This comprehensive e-commerce solution was built from the ground up to handle high-traffic scenarios while maintaining excellent user experience. The platform features a modern, responsive design that works seamlessly across all devices.

      Key technical challenges included implementing real-time inventory synchronization across multiple warehouses, building a robust payment processing system with multiple gateway support, and creating an intuitive admin dashboard for managing products, orders, and customers.

      The project also focused heavily on performance optimization, achieving a 95+ Lighthouse score through techniques like image optimization, code splitting, and edge caching.
    `,
    techStack: ["Next.js", "TypeScript", "Prisma", "Stripe", "TailwindCSS", "Redis", "PostgreSQL"],
    features: [
      "Real-time inventory management with multi-warehouse support",
      "Secure payment processing with Stripe integration",
      "Admin dashboard with analytics and reporting",
      "SEO optimized with dynamic sitemap generation",
      "Responsive design with mobile-first approach",
      "Order tracking and notification system",
    ],
    liveUrl: "https://demo-ecommerce.vercel.app",
    githubUrl: "https://github.com/thomsonsimbolon/ecommerce-platform",
    featured: true,
    year: "2025",
    role: "Lead Frontend Developer",
    duration: "4 months",
  },
  {
    slug: "saas-analytics-dashboard",
    title: "SaaS Analytics Dashboard",
    description:
      "Interactive analytics dashboard with real-time data visualization, custom reporting, and user management. Features complex charts and data filtering.",
    longDescription: `
      A powerful analytics dashboard designed for SaaS companies to monitor key metrics, track user behavior, and generate custom reports. The dashboard processes millions of data points while maintaining sub-second response times.

      The architecture leverages React for the frontend with D3.js for complex data visualizations, while Redux Toolkit manages the application state. The backend uses Node.js with PostgreSQL for efficient data querying and aggregation.

      Special attention was given to accessibility, ensuring all charts and visualizations are keyboard navigable and screen-reader friendly.
    `,
    techStack: ["React", "D3.js", "Redux Toolkit", "Node.js", "PostgreSQL", "Chart.js"],
    features: [
      "Real-time data visualization with D3.js",
      "Custom report builder with drag-and-drop interface",
      "User role management and permissions",
      "Export to PDF, CSV, and Excel",
      "Dark/Light mode support",
      "Responsive dashboard layouts",
    ],
    liveUrl: "https://demo-analytics.vercel.app",
    githubUrl: "https://github.com/thomsonsimbolon/analytics-dashboard",
    featured: true,
    year: "2024",
    role: "Frontend Engineer",
    duration: "3 months",
  },
  {
    slug: "ai-content-generator",
    title: "AI Content Generator",
    description:
      "AI-powered content generation tool leveraging GPT models for creating marketing copy, blog posts, and social media content with customizable templates.",
    longDescription: `
      This AI-powered tool helps marketers and content creators generate high-quality content in seconds. By leveraging OpenAI's GPT models through the Vercel AI SDK, users can create blog posts, marketing copy, social media content, and more.

      The application features a template system that allows users to save and reuse their favorite prompts, along with a content history feature for easy access to previously generated content.

      The project demonstrates advanced prompt engineering techniques and streaming responses for a smooth user experience.
    `,
    techStack: ["Next.js", "OpenAI API", "Vercel AI SDK", "MongoDB", "TailwindCSS"],
    features: [
      "Multiple content types: blogs, ads, social posts",
      "Customizable prompt templates",
      "Content history and favorites",
      "Streaming responses for real-time generation",
      "Export and share functionality",
      "Usage analytics and limits",
    ],
    liveUrl: "https://demo-ai-content.vercel.app",
    githubUrl: "https://github.com/thomsonsimbolon/ai-content-generator",
    year: "2024",
    role: "Fullstack Developer",
    duration: "2 months",
  },
  {
    slug: "realtime-collaboration-tool",
    title: "Real-Time Collaboration Tool",
    description:
      "A collaborative workspace application featuring real-time document editing, video conferencing integration, and team communication channels.",
    longDescription: `
      A modern collaboration platform that enables teams to work together in real-time. The application combines document editing, video conferencing, and instant messaging into a unified workspace.

      Built with React and Socket.io for real-time synchronization, the platform handles conflict resolution for simultaneous edits using operational transformation algorithms. WebRTC powers the video conferencing feature for peer-to-peer communication.

      Redis is used for session management and presence detection, ensuring users always see who's online and what they're working on.
    `,
    techStack: ["React", "Socket.io", "WebRTC", "Redis", "TypeScript", "Node.js"],
    features: [
      "Real-time collaborative document editing",
      "Integrated video conferencing with screen sharing",
      "Team chat with channels and direct messages",
      "Presence indicators and activity tracking",
      "File sharing and management",
      "Notification system with email integration",
    ],
    liveUrl: "https://demo-collab.vercel.app",
    githubUrl: "https://github.com/thomsonsimbolon/collaboration-tool",
    year: "2024",
    role: "Lead Developer",
    duration: "5 months",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
