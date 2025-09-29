import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - Name and tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-text-primary mb-2">
              Roshani Yogaraj
            </h3>
            <p className="text-text-secondary text-sm">
              Software Developer • Building digital experiences
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/RoshaniYogaraja"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-background transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/roshani-yogaraj-55a0b2292/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-background transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:roshaniyogara@gmail.com"
              className="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-background transition-colors"
              aria-label="Send Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Right side - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-text-secondary text-sm flex items-center justify-center md:justify-end gap-1">
              © {currentYear} Made with{" "}
              <Heart size={14} className="text-primary" /> by Roshani Yogaraj
            </p>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-text-muted text-xs">
            Designed &amp; developed with modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};
