import { Briefcase, Code, User } from "lucide-react";


const highlights = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Building websites and applications using HTML, CSS, JavaScript, and modern frameworks through school and project work.",
  },
  {
    icon: User,
    title: "Team-Based Development",
    description: "Experience working in development teams during software engineering projects, including planning, implementation, and feedback cycles.",
  },
  {
    icon: Briefcase,
    title: "Internship Ready",
    description: "Available for a software engineering or frontend-focused internship (Feb–Jun 2026).",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">IT student who enjoys building web applications</h3>

            <p className="text-muted-foreground">
              I’m a third-year HBO-ICT student studying software engineering, with a strong interest in building websites and interactive applications. 
              I enjoy working on projects where I can turn ideas into something visual and functional, 
              whether that’s a web interface, a mobile app, or an interactive experience. Through my studies, 
              I’ve worked on multiple software engineering “comaker” projects with external organizations. 
              This includes building a mobile application for SquareAim and developing an interactive learning platform on 
              Roblox for a primary school (Digitalis). These projects gave me hands-on experience working in teams, communicating with stakeholders, 
              and iterating based on feedback.
            </p>

            

            <p className="text-muted-foreground">
             I’m currently looking for a software engineering or frontend-focused internship from <span className="font-bold">February to June 2026</span>. This internship is part of my HBO-ICT Software Engineering program.
             Internship duration should be 21 weeks and ~32 hours per week
             
              If you think I could be a fit, reach out.
            </p>
            

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">

              
              <a
                target="_blank"
                href="/CV.pdf"
                className="cosmic-button"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 gap-6">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div key={title} className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{title}</h4>
                    <p className="text-muted-foreground">{description}</p>
                    
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
