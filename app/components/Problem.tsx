import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Trans } from "@lingui/react";

gsap.registerPlugin(ScrollTrigger);

export function Problem() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 px-6 md:px-12 bg-secondary"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-primary leading-tight">
          <Trans id="problem.title" />
        </h2>
        <p className="text-xl md:text-2xl text-secondary leading-relaxed">
          <Trans id="problem.text" />
        </p>
      </div>
    </section>
  );
}
