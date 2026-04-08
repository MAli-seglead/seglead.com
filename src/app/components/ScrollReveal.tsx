"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Props {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function ScrollReveal({ children, delay = 0, direction = "up" }: Props) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    
    // Define the starting position based on direction
    const offset = 50;
    const x = direction === "left" ? -offset : direction === "right" ? offset : 0;
    const y = direction === "up" ? offset : direction === "down" ? -offset : 0;

    gsap.fromTo(
      element,
      { 
        opacity: 0, 
        x: x,
        y: y,
        scale: 0.98 // Subtle scale for a premium feel
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 1.5,
        delay: delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: element,
          start: "top 90%", // Starts when the top of the element is 90% down the screen
          end: "top 60%",
          scrub: 1, // This makes the animation follow the speed of the scroll
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [delay, direction]);

  return <div ref={elementRef} style={{ willChange: "transform, opacity" }}>{children}</div>;
}