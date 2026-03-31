"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fadeUp" | "fadeLeft" | "fadeRight" | "scaleIn";
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

    // Set initial state
    const initialState: gsap.TweenVars = { opacity: 1 }; // always visible by default
    
    const animConfigs: Record<string, { from: gsap.TweenVars }> = {
      fadeUp: { from: { y: 40, opacity: 0 } },
      fadeLeft: { from: { x: -40, opacity: 0 } },
      fadeRight: { from: { x: 40, opacity: 0 } },
      scaleIn: { from: { scale: 0.95, opacity: 0 } },
    };

    const config = animConfigs[animation] || animConfigs.fadeUp;

    const tween = gsap.fromTo(
      el,
      config.from,
      {
        y: 0,
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        delay,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [animation, delay]);

  return (
    <div ref={sectionRef} className={className} id={id}>
      {children}
    </div>
  );
}
