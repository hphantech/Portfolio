const techStacks = [
  {
    title: "Frontend",
    description: "Building modern and responsive interfaces for web applications.",
    items: [
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      {
        name: "Next.js",
        iconLight: "https://cdn.simpleicons.org/nextdotjs/000000",
        iconDark: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
      },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "HTML/CSS", icon: "https://cdn.simpleicons.org/html5/E34F26" },
    ],
  },
  {
    title: "Mobile",
    description: "Developing mobile-first experiences with modern native workflows.",
    items: [
      { name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      {
        name: "Expo",
        iconLight: "https://cdn.simpleicons.org/expo/000000",
        iconDark: "https://cdn.simpleicons.org/expo/FFFFFF",
      },
      { name: "Swift", icon: "https://cdn.simpleicons.org/swift/F05138" },
    ],
  },
  {
    title: "Backend",
    description: "Working with APIs, data, and backend services for production apps.",
    items: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
      { name: "REST APIs", icon: "https://cdn.simpleicons.org/openapiinitiative/6BA539" },
      { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    ],
  },
  {
    title: "Tools",
    description: "Daily tools for collaboration, deployment, and product delivery.",
    items: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      {
        name: "GitHub",
        iconLight: "https://cdn.simpleicons.org/github/000000",
        iconDark: "https://cdn.simpleicons.org/github/FFFFFF",
      },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
      {
        name: "Milanote",
        iconLight: "https://cdn.simpleicons.org/milanote/000000",
        iconDark: "https://cdn.simpleicons.org/milanote/FFFFFF",
      },
      {
        name: "Vercel",
        iconLight: "https://cdn.simpleicons.org/vercel/000000",
        iconDark: "https://cdn.simpleicons.org/vercel/FFFFFF",
      },
      {
        name: "Cursor AI",
        iconLight: "https://cdn.simpleicons.org/cursor/000000",
        iconDark: "https://cdn.simpleicons.org/cursor/FFFFFF",
      },
      { name: "npm", icon: "https://cdn.simpleicons.org/npm/CB3837" },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Tech <span className="text-primary">Stack</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tools and technologies I use to build applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techStacks.map((group) => (
            <div key={group.title} className="bg-card p-6 rounded-lg border border-border shadow-xs card-hover">
              <h3 className="text-xl font-semibold text-left mb-2">{group.title}</h3>
              <p className="text-sm text-muted-foreground text-left mb-4">{group.description}</p>

              <div className="flex flex-wrap gap-2 text-left">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-2 px-3 py-2 border rounded-full bg-secondary/80 text-secondary-foreground text-sm hover:bg-secondary transition-colors"
                  >
                    {item.iconLight && item.iconDark ? (
                      <>
                        <img src={item.iconLight} alt={`${item.name} logo`} className="h-4 w-4 dark:hidden" loading="lazy" />
                        <img src={item.iconDark} alt={`${item.name} logo`} className="hidden h-4 w-4 dark:block" loading="lazy" />
                      </>
                    ) : (
                      <img src={item.icon} alt={`${item.name} logo`} className="h-4 w-4" loading="lazy" />
                    )}
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};