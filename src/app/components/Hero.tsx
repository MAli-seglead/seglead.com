"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const phrases = [
  "İŞİNİZİ BÜYÜTEN",
  "SATIŞ ODAKLI",
  "HER BÜTÇEYE UYGUN",
  "MODERN ALTYAPILI",
  "HIZLI & KALİTELİ"
];

const letters = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ";

export default function Hero() {
  const [displayText, setDisplayText] = useState(phrases[0]);
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  // STAGE 1: The Entrance Animation
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate the line
    tl.fromTo(".hero-line", { scaleX: 0 }, { scaleX: 1, duration: 1.5, ease: "power4.inOut" });

    // Animate the letters flying in randomly from up or down
    tl.fromTo(".char-init", 
      { 
        opacity: 0, 
        y: () => (Math.random() > 0.5 ? 100 : -100) // Randomly up or down
      }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.02, 
        ease: "power4.out" 
      }, "-=0.5");

    // Fade in the paragraph and buttons
    tl.fromTo(".hero-fade", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2 }, "-=0.5");
  }, []);

  // STAGE 2: The Infinite Letter Transformation
  useEffect(() => {
    const phraseTimeout = setTimeout(() => {
      const nextIndex = (index + 1) % phrases.length;
      const nextPhrase = phrases[nextIndex];
      transformText(nextPhrase);
      setIndex(nextIndex);
    }, 4000);

    return () => clearTimeout(phraseTimeout);
  }, [index, displayText]);

  const transformText = (target: string) => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => 
        target
          .split("")
          .map((char, i) => {
            if (i < iteration) return target[i];
            if (target[i] === " ") return " ";
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      iteration += 1 / 1; // Speed of the letter swap
      if (iteration >= target.length) clearInterval(interval);
    }, 50);
  };

  return (
    <section ref={containerRef} style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '10px 40px 40px',
      maxWidth: '1600px',
      margin: '0 auto'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '1200px' }}>
        
        <div className="hero-line" style={{ 
          width: '100%', height: '1px', backgroundColor: 'var(--border)', marginBottom: '60px', transformOrigin: 'left'
        }}></div>

        <h1 style={{ 
          fontSize: 'clamp(2rem, 7.5vw, 95px)', 
          fontWeight: 400, 
          lineHeight: 1.1, 
          letterSpacing: '-0.02em',
          marginBottom: '32px',
          textTransform: ''
        }}>
          <span className="hero-fade" style={{ color: 'var(--text-muted)' }}>SegLead. </span>
          <br />
          <span style={{ color: 'var(--text)', display: 'inline-block', minHeight: '1.1em' }}>
            {displayText.split("").map((c, i) => (
              <span key={i} className="char-init" style={{ display: 'inline-block' }}>
                {c === " " ? "\u00A0" : c}
              </span>
            ))}
          </span>
          <br />
          <span className="hero-fade">WEB SİTELER.</span>
        </h1>
        
        <p className="hero-fade" style={{ 
          fontSize: 'clamp(1rem, 1.8vw, 1.4rem)', color: 'var(--text-muted)', maxWidth: '750px', marginBottom: '48px' 
        }}>
          Yeni nesil işletmeler için dijital dünyada fark yaratan çözümler. 
          Sizi profesyonel gösterecek, SEO uyumlu** ve mobil öncelikli** sistemler.
        </p>
      </div>
    </section>
  );
}