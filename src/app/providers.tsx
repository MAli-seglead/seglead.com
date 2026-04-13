"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const refreshTimer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      window.clearTimeout(refreshTimer);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, [mounted]);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <div style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.5s ease" }}>
        {children}
      </div>
    </ThemeProvider>
  );
}