const skills = [
    // Frontend
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 75, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "TypeScript", level: 65, category: "frontend" },
  { name: "Tailwind CSS", level: 70, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 70, category: "backend" },
  { name: "MongoDB", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 75, category: "tools" },
  { name: "Figma", level: 60, category: "tools" },
  { name: "VS Code", level: 85, category: "tools" },
]

export const SkillsSection = () => {
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">

        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span>Skills</span>
            </h2>

        </div>
    </section>
}