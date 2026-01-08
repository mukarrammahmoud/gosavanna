import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Trans } from "@lingui/react";

gsap.registerPlugin(ScrollTrigger);

export function Motto() {
  const sectionRef = useRef<HTMLElement>(null);
  const mottoRef = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(mottoRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-6 md:px-12 bg-primary">
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
