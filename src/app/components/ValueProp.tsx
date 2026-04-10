"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const features = [
  { 
    id: "01", 
    title: "Marka Kimliği", 
    desc: "Dijital varlığınızı mühendislik disipliniyle estetize ediyoruz. Karmaşadan uzak, net ve premium bir algı yaratıyoruz." 
  },
  { 
    id: "02", 
    title: "Kullanıcı Deneyimi", 
    desc: "Ziyaretçi güveni ile kalite arasındaki boşluğu doldurarak, pürüzsüz bir dönüşüm mimarisi inşa ediyoruz." 
  },
  { 
    id: "03", 
    title: "Performans Mimari", 
    desc: "Next.js 16 ve modern tech-stack ile milisaniyeler içinde yanıt veren, sarsılmaz yapılar kuruyoruz." 
  },
  { 
    id: "04", 
    title: "Ölçeklenebilir Kod", 
    desc: "Gelecekteki büyümenizi bugünden kodluyoruz. Sisteminizi her an yeni entegrasyonlara hazır tutuyoruz." 
  }
];

export default function ValueProp() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    let mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      // Background Title Parallax (applies to all sizes where visible)
      gsap.to(".vp-bg-title", {
        xPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });

      // DESKTOP ANIMATIONS
      mm.add("(min-width: 769px)", () => {
        // Horizontal Cards Stagger
        gsap.from(".vp-grid-card", {
          x: 100,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".vp-grid-container",
            start: "top 80%",
          }
        });

        // Card Magnetic "Tilt" effect on scroll
        gsap.utils.toArray(".vp-grid-card").forEach((card: any) => {
          gsap.to(card, {
            rotateY: 15,
            scale: 0.95,
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          });
        });
      });

      // MOBILE ANIMATIONS
      mm.add("(max-width: 768px)", () => {
        // Simple vertical fade-up to prevent mobile overflow and lag
        gsap.from(".vp-grid-card", {
          y: 50,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".vp-grid-container",
            start: "top 85%",
          }
        });
      });

    }, containerRef);

    return () => {
      ctx.revert();
      mm.revert(); // Clean up matchMedia
    };
  }, [hasMounted]);

  if (!hasMounted) return null;

  return (
    <section ref={containerRef} className="vp-modern-section">
      {/* Visual Depth Background */}
      <div className="vp-bg-title">QUALITY • ENGINEERING • VISION • STANDARDS •&nbsp;</div>
      
      <div className="vp-content">
        <div className="vp-header">
          <div className="lux-tag">✦ DEĞERLERİMİZ</div>
          <h2 className="lux-h2">Vizyonunuzu <br/> <span>Kodluyoruz.</span></h2>
        </div>

        <div className="vp-grid-container">
          {features.map((f, i) => (
            <div key={i} className="vp-grid-card">
              <div className="card-top">
                <span className="card-index">{f.id}</span>
                <div className="card-glow" />
              </div>
              <h3 className="card-h3">{f.title}</h3>
              <p className="card-p">{f.desc}</p>
              <div className="card-line" />
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .vp-modern-section {
          background-color: var(--bg);
          padding: 180px 5vw;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        .vp-bg-title {
          position: absolute;
          top: 10%;
          left: 0;
          font-size: 20vw;
          font-weight: 900;
          color: white;
          opacity: 0.03;
          white-space: nowrap;
          pointer-events: none;
          z-index: 0;
        }

        .vp-content {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
        }

        .vp-header {
          margin-bottom: 80px;
        }
        .lux-tag { font-size: 0.7rem; letter-spacing: 0.6em; color: var(--accent); margin-bottom: 20px; }
        .lux-h2 { font-size: clamp(2.5rem, 6vw, 4.5rem); color: var(--text); font-weight: 400; line-height: 1; }
        .lux-h2 span { color: var(--accent); }

        .vp-grid-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .vp-grid-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          padding: 50px 40px;
          position: relative;
          backdrop-filter: blur(10px);
          transition: border-color 0.4s ease;
          perspective: 1000px;
        }
        .vp-grid-card:hover {
          border-color: var(--accent);
          background: rgba(255, 255, 255, 0.04);
        }

        .card-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 40px; }
        .card-index { font-family: monospace; color: var(--accent); font-size: 1.1rem; }
        .card-glow { width: 40px; height: 1px; background: var(--accent); opacity: 0.3; }

        .card-h3 { font-size: 1.8rem; color: #fff; margin-bottom: 20px; font-weight: 500; letter-spacing: -0.02em; }
        .card-p { font-size: 1rem; color: var(--text-muted); line-height: 1.6; min-height: 100px; }
        .card-line { width: 0%; height: 2px; background: var(--accent); margin-top: 30px; transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
        .vp-grid-card:hover .card-line { width: 100%; }

        @media (max-width: 1200px) {
          .vp-grid-container { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .vp-modern-section { 
            padding: 100px 5vw; 
            min-height: auto; 
          }
          .vp-header {
            margin-bottom: 50px;
          }
          .lux-h2 { 
            font-size: 2.2rem; 
          }
          .vp-bg-title { 
            display: none; 
          }
          .vp-grid-container { 
            grid-template-columns: 1fr; 
            gap: 15px; 
          }
          .vp-grid-card { 
            padding: 35px 25px; /* Reduced padding for mobile */
          }
          .card-top {
            margin-bottom: 25px;
          }
          .card-h3 { 
            font-size: 1.5rem; 
            margin-bottom: 15px;
          }
          .card-p { 
            min-height: auto; /* Remove fixed height on mobile */
          }
          .card-line {
            margin-top: 20px;
            width: 15%; /* Show a small line by default on mobile since hover doesn't exist */
          }
          .vp-grid-card:active .card-line { 
            width: 100%; /* Expands when tapped on mobile */
          }
        }
      `}} />
    </section>
  );
}