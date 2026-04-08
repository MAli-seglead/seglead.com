"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollReveal from '@/app/components/ScrollReveal';
import { Sparkles, Zap, ArrowUpRight, Smartphone, Activity } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Services() {
  const serviceData = [
    { 
      title: "HIZLI KURULUM", 
      detail: "// Performans Odaklı Altyapı", 
      icon: <Zap size={32} />, 
      desc: "Next.js altyapısı ile web siteniz milisaniyeler içinde yüklenir. Google PageSpeed puanlarını %100'e taşıyoruz.", 
      delay: 0.1 
    },
    { 
      title: "MOBİL DENEYİM", 
      detail: "// Kusursuz Kullanıcı Akışı", 
      icon: <Smartphone size={32} />, 
      desc: "Trafiğinizin çoğu mobilden gelir. Sitenizi bir web sayfasından çok, akıcı bir uygulama gibi hissettiriyoruz.", 
      delay: 0.2 
    },
    { 
      title: "KOLAY YÖNETİM", 
      detail: "// Headless CMS Entegrasyonu", 
      icon: <Sparkles size={32} />, 
      desc: "Headless CMS sistemlerimizle içeriğinizi saniyeler içinde güncelleyin. Teknik bilgi gerektirmeyen basit bir panel.", 
      delay: 0.3 
    }
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".service-main-h2",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

    // Stage 1: The Letter Roll (Troll) Effect
    tl.fromTo(".service-main-char", 
      { 
        opacity: 0, 
        y: 50,
        rotateX: -90 
      }, 
      { 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        duration: 0.8, 
        stagger: 0.02, 
        ease: "power4.out" 
      }
    );

    // Stage 2: Paragraph Slide-up
    tl.fromTo(".service-seo-p", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, 
      "-=0.4"
    );
  }, []);

  const line1 = "DIJITALDE";
  const line2 = "TAM HAKIMIEYT.";

  return (
    <section id="services" style={{ padding: '160px 5vw', width: '100%', margin: '0 auto', position: 'relative' }}>
      
      {/* Top Border Line */}
      <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--border)', marginBottom: '80px' }}></div>

      {/* Header Grid */}
      <div className="services-header-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '80px',
        width: '100%',
        marginBottom: '120px',
        alignItems: 'center',
        position: 'relative'
      }}>
        
        {/* Left Visual: Rotating Activity Icon */}
        <div className="rotating-icon-container mobile-bg-icon">
          <div className="hide-on-mobile" style={{ display: 'flex', gap: '16px', alignItems: 'center', fontSize: '0.75rem', letterSpacing: '0.1em', fontWeight: 600, color: 'var(--accent)', marginBottom: '32px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00FF00', display: 'inline-block' }}></span>
            AVAILABILITY: Q2 2026
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <div className="rotating-icon" style={{ 
              width: '240px', height: '240px', border: '1px solid var(--border)', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <Activity size={100} strokeWidth={0.5} style={{ opacity: 0.6 }} />
            </div>
          </div>
        </div>

        {/* Right Content: Animated Heading and P */}
        <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', position: 'relative', zIndex: 2 }}>
          <h2 className="service-main-h2" style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 7rem)', 
            fontWeight: 300, 
            lineHeight: 0.9, 
            textTransform: 'uppercase',
            perspective: '1000px'
          }}>
            <div style={{ overflow: 'hidden' }}>
              {line1.split("").map((char, i) => (
                <span key={i} className="service-main-char" style={{ display: 'inline-block', whiteSpace: 'pre', fontWeight: 300 }}>{char}</span>
              ))}
            </div>
            <div style={{ overflow: 'hidden', color: 'var(--text-muted)' }}>
              {line2.split("").map((char, i) => (
                <span key={i} className="service-main-char" style={{ display: 'inline-block', whiteSpace: 'pre', fontWeight: 300 }}>{char}</span>
              ))}
            </div>
          </h2>
          
          <p className="service-seo-p" style={{ 
            fontSize: 'clamp(1rem, 1.2vw, 1.4rem)', 
            color: 'var(--text-muted)', 
            lineHeight: 1.6, 
            maxWidth: '600px', 
            marginTop: '32px',
            opacity: 0 
          }}>
            Modern işletmeler için SEO uyumlu, yüksek performanslı ve dönüşüm odaklı dijital deneyimler inşa ediyoruz. Markanızı dijitalin zirvesine taşıyın.
          </p>
        </div>
      </div>

      {/* Services Feature Grid */}
      <div className="border-t border-l" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))', 
        width: '100%' 
      }}>
        {serviceData.map((item, i) => (
          <div key={i} className="service-card border-b border-r" style={{ padding: '80px 40px', minHeight: '360px', position: 'relative', cursor: 'pointer' }}>
            <div style={{ marginBottom: '24px' }}>{item.icon}</div>
            
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 300, textTransform: 'uppercase' }}>
                {item.title}
              </h3>
              <div className="hover-detail">
                {item.detail}
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>{item.desc}</p>
            
            <ArrowUpRight className="arrow-icon" size={24} style={{ position: 'absolute', top: '30px', right: '30px', opacity: 0.2, transition: '0.4s' }} />
          </div>
        ))}
      </div>
    </section>
  );
}