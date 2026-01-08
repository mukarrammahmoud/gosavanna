import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/80 backdrop-blur-lg shadow-lg border-b border-accent/20"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
        {/* Logo on the left */}
        <div className="flex-shrink-0">
          <img 
            src="/logo.svg?v=3" 
            alt="GoSavanna Logo" 
            className="h-12 md:h-16 w-auto drop-shadow-lg"
          />
        </div>
        
        {/* Toggles on the right */}
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
