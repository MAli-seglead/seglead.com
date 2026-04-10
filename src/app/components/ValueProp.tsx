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
    desc: "Ziyaretçi güveni ile kalite arasındaki boşluğu doldurarak, pürüzsüz bir dönüşüm mimarisi inşa ediyoruz. Her tıklama amaca hizmet eder." 
  },
  { 
    id: "03", 
    title: "Performans Mimari", 
    desc: "Next.js 16 ve modern tech-stack ile milisaniyeler içinde yanıt veren, sarsılmaz yapılar. Hız, lüksün dijital karşılığıdır." 
  },
  { 
    id: "04", 
    title: "Ölçeklenebilir Kod", 
    desc: "Gelecekteki büyümenizi bugünden kodluyoruz. Sisteminizi her an büyümeye ve yeni entegrasyonlara hazır tutuyoruz." 
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

    const ctx = gsap.context(() => {
      // Fade in the sticky header
      gsap.fromTo(".vp-header-content", 
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );

      // Smooth scroll reveal for each card
      gsap.utils.toArray(".vp-card").forEach((card: any) => {
        gsap.fromTo(card, 
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [hasMounted]);

  if (!hasMounted) return null;

  return (
    <section 
      ref={containerRef} 
      className="vp-section"
      style={{ position: 'relative', width: '100%' }}
    >
      {/* Inheriting your EXACT global grid lines! 
        This guarantees perfect alignment with the Hero section.
      */}
      <div className="grid-lines" />

      {/* RESPONSIVE STYLES */}
      <style dangerouslySetInnerHTML={{__html: `
        .vp-section {
          padding: 150px 5vw;
          max-width: 1600px;
          margin: 0 auto;
        }
        .vp-grid {
          display: flex;
          align-items: flex-start;
          gap: 5vw;
          position: relative;
          z-index: 2;
        }
        .vp-left {
          width: 40%;
          position: sticky;
          top: 200px; /* Adjust this to control where it sticks */
        }
        .vp-right {
          width: 60%;
          display: flex;
          flex-direction: column;
          gap: 40px;
          margin-top: 100px;
          padding-bottom: 100px;
        }
        .vp-card {
          background-color: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(12px);
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 60px 50px;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .vp-card:hover {
          border-color: rgba(93, 211, 182, 0.3);
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
        
        @media (max-width: 960px) {
          .vp-section { padding: 100px 5vw; }
          .vp-grid { flex-direction: column; gap: 60px; }
          .vp-left { width: 100%; position: relative; top: 0; }
          .vp-right { width: 100%; margin-top: 0; padding-bottom: 0; }
          .vp-card { padding: 40px 30px; }
        }
      `}} />

      <div className="vp-grid">
        
        {/* LEFT COLUMN: STICKY HEADER */}
        <div className="vp-left">
          <div className="vp-header-content">
            {/* Reused your exact badge style from the Hero */}
            <div style={{ 
              backgroundColor: 'rgba(93, 211, 182, 0.1)', color: 'var(--accent)', 
              padding: '8px 16px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 500,
              marginBottom: '20px', border: '1px solid rgba(93, 211, 182, 0.2)', display: 'inline-flex', alignItems: 'center', gap: '8px'
            }}>
              <span>✦</span> DEĞER ÖNERİMİZ
            </div>

            <h2 style={{ 
              fontSize: 'clamp(2.4rem, 4vw, 4rem)', 
              lineHeight: 1.1, 
              letterSpacing: '-0.03em', 
              color: 'var(--text)', 
              fontWeight: 500 
            }}>
              Estetik ve mühendisliğin <br />
              <span style={{ color: 'var(--accent)' }}>kesişim noktası.</span>
            </h2>
          </div>
        </div>

        {/* RIGHT COLUMN: SCROLLING CARDS */}
        <div className="vp-right">
          {features.map((feature, i) => (
            <div key={i} className="vp-card">
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <span style={{ 
                  color: 'var(--bg)', 
                  backgroundColor: 'var(--accent)', 
                  padding: '4px 10px', 
                  borderRadius: '6px', 
                  fontFamily: 'monospace', 
                  fontSize: '0.8rem', 
                  fontWeight: 700 
                }}>
                  {feature.id}
                </span>
              </div>
              
              <h3 style={{ 
                color: 'var(--text)', 
                fontSize: '2rem', 
                fontWeight: 500, 
                marginBottom: '15px', 
                letterSpacing: '-0.02em' 
              }}>
                {feature.title}
              </h3>
              
              <p style={{ 
                color: 'var(--text-muted)', 
                fontSize: '1.1rem', 
                lineHeight: 1.6, 
                maxWidth: '90%' 
              }}>
                {feature.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}