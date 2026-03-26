import { Briefcase, Code, User } from "lucide-react";


const highlights = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Building modern interfaces using React, Next.js and TypeScript, with focus on performance, responsiveness and clean UI.",
  },
  {
  icon: User,
  title: "Team-Based Development",
  description: "Experience working in teams on real projects, collaborating on planning, implementation and iterating based on feedback.",
  },
  {
  icon: Briefcase,
  title: "Professional Experience",
  description: "Hands-on experience through internships and projects, building applications and working with real-world requirements.",
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
            <h3 className="text-2xl font-semibold">I build web and mobile applications and turn ideas into real products</h3>

            <p className="text-muted-foreground">
              I’m Hieu Phan, a Software Engineering student focused on building real-world applications. I work with modern technologies like React, Next.js, TypeScript and React Native to create fast, user-focused products.
            </p>

            
            <p className="text-muted-foreground">
              I enjoy turning ideas into working applications from designing interfaces to implementing features and connecting APIs. Through my projects and internship, I’ve gained experience working both independently and in teams, building solutions that are not just functional, but also scalable and well-structured.
            </p>
            
            

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">

              
              <a
                target="_blank"
                href="/CV.pdf"
                className="cosmic-button"
              >
                View Resume
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
