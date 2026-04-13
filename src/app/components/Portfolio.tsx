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

        if (title) tl.fromTo(title, { y: 70, opacity: 0 }, { y: 0, opacity: 1 }, 0.2);
        if (details) tl.fromTo(details, { y: 36, opacity: 0 }, { y: 0, opacity: 1 }, 0.28);
        if (year) tl.fromTo(year, { opacity: 0, scale: 0.85 }, { opacity: 0.05, scale: 1 }, 0);
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="work"
      style={{ backgroundColor: "var(--bg)", padding: "120px 0", position: "relative" }}
    >
      <div className="grid-lines" style={{ opacity: 0.1 }} />

      <div style={{ padding: "0 var(--section-x)", marginBottom: "8vh" }}>
        <span
          style={{
            color: "var(--accent)",
            letterSpacing: "0.6em",
            fontSize: "0.7rem",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          Selected Works
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {projects.map((project, i) => (
          <div
            key={i}
            className="project-row"
            style={{
              width: "100%",
              minHeight: "100svh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              padding: "0 var(--section-x)",
              overflow: "hidden",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div
              className="project-year"
              style={{
                position: "absolute",
                fontSize: "35vw",
                fontWeight: 900,
                color: "var(--text)",
                opacity: 0,
                left: "-5%",
                bottom: "-5%",
                pointerEvents: "none",
                zIndex: 0,
                lineHeight: 1,
              }}
            >
              {project.year}
            </div>

            <div style={{ width: "100%", maxWidth: "1300px", zIndex: 1 }}>
              <div
                className="img-inner"
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 8.6",
                  overflow: "hidden",
                  borderRadius: "4px",
                  border: "1px solid var(--border)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "grayscale(100%) contrast(1.08)",
                  }}
                />
              </div>

              <div className="project-meta">
                <div>
                  <h3
                    className="project-title"
                    style={{
                      fontSize: "clamp(3rem, 8vw, 8rem)",
                      fontWeight: 500,
                      color: "var(--text)",
                      lineHeight: 0.9,
                      letterSpacing: "-0.04em",
                      margin: 0,
                    }}
                  >
                    {project.title}
                  </h3>
                </div>

                <div
                  className="project-details"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                    justifyContent: "flex-end",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1.05rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.7,
                      maxWidth: "460px",
                      margin: 0,
                    }}
                  >
                    {project.desc}
                  </p>

                  <div className="project-links">
                    <span
                      style={{
                        color: "var(--accent)",
                        fontFamily: "monospace",
                        fontSize: "1rem",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {project.category}
                    </span>

                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="live-link">
                      LIVE SITE
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

      <style jsx>{`
        .project-meta {
          margin-top: 40px;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 56px;
        }

        .project-links {
          display: flex;
          align-items: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .live-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          font-weight: 700;
          transition: color 0.2s ease;
        }

        .live-link:hover {
          color: var(--accent);
        }

        @media (max-width: 960px) {
          .project-row {
            min-height: auto !important;
            padding-top: 72px !important;
            padding-bottom: 72px !important;
          }

          .project-meta {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }

          .project-title {
            font-size: clamp(2.4rem, 14vw, 4rem) !important;
          }

          .project-year {
            font-size: 46vw !important;
          }

          .img-inner {
            aspect-ratio: 16 / 10 !important;
          }

          .project-links {
            gap: 16px !important;
            align-items: flex-start !important;
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}