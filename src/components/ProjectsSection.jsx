import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "Modern developer portfolio built with React and Tailwind CSS, focused on clean UI, smooth interactions, and performance. Designed to showcase real-world projects and development skills.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://portfolio-delta-one-26.vercel.app/",
    githubUrl: "https://github.com/hphantech/Portfolio",
  },
  {
    id: 3,
    title: "SquareAim",
    description:
      "Fullstack mobile app for organizing football training sessions and matches. Built with a focus on scalability, real-time updates, and user-friendly mobile UX within a team development environment.",
    image: "/projects/project3.png",
    tags: ["React Native", "JavaScript", "REST APIs", "Team Project"],
    demoUrl: "",
    githubUrl: "",
    status: "Private / not public",
  },
  {
    id: 4,
    title: "Digitalis (Roblox)",
    description:
      "Interactive learning platform developed in Roblox for primary school students. Focused on engagement, game logic, and educational experience, built through collaboration with stakeholders and user testing.",
    image: "/projects/project4.png",
    tags: ["Luau", "Roblox Studio", "Game Logic", "Team Project"],
    demoUrl: "https://www.youtube.com/watch?v=aSYQ-Vw5K7o",
    githubUrl: "",
    status: "School project (not public)",
  },
  {
    id: 5,
    title: "Cyberaventura",
    description:
      "Gamified cybersecurity education platform in development, focused on interactive missions, user engagement, and scalable architecture. Contributing to both frontend development and product experience.",
    image: "/projects/project5.png",
    tags: ["React Native", "TypeScript", "Supabase", "Mobile App", "Team Project"],
    demoUrl: "https://cyberaventura.com",
    githubUrl: "",
    status: "In development (code confidential)",
  },
  {
    id: 6,
    title: "Underground Webshop Template",
    description:
      "Minimal aesthetic webshop built for an underground clothing brand, featuring smooth GSAP animations, interactive UI, and a seamless shopping experience. Users can explore products, interact with dynamic visuals, and add items to their cart within a visually immersive interface.",
    image: "/projects/project6.png",
    tags: ["Next.js 16", "TypeScript", "GSAP", "E-commerce", "UI/UX", "Responsive Design"],
    demoUrl: "https://soirn-studio.vercel.app/landing",
    githubUrl: "https://github.com/hphantech/soirn-studio",
  },
];

const tagIcons = {
  React: "https://cdn.simpleicons.org/react/61DAFB",
  NextJS: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
  "Next.js": "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
  "Next.js 16": "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
  TypeScript: "https://cdn.simpleicons.org/typescript/3178C6",
  JavaScript: "https://cdn.simpleicons.org/javascript/F7DF1E",
  TailwindCSS: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  Appwrite: "https://cdn.simpleicons.org/appwrite/FD366E",
  Supabase: "https://cdn.simpleicons.org/supabase/3ECF8E",
  "REST API": "https://cdn.simpleicons.org/openapiinitiative/6BA539",
  "REST APIs": "https://cdn.simpleicons.org/openapiinitiative/6BA539",
  "React Native": "https://cdn.simpleicons.org/react/61DAFB",
  Luau: "https://cdn.simpleicons.org/lua/2C2D72",
  "Roblox Studio": "https://cdn.simpleicons.org/roblox/FFFFFF",
  "UI/UX": "https://cdn.simpleicons.org/figma/F24E1E",
  "Landing Page": "https://cdn.simpleicons.org/html5/E34F26",
  "Responsive Design": "https://cdn.simpleicons.org/css/1572B6",
  GSAP: "https://cdn.simpleicons.org/greensock/88CE02",
  "E-commerce": "https://cdn.simpleicons.org/shopify/95BF47",
  "Mobile App": "https://cdn.simpleicons.org/android/3DDC84",
  "Frontend Development": "https://cdn.simpleicons.org/webflow/FFFFFF",
  "Game Logic": "https://cdn.simpleicons.org/unity/FFFFFF",
  "Team Project": "https://cdn.simpleicons.org/git/FFFFFF",
};

const monochromeTagIcons = new Set([
  "NextJS",
  "Next.js",
  "Next.js 16",
  "Roblox Studio",
  "Frontend Development",
  "Game Logic",
  "Team Project",
]);

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
                        className="inline-flex items-center gap-1.5 px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tagIcons[tag] ? (
                          <img
                            src={tagIcons[tag]}
                            alt={`${tag} logo`}
                            className={`h-3.5 w-3.5 ${monochromeTagIcons.has(tag) ? "invert dark:invert-0" : ""}`}
                            loading="lazy"
                          />
                        ) : (
                          <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                        )}
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
