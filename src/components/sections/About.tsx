import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

export default function About() {
  const highlights = [
    { metric: "5+", label: "Years Experience" },
    { metric: "50+", label: "Projects Delivered" },
    { metric: "20+", label: "Happy Clients" },
    { metric: "99%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="section-padding relative">
      <Container>
        <SectionHeader
          accent="About Me"
          title="Crafting Digital Experiences"
          subtitle="Passionate about building scalable, accessible, and performant web applications that make a difference."
        />

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Main Content Card */}
          <Card className="lg:col-span-3 p-8 md:p-10">
            <div className="space-y-6">
              <p className="text-text-muted leading-relaxed text-lg">
                I&apos;m a <span className="text-text-main font-medium">Senior Frontend Engineer</span> with 
                over 5 years of experience building modern web applications. My journey started with 
                vanilla JavaScript and has evolved into mastering the React ecosystem.
              </p>
              <p className="text-text-muted leading-relaxed">
                I specialize in creating <span className="text-primary-light">component-driven architectures</span>, 
                implementing <span className="text-primary-light">state management solutions</span>, and optimizing 
                applications for peak performance. I believe in writing clean, maintainable code that 
                stands the test of time.
              </p>
              <p className="text-text-muted leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge through technical articles and mentoring 
                junior developers.
              </p>
            </div>
          </Card>

          {/* Stats Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center"
                hover
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {item.metric}
                </div>
                <div className="text-sm text-text-muted">{item.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
