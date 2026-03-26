import { ArrowUp, Linkedin, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-16 border-t border-border/80 bg-card/60 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div className="text-left">
            <p className="font-semibold text-foreground">Hieu Phan</p>
            <p className="text-sm text-muted-foreground">Software Engineering Student</p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm">
            <a
              href="mailto:hphan.tech@gmail.com"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              hphan.tech@gmail.com
            </a>
            <span className="inline-flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              Almere, Netherlands
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/hyutech/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full border border-border bg-secondary/70 hover:bg-secondary transition-colors"
              aria-label="Open LinkedIn profile"
            >
              <Linkedin className="h-4 w-4 text-foreground" />
            </a>
            <a
              href="#hero"
              className="p-2.5 rounded-full border border-border bg-secondary/70 hover:bg-secondary transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4 text-foreground" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-border/60 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Hieu Phan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
