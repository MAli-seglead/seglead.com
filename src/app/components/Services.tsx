"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: "01", title: "Strategic Alignment", desc: "Markanızın dijital DNA'sını tanımlıyor, görsel dili derinlemesine stratejiyle birleştiriyoruz." },
  { num: "02", title: "High-Fidelity Engineering", desc: "Modern ve premium arayüzleri, her etkileşimde kaliteyi hissettiren bir titizlikle inşa ediyoruz." },
  { num: "03", title: "Performance Architecture", desc: "Next.js ile ışık hızında, SEO dostu ve kusursuz çalışan ölçeklenebilir altyapılar kodluyoruz." },
  { num: "04", title: "Global Deployment", desc: "Kapsamlı optimizasyonlardan sonra projenizi dünya sahnesine hazır halde teslim ediyoruz." }
];

export default function Blueprint() {
  const [hasMounted, setHasMounted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const ctx = gsap.context(() => {
      // 1. Animate the central spine line
      gsap.fromTo(".spine-line", 
        { scaleY: 0 },
        { 
          scaleY: 1, 
          ease: "none",
          scrollTrigger: {
            trigger: ".blueprint-container",
            start: "top center",
            end: "bottom center",
            scrub: 1
          }
        }
      );

      // 2. Animate each item as it enters view
      const items = gsap.utils.toArray(".process-item");
      items.forEach((item: any) => {
        gsap.fromTo(item, 
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "top 50%",
              scrub: 1,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [hasMounted]);

  if (!hasMounted) return <section style={{ minHeight: '60vh', backgroundColor: 'var(--bg)' }} />;

  return (
    <section ref={containerRef} style={{ backgroundColor: 'var(--bg)', padding: '100px 5vw', position: 'relative', overflow: 'hidden' }}>
      <div className="grid-lines" style={{ opacity: 0.1 }} />

      <div className="blueprint-container" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        
        {/* SECTION HEADER */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
             <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--accent)' }} />
             <span style={{ color: 'var(--accent)', letterSpacing: '0.4em', fontSize: '0.7rem', fontWeight: 500, textTransform: 'uppercase' }}>Methodology</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 500, color: 'var(--text)', lineHeight: 1.1 }}>
            Kusursuz Süreç, <br /> Üstün Sonuç.
          </h2>
        </div>

        {/* THE SPINE (Vertical Architectural Line) */}
        <div className="spine-line" style={{ 
          position: 'absolute', left: '20px', top: '180px', bottom: '0', 
          width: '1px', backgroundColor: 'var(--accent)', transformOrigin: 'top', 
          opacity: 0.2, zIndex: 0 
        }} />

        {/* PROCESS STEPS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', position: 'relative', zIndex: 1 }}>
          {steps.map((step, i) => (
            <div key={i} className="process-item" style={{ paddingLeft: '60px', position: 'relative' }}>
              
              {/* Dot on the spine */}
              <div style={{ 
                position: 'absolute', left: '15px', top: '8px', 
                width: '10px', height: '10px', borderRadius: '50%', 
                backgroundColor: 'var(--accent)', border: '4px solid var(--bg)' 
              }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '1rem', color: 'var(--accent)', opacity: 0.8 }}>
                  {step.num}
                </span>
                <h3 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 500, color: 'var(--text)' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '500px' }}>
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Responsive Styles for Desktop Re-alignment */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 960px) {
          .spine-line { left: 50% !important; }
          .process-item { 
            width: 50% !important; 
            padding-left: 0 !important;
            margin-bottom: 0 !important;
          }
          .process-item:nth-child(odd) { align-self: flex-start !important; padding-right: 80px !important; text-align: right !important; }
          .process-item:nth-child(even) { align-self: flex-end !important; padding-left: 80px !important; }
          
          .process-item:nth-child(odd) div[style*="left: 15px"] { left: auto !important; right: -5px !important; }
          .process-item:nth-child(even) div[style*="left: 15px"] { left: -5px !important; }
          
          .process-item:nth-child(odd) p { margin-left: auto !important; }
        }
      `}} />
    </section>
  );
}