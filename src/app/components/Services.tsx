"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1, // Smoothly ties animation to scrollbar
        }
      });

      // --- PHASE 1 to 2: The Pieces -> The Blueprint (0% to 33% scroll)
      tl.to(".text-1", { opacity: 0, y: -20, duration: 1 }, 0)
        .to(".text-2", { opacity: 1, y: 0, duration: 1 }, 0)
        // Visual: Blocks align from chaos into a wireframe grid
        .to(".block-1", { x: 0, y: 0, rotate: 0, borderColor: "rgba(255,255,255,0.5)", duration: 1 }, 0)
        .to(".block-2", { x: 0, y: 0, rotate: 0, borderColor: "rgba(255,255,255,0.5)", duration: 1 }, 0)
        .to(".block-3", { x: 0, y: 0, rotate: 0, borderColor: "rgba(255,255,255,0.5)", duration: 1 }, 0);

      // --- PHASE 2 to 3: The Blueprint -> The Assembly (33% to 66% scroll)
      tl.to(".text-2", { opacity: 0, y: -20, duration: 1 }, 1)
        .to(".text-3", { opacity: 1, y: 0, duration: 1 }, 1)
        // Visual: Wireframes get "painted" (filled with colors/gradients)
        .to(".block-1", { backgroundColor: "#ffffff", borderColor: "transparent", duration: 1 }, 1)
        .to(".block-2", { backgroundColor: "var(--accent)", borderColor: "transparent", duration: 1 }, 1)
        .to(".block-3", { backgroundColor: "#222222", borderColor: "transparent", duration: 1 }, 1);

      // --- PHASE 3 to 4: The Assembly -> The Launch (66% to 100% scroll)
      tl.to(".text-3", { opacity: 0, y: -20, duration: 1 }, 2)
        .to(".text-4", { opacity: 1, y: 0, duration: 1 }, 2)
        // Visual: The whole structure scales up and glows
        .to(".builder-container", { scale: 1.1, filter: "drop-shadow(0px 0px 30px rgba(93,211,182,0.3))", duration: 1 }, 2);

    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    // container is 400vh tall to give us plenty of scrolling room
    <section ref={containerRef} style={{ height: "400vh", backgroundColor: "#0a0a0a", position: "relative" }}>
      
      {/* STICKY VIEWPORT: Locks to the screen for 100vh while you scroll down the 400vh section */}
      <div style={{ position: "sticky", top: 0, height: "100vh", width: "100%", display: "flex", overflow: "hidden" }}>
        
        {/* LEFT SIDE: STORY TEXT */}
        <div style={{ width: "50%", height: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 8vw" }}>
          
          <div style={{ position: "absolute", top: "15vh" }}>
            <span style={{ color: "var(--accent)", fontSize: "0.75rem", letterSpacing: "0.4em" }}>OUR METHOD.</span>
          </div>

          {/* Text 1: The Pieces */}
          <div className="text-1" style={{ position: "absolute", opacity: 1, transform: "translateY(0)" }}>
            <h2 style={{ fontSize: "clamp(3rem, 5vw, 6rem)", fontWeight: 300, lineHeight: 0.9, color: "#fff", marginBottom: "20px" }}>THE<br/>PIECES.</h2>
            <p style={{ color: "#888", fontSize: "1.1rem", maxWidth: "350px", lineHeight: 1.6, fontWeight: 300 }}>
              <strong>1. Strategy & Roadmap</strong><br/>
              We start by laying out all the raw components. Analyzing your goals, user data, and market position before we build.
            </p>
          </div>

          {/* Text 2: The Blueprint */}
          <div className="text-2" style={{ position: "absolute", opacity: 0, transform: "translateY(20px)" }}>
            <h2 style={{ fontSize: "clamp(3rem, 5vw, 6rem)", fontWeight: 300, lineHeight: 0.9, color: "#fff", marginBottom: "20px" }}>THE<br/>BLUEPRINT.</h2>
            <p style={{ color: "#888", fontSize: "1.1rem", maxWidth: "350px", lineHeight: 1.6, fontWeight: 300 }}>
              <strong>2. UX/UI Branding</strong><br/>
              Planning where every piece goes. We design the wireframes and user journeys to ensure structural perfection.
            </p>
          </div>

          {/* Text 3: The Assembly */}
          <div className="text-3" style={{ position: "absolute", opacity: 0, transform: "translateY(20px)" }}>
            <h2 style={{ fontSize: "clamp(3rem, 5vw, 6rem)", fontWeight: 300, lineHeight: 0.9, color: "#fff", marginBottom: "20px" }}>THE<br/>ASSEMBLY.</h2>
            <p style={{ color: "#888", fontSize: "1.1rem", maxWidth: "350px", lineHeight: 1.6, fontWeight: 300 }}>
              <strong>3. Next.js Development</strong><br/>
              Putting the pieces together and painting the walls. Writing the high-performance code that brings the blueprint to life.
            </p>
          </div>

          {/* Text 4: The Launch */}
          <div className="text-4" style={{ position: "absolute", opacity: 0, transform: "translateY(20px)" }}>
            <h2 style={{ fontSize: "clamp(3rem, 5vw, 6rem)", fontWeight: 300, lineHeight: 0.9, color: "#fff", marginBottom: "20px" }}>THE<br/>LAUNCH.</h2>
            <p style={{ color: "#888", fontSize: "1.1rem", maxWidth: "350px", lineHeight: 1.6, fontWeight: 300 }}>
              <strong>4. SEO & Evolution</strong><br/>
              The final product. Optimized, globally fast, and ready to dominate the market.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: VISUAL BUILDER */}
        <div style={{ width: "50%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderLeft: "1px solid rgba(255,255,255,0.05)" }}>
          
          <div className="builder-container" style={{ width: "300px", height: "400px", display: "flex", flexDirection: "column", gap: "10px", position: "relative" }}>
            
            {/* Block 1 (Starts chaotic, rotated, transparent) */}
            <div className="block-1" style={{ 
              width: "100%", height: "80px", 
              border: "1px dashed rgba(255,255,255,0.2)", 
              transform: "translate(-50px, -50px) rotate(-15deg)" 
            }} />

            {/* Block 2 */}
            <div className="block-2" style={{ 
              width: "100%", height: "200px", 
              border: "1px dashed rgba(255,255,255,0.2)", 
              transform: "translate(60px, 20px) rotate(10deg)" 
            }} />

            {/* Block 3 */}
            <div className="block-3" style={{ 
              width: "100%", height: "100px", 
              border: "1px dashed rgba(255,255,255,0.2)", 
              transform: "translate(-30px, 80px) rotate(-5deg)" 
            }} />

          </div>

        </div>
      </div>
    </section>
  );
}