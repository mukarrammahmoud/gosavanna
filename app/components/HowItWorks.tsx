import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Trans } from "@lingui/react";

gsap.registerPlugin(ScrollTrigger);

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      if (stepsRef.current.length > 0) {
        // Set perspective for 3D effect
        gsap.set(sectionRef.current, { perspective: 1000 });

        // Initial state: 3D positioning
        gsap.set(stepsRef.current, { 
          x: 400, 
          opacity: 0,
          scale: 0.5,
          rotationY: 60,
          rotationX: 30,
          filter: "blur(10px)"
        });

        mm.add("(min-width: 768px)", () => {
          // DESKTOP: Reverse Order (3 -> 2 -> 1)
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 10px", 
              end: "+=1500", 
              pin: true, 
              scrub: 1, 
              toggleActions: "play none none reverse",
            },
          });

          tl.to(stepsRef.current[2], {
            x: 0, opacity: 1, scale: 1, rotationY: 0, rotationX: 0, filter: "blur(0px)", duration: 1, ease: "back.out(1.5)",
          })
          .to(stepsRef.current[1], {
            x: 0, opacity: 1, scale: 1, rotationY: 0, rotationX: 0, filter: "blur(0px)", duration: 1, ease: "back.out(1.5)",
          }, "-=0.2") 
          .to(stepsRef.current[0], {
            x: 0, opacity: 1, scale: 1, rotationY: 0, rotationX: 0, filter: "blur(0px)", duration: 1, ease: "back.out(1.5)",
          }, "-=0.2");
        });

        mm.add("(max-width: 767px)", () => {
          // MOBILE: Normal Order (1 -> 2 -> 3)
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 10px", 
              end: "+=1500", 
              pin: true, 
              scrub: 1, 
              toggleActions: "play none none reverse",
            },
          });

          tl.to(stepsRef.current[0], {
            x: 0, opacity: 1, scale: 1, rotationY: 0, rotationX: 0, filter: "blur(0px)", duration: 1, ease: "back.out(1.5)",
          })
          .to(stepsRef.current[1], {
            x: 0, opacity: 1, scale: 1, rotationY: 0, rotationX: 0, filter: "blur(0px)", duration: 1, ease: "back.out(1.5)",
          }, "-=0.2") 
          .to(stepsRef.current[2], {
            x: 0, opacity: 1, scale: 1, rotationY: 0, rotationX: 0, filter: "blur(0px)", duration: 1, ease: "back.out(1.5)",
          }, "-=0.2");
        });
      }
    }, sectionRef);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      y: -10,
      borderColor: "#d05b21",
      boxShadow: "0 20px 30px -10px rgba(208, 91, 33, 0.3)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      y: 0,
      borderColor: "rgba(208, 91, 33, 0.2)",
      boxShadow: "none",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 px-6 md:px-12 bg-primary"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-accent">
          <Trans id="how.title" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Step 1 */}
          <div
            ref={(el) => { if (el) stepsRef.current[0] = el; }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex flex-col items-center text-center p-8 rounded-2xl bg-secondary border border-accent/20 cursor-pointer"
          >
            <div className="w-20 h-20 mb-6 rounded-full bg-accent flex items-center justify-center">
              <svg
                className="w-10 h-10 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">
              <Trans id="how.step1.title" />
            </h3>
            <p className="text-secondary text-lg">
              <Trans id="how.step1.desc" />
            </p>
          </div>

          {/* Step 2 */}
          <div
            ref={(el) => { if (el) stepsRef.current[1] = el; }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex flex-col items-center text-center p-8 rounded-2xl bg-secondary border border-accent/20 cursor-pointer"
          >
            <div className="w-20 h-20 mb-6 rounded-full bg-accent flex items-center justify-center">
              <svg
                className="w-10 h-10 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">
              <Trans id="how.step2.title" />
            </h3>
            <p className="text-secondary text-lg">
              <Trans id="how.step2.desc" />
            </p>
          </div>

          {/* Step 3 */}
          <div
            ref={(el) => { if (el) stepsRef.current[2] = el; }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex flex-col items-center text-center p-8 rounded-2xl bg-secondary border border-accent/20 cursor-pointer"
          >
            <div className="w-20 h-20 mb-6 rounded-full bg-accent flex items-center justify-center">
              <svg
                className="w-10 h-10 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">
              <Trans id="how.step3.title" />
            </h3>
            <p className="text-secondary text-lg">
              <Trans id="how.step3.desc" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
