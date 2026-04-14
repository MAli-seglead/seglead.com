"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: "01",
    title: "Marka Kimliği",
    desc: "Dijital varlığınızı mühendislik disipliniyle estetize ediyoruz. Karmaşadan uzak, net ve premium bir algı yaratıyoruz.",
  },
  {
    id: "02",
    title: "Kullanıcı Deneyimi",
    desc: "Ziyaretçi güveni ile kalite arasındaki boşluğu doldurarak, pürüzsüz bir dönüşüm mimarisi inşa ediyoruz.",
  },
  {
    id: "03",
    title: "Performans Mimarisi",
    desc: "Next.js 16 ve modern tech-stack ile milisaniyeler içinde yanıt veren, sarsılmaz yapılar kuruyoruz.",
  },
  {
    id: "04",
    title: "Ölçeklenebilir Kod",
    desc: "Gelecekteki büyümenizi bugünden kodluyoruz. Sisteminizi her an yeni entegrasyonlara hazır tutuyoruz.",
  },
];

export default function ValueProp() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted || !sectionRef.current) return;

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      gsap.to(".vp-bg-title", {
        xPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      mm.add("(min-width: 769px)", () => {
        gsap.from(".vp-grid-card", {
          y: 28,
          opacity: 0,
          stagger: 0.12,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".vp-grid-container",
            start: "top 82%",
            once: true,
          },
        });
      });

      mm.add("(max-width: 768px)", () => {
        gsap.from(".vp-grid-card", {
          y: 36,
          opacity: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".vp-grid-container",
            start: "top 88%",
            once: true,
          },
        });
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, [hasMounted]);

  if (!hasMounted) return null;

  return (
    <section ref={sectionRef} className="vp-modern-section">
      <div className="vp-bg-title">QUALITY • ENGINEERING • VISION • STANDARDS •</div>

      <div className="vp-content">
        <div className="vp-header">
          <div className="lux-tag">✦ DEĞERLERİMİZ</div>
          <h2 className="lux-h2">
            Vizyonunuzu <br />
            <span>Kodluyoruz.</span>
          </h2>
        </div>

        <div className="vp-grid-container">
          {features.map((feature) => (
            <article key={feature.id} className="vp-grid-card">
              <div className="card-top">
                <span className="card-index">{feature.id}</span>
                <div className="card-glow" />
              </div>

              <h3 className="card-h3">{feature.title}</h3>
              <p className="card-p">{feature.desc}</p>
              <div className="card-line" />
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .vp-modern-section {
          position: relative;
          overflow: hidden;
          min-height: auto;
          background-color: var(--bg);
          padding: 140px 5vw;
        }

        .vp-bg-title {
          position: absolute;
          top: 12%;
          left: 0;
          font-size: 16vw;
          line-height: 0.9;
          font-weight: 800;
          letter-spacing: -0.05em;
          color: #fff;
          opacity: 0.02;
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }

        .vp-content {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
        }

        .vp-header {
          margin-bottom: 68px;
          max-width: 760px;
        }

        .lux-tag {
          margin-bottom: 18px;
          color: var(--accent);
          font-size: 0.74rem;
          letter-spacing: 0.45em;
        }

        .lux-h2 {
          margin: 0;
          color: var(--text);
          font-size: clamp(2.6rem, 6vw, 4.8rem);
          font-weight: 400;
          line-height: 0.96;
          letter-spacing: -0.05em;
        }

        .lux-h2 span {
          color: var(--accent);
        }

        .vp-grid-container {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
        }

        .vp-grid-card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 360px;
          padding: 42px 32px;
          background: rgba(255, 255, 255, 0.015);
          border: 1px solid var(--border);
          background: rgba(0, 0, 0, 0.55);
          transition:
            border-color 0.35s ease,
            background 0.35s ease,
            transform 0.35s ease;
        }

        .vp-grid-card:hover {
          border-color: rgba(93, 211, 182, 0.3);
          background: rgba(255, 255, 255, 0.025);
          transform: translateY(-4px);
        }

        .card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 34px;
        }

        .card-index {
          color: var(--accent);
          font-family: monospace;
          font-size: 1.05rem;
          letter-spacing: 0.04em;
        }

        .card-glow {
          width: 42px;
          height: 1px;
          background: var(--accent);
          opacity: 0.28;
        }

        .card-h3 {
          margin: 0 0 18px;
          color: #fff;
          font-size: 1.7rem;
          line-height: 1.08;
          font-weight: 500;
          letter-spacing: -0.03em;
        }

        .card-p {
          margin: 0;
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.7;
        }

        .card-line {
          width: 0%;
          height: 2px;
          margin-top: auto;
          background: var(--accent);
          transition: width 0.55s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .vp-grid-card:hover .card-line {
          width: 100%;
        }

        @media (max-width: 1200px) {
          .vp-modern-section {
            padding: 120px 5vw;
          }

          .vp-grid-container {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .vp-grid-card {
            min-height: 320px;
          }
        }

        @media (max-width: 768px) {
          .vp-modern-section {
            padding: 100px 5vw;
          }

          .vp-bg-title {
            display: none;
          }

          .vp-header {
            margin-bottom: 42px;
          }

          .lux-tag {
            font-size: 0.72rem;
            letter-spacing: 0.32em;
            margin-bottom: 16px;
          }

          .lux-h2 {
            font-size: 2.25rem;
            line-height: 0.98;
          }

          .vp-grid-container {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .vp-grid-card {
            min-height: auto;
            padding: 32px 24px;
            transform: none;
          }

          .vp-grid-card:hover {
            transform: none;
          }

          .card-top {
            margin-bottom: 24px;
          }

          .card-h3 {
            font-size: 1.45rem;
            margin-bottom: 14px;
          }

          .card-p {
            font-size: 0.98rem;
          }

          .card-line {
            width: 18%;
            margin-top: 22px;
          }

          .vp-grid-card:active .card-line {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}