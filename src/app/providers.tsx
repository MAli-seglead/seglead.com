"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState, useLayoutEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // 1. Handle Theme mounting separately to avoid the "Script Tag" error
  useEffect(() => {
    setMounted(true);
  }, []);

  // 2. High-Performance Scroll Logic
  useLayoutEffect(() => {
    if (!mounted) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // Refresh GSAP once everything is settled
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(update);
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [mounted]);

  // IMPORTANT: ThemeProvider must always render, but we hide content until mounted
  // to prevent the hydration mismatch and the script tag console error.
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="dark" 
      enableSystem={false}
      disableTransitionOnChange
    >
      <div style={{ opacity: mounted ? 1 : 0, transition: 'opacity 0.5s ease' }}>
        {children}
      </div>
    </ThemeProvider>
  );
}