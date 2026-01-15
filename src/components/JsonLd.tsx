export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Thomson",
    jobTitle: "Fullstack Developer",
    description:
      "Fullstack Developer specializing in React, Next.js, and TypeScript. Building high-performance web applications with modern technologies.",
    url: "https://thomsonsimbolon.dev",
    image: "https://thomsonsimbolon.dev/assets/profile.png",
    sameAs: [
      "https://github.com/thomsonsimbolon",
      "https://linkedin.com/in/thomsonsimbolon",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Frontend Development",
      "Web Development",
      "UI/UX Development",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Thomson Portfolio",
    url: "https://thomsonsimbolon.dev",
    description:
      "Personal portfolio of Thomson - Fullstack Developer specializing in React, Next.js, and TypeScript.",
    author: {
      "@type": "Person",
      name: "Thomson",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
