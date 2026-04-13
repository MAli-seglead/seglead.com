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
        padding: "var(--section-y) var(--section-x)",
        overflow: "hidden",
      }}
    >
      <div className="grid-lines" style={{ opacity: 0.1 }} />

      <div
        className="blueprint-container"
        style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}
      >
        <div style={{ marginBottom: "80px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
            <div style={{ width: "30px", height: "1px", backgroundColor: "var(--accent)" }} />
            <span
              style={{
                color: "var(--accent)",
                letterSpacing: "0.4em",
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
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 500,
              color: "var(--text)",
              lineHeight: 1.08,
              margin: 0,
            }}
          >
            Kusursuz Süreç,
            <br />
            Üstün Sonuç.
          </h2>
        </div>

        <div
          className="spine-line"
          style={{
            position: "absolute",
            left: "20px",
            top: "180px",
            bottom: 0,
            width: "1px",
            backgroundColor: "var(--accent)",
            transformOrigin: "top",
            opacity: 0.2,
            zIndex: 0,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "72px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {steps.map((step, i) => (
            <div key={i} className="process-item" style={{ paddingLeft: "60px", position: "relative" }}>
              <div
                className="process-dot"
                style={{
                  position: "absolute",
                  left: "15px",
                  top: "8px",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "var(--accent)",
                  border: "4px solid var(--bg)",
                }}
              />

              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <span style={{ fontFamily: "monospace", fontSize: "1rem", color: "var(--accent)", opacity: 0.8 }}>
                  {step.num}
                </span>
                <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)", fontWeight: 500, margin: 0 }}>
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "1.04rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                    maxWidth: "520px",
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
        @media (min-width: 960px) {
          .spine-line {
            left: 50% !important;
          }

          .process-item {
            width: 50% !important;
            padding-left: 0 !important;
          }

          .process-item:nth-child(odd) {
            align-self: flex-start !important;
            padding-right: 80px !important;
            text-align: right !important;
          }

          .process-item:nth-child(even) {
            align-self: flex-end !important;
            padding-left: 80px !important;
          }

          .process-item:nth-child(odd) .process-dot {
            left: auto !important;
            right: -5px !important;
          }

          .process-item:nth-child(even) .process-dot {
            left: -5px !important;
          }

          .process-item:nth-child(odd) p {
            margin-left: auto !important;
          }
        }

        @media (max-width: 959px) {
          .process-item {
            padding-left: 52px !important;
          }
        }
      `}</style>
    </section>
  );
}