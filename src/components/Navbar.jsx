import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-40 transition-all duration-300",
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
            : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          <a href="#hero" className="text-xl font-bold text-primary">
            <span className="relative z-10">
              <span className="text-glow text-foreground">Hieu Phan</span> portfolio
            </span>
          </a>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="md:hidden fixed top-4 right-4 p-2 text-foreground z-50"
        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-md transition-all duration-300",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="min-h-dvh flex flex-col items-center justify-center overflow-y-auto px-6 py-24">
          <div
            className={cn(
              "flex w-full max-w-xs flex-col items-center gap-8 transition-all duration-300",
              isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
            )}
          >
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-lg text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};