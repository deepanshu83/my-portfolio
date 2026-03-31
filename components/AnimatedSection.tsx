"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fadeUp" | "fadeLeft" | "fadeRight" | "scaleIn" | "stagger";
  delay?: number;
  id?: string;
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  id,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const animationConfig: Record<string, gsap.TweenVars> = {
      fadeUp: { y: 60, opacity: 0 },
      fadeLeft: { x: -60, opacity: 0 },
      fadeRight: { x: 60, opacity: 0 },
      scaleIn: { scale: 0.9, opacity: 0 },
      stagger: { y: 40, opacity: 0 },
    };

    const fromVars = animationConfig[animation] || animationConfig.fadeUp;

    if (animation === "stagger") {
      const children = el.querySelectorAll("[data-animate]");
      if (children.length > 0) {
        gsap.from(children, {
          ...fromVars,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    } else {
      gsap.from(el, {
        ...fromVars,
        duration: 0.9,
        ease: "power3.out",
        delay,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [animation, delay]);

  return (
    <div ref={sectionRef} className={className} id={id}>
      {children}
    </div>
  );
}
