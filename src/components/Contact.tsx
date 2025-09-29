import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Message sent! Thank you for your message. I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      label: "Email",
      value: "roshaniyogara@gmail.com",
      link: "mailto:roshaniyogara@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      label: "Phone",
      value: "+94 7027151",
      link: "tel:+947027151",
    },
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      label: "Location",
      value: "Sri Lanka",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      url: "https://github.com/RoshaniYogaraja",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/roshani-yogaraj-55a0b2292/",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-10 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Let’s collaborate on your next project. I’m always open to discussing
            new opportunities and innovative ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-10 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Let’s start a conversation
              </h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                I’m currently available for freelance work and full-time
                opportunities. Whether you have a project in mind or just want to
                chat about technology, feel free to reach out.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors"
                >
                  <div className="flex-shrink-0">{info.icon}</div>
                  <div>
                    <p className="text-text-secondary text-sm">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-text-primary hover:text-primary transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-text-primary font-medium">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-text-secondary text-sm mb-4">Follow me on</p>
              <div className="flex gap-4 flex-wrap">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/30 hover:shadow-subtle group transition-all duration-300"
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <span className="text-text-secondary group-hover:text-primary transition-colors">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-xl bg-gradient-card border border-border animate-slide-in-right shadow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="text-text-primary font-medium mb-2 block"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-text-primary font-medium mb-2 block"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-text-primary font-medium mb-2 block"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello..."
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none transition"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition group"
              >
                Send Message
                <Send
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
