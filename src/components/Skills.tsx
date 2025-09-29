import {
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  TestTube,
  Users,
  FileText,
} from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Java", level: 85 },
        { name: "Python", level: 80 },
        { name: "PHP", level: 75 },
      ],
    },
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Vue.js", level: 80 },
        { name: "Spring Boot", level: 85 },
        { name: "Django", level: 75 },
      ],
    },
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 75 },
      ],
    },
    {
      icon: <Server className="w-6 h-6 text-primary" />,
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "Visual Studio", level: 85 },
      ],
    },
  ];

  const additionalSkills = [
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "UI/UX Design",
      technologies: ["Bootstrap", "Tailwind CSS", "Responsive Design", "User Experience"],
    },
    {
      icon: <TestTube className="w-5 h-5" />,
      title: "Testing",
      technologies: ["Manual Testing", "Selenium", "Regression Testing", "Functional Testing"],
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Project Management",
      technologies: ["Agile", "Scrum", "Cross-functional Teams", "Code Reviews"],
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Documentation",
      technologies: ["Confluence", "Notion", "PowerPoint", "Technical Writing"],
    },
  ];

  return (
    <section id="skills" className="bg-gradient-card">
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 py-24">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Skills &amp; Expertise
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
            Technical skills and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Main skills with progress (2 cols on md+, 1 col on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-subtle animate-fade-in"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-lg font-semibold text-text-primary">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-text-secondary text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className="text-primary text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Accessible custom progress */}
                    <div
                      className="w-full h-2 rounded-full overflow-hidden bg-border"
                      role="progressbar"
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={skill.level}
                      aria-label={`${skill.name} proficiency`}
                    >
                      <div
                        className="h-full bg-primary transition-[width] duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills (4 cols on lg, 2 on md, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalSkills.map((skill, index) => (
            <div
              key={skill.title}
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-subtle group animate-slide-in-right"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold text-text-primary text-sm">
                    {skill.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md border border-border bg-skill-bg px-2.5 py-1 text-xs font-medium text-text-secondary hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 animate-fade-in">
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Certifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Web Design for Beginner",
                issuer: "University Of Moratuwa",
                description:
                  "HTML, CSS and basic website structure with responsive layouts",
              },
              {
                title: "Frontend Development - HTML",
                issuer: "Great Learning",
                description:
                  "HTML semantic markup, forms, tables, and accessibility best practices",
              },
              {
                title: "UI/UX for Beginners",
                issuer: "Great Learning",
                description:
                  "User Interface and User Experience design principles",
              },
            ].map((cert, i) => (
              <div
                key={cert.title}
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-subtle"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="space-y-3">
                  <h4 className="font-semibold text-text-primary">{cert.title}</h4>
                  <p className="text-primary text-sm font-medium">{cert.issuer}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
