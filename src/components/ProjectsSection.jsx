import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "A modern developer portfolio built with React and TailwindCSS, designed to showcase projects through clean UI, structured components, and responsive layouts.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://portfolio-delta-one-26.vercel.app/",
    githubUrl: "https://github.com/hphantech/Portfolio",
  },
  {
    id: 2,
    title: "Movie Discovery",
    description:
      "A movie discovery platform built with React, TailwindCSS, and Appwrite, integrating the TMDB API to enable real-time search, trending content, and dynamic data rendering.",
    image: "/projects/project2.png",
    tags: ["React", "TailwindCSS", "Appwrite", "REST API"],
    demoUrl: "https://movies-react-git-main-hyus-projects-e2b7496f.vercel.app/",
    githubUrl: "https://github.com/hphantech/Movies-react",
  },
  {
    id: 3,
    title: "SquareAim — Football Planner App",
    description:
      "A team-built mobile app for organizing football matches, developed during a software engineering comaker project. Focused on structured delivery, API integration, and real-world collaboration.",
    image: "/projects/project3.png",
    tags: ["React Native", "JavaScript", "REST APIs", "Team Project"],
    demoUrl: "",
    githubUrl: "",
    status: "Private / not public",
  },
  {
    id: 4,
    title: "Digitalis — Interactive Learning Platform (Roblox)",
    description:
      "An interactive learning experience built on Roblox for a primary school, developed in a team with iterative testing and feedback. Implemented game logic, input handling, and event-driven systems.",
    image: "/projects/project4.png",
    tags: ["Luau", "Roblox Studio", "Game Logic", "Team Project"],
    demoUrl: "https://www.youtube.com/watch?v=aSYQ-Vw5K7o",
    githubUrl: "",
    status: "School project (not public)",
  },
  {
    id: 5,
    title: "Cyberaventura — Educational App (In Development)",
    description:
      "A currently developing educational app for Cyberaventura that focuses on interactive learning experiences. The project is being built as part of a professional collaboration and is still in active development.",
    image: "/projects/project5.png",
    tags: ["React", "TypeScript", "Frontend Development", "Team Project"],
    demoUrl: "https://cyberaventura.com",
    githubUrl: "",
    status: "In development (code confidential)",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are a few projects I’ve built—both personal work and team-based projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const hasDemo = Boolean(project.demoUrl);
            const hasGithub = Boolean(project.githubUrl);
            const showStatus = !hasDemo && !hasGithub && Boolean(project.status);

            return (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={`${project.id}-${tag}`}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm py-3 text-muted-foreground">{project.description}</p>

                  <div className="flex justify-between items-center mt-2">
                    <div className="flex space-x-3">
                      {hasDemo ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                          aria-label={`Open demo for ${project.title}`}
                          title="Live demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      ) : null}

                      {hasGithub ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                          aria-label={`Open GitHub for ${project.title}`}
                          title="GitHub"
                        >
                          <Github size={20} />
                        </a>
                      ) : null}
                    </div>

                    {showStatus ? (
                      <span className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                        {project.status}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/hphantech"
          >
            Check my GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
