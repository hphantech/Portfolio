import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
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
        </main>

        {/*Footer*/}

 

    </div>;
}