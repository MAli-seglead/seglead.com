"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    title: "VANGUARD",
    category: "E-Commerce / UIUX",
    year: "2026",
    desc: "Yeni nesil alışveriş deneyimini minimalist bir arayüzle buluşturan, yüksek dönüşüm odaklı dijital mağaza tasarımı.",
    link: "https://vanguard-demo.com",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2299&auto=format&fit=crop",
  },
  {
    title: "AETHER",
    category: "SaaS / Fintech",
    year: "2025",
    desc: "Finansal verileri sanata dönüştüren dashboard yapıları ve kullanıcı dostu veri görselleştirme deneyimi.",
    link: "https://aether-app.com",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2264&auto=format&fit=crop",
  },
  {
    title: "NEXUS",
    category: "Architecture / Web",
    year: "2026",
    desc: "Modern mimari ofisler için tasarlanan, tipografi ve scroll deneyimiyle öne çıkan interaktif portfolyo sistemi.",
    link: "https://nexus-arch.com",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2340&auto=format&fit=crop",
  },
];

export default function Portfolio() {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".project-row").forEach((row) => {
        const imgInner = row.querySelector(".img-inner");
        const title = row.querySelector(".project-title");
        const year = row.querySelector(".project-year");
        const details = row.querySelector(".project-details");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            end: "bottom 15%",
            scrub: 1,
          },
        });

        if (imgInner) {
          tl.fromTo(
            imgInner,
            { clipPath: "inset(45% 0% 45% 0%)", scale: 1.2 },
            { clipPath: "inset(0% 0% 0% 0%)", scale: 1, ease: "power2.inOut" }
          );
        }

        if (title) {
          tl.fromTo(title, { y: 70, opacity: 0 }, { y: 0, opacity: 1 }, 0.2);
        }

        if (details) {
          tl.fromTo(details, { y: 36, opacity: 0 }, { y: 0, opacity: 1 }, 0.28);
        }

        if (year) {
          tl.fromTo(year, { opacity: 0, scale: 0.9 }, { opacity: 0.045, scale: 1 }, 0);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="work"
      style={{
        backgroundColor: "var(--bg)",
        padding: "120px 0 90px",
        position: "relative",
      }}
    >
      <div className="grid-lines" style={{ opacity: 0.35 }} />

      <div className="portfolio-head">
        <span className="portfolio-kicker">Selected Works</span>
      </div>

      <div className="portfolio-list">
        {projects.map((project, i) => (
          <div key={i} className="project-row">
            <div className="project-year">{project.year}</div>

            <div className="project-shell">
              <div className="img-inner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  className="project-image"
                />
              </div>

              <div className="project-meta">
                <div className="project-title-wrap">
                  <h3 className="project-title">{project.title}</h3>
                </div>

                <div className="project-details">
                  <p className="project-desc">{project.desc}</p>

                  <div className="project-links">
                    <span className="project-category">{project.category}</span>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-link"
                    >
                      <span>LIVE SITE</span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="portfolio-footer">
        <a href="#contact" className="view-all-btn">
          <span>View All Works</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </div>

      <style jsx>{`
        .portfolio-head {
          padding: 0 var(--section-x);
          margin-bottom: 8vh;
        }

        .portfolio-kicker {
          color: var(--accent);
          letter-spacing: 0.6em;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .portfolio-list {
          display: flex;
          flex-direction: column;
        }

        .project-row {
          width: 100%;
          min-height: 100svh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 0 var(--section-x);
          overflow: visible;
          border-bottom: 1px solid var(--border);
        }

        .project-year {
          position: absolute;
          left: 0%;
          bottom: -4%;
          z-index: 0;
          pointer-events: none;
          font-size: 34vw;
          font-weight: 900;
          line-height: 0.86;
          color: var(--text);
          opacity: 0;
          user-select: none;
        }

        .project-shell {
          width: 100%;
          max-width: 1300px;
          position: relative;
          z-index: 1;
          padding-bottom: 48px;
        }

        .img-inner {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 8.6;
          overflow: hidden;
          border-radius: 4px;
          border: 1px solid var(--border);
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) contrast(1.1) brightness(0.9);
          transition: filter 0.6s ease, transform 0.6s ease;
        }

        .project-row:hover .project-image {
          filter: grayscale(0%) contrast(1.08) brightness(0.96);
          transform: scale(1.015);
        }

        .project-meta {
          margin-top: 76px;
          padding-bottom: 8px;
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(320px, 1fr);
          gap: 84px;
          align-items: start;
        }

        .project-title-wrap {
          position: relative;
          z-index: 2;
        }

        .project-title {
          margin: 0;
          font-size: clamp(2.8rem, 7vw, 7rem);
          font-weight: 500;
          color: var(--text);
          line-height: 0.92;
          letter-spacing: -0.04em;
        }

        .project-details {
          display: flex;
          flex-direction: column;
          gap: 26px;
          justify-content: flex-start;
        }

        .project-desc {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.75;
          max-width: 500px;
          margin: 0;
        }

        .project-links {
          display: flex;
          align-items: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .project-category {
          color: var(--accent);
          font-family: monospace;
          font-size: 1rem;
          letter-spacing: 0.08em;
        }

        .live-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          transition: color 0.25s ease;
        }

        .live-link svg {
          transition: transform 0.25s ease;
        }

        .live-link:hover {
          color: var(--accent);
        }

        .live-link:hover svg {
          transform: translate(3px, -3px);
        }

        .portfolio-footer {
          padding: 56px var(--section-x) 0;
          display: flex;
          justify-content: center;
        }

        .view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 22px;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.02);
          color: var(--text);
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          transition:
            border-color 0.25s ease,
            background 0.25s ease,
            transform 0.25s ease,
            color 0.25s ease;
        }

        .view-all-btn svg {
          transition: transform 0.25s ease;
        }

        .view-all-btn:hover {
          border-color: rgba(93, 211, 182, 0.32);
          background: rgba(255, 255, 255, 0.04);
          color: var(--accent);
          transform: translateY(-2px);
        }

        .view-all-btn:hover svg {
          transform: translate(3px, -3px);
        }

        @media (max-width: 960px) {
          .project-row {
            min-height: auto !important;
            padding-top: 72px !important;
            padding-bottom: 72px !important;
          }

          .project-shell {
            padding-bottom: 28px;
          }

          .project-meta {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
            margin-top: 34px !important;
            padding-bottom: 0 !important;
          }

          .project-title {
            font-size: clamp(2.4rem, 14vw, 4rem) !important;
          }

          .project-year {
            font-size: 44vw !important;
            left: 0 !important;
            bottom: 2% !important;
            line-height: 0.82 !important;
          }

          .img-inner {
            aspect-ratio: 16 / 10 !important;
          }

          .project-links {
            gap: 16px !important;
            align-items: flex-start !important;
            flex-direction: column;
          }

          .portfolio-footer {
            padding-top: 40px;
          }

          .view-all-btn {
            width: 100%;
            justify-content: center;
            max-width: 320px;
          }
        }
      `}</style>
    </section>
  );
}