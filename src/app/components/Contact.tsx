"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function About() {
  const [hasMounted, setHasMounted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setHasMounted(true);
    if (hasMounted) {
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

  /* FIX: Use CSS Variable for background */
  if (!hasMounted) return <div style={{ height: '60vh', background: 'var(--bg)' }} />;

  return (
    <section 
      ref={containerRef} 
      id="contact" 
      style={{ 
        /* FIX: Changed from #111 to var(--bg) */
        backgroundColor: 'var(--bg)', 
        padding: '120px 5vw', 
        position: 'relative',
        borderTop: '1px solid var(--border)',
        overflow: 'hidden',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(var(--accent) 1px, transparent 1px)',
        opacity: 0.1,
        backgroundSize: '40px 40px',
        pointerEvents: 'none'
      }} />
      
      <div className="footer-content" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <span style={{ color: 'var(--accent)', letterSpacing: '0.6em', fontSize: '0.7rem', fontWeight: 700 }}>GET_IN_TOUCH</span>
        
        <h2 style={{ 
          fontSize: 'clamp(2.5rem, 7vw, 6rem)', 
          /* FIX: Changed from #FFFFE3 to var(--text) */
          color: 'var(--text)', 
          fontWeight: 500, 
          lineHeight: 1, 
          marginTop: '30px',
          WebkitFontSmoothing: 'antialiased'
        }}>
          VİZYONUNUZU <br /> <span style={{ color: 'var(--accent)' }}>BİRLİKTE</span> KODLAYALIM.
        </h2>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '60px' }} className="mobile-stack">
          <a href="mailto:hello@seglead.com" className="lux-btn">PROJEYİ BAŞLAT</a>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .lux-btn {
          padding: 18px 45px; background: var(--accent); color: var(--bg); text-decoration: none; 
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