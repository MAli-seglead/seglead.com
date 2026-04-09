"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Search, PenTool, MessageSquare, Rocket, Activity } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Process() {
  const componentRef = useRef(null);
  const containerRef = useRef(null);

  const processData = [
    { number: "01", title: "EVALUATE", detail: "// ANALYZE & AUDIT", icon: <Search size={40} />, desc: "Mevcut dijital varlığınızı ve rakiplerinizi analiz ederek yol haritamızı belirliyoruz." },
    { number: "02", title: "DISCUSS", detail: "// STRATEGY & SYNC", icon: <MessageSquare size={40} />, desc: "Fikirlerinizi teknik imkanlarla harmanlıyor, her adımda şeffaf bir iletişim kuruyoruz." },
    { number: "03", title: "DESIGN", detail: "// CREATE & PROTOTYPE", icon: <PenTool size={40} />, desc: "Kullanıcı deneyimini merkeze alan, modern ve yüksek performanslı arayüzler tasarlıyoruz." },
    { number: "04", title: "DEPLOY", detail: "// LAUNCH & SCALE", icon: <Rocket size={40} />, desc: "Sitenizi Vercel altyapısıyla yayına alıyor, global hız standartlarını yakalıyoruz." }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".process-stack-item");
      
      // Create one timeline for the entire scroll sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          // We make the scroll 400% of the viewport height (100% per card)
          end: () => `+=${cards.length * 100}%`, 
          pin: true,
          scrub: 1, // Smoothness of the catch-up
          pinSpacing: true,
          invalidateOnRefresh: true,
        }
      });

      // Animate cards 2, 3, and 4
      cards.forEach((card: any, i: number) => {
        if (i === 0) return; // First card stays put

        tl.fromTo(card, 
          { y: "100vh" }, // Use vh units for cleaner browser handling
          { 
            y: "0vh", 
            ease: "none" 
          }, 
          i * 1 // This spaces them out perfectly in the timeline
        );
      });

      // Simple header entrance
      gsap.fromTo(".process-main-char", 
        { opacity: 0, y: 30 }, 
        { 
          opacity: 1, y: 0, stagger: 0.02,
          scrollTrigger: { trigger: ".process-main-h2", start: "top 90%" }
        }
      );

    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={componentRef} style={{ width: '100%', backgroundColor: '#111111' }}>
      
      {/* 1. Static Header (Doesn't Pin) */}
      <div style={{ padding: '160px 5vw 100px 5vw' }}>
        <div style={{ width: '100%', height: '1px', backgroundColor: '#262626', marginBottom: '80px' }}></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <Activity size={100} strokeWidth={0.5} style={{ opacity: 0.4 }} className="rotating-icon" />
          <div style={{ textAlign: 'right' }}>
            <h2 className="process-main-h2" style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', fontWeight: 300, textTransform: 'uppercase', lineHeight: 1 }}>
              <span className="process-main-char" style={{ display: 'inline-block' }}>KUSURSUZ </span>
              <br />
              <span className="process-main-char" style={{ display: 'inline-block', color: '#5DD3B6' }}>IŞLETIŞ SÜRECI.</span>
            </h2>
          </div>
        </div>
      </div>

      {/* 2. Pinned Stacking Area */}
      <div ref={containerRef} className="process-stack-container" style={{ 
        position: 'relative', 
        height: '100vh', 
        width: '100%', 
        overflow: 'hidden',
        backgroundColor: '#111111' 
      }}>
        {processData.map((item, i) => (
          <div 
            key={i} 
            className="process-stack-item" 
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100vh',
              width: '100%',
              backgroundColor: '#111111', // Solid BG to cover previous card
              borderTop: '1px solid #262626',
              padding: '100px 5vw',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              zIndex: i + 1,
              willChange: 'transform'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'clamp(100px, 15vw, 200px) 1fr', gap: '40px' }}>
              <div style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: 300, opacity: 0.1 }}>
                {item.number}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '60px' }}>
                <div>
                  <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, marginBottom: '20px' }}>{item.title}</h3>
                  <p style={{ color: '#5DD3B6', fontSize: '0.8rem', letterSpacing: '0.2em' }}>{item.detail}</p>
                </div>
                <div>
                  <p style={{ color: 'rgba(255, 255, 227, 0.6)', fontSize: '1.1rem', lineHeight: 1.6 }}>{item.desc}</p>
                  <div style={{ marginTop: '40px', opacity: 0.3 }}>{item.icon}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}