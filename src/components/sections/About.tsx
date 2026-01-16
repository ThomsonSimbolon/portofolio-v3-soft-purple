"use client";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Counter from "@/components/ui/Counter";
import FadeIn from "@/components/ui/FadeIn";
import Avatar from "@/components/ui/Avatar";

export default function About() {
  const highlights = [
    { value: 2, suffix: "+", label: "Years Experience" },
    { value: 25, suffix: "+", label: "Projects Delivered" },
    { value: 10, suffix: "+", label: "Happy Clients" },
    { value: 99, suffix: "%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="section-padding relative">
      <Container>
        <FadeIn>
          <SectionHeader
            accent="About Me"
            title="Crafting Digital Experiences"
            subtitle="Passionate about building scalable, accessible, and performant web applications that make a difference."
          />
        </FadeIn>

        {/* Avatar + Intro Row */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-12">
          {/* Avatar with Animated Ring */}
          <FadeIn delay={100}>
            <div className="relative">
              <Avatar 
                src="/assets/Hero-Profile.png" 
                alt="Thomson" 
                size="xl" 
              />
              {/* Status Badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-card border border-dark-border shadow-lg">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-text-muted whitespace-nowrap">Available for hire</span>
              </div>
            </div>
          </FadeIn>

          {/* Quick Intro */}
          <FadeIn delay={200} className="text-center lg:text-left max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-text-main mb-4">
              Hello! I&apos;m <span className="text-primary">Thomson</span>
            </h3>
            <p className="text-text-muted leading-relaxed text-lg">
              A passionate <span className="text-primary-light font-medium">Fullstack Developer</span> based in Indonesia, 
              crafting beautiful and functional web experiences with modern technologies.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Main Content Card */}
          <FadeIn delay={300} className="lg:col-span-3">
            <Card className="p-8 md:p-10 h-full">
              <div className="space-y-6">
                <p className="text-text-muted leading-relaxed text-lg">
                  I&apos;m a <span className="text-text-main font-medium">Fullstack Developer</span> with
                  hands-on experience building modern, scalable web applications for real-world use.
                  My work spans both frontend and backend development, delivering complete
                  end-to-end solutions.
                </p>

                <p className="text-text-muted leading-relaxed">
                  I have strong experience working with{" "}
                  <span className="text-primary-light">React</span>,{" "}
                  <span className="text-primary-light">Next.js</span>,{" "}
                  <span className="text-primary-light">NodeJS</span>,{" "}
                  <span className="text-primary-light">PHP</span>, and{" "}
                  <span className="text-primary-light">Python</span>, building systems such as
                  Learning Management Systems, AI-powered applications, and integrated service platforms.
                  I frequently work with REST APIs, databases, and modern UI frameworks to ensure
                  performance, scalability, and clean architecture.
                </p>

                <p className="text-text-muted leading-relaxed">
                  I value clean, maintainable code and enjoy solving complex problems through
                  thoughtful system design. I&apos;m highly adaptable, comfortable working in teams,
                  and continuously improving my skills by exploring new technologies and
                  applying them to practical projects.
                </p>
              </div>
            </Card>
          </FadeIn>

          {/* Stats Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4 items-stretch">
            {highlights.map((item, index) => (
              <FadeIn key={index} delay={400 + index * 100} className="h-full">
                <Card className="p-6 text-center h-full flex flex-col justify-center" hover>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    <Counter end={item.value} suffix={item.suffix} duration={2000} />
                  </div>
                  <div className="text-sm text-text-muted">{item.label}</div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
