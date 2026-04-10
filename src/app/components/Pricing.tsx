"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollReveal from "./ScrollReveal";

const packages = [
  {
    id: "01",
    tier: "STARTER",
    price: "5",
    desc: "Hızlı ve etkili başlangıç. Performans odaklı tek sayfa mimarisi.",
    features: ["Strateji Oturumu", "Premium Tasarım", "Next.js Geliştirme", "7 Günde Teslim"]
  },
  {
    id: "02",
    tier: "PROFESSIONAL",
    price: "15",
    desc: "Büyüyen markalar için tam ekosistem. Gelişmiş animasyonlar ve CMS.",
    features: ["UX Araştırması", "Çok Sayfalı Yapı", "GSAP Animasyonlar", "CMS Entegrasyonu"]
  },
  {
    id: "03",
    tier: "ENTERPRISE",
    price: "QUOTA",
    desc: "Sınır tanımayan vizyonlar. Özel yazılım ve yüksek mühendislik.",
    features: ["Full Branding", "Custom Yazılım", "3D Deneyimler", "Öncelikli Destek"]
  }
];

export default function Pricing() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section style={{ 
      minHeight: '100vh', 
      backgroundColor: 'var(--bg)', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '80px 5vw',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="grid-lines" style={{ opacity: 0.1 }} />

      <ScrollReveal direction="up">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ color: 'var(--accent)', letterSpacing: '0.5em', fontSize: '0.75rem', fontWeight: 700 }}>YATIRIM PLANI</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--text)', fontWeight: 500, marginTop: '15px' }}>
            Paketler
          </h2>
        </div>
      </ScrollReveal>

      <div style={{ 
        display: 'flex', 
        gap: '20px', 
        maxWidth: '1400px', 
        margin: '0 auto', 
        width: '100%',
        height: '600px'
      }} className="pricing-flex-container">
        
        {packages.map((pkg, i) => (
          <div 
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              flex: hoveredIndex === i ? 1.5 : 1,
              backgroundColor: hoveredIndex === i ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.01)',
              border: hoveredIndex === i ? '1px solid var(--accent)' : '1px solid var(--border)',
              borderRadius: '4px',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Top Meta */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
              <span style={{ fontFamily: 'monospace', color: 'var(--accent)', fontSize: '1.2rem' }}>{pkg.id}</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem', letterSpacing: '0.2em' }}>{pkg.tier}</span>
            </div>

            {/* Price Area */}
            <div style={{ marginBottom: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
                <h3 style={{ 
                  fontSize: hoveredIndex === i ? '5rem' : '4rem', 
                  color: 'var(--text)', 
                  fontWeight: 500, 
                  transition: 'font-size 0.6s ease',
                  lineHeight: 1
                }}>
                  {pkg.price}
                </h3>
                {pkg.price !== 'QUOTA' && <span style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>k+</span>}
              </div>
              <p style={{ 
                color: 'var(--text-muted)', 
                marginTop: '20px', 
                fontSize: '1rem', 
                lineHeight: 1.5,
                opacity: hoveredIndex === i ? 1 : 0.6,
                transition: 'opacity 0.6s ease'
              }}>
                {pkg.desc}
              </p>
            </div>

            {/* Features list */}
            <div style={{ flexGrow: 1, marginTop: '20px' }}>
              {pkg.features.map((f, j) => (
                <div key={j} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  marginBottom: '15px', 
                  fontSize: '0.9rem',
                  color: 'var(--text)',
                  opacity: hoveredIndex === i ? 1 : 0.4,
                  transition: 'opacity 0.6s ease'
                }}>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--accent)' }} />
                  {f}
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href="#contact" style={{
              marginTop: '30px',
              padding: '15px',
              textAlign: 'center',
              textDecoration: 'none',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              color: hoveredIndex === i ? '#111' : 'var(--accent)',
              backgroundColor: hoveredIndex === i ? 'var(--accent)' : 'transparent',
              border: '1px solid var(--accent)',
              transition: 'all 0.4s ease'
            }}>
              SEÇİMİ YAP
            </a>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 960px) {
          .pricing-flex-container { 
            flex-direction: column !important; 
            height: auto !important; 
            gap: 20px !important;
          }
          .pricing-flex-container > div {
            flex: none !important;
            width: 100% !important;
          }
          h3 { font-size: 3.5rem !important; }
        }
      `}} />
    </section>
  );
}