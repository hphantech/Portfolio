import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import {SkillsSection } from "../components/SkillsSection"
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
export const Home = () => {
    return<div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/*Theme Toggle*/}
        <ThemeToggle/>

        {/*background effects*/}
        <StarBackground/>



        {/*NavBar*/}
        <Navbar/>

        {/*MainContent*/}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />


            {/* ContactSection does not work for now since i dont want to pay for a email service lol */}
            {/* <ContactSection /> */}
            
        </main>

        {/*Footer*/}
        <Footer />

 

    </div>;
}