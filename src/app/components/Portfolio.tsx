"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "VANGUARD",
    category: "E-Commerce / UIUX",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2299&auto=format&fit=crop",
    year: "2026"
  },
  {
    title: "AETHER",
    category: "SaaS / Fintech",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2264&auto=format&fit=crop",
    year: "2025"
  },
  {
    title: "NEXUS",
    category: "Architecture / Web",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2340&auto=format&fit=crop",
    year: "2026"
  },
  {
    title: "ORACLE",
    category: "AI / Branding",
    img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2274&auto=format&fit=crop",
    year: "2026"
  }
];

export default function Portfolio() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Horizontal Scroll Animation
      gsap.to(sectionRef.current, {
        xPercent: -100 * (projects.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${sectionRef.current.offsetWidth}`,
          pin: true,
          scrub: 1, // Lower scrub value for more responsive feel
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Background Parallax Text
      gsap.to(".bg-text", {
        x: -800,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        }
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="scroll-section-outer" style={{ overflow: "hidden", backgroundColor: "var(--bg)" }}>
      
      {/* Background Large Text (Parallax) */}
      <div className="bg-text" style={{
        position: "absolute",
        top: "35%",
        left: "5%",
        fontSize: "25vw",
        fontWeight: 900,
        color: "var(--text)",
        opacity: 0.02,
        whiteSpace: "nowrap",
        pointerEvents: "none",
        zIndex: 0,
        willChange: "transform"
      }}>
        SELECTED WORKS — 2026 — SELECTED WORKS
      </div>

      <div ref={sectionRef} className="scroll-section-inner" style={{
        display: "flex",
        flexDirection: "row",
        position: "relative",
        width: `${projects.length * 100}vw`,
        height: "100vh",
        alignItems: "center",
        zIndex: 1,
        willChange: "transform"
      }}>
        
        {projects.map((project, i) => (
          <div key={i} className="project-slide" style={{
            width: "100vw",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 10vw"
          }}>
            
            <div className="project-card" style={{
              position: "relative",
              width: "100%",
              maxWidth: "1000px",
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: "60px",
              alignItems: "center"
            }}>
              
              {/* Image Box */}
              <div style={{
                position: "relative",
                aspectRatio: "4/5",
                width: "100%",
                border: "1px solid var(--border)",
                overflow: "hidden"
              }}>
                <image 
                  src={project.img} 
                  alt={project.title} 
                  fill='image' 
                  priority={i === 0}
                  sizes="50vw"
                  style={{ 
                    objectFit: "cover", 
                    filter: "grayscale(100%)",
                    transition: "all 0.8s cubic-bezier(0.2, 1, 0.3, 1)"
                  }} 
                  className="project-img"
                />
              </div>

              {/* Info Box */}
              <div style={{ textAlign: "left" }}>
                <div style={{ 
                  fontSize: "0.9rem", 
                  color: "var(--accent)", 
                  marginBottom: "20px", 
                  letterSpacing: "0.2em",
                  fontWeight: 500 
                }}>
                  {project.year} / {project.category}
                </div>
                <h3 style={{ 
                  fontSize: "clamp(3.5rem, 8vw, 8rem)", 
                  lineHeight: 0.85, 
                  letterSpacing: "-0.05em",
                  marginBottom: "40px",
                  fontWeight: 300 
                }}>
                  {project.title}
                </h3>
                <div className="line-grow" style={{
                  width: "60px",
                  height: "1px",
                  backgroundColor: "var(--text)",
                  transition: "width 0.6s ease"
                }} />
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}