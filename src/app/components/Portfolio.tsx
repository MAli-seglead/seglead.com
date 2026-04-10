"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "VANGUARD",
    category: "E-Commerce / UIUX",
    year: "2026",
    desc: "Yeni nesil alışveriş deneyimini minimalist bir arayüzle buluşturan, yüksek dönüşüm odaklı dijital mağaza tasarımı. Markanın global pazar payını artırmak için özel olarak optimize edilmiştir.",
    link: "https://vanguard-demo.com",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2299&auto=format&fit=crop",
  },
  {
    title: "AETHER",
    category: "SaaS / Fintech",
    year: "2025",
    desc: "Finansal verileri sanata dönüştüren karmaşık dashboard yapıları. Kullanıcı dostu veri görselleştirme teknikleriyle işlem hacmini ve kullanıcı sadakatini en üst seviyeye taşıyan mühendislik harikası.",
    link: "https://aether-app.com",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2264&auto=format&fit=crop",
  },
  {
    title: "NEXUS",
    category: "Architecture / Web",
    year: "2026",
    desc: "Modern mimari ofisler için tasarlanan interaktif portfolyo sistemi. Projelerin derinliğini hissettiren scroll tabanlı animasyonlar ve tipografi odaklı sunum diliyle fark yaratan bir dijital vitrin.",
    link: "https://nexus-arch.com",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2340&auto=format&fit=crop",
  }
];

export default function Portfolio() {
  const [hasMounted, setHasMounted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const ctx = gsap.context(() => {
      const rowItems = gsap.utils.toArray(".project-row");

      rowItems.forEach((row: any) => {
        const imgInner = row.querySelector(".img-inner");
        const title = row.querySelector(".project-title");
        const year = row.querySelector(".project-year");
        const details = row.querySelector(".project-details");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            end: "bottom 10%",
            scrub: 1,
          }
        });

        // The "Warp" Effect
        tl.fromTo(imgInner, 
          { clipPath: "inset(45% 0% 45% 0%)", scale: 1.3 }, 
          { clipPath: "inset(0% 0% 0% 0%)", scale: 1, ease: "power2.inOut" }
        );

        // Parallax for text layers
        tl.fromTo(title, { y: 80, opacity: 0 }, { y: 0, opacity: 1 }, 0.2);
        tl.fromTo(details, { y: 40, opacity: 0 }, { y: 0, opacity: 1 }, 0.3);
        tl.fromTo(year, { opacity: 0, scale: 0.8 }, { opacity: 0.05, scale: 1 }, 0);
      });
    }, containerRef);

    return () => ctx.revert();
  }, [hasMounted]);

  if (!hasMounted) return <section style={{ minHeight: '100vh', backgroundColor: 'var(--bg)' }} />;

  return (
    <section ref={containerRef} style={{ backgroundColor: 'var(--bg)', padding: '120px 0', position: 'relative' }}>
      <div className="grid-lines" style={{ opacity: 0.1 }} />
      
      <div style={{ padding: '0 5vw', marginBottom: '8vh' }}>
        <span style={{ color: 'var(--accent)', letterSpacing: '0.6em', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase' }}>
          Selected Works
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {projects.map((project, i) => (
          <div key={i} className="project-row" style={{ 
            width: '100%', 
            minHeight: '110vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            position: 'relative',
            padding: '0 5vw',
            overflow: 'hidden',
            borderBottom: '1px solid var(--border)'
          }}>
            
            {/* Massive Parallax Watermark */}
            <div className="project-year" style={{ 
              position: 'absolute', fontSize: '35vw', fontWeight: 900, 
              color: 'var(--text)', opacity: 0, left: '-5%', bottom: '-5%', 
              pointerEvents: 'none', zIndex: 0, lineHeight: 1
            }}>
              {project.year}
            </div>

            <div style={{ width: '100%', maxWidth: '1300px', zIndex: 1 }}>
              
              {/* Warp Image Reveal */}
              <div className="img-inner" style={{ 
                position: 'relative', width: '100%', aspectRatio: '16/8', 
                overflow: 'hidden', borderRadius: '2px', border: '1px solid var(--border)'
              }}>
                <Image 
                  src={project.img} alt={project.title} fill 
                  style={{ objectFit: 'cover', filter: 'grayscale(100%) contrast(1.1)' }} 
                />
              </div>

              {/* Info & Description Layer */}
              <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px' }} className="mobile-stack">
                
                <div>
                  <h3 className="project-title" style={{ 
                    fontSize: 'clamp(3rem, 8vw, 8rem)', fontWeight: 500, 
                    color: 'var(--text)', lineHeight: 0.9, letterSpacing: '-0.04em'
                  }}>
                    {project.title}
                  </h3>
                </div>

                <div className="project-details" style={{ display: 'flex', flexDirection: 'column', gap: '25px', justifyContent: 'flex-end', paddingBottom: '10px' }}>
                  <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '450px' }}>
                    {project.desc}
                  </p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                    <span style={{ color: 'var(--accent)', fontFamily: 'monospace', fontSize: '1rem', letterSpacing: '0.1em' }}>
                      {project.category}
                    </span>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ 
                        display: 'flex', alignItems: 'center', gap: '10px', 
                        color: 'var(--text)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700 
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                      onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text)')}
                    >
                      LIVE SITE 
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 960px) {
          .mobile-stack { grid-template-columns: 1fr !important; gap: 30px !important; }
          .project-title { font-size: 4rem !important; }
          .project-row { min-height: 80vh !important; }
          .project-year { font-size: 50vw !important; }
          .img-inner { aspectRatio: 16/10 !important; }
        }
      `}} />
    </section>
  );
}