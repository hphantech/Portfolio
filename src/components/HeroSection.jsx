import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Hi, </span>
                    <span className="opacity-0 animate-fade-in-delay-1">  my name is</span>
                    <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2"> Hieu</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Phan</span>
                    <span></span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mx-auto opacity-0 animate-fade-in-delay-3">
                    I am a Third-year IT student studying software engineering, My goal is to grow into a full-stack developer, but I want to build a strong frontend foundation first. 
                    I built this website as a space to share my skills, projects and experience.
 
                </p>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    I am currently looking for a Software Engineering internship from Feb 2 to Jun 26, 2026. 
                    If you think I could be a good fit for your team, feel free to reach out.
</p>
                <div className="opacity-0 animate-fade-in-delay-3 flex flex-col items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm md:text-base text-muted-foreground">
              Available for internship: <span className="ml-2 text-foreground/90">Feb 2 – Jun 26, 2026</span>
            </span>

            <a
              href="mailto:hphan7904@gmail.com"
              className="text-sm md:text-base text-muted-foreground hover:underline transition"
            >
              hphan.tech@gmail.com
            </a>
                </div>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#projects" className="cosmic-button">
                        view my work
                    </a>
                
                </div>
            </div>
        </div>

        {/* optional animated scroll */}
        {/* 
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary"/>
        </div> 
        */}
        
    </section>
}