import { Briefcase, Code, User } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Modern UI, responsive layouts, and clean component structure.",
  },
  {
    icon: User,
    title: "Design & UX Focus",
    description: "Strong attention to hierarchy, spacing, and interaction details.",
  },
  {
    icon: Briefcase,
    title: "Internship Ready",
    description: "Looking for a Software Engineering internship (Feb–Jun).",
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
            <h3 className="text-2xl font-semibold">IT student & aspiring software engineer</h3>

            <p className="text-muted-foreground">
              I build clean, modern interfaces with a strong focus on structure, consistency,
              and user experience. I enjoy turning ideas into polished, scalable components.
            </p>

            <p className="text-muted-foreground">
              I’m currently looking for a Software Engineering internship from <span className="font-medium">February to June</span>.
              If you think I could be a fit, reach out.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">

              {/* TODO: replace href with your real file link */}
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
