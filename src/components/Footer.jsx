import { ArrowUp, Linkedin, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-12 border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        {/* LEFT — Info */}
        <div className="space-y-6">
          

          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:hphan.tech@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  hphan.tech@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-muted-foreground">
                  Almere, Netherlands
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CENTER — Socials */}
        <div className="flex flex-col items-center space-y-4">
          <h4 className="font-medium">Connect with me</h4>
          <a
            href="https://www.linkedin.com/in/hphantech"
            target="_blank"
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
          >
            <Linkedin className="text-primary" />
          </a>
        </div>

        {/* RIGHT — Back to top */}
        <div className="flex justify-end">
          <a
            href="#hero"
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
