"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const phrases = ["İŞİNİZİ BÜYÜTEN", "SATIŞ ODAKLI", "HER BÜTÇEYE UYGUN", "MODERN ALTYAPILI"];

export default function Hero() {
  const containerRef = useRef(null);
  const rollRef = useRef(null);

  useEffect(() => {
    // 1. Entrance Animations
    const tl = gsap.timeline();
    tl.fromTo(".hero-line", { scaleX: 0 }, { scaleX: 1, duration: 1.5, ease: "power4.inOut" });
    tl.fromTo(".hero-fade", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2 }, "-=0.5");

    // 2. Seamless Infinite Loop Logic
    const rollItems = rollRef.current;
    const items = gsap.utils.toArray(".roll-item");
    const itemHeight = 100; // percent base

    // We create a repeating timeline that shifts the box up one-by-one
    let loop = gsap.timeline({ repeat: -1 });

    phrases.forEach((_, i) => {
      loop.to(rollItems, {
        yPercent: -(i + 1) * (100 / (phrases.length + 1)),
        duration: 0.8,
        ease: "power4.inOut",
        delay: 2.5 // How long each text stays visible
      });
    });

    // This instant reset happens when the "Clone" (the 5th hidden item) is reached
    // It jumps back to index 0 so fast the eye can't see it.
    loop.set(rollItems, { yPercent: 0 });

  }, []);

  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 40px', maxWidth: '1400px', margin: '0 auto' }}>
      <div className="hero-line" style={{ width: '100%', height: '1px', backgroundColor: 'var(--border)', marginBottom: '80px', transformOrigin: 'left' }}></div>

      <h1 style={{
        fontSize: 'clamp(2.5rem, 8vw, 100px)',
        lineHeight: 1.1, // Increased from 0.9 or 1.0 to prevent overlapping
        letterSpacing: '-0.04em',
        marginBottom: '20px'
      }}>
        <span className="hero-fade" style={{
          color: 'var(--text-muted)',
          display: 'block',
          fontSize: '0.35em',
          marginBottom: '20px' // More breathing room
        }}>
          SEGLEAD STUDIO.
        </span>
        {/* ... rest of your code */}

        <div className="roll-mask">
          <div ref={rollRef} className="roll-list">
            {/* Real Items */}
            {phrases.map((phrase, i) => (
              <div key={i} className="roll-item" style={{ color: 'var(--text)' }}>
                {phrase}
              </div>
            ))}
            {/* Seamless Connector (Clone of the first item) */}
            <div className="roll-item" style={{ color: 'var(--text)' }}>
              {phrases[0]}
            </div>
          </div>
        </div>

        <br />
        <span className="hero-fade" style={{ color: 'var(--text)' }}>WEB SİTELER.</span>
      </h1>

      <p className="hero-fade" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', color: 'var(--text-muted)', maxWidth: '550px', marginTop: '40px' }}>
        Yeni nesil işletmeler için dijital dünyada fark yaratan çözümler.
        Sizi profesyonel gösterecek, SEO uyumlu ve mobil öncelikli sistemler.
      </p>
    </section>
  );
}