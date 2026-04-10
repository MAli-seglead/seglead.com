"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const phrases = ["İŞİNİZİ BÜYÜTEN", "SATIŞ ODAKLI", "GÖRÜNÜR", "MODERN", "AKILDA KALICI"];

export default function Hero() {
  const [activeTab, setActiveTab] = useState("design");
  const rollRef = useRef<HTMLDivElement>(null);

  // 1. Initial Page Load Animations & Text Roller
  useEffect(() => {
    gsap.fromTo(".hero-fade-in", 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    );

    const rollItems = rollRef.current;
    if (!rollItems) return;

    let loop = gsap.timeline({ repeat: -1 });
    phrases.forEach((_, i) => {
      loop.to(rollItems, {
        yPercent: -(i + 1) * (100 / (phrases.length + 1)),
        duration: 0.8,
        ease: "power4.inOut",
        delay: 2.0
      });
    });
    loop.set(rollItems, { yPercent: 0 });

    return () => { loop.kill(); };
  }, []);

  // 2. Rocket Launch & Massive 3D Smoke Burst
  useEffect(() => {
    gsap.killTweensOf([".rocket-element", ".smoke-1", ".smoke-2"]);
    
    // Center items perfectly
    gsap.set([".rocket-element", ".smoke-1", ".smoke-2"], { xPercent: -50 });

    if (activeTab === "launch") {
      gsap.set([".rocket-element", ".smoke-1", ".smoke-2"], { opacity: 0 });

      // Wide background smoke
      gsap.fromTo(".smoke-2",
        { y: 30, scale: 0.9, opacity: 0 },
        { y: 0, scale: 1, opacity: 0.9, duration: 1.5, ease: "power2.out" }
      );

      // Central burst smoke
      gsap.fromTo(".smoke-1",
        { y: 50, scale: 0.8, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.1 }
      );

      // Rocket shooting up (Starts lower, peeks out just slightly)
      gsap.fromTo(".rocket-element",
        { y: 150, scale: 0.7, opacity: 0 },
        { y: -10, scale: 1, opacity: 1, duration: 1.2, ease: "back.out(1.1)", delay: 0.15, onComplete: () => {
            gsap.to(".rocket-element", { y: "-=15", duration: 1.2, repeat: -1, yoyo: true, ease: "sine.inOut" });
        }}
      );
    } else {
      gsap.to([".rocket-element", ".smoke-1", ".smoke-2"], { opacity: 0, duration: 0.3 });
    }
  }, [activeTab]);

  return (
    <section className="hero-section">
      
      {/* RESPONSIVE CSS STYLES */}
      <style dangerouslySetInnerHTML={{__html: `
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 140px 5vw 60px;
          max-width: 1600px;
          margin: 0 auto;
          position: relative;
        }
        .hero-grid {
          display: grid;
          /* Adjusted grid to give text enough room while keeping Mac prominent */
          grid-template-columns: 0.9fr 1.1fr; 
          gap: 3vw;
          width: 100%;
          align-items: center;
        }
        .hero-laptop-container {
          position: relative;
          width: 100%;
          aspect-ratio: 16/10;
        }
        .hero-headline {
          font-size: clamp(2.4rem, 4vw, 4.5rem); 
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 20px;
          color: var(--text);
          font-weight: 500;
        }
        
        @media (max-width: 960px) {
          .hero-section { padding: 100px 5vw 40px; }
          .hero-grid { display: flex; flex-direction: column-reverse; gap: 30px; }
          .hero-headline { font-size: 2.2rem; }
          .hero-laptop-container { margin-top: 10px; }
          .hero-tabs { display: none !important; }
          /* Reset the right-push on mobile so it centers properly */
          .hero-right-col { margin-left: 0 !important; width: 100% !important; }
        }
      `}} />
      
      <div className="grid-lines" />

      <div className="hero-grid">
        
        {/* LEFT COLUMN: THE PITCH */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', zIndex: 2 }}>
          
          <div className="hero-fade-in" style={{ 
            backgroundColor: 'rgba(93, 211, 182, 0.1)', color: 'var(--accent)', 
            padding: '8px 16px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 500,
            marginBottom: '20px', border: '1px solid rgba(93, 211, 182, 0.2)', display: 'flex', alignItems: 'center', gap: '8px'
          }}>
            <span>✦</span> Yeni Nesil Web Ajansı
          </div>

          <h1 className="hero-fade-in hero-headline">
            {/* Added whiteSpace: 'nowrap' to force it to stay on one line */}
            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>Yeni nesil markalar için</span>
            
            <div style={{ 
              color: 'var(--text-muted)', height: '1.15em', lineHeight: '1.15em', 
              overflow: 'hidden', display: 'block', position: 'relative' 
            }}>
              <div ref={rollRef} style={{ display: 'flex', flexDirection: 'column' }}>
                {phrases.map((phrase, i) => (
                  <div key={i} style={{ height: '1.15em', display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    {phrase}
                  </div>
                ))}
                <div style={{ height: '1.15em', display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                  {phrases[0]}
                </div>
              </div>
            </div>
            
            <span style={{ display: 'block' }}>web siteleri.</span>
          </h1>

          <p className="hero-fade-in" style={{ 
            fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '480px', lineHeight: 1.6, marginBottom: '30px' 
          }}>
            Büyüyen girişimler için dijital dünyada fark yaratan çözümler. 
            Sizi profesyonel gösterecek, SEO uyumlu ve yüksek dönüşüm odaklı sistemler tasarlıyor ve kodluyoruz.
          </p>

          <a className="hero-fade-in" href="#contact" style={{
            backgroundColor: 'var(--accent)', color: '#111111', padding: '16px 32px', borderRadius: '8px',
            fontSize: '1.1rem', fontWeight: 700, display: 'inline-block', marginBottom: '30px',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease', boxShadow: '0 4px 25px rgba(93, 211, 182, 0.25)'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Ücretsiz Görüşme Ayarla
          </a>

          <div className="hero-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Modern ve premium tasarım dili
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Hızlı süreç ve kusursuz kodlama
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Kolay yönetim ve güncelleme
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: THE LAPTOP, TABS & OVERFLOWING ROCKET */}
        {/* Pushed further right with marginLeft */}
        <div className="hero-fade-in hero-right-col" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 2, marginLeft: '4vw', width: '105%' }}>
          
          <div className="hero-laptop-container">
            {/* Base Glow Effect Behind Laptop */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(93,211,182,0.15) 0%, rgba(17,17,17,0) 70%)',
              filter: 'blur(50px)', zIndex: 0
            }} />

            {/* Laptop Base Screens */}
            <Image src="/mac dev.avif" alt="Design Interface" fill priority sizes="(max-width: 960px) 100vw, 60vw"
              style={{ objectFit: 'contain', opacity: activeTab === 'design' ? 1 : 0, transition: 'opacity 0.5s ease-in-out', zIndex: 1 }} />
            
            <Image src="/mac des.avif" alt="Code Interface" fill sizes="(max-width: 960px) 100vw, 60vw"
              style={{ objectFit: 'contain', opacity: activeTab === 'develop' ? 1 : 0, transition: 'opacity 0.5s ease-in-out', zIndex: 1 }} />
            
            <Image src="/mac.avif" alt="Launch Interface" fill sizes="(max-width: 960px) 100vw, 60vw"
              style={{ objectFit: 'contain', opacity: activeTab === 'launch' ? 1 : 0, transition: 'opacity 0.5s ease-in-out', zIndex: 1 }} />

            {/* OVERFLOWING ROCKET & SMOKE LAYER */}
            <div style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              pointerEvents: 'none', zIndex: 5, overflow: 'visible',
              visibility: activeTab === 'launch' ? 'visible' : 'hidden' 
            }}>
               
               {/* Wide Smoke */}
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img className="smoke-2" src="/smoke2.avif" alt="Wide Smoke" style={{ 
                 position: 'absolute', bottom: '-15%', left: '50%', width: '140%', opacity: 0, objectFit: 'contain'
               }} />

               {/* Central Burst Smoke */}
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img className="smoke-1" src="/smoke.avif" alt="Smoke Burst" style={{ 
                 position: 'absolute', bottom: '-8%', left: '50%', width: '100%', opacity: 0, objectFit: 'contain'
               }} />
               
               {/* Rocket (Lowered the bottom percentage) */}
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img className="rocket-element" src="/rocket.avif" alt="Rocket" style={{ 
                 position: 'absolute', bottom: '12%', left: '50%', width: '28%', opacity: 0, objectFit: 'contain' 
               }} />
            </div>

          </div>

          {/* Interactive Tabs */}
          <div className="hero-tabs" style={{ 
            display: 'flex', gap: '8px', marginTop: '10px', 
            backgroundColor: 'rgba(255,255,255,0.03)', padding: '6px', 
            borderRadius: '12px', border: '1px solid var(--border)', zIndex: 10, backdropFilter: 'blur(10px)'
          }}>
            <button onClick={() => setActiveTab('design')} style={{
              background: activeTab === 'design' ? 'var(--text)' : 'transparent',
              color: activeTab === 'design' ? 'var(--bg)' : 'var(--text-muted)',
              border: 'none', padding: '8px 20px', borderRadius: '8px',
              fontSize: '0.85rem', fontWeight: activeTab === 'design' ? 600 : 400, cursor: 'pointer', transition: 'all 0.3s'
            }}>✦ Tasarım</button>
            <button onClick={() => setActiveTab('develop')} style={{
              background: activeTab === 'develop' ? 'var(--text)' : 'transparent',
              color: activeTab === 'develop' ? 'var(--bg)' : 'var(--text-muted)',
              border: 'none', padding: '8px 20px', borderRadius: '8px',
              fontSize: '0.85rem', fontWeight: activeTab === 'develop' ? 600 : 400, cursor: 'pointer', transition: 'all 0.3s'
            }}>&lt;/&gt; Yazılım</button>
            <button onClick={() => setActiveTab('launch')} style={{
              background: activeTab === 'launch' ? 'var(--text)' : 'transparent',
              color: activeTab === 'launch' ? 'var(--bg)' : 'var(--text-muted)',
              border: 'none', padding: '8px 20px', borderRadius: '8px',
              fontSize: '0.85rem', fontWeight: activeTab === 'launch' ? 600 : 400, cursor: 'pointer', transition: 'all 0.3s'
            }}>🚀 Lansman</button>
          </div>

        </div>
      </div>
    </section>
  );
}