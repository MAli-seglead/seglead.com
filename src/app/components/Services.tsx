"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    num: "01",
    title: "Strategic Alignment",
    desc: "Markanızın dijital DNA'sını tanımlıyor, görsel dili derinlemesine stratejiyle birleştiriyoruz.",
  },
  {
    num: "02",
    title: "High-Fidelity Engineering",
    desc: "Modern ve premium arayüzleri, her etkileşimde kaliteyi hissettiren bir titizlikle inşa ediyoruz.",
  },
  {
    num: "03",
    title: "Performance Architecture",
    desc: "Next.js ile ışık hızında, SEO dostu ve kusursuz çalışan ölçeklenebilir altyapılar kodluyoruz.",
  },
  {
    num: "04",
    title: "Global Deployment",
    desc: "Kapsamlı optimizasyonlardan sonra projenizi dünya sahnesine hazır halde teslim ediyoruz.",
  },
];

export default function Services() {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".spine-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".blueprint-container",
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>(".process-item").forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "top 50%",
              scrub: 1,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="services"
      style={{
        backgroundColor: "var(--bg)",
        padding: "140px var(--section-x) 100px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* ✅ FIXED DOT BACKGROUND */}
      <div className="services-dots" />

      <div
        className="blueprint-container"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* HEADER */}
        <div style={{ marginBottom: "64px", paddingTop: "48px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "18px" }}>
            <div style={{ width: "28px", height: "1px", backgroundColor: "var(--accent)" }} />
            <span
              style={{
                color: "var(--accent)",
                letterSpacing: "0.35em",
                fontSize: "0.7rem",
                fontWeight: 500,
                textTransform: "uppercase",
              }}
            >
              Methodology
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 4.2vw, 3.2rem)",
              fontWeight: 500,
              color: "var(--text)",
              lineHeight: 1.04,
              margin: 0,
              maxWidth: "600px",
            }}
          >
            Kusursuz Süreç,
            <br />
            Üstün Sonuç.
          </h2>
        </div>

        {/* SPINE */}
        <div
          className="spine-line"
          style={{
            position: "absolute",
            left: "20px",
            top: "220px",
            bottom: 0,
            width: "1px",
            background:
              "linear-gradient(to bottom, rgba(93,211,182,0.1), rgba(93,211,182,0.4), rgba(93,211,182,0.15))",
            transformOrigin: "top",
            opacity: 0.4,
          }}
        />

        {/* ITEMS */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "44px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {steps.map((step, i) => (
            <div key={i} className="process-item" style={{ paddingLeft: "52px", position: "relative" }}>
              <div
                className="process-dot"
                style={{
                  position: "absolute",
                  left: "14px",
                  top: "8px",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "var(--accent)",
                  border: "3px solid var(--bg)",
                }}
              />

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <span style={{ fontFamily: "monospace", fontSize: "0.95rem", color: "var(--accent)", opacity: 0.8 }}>
                  {step.num}
                </span>

                <h3 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)", fontWeight: 500, margin: 0 }}>
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.65,
                    maxWidth: "480px",
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* DOT BACKGROUND FIX */
        .services-dots {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;

          background-image: radial-gradient(
            circle,
            rgba(255, 255, 227, 0.14) 1px,
            transparent 1px
          );

          background-size: 28px 28px;
          opacity: 0.55;

          mask-image: linear-gradient(
            to bottom,
            transparent,
            black 12%,
            black 88%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent,
            black 12%,
            black 88%,
            transparent
          );
        }

        @media (min-width: 960px) {
          .spine-line {
            left: 50% !important;
          }

          .process-item {
            width: 50% !important;
            padding-left: 0 !important;
          }

          .process-item:nth-child(odd) {
            align-self: flex-start;
            padding-right: 48px !important;
            text-align: right;
          }

          .process-item:nth-child(even) {
            align-self: flex-end;
            padding-left: 48px !important;
          }

          .process-item:nth-child(odd) .process-dot {
            left: auto;
            right: -6px;
          }

          .process-item:nth-child(even) .process-dot {
            left: -6px;
          }

          .process-item:nth-child(odd) p {
            margin-left: auto;
          }
        }

        @media (max-width: 768px) {
          .services-dots {
            background-size: 22px 22px;
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  );
}