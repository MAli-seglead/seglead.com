"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function About() {
  const [hasMounted, setHasMounted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setHasMounted(true);
    
    if (hasMounted) {
      // Direct GSAP without ScrollTrigger scrub to stop the lag
      const ctx = gsap.context(() => {
        gsap.from(".footer-content", {
          opacity: 0,
          y: 30,
          duration: 0.8,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, [hasMounted]);

  if (!hasMounted) return <div style={{ height: '60vh', background: '#111' }} />;

  return (
    <section 
      ref={containerRef} 
      id="contact" 
      style={{ 
        backgroundColor: '#111', // Direct hex to avoid variable lookup lag
        padding: '120px 5vw', 
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 227, 0.1)',
        overflow: 'hidden',
        // Critical: Forces GPU acceleration
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
    >
      {/* Static Pattern - Faster than CSS gradients */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(93, 211, 182, 0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none'
      }} />
      
      <div className="footer-content" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <span style={{ color: '#5DD3B6', letterSpacing: '0.6em', fontSize: '0.7rem', fontWeight: 700 }}>GET_IN_TOUCH</span>
        
        <h2 style={{ 
          fontSize: 'clamp(2.5rem, 7vw, 6rem)', 
          color: '#FFFFE3', 
          fontWeight: 500, 
          lineHeight: 1, 
          marginTop: '30px',
          // Prevent font-smoothing issues during scroll
          WebkitFontSmoothing: 'antialiased'
        }}>
          VİZYONUNUZU <br /> <span style={{ color: '#5DD3B6' }}>BİRLİKTE</span> KODLAYALIM.
        </h2>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '60px' }} className="mobile-stack">
          <a href="mailto:hello@seglead.com" className="lux-btn">PROJEYİ BAŞLAT</a>
        </div>

        <div style={{ marginTop: '80px', display: 'flex', justifyContent: 'center', gap: '60px', opacity: 0.3 }} className="mobile-stack">
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '0.6rem', color: '#5DD3B6' }}>VERSION</div>
            <div style={{ fontSize: '0.9rem', color: '#FFFFE3', fontFamily: 'monospace' }}>2026.1.0</div>
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '0.6rem', color: '#5DD3B6' }}>STATUS</div>
            <div style={{ fontSize: '0.9rem', color: '#FFFFE3', fontFamily: 'monospace' }}>AVAILABLE</div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .lux-btn {
          padding: 18px 45px; background: #5DD3B6; color: #111; text-decoration: none; 
          font-weight: 800; font-size: 0.85rem; letter-spacing: 0.1em; transition: 0.3s transform;
          display: inline-block;
        }
        .lux-btn:hover { transform: scale(1.05); }
        @media (max-width: 768px) {
          .mobile-stack { flex-direction: column !important; align-items: center !important; gap: 15px !important; }
        }
      `}} />
    </section>
  );
}