import { Code, Database, Globe } from "lucide-react";

export const About = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Website Development",
      description:
        "Creating responsive web applications using React, Next.js, and modern frameworks.",
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "App Development",
      description:
        "Building full-stack applications with Java Spring Boot and modern frontend technologies.",
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Database Management",
      description:
        "Designing and managing databases with MongoDB, MySQL, and PostgreSQL.",
    },
  ];

  const stats = [
    { number: "2+", label: "Years of experience" },
    { number: "75%", label: "Client satisfaction" },
    { number: "15+", label: "Projects completed" },
  ];

  return (
    <section id="about" className="relative bg-gradient-card">
      {/* section spacing mirrors Hero: wide, centered, comfy */}
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Services (left) */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              {services.map((service, i) => (
                <div
                  key={service.title}
                  className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-subtle group"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="flex-shrink-0 grid place-items-center w-12 h-12 rounded-lg bg-background/40 border border-border group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* About content (right) */}
          <div className="space-y-10 animate-slide-in-right">
            <header>
              <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                About me
              </h2>
              <p className="text-text-secondary">
                A quick snapshot of my journey and what I love building.
              </p>
            </header>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I started my software journey from programming fundamentals and
                have evolved into a full-stack developer with expertise in modern
                web technologies. My experience spans web development, mobile
                applications, and database management.
              </p>
              <p>
                {/* Currently pursuing my BSc in Computing &amp; Software Engineering
                at Cardiff Metropolitan University, */}
                 I combine academic knowledge
                with practical experience gained from working as an Associate
                Software Engineer at NextGen Innovations.
              </p>
              <p>
                I’m passionate about creating efficient, scalable solutions and
                staying updated with the latest technologies to deliver
                high-quality outcomes for every project.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="p-6 text-center rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-subtle transition-all duration-300"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="text-3xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-text-secondary">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
