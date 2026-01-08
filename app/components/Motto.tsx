import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Trans } from "@lingui/react";

gsap.registerPlugin(ScrollTrigger);

export function Motto() {
  const mottoRef = useRef<HTMLQuoteElement>(null);


  useEffect(() => {
    gsap.from(mottoRef.current, {
      scrollTrigger: {
        trigger: mottoRef.current,
        start: "top 80%",
      },
      opacity: 0,
      scale: 0.9,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-primary">
      <div className="container mx-auto max-w-4xl text-center">
        <blockquote
          ref={mottoRef}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-accent italic leading-tight border-t-4 border-b-4 border-accent py-12"
        >
          "<Trans id="motto.text" />"
        </blockquote>
      </div>
    </section>
  );
}
