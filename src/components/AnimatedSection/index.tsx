"use client";

import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: React.ReactNode;
  animationType?: "fadeIn" | "slideUp" | "slideLeft" | "scale" | "rotate";
  delay?: number;
  duration?: number;
  trigger?: string;
  className?: string;
}

export default function AnimatedSection({
  children,
  animationType = "fadeIn",
  delay = 0,
  duration = 1,
  trigger = "top 80%",
  className = "",
}: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const getAnimationVars = () => {
      const baseVars = {
        opacity: 0,
        duration,
        delay,
        ease: "power2.out",
      };

      switch (animationType) {
        case "fadeIn":
          return baseVars;
        case "slideUp":
          return { ...baseVars, y: 50 };
        case "slideLeft":
          return { ...baseVars, x: 50 };
        case "scale":
          return { ...baseVars, scale: 0.8 };
        case "rotate":
          return { ...baseVars, rotation: 10, scale: 0.9 };
        default:
          return baseVars;
      }
    };

    const getAnimationToVars = () => {
      const baseVars = {
        opacity: 1,
        duration,
        delay,
        ease: "power2.out",
      };

      switch (animationType) {
        case "fadeIn":
          return baseVars;
        case "slideUp":
          return { ...baseVars, y: 0 };
        case "slideLeft":
          return { ...baseVars, x: 0 };
        case "scale":
          return { ...baseVars, scale: 1 };
        case "rotate":
          return { ...baseVars, rotation: 0, scale: 1 };
        default:
          return baseVars;
      }
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: trigger,
        end: "top 20%",
        scrub: 1,
      },
    });

    tl.fromTo(element, getAnimationVars(), getAnimationToVars());

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [animationType, delay, duration, trigger]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
