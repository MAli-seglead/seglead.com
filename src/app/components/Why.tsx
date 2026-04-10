"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    id: "01",
    label: "ENGINEERING",
    title: "Teknik Kusursuzluk",
    desc: "Next.js 16 ve modern animasyon kütüphaneleriyle, sadece güzel görünen değil, saniyeler içinde yüklenen performans canavarları inşa ediyoruz."
  },
  {
    id: "02",
    label: "STRATEGY",
    title: "Veri Odaklı Tasarım",
    desc: "Tasarım kararlarımızı estetiğin ötesine taşıyoruz. Kullanıcı alışkanlıklarını analiz ederek dönüşüm oranlarınızı maksimize eden yapılar kuruyoruz."
  },
  {
    id: "03",
    label: "EXPERIENCE",
    title: "10 Yıllık Vizyon",
    desc: "Yılların getirdiği tecrübeyi, 2026'nın en güncel teknolojileriyle harmanlayarak markanızı pazarın en üst ligine taşıyacak dijital imzayı atıyoruz."
  }
];

export default function Why() {
  const [hasMounted, setHasMounted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".why-item");
      
      items.forEach((item: any) => {
        const line = item.querySelector(".draw-line");
        const content = item.querySelector(".item-inner");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 40%",
            scrub: 1
          }
        });

        tl.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 1.5, ease: "power2.inOut" })
          .fromTo(content, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1 }, "-=1");
      });
    }, containerRef);

    return () => ctx.revert();
  }, [hasMounted]);

  if (!hasMounted) return <section style={{ minHeight: '80vh', backgroundColor: 'var(--bg)' }} />;

  return (
    <section ref={containerRef} style={{ backgroundColor: 'var(--bg)', padding: '160px 5vw', position: 'relative' }}>
      <div className="grid-lines" style={{ opacity: 0.1 }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '100px' }} className="mobile-stack">
        
        {/* LEFT: PERSISTENT STATEMENT */}
        <div style={{ position: 'sticky', top: '15vh', height: 'fit-content' }}>
          <span style={{ color: 'var(--accent)', letterSpacing: '0.6em', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' }}>THE_DIFFERENCE</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--text)', fontWeight: 500, lineHeight: 1.1, marginTop: '20px' }}>
            Neden <br /> <span style={{ color: 'var(--accent)' }}>Seglead?</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginTop: '30px', maxWidth: '400px', lineHeight: 1.6 }}>
            Dijital dünyada standartları biz belirliyoruz. Sadece bir ajans değil, teknoloji ortağınızız.
          </p>
        </div>

        {/* RIGHT: TECHNICAL REASONS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {reasons.map((reason, i) => (
            <div key={i} className="why-item" style={{ padding: '60px 0', position: 'relative' }}>
              {/* Plotter Line Animation */}
              <div className="draw-line" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', backgroundColor: 'var(--border)', transformOrigin: 'left' }} />
              
              <div className="item-inner" style={{ display: 'flex', gap: '40px' }}>
                <span style={{ fontFamily: 'monospace', color: 'var(--accent)', fontSize: '1.1rem', fontWeight: 700 }}>{reason.id}</span>
                
                <div style={{ flexGrow: 1 }}>
                  <span style={{ color: 'var(--accent)', fontSize: '0.7rem', letterSpacing: '0.3em', fontWeight: 700 }}>{reason.label}</span>
                  <h3 style={{ fontSize: '2rem', color: 'var(--text)', margin: '15px 0', fontWeight: 500 }}>{reason.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>{reason.desc}</p>
                </div>
              </div>
            </div>
          ))}
          <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--border)' }} />
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 960px) {
          .mobile-stack { grid-template-columns: 1fr !important; gap: 60px !important; }
          .mobile-stack > div:first-child { position: relative !important; top: 0 !important; }
          .why-item { padding: 40px 0 !important; }
        }
      `}} />
    </section>
  );
}