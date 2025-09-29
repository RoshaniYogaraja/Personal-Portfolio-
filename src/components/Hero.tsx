import { ArrowDown, Download } from "lucide-react";
// If you have a photo, uncomment and point to it
// import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-hero"
    >
      {/* Make the section at least full viewport height and vertically center content */}
      <div className="min-h-[100svh] flex items-center">
        {/* Centered container with comfortable max width + generous horizontal padding */}
        <div className="w-full max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 py-24">
          {/* Background floating shapes */}
          <div className="pointer-events-none absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rounded-full animate-float"></div>
            <div
              className="absolute top-40 right-20 w-16 h-16 border border-primary/20 rounded-lg rotate-45 animate-float"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="absolute bottom-40 left-20 w-12 h-12 bg-primary/10 rounded-full animate-float"
              style={{ animationDelay: "4s" }}
            />
          </div>

          {/* Two-column layout with larger gap for breathing room */}
          <div className="relative grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-2xl text-text-secondary font-light">Hello.</h2>

                <div className="space-y-2">
                  <h1 className="text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
                    I&apos;m <span className="text-primary">Roshani</span>
                  </h1>
                  <h1 className="text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
                    Software Engineer
                  </h1>
                </div>
              </div>

              <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
                Highly motivated software engineer specializing in modern web
                technologies like React, Next.js, and Java Spring Boot. Passionate
                about creating efficient, scalable solutions.
              </p>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-3">
                {["React", "JavaScript", "Java", "Python", "MongoDB", "Docker"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md border border-muted/20 bg-skill-bg text-text-secondary text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => scrollToSection("about")}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium transition hover:bg-primary/90"
                >
                  Get in touch
                  <ArrowDown className="ml-1 transition-transform group-hover:translate-y-1" size={18} />
                </button>

                <button
                  onClick={() => window.open("/resume.pdf", "_blank")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-background text-text-primary transition hover:border-primary hover:text-primary"
                >
                  <Download size={18} />
                  My resume
                </button>
              </div>
            </div>

            {/* Right: Portrait / Decorative area */}
            <div className="flex justify-center lg:justify-end animate-fade-in-scale">
              <div className="relative">
                {/* Glow + floating bits */}
                <div className="absolute -inset-4 bg-gradient-accent rounded-full opacity-20 blur-2xl animate-glow" />
                <div className="absolute -top-4 -right-4 w-8 h-8 border border-primary rounded-lg rotate-12 animate-float" />
                <div
                  className="absolute -bottom-6 -left-6 w-6 h-6 bg-primary/30 rounded-full animate-float"
                  style={{ animationDelay: "1s" }}
                />

                {/* Profile image holder (uncomment to show image) */}
                {/* <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-card">
                  <img
                    src={profilePhoto}
                    alt="Roshani Yogaraj - Software Developer"
                    className="w-full h-full object-cover"
                  />
                </div> */}

                {/* Placeholder circle if image is commented */}
                <div className="relative w-80 h-80 rounded-full border-4 border-primary/20 shadow-card bg-gradient-to-br from-background to-secondary/40" />
              </div>
            </div>
          </div>

          {/* Scroll indicator centered at the bottom of the viewport */}
          <div className="pointer-events-none fixed left-1/2 bottom-8 -translate-x-1/2">
            <button
              onClick={() => scrollToSection("about")}
              className="pointer-events-auto text-text-secondary hover:text-primary transition-colors"
              aria-label="Scroll to About"
            >
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
