import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Trans } from "@lingui/react";
import { useTheme } from "../contexts/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const { theme } = useTheme();
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], {
        opacity: 0,
      });
      gsap.set(ctaRef.current, {
        scale: 0.8,
      });

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Title appears
      timeline.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.3,
      });

      // 2. Subtitle appears (overlapping with title)
      timeline.to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "-=0.6"
      );

      // 3. Button appears AFTER subtitle (no overlap)
      timeline.to(ctaRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
      });

      // Scroll effect: hero slides up and fades out
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: -200,
        opacity: 0,
        ease: "none",
      });
    }, heroRef); // Scope to heroRef

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${theme === "dark" ? "/hero-dark.jpg" : "/hero-light.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center max-w-5xl">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl"
        >
          <Trans id="hero.title" />
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto drop-shadow-lg"
        >
          <Trans id="hero.subtitle" />
        </p>

        <button
          ref={ctaRef}
          className="btn-accent px-10 py-4 rounded-full text-lg md:text-xl font-bold shadow-2xl hover:shadow-accent/50"
        >
          <Trans id="hero.cta" />
        </button>
      </div>
    </section>
  );
}
