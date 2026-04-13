"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const packages = [
  {
    id: "01",
    tier: "STARTER",
    price: "5",
    desc: "Hızlı ve etkili başlangıç. Performans odaklı tek sayfa mimarisi.",
    features: ["Strateji Oturumu", "Premium Tasarım", "Next.js Geliştirme", "7 Günde Teslim"],
  },
  {
    id: "02",
    tier: "PROFESSIONAL",
    price: "15",
    desc: "Büyüyen markalar için tam ekosistem. Gelişmiş animasyonlar ve CMS.",
    features: ["UX Araştırması", "Çok Sayfalı Yapı", "GSAP Animasyonlar", "CMS Entegrasyonu"],
  },
  {
    id: "03",
    tier: "ENTERPRISE",
    price: "QUOTA",
    desc: "Sınır tanımayan vizyonlar. Özel yazılım ve yüksek mühendislik.",
    features: ["Full Branding", "Custom Yazılım", "3D Deneyimler", "Öncelikli Destek"],
  },
];

export default function Pricing() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="pricing"
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--bg)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px var(--section-x)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="grid-lines" style={{ opacity: 0.1 }} />

      <ScrollReveal direction="up">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span
            style={{
              color: "var(--accent)",
              letterSpacing: "0.5em",
              fontSize: "0.75rem",
              fontWeight: 700,
            }}
          >
            YATIRIM PLANI
          </span>

          <h2
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              color: "var(--text)",
              fontWeight: 500,
              marginTop: "15px",
              marginBottom: 0,
            }}
          >
            Paketler
          </h2>
        </div>
      </ScrollReveal>

      <div className="pricing-flex-container">
        {packages.map((pkg, i) => {
          const active = hoveredIndex === i;

          return (
            <div
              key={pkg.id}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="pricing-card"
              style={{
                flex: active ? 1.35 : 1,
                backgroundColor: active ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.01)",
                border: active ? "1px solid var(--accent)" : "1px solid var(--border)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "40px", gap: "16px" }}>
                <span style={{ fontFamily: "monospace", color: "var(--accent)", fontSize: "1.2rem" }}>
                  {pkg.id}
                </span>
                <span style={{ color: "var(--text-muted)", fontSize: "0.72rem", letterSpacing: "0.2em" }}>
                  {pkg.tier}
                </span>
              </div>

              <div style={{ marginBottom: "28px" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "5px", flexWrap: "wrap" }}>
                  <h3
                    style={{
                      fontSize: active ? "4.8rem" : "4rem",
                      color: "var(--text)",
                      fontWeight: 500,
                      transition: "font-size 0.35s ease",
                      lineHeight: 1,
                      margin: 0,
                    }}
                  >
                    {pkg.price}
                  </h3>
                  {pkg.price !== "QUOTA" && (
                    <span style={{ color: "var(--accent)", fontSize: "1.5rem" }}>k+</span>
                  )}
                </div>

                <p
                  style={{
                    color: "var(--text-muted)",
                    marginTop: "18px",
                    marginBottom: 0,
                    fontSize: "1rem",
                    lineHeight: 1.65,
                    opacity: active ? 1 : 0.72,
                    transition: "opacity 0.35s ease",
                  }}
                >
                  {pkg.desc}
                </p>
              </div>

              <div style={{ flexGrow: 1, marginTop: "20px" }}>
                {pkg.features.map((feature) => (
                  <div
                    key={feature}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "14px",
                      fontSize: "0.95rem",
                      color: "var(--text)",
                      opacity: active ? 1 : 0.5,
                      transition: "opacity 0.35s ease",
                    }}
                  >
                    <div
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        backgroundColor: "var(--accent)",
                        flexShrink: 0,
                      }}
                    />
                    {feature}
                  </div>
                ))}
              </div>

              <a href="#contact" className="pricing-cta" style={{ color: active ? "#111" : "var(--accent)", backgroundColor: active ? "var(--accent)" : "transparent" }}>
                SEÇİMİ YAP
              </a>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .pricing-flex-container {
          display: flex;
          gap: 20px;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          min-height: 600px;
        }

        .pricing-card {
          padding: 36px;
          border-radius: 6px;
          display: flex;
          flex-direction: column;
          transition:
            flex 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            border-color 0.3s ease,
            background-color 0.3s ease;
          min-width: 0;
        }

        .pricing-cta {
          margin-top: 28px;
          padding: 15px;
          text-align: center;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          border: 1px solid var(--accent);
          transition: all 0.25s ease;
        }

        @media (max-width: 960px) {
          .pricing-flex-container {
            flex-direction: column !important;
            min-height: auto !important;
            gap: 18px !important;
          }

          .pricing-card {
            width: 100% !important;
            flex: none !important;
            padding: 28px !important;
          }

          .pricing-card h3 {
            font-size: clamp(2.8rem, 12vw, 3.8rem) !important;
          }
        }
      `}</style>
    </section>
  );
}