import { Building, Calendar, GraduationCap } from "lucide-react";

export const Experience = () => {
  const workExperience = [
    {
      company: "NextGen Innovations",
      position: "Associate Software Engineer",
      period: "Jan 2020 - May 2021",
      type: "Full-time",
      description: [
        "Developed and maintained web applications using React, Next.js, and Java Spring Boot",
        "Led the integration of third-party APIs enhancing application functionality",
        "Implemented UI components with Bootstrap and Tailwind for better user experience",
        "Developed and maintained REST APIs for various application functionalities",
        "Collaborated with cross-functional teams and mentored junior developers",
      ],
      technologies: [
        "React",
        "Next.js",
        "Java Spring Boot",
        "MongoDB",
        "REST APIs",
        "Bootstrap",
        "Tailwind",
      ],
    },
    {
      company: "NextGen Innovations",
      position: "Backend Developer Intern",
      period: "Jan 2020 - Apr 2020",
      type: "Internship",
      description: [
        "Developed and maintained REST APIs using Java",
        "Integrated third-party APIs to enhance application functionality",
        "Managed databases using MongoDB",
        "Developed admin portal features using Java",
        "Collaborated with cross-functional teams on feature implementation",
      ],
      technologies: ["Java", "MongoDB", "REST APIs", "React", "Bootstrap"],
    },
    {
      company: "NextGen Innovations",
      position: "Frontend Developer Intern",
      period: "Nov 2019 - Jan 2020",
      type: "Internship",
      description: [
        "Developed and maintained web application frontends using React and Tailwind",
        "Implemented interactive UI components with Vue.js",
        "Collaborated with designers to enhance user interface and user experience",
      ],
      technologies: ["React", "Vue.js", "Tailwind", "UI/UX"],
    },
  ];

  const education = [
    {
      institution: "Cardiff Metropolitan University",
      degree: "BSc in Computing & Software Engineering",
      period: "Jan 2018 - Nov 2021",
      status: "Pending",
      coursework: [
        "Advanced Programming",
        "Professional Issues in Technology",
        "Analytics and Business Intelligence",
        "Development Project",
      ],
    },
    // {
    //   institution: "University Of Kelaniya",
    //   degree: "Diploma in Software Engineering",
    //   period: "Jan 2018 - Mar 2021",
    //   status: "Completed",
    //   coursework: [
    //     "Software Engineering Principles",
    //     "System Design",
    //     "Programming Fundamentals",
    //   ],
    // },
    {
      institution: "Cardiff Metropolitan University",
      degree: "HND",
      period: "Mar 2017 - Mar 2018",
      status: "Completed",
      coursework: [
        "Fundamentals of Programming",
        "Database Management",
        "Web Applications",
        "Mobile Applications",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-background">
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 py-24">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Experience & Education
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
            My professional journey and academic background in software
            engineering
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div className="space-y-10 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Building className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-text-primary">
                Work Experience
              </h3>
            </div>

            {workExperience.map((job, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-subtle"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary">
                      {job.position}
                    </h4>
                    <p className="text-primary font-medium">{job.company}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1 text-sm">
                    <div className="flex items-center gap-2 text-text-secondary">
                      <Calendar size={14} />
                      {job.period}
                    </div>
                    <span className="px-2 py-0.5 rounded-md border text-xs text-text-secondary">
                      {job.type}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {job.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-text-secondary text-sm leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-primary"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md border text-xs text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-10 animate-slide-in-right">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-text-primary">Education</h3>
            </div>

            {education.map((edu, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-subtle"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-text-primary">
                    {edu.degree}
                  </h4>
                  <p className="text-primary font-medium">{edu.institution}</p>
                </div>

                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center gap-2 text-text-secondary">
                    <Calendar size={14} />
                    {edu.period}
                  </div>
                  <span className="px-2 py-0.5 rounded-md border text-xs text-text-secondary">
                    {edu.status}
                  </span>
                </div>

                <div>
                  <p className="text-text-secondary text-sm font-medium mb-2">
                    Key Coursework:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-2 py-1 rounded-md border text-xs text-text-secondary"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
