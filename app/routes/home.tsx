import type { Route } from "./+types/home";
import { ThemeProvider } from "../contexts/ThemeContext";
import { LanguageProvider } from "../contexts/LanguageContext";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { Problem } from "../components/Problem";
import { Motto } from "../components/Motto";
import { Footer } from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GoSavanna - Try Luxury Fashion at Home" },
    {
      name: "description",
      content:
        "GoSavanna is Saudi Arabia's first home try-on service for luxury fashion. Try before you buy with confidence.",
    },
    { property: "og:title", content: "GoSavanna - Luxury Home Try-On Service" },
    {
      property: "og:description",
      content:
        "Experience luxury fashion from the comfort of your home. Try before you pay.",
    },
  ];
}

export default function Home() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen">
          <Header />
          
          <main>
            <Hero />
            <HowItWorks />
            <Problem />
            <Motto />
          </main>
          
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
