"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const packages = [
  {
    id: "01",
    tier: "STARTER",
    price: "5.000₺+",
    desc: "Hızlı ve etkili başlangıç. Performans odaklı tek sayfa mimarisi.",
    details:
      "Yeni başlayan markalar için net, hızlı ve güven veren bir başlangıç paketi. Güçlü ilk izlenim ve temiz dönüşüm akışı hedeflenir.",
    process: [
      "Keşif ve strateji görüşmesi",
      "Wireframe ve içerik kurgusu",
      "Tasarım ve geliştirme",
      "Yayın ve son optimizasyon",
    ],
    features: [
      "Strateji Oturumu",
      "Premium Tasarım",
      "Next.js Geliştirme",
      "7 Günde Teslim",
    ],
  },
  {
    id: "02",
    tier: "PROFESSIONAL",
    price: "15.000₺+",
    desc: "Büyüyen markalar için tam ekosistem. Gelişmiş animasyonlar ve CMS.",
    details:
      "En dengeli çözüm. Daha güçlü marka sunumu, daha yüksek dönüşüm odağı ve içerik yönetimi ile uzun vadeli büyüme sağlar.",
    process: [
      "Derin ihtiyaç analizi",
      "UX planlama ve sayfa mimarisi",
      "Animasyonlu premium arayüz",
      "CMS kurulumu ve teslim",
    ],
    features: [
      "UX Araştırması",
      "Çok Sayfalı Yapı",
      "GSAP Animasyonlar",
      "CMS Entegrasyonu",
    ],
    featured: true,
  },
  {
    id: "03",
    tier: "ENTERPRISE",
    price: "Teklif",
    desc: "Sınır tanımayan vizyonlar. Özel yazılım ve yüksek mühendislik.",
    details:
      "Standart paket sınırlarını aşan projeler için. Tamamen size özel deneyim, yazılım ve marka sistemi tek yapıda kurulur.",
    process: [
      "Özel kapsam çalışması",
      "Sistem ve teknik planlama",
      "Özel geliştirme süreci",
      "Öncelikli destek ve büyütme",
    ],
    features: [
      "Full Branding",
      "Custom Yazılım",
      "3D Deneyimler",
      "Öncelikli Destek",
    ],
  },
];

export default function Pricing() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleCard = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-dots" />

      <ScrollReveal direction="up">
        <div className="pricing-heading">
          <span className="pricing-kicker">YATIRIM PLANI</span>
          <h2>Paketler</h2>
          <p>
            Her paket, markanızın bulunduğu seviyeye göre net bir başlangıç sunar.
            İhtiyaç büyüdükçe yapı da büyür.
          </p>
        </div>
      </ScrollReveal>

      <div className="pricing-grid">
        {packages.map((pkg, i) => {
          const open = openIndex === i;

          return (
            <article
              key={pkg.id}
              className={`pricing-card ${open ? "is-open" : ""} ${
                pkg.featured ? "is-featured" : ""
              }`}
            >
              <div className="pricing-card-bg" />

              <div className="pricing-topline">
                <span className="pricing-id">{pkg.id}</span>
                <span className="pricing-tier">{pkg.tier}</span>
              </div>

              {pkg.featured && <div className="pricing-badge">EN ÇOK TERCİH EDİLEN</div>}

              <div className="pricing-main">
                <h3 className="pricing-price">{pkg.price}</h3>
                <p className="pricing-desc">{pkg.desc}</p>
              </div>

              <div className="pricing-divider" />

              <div className="pricing-feature-list">
                {pkg.features.map((feature) => (
                  <div key={feature} className="pricing-feature">
                    <span className="pricing-feature-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="pricing-toggle"
                onClick={() => toggleCard(i)}
                aria-expanded={open}
              >
                <span>{open ? "DETAYI KAPAT" : "DETAYLARI GÖR"}</span>
                <span className={`pricing-toggle-icon ${open ? "is-open" : ""}`}>+</span>
              </button>

              <div className={`pricing-expand ${open ? "is-open" : ""}`}>
                <div className="pricing-expand-inner">
                  <p className="pricing-details">{pkg.details}</p>

                  <div className="pricing-process">
                    <div className="pricing-process-title">Süreç</div>
                    {pkg.process.map((step, idx) => (
                      <div key={step} className="pricing-process-item">
                        <span className="pricing-step-no">0{idx + 1}</span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pricing-actions">
                    <a href="#contact" className="pricing-btn pricing-btn-primary">
                      PROJEYİ BAŞLAT
                    </a>
                    <a href="#work" className="pricing-btn pricing-btn-secondary">
                      ÖRNEK İŞLERİ GÖR
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <style jsx>{`
        .pricing-section {
          position: relative;
          min-height: 100vh;
          padding: 120px var(--section-x);
          background: var(--bg);
          overflow: hidden;
          isolation: isolate;
        }

        .pricing-dots {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0.14;
          background-image:
            radial-gradient(circle, rgba(255, 255, 227, 0.1) 0.8px, transparent 0.9px),
            radial-gradient(circle, rgba(93, 211, 182, 0.04) 0.7px, transparent 0.8px);
          background-size: 30px 30px, 60px 60px;
          background-position: 0 0, center top;
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

        .pricing-heading {
          position: relative;
          z-index: 2;
          text-align: center;
          margin: 0 auto 56px;
          max-width: 760px;
        }

        .pricing-kicker {
          display: inline-block;
          color: var(--accent);
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.42em;
        }

        .pricing-heading h2 {
          margin: 14px 0 14px;
          color: var(--text);
          font-size: clamp(2.7rem, 5vw, 4.8rem);
          line-height: 0.96;
          letter-spacing: -0.05em;
          font-weight: 500;
        }

        .pricing-heading p {
          margin: 0 auto;
          max-width: 620px;
          font-size: 1rem;
          line-height: 1.78;
          color: var(--text-muted);
        }

        .pricing-grid {
          position: relative;
          z-index: 2;
          max-width: 1440px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
          align-items: start;
        }

        .pricing-card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 620px;
          padding: 34px 34px 28px;
          border: 1px solid var(--border);
          border-radius: 18px;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          transition:
            transform 0.35s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease;
        }

        .pricing-card:hover {
          transform: translateY(-6px);
        }

        .pricing-card.is-open {
          border-color: rgba(93, 211, 182, 0.42);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.28);
          background: rgba(255, 255, 255, 0.03);
        }

        .pricing-card-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top center, rgba(93, 211, 182, 0.12), transparent 42%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 35%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .pricing-card.is-open .pricing-card-bg {
          opacity: 1;
        }

        .pricing-topline {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          margin-bottom: 16px;
        }

        .pricing-id {
          color: var(--accent);
          font-family: monospace;
          font-size: 1.45rem;
          font-weight: 700;
        }

        .pricing-tier {
          color: var(--text-muted);
          font-size: 0.76rem;
          letter-spacing: 0.34em;
        }

        .pricing-badge {
          position: relative;
          z-index: 2;
          align-self: flex-start;
          margin-bottom: 18px;
          padding: 8px 14px;
          border: 1px solid rgba(93, 211, 182, 0.3);
          border-radius: 999px;
          background: rgba(93, 211, 182, 0.08);
          color: var(--accent);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.22em;
        }

        .pricing-main {
          position: relative;
          z-index: 2;
        }

        .pricing-price {
          margin: 0;
          color: var(--text);
          font-size: clamp(3.8rem, 5vw, 5.4rem);
          line-height: 0.92;
          letter-spacing: -0.06em;
          font-weight: 500;
        }

        .pricing-desc {
          margin: 18px 0 0;
          max-width: 30ch;
          font-size: 1rem;
          line-height: 1.72;
          color: var(--text-muted);
        }

        .pricing-divider {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 1px;
          margin: 26px 0 24px;
          background: linear-gradient(
            to right,
            rgba(93, 211, 182, 0.24),
            rgba(255, 255, 227, 0.06)
          );
        }

        .pricing-feature-list {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .pricing-feature {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--text);
          font-size: 1rem;
          line-height: 1.5;
          opacity: 0.82;
        }

        .pricing-feature-icon {
          width: 18px;
          height: 18px;
          border-radius: 999px;
          flex-shrink: 0;
          position: relative;
          border: 1px solid rgba(93, 211, 182, 0.26);
          background: rgba(93, 211, 182, 0.05);
        }

        .pricing-feature-icon::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent);
          transform: translate(-50%, -50%);
        }

        .pricing-toggle {
          position: relative;
          z-index: 2;
          margin-top: 28px;
          min-height: 54px;
          width: 100%;
          border: 1px solid rgba(93, 211, 182, 0.6);
          background: transparent;
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 18px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          cursor: pointer;
          transition: all 0.28s ease;
        }

        .pricing-toggle:hover {
          background: rgba(93, 211, 182, 0.05);
        }

        .pricing-toggle-icon {
          font-size: 1.4rem;
          line-height: 1;
          transition: transform 0.28s ease;
        }

        .pricing-toggle-icon.is-open {
          transform: rotate(45deg);
        }

        .pricing-expand {
          position: relative;
          z-index: 2;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition:
            max-height 0.42s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.28s ease;
        }

        .pricing-expand.is-open {
          max-height: 420px;
          opacity: 1;
        }

        .pricing-expand-inner {
          padding-top: 22px;
        }

        .pricing-details {
          margin: 0 0 18px;
          font-size: 0.96rem;
          line-height: 1.72;
          color: var(--text-muted);
        }

        .pricing-process {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .pricing-process-title {
          color: var(--accent);
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.28em;
          margin-bottom: 4px;
        }

        .pricing-process-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--text);
          font-size: 0.94rem;
        }

        .pricing-step-no {
          color: var(--accent);
          font-family: monospace;
          font-size: 0.9rem;
          min-width: 24px;
        }

        .pricing-actions {
          display: flex;
          gap: 12px;
          margin-top: 22px;
          flex-wrap: wrap;
        }

        .pricing-btn {
          min-height: 50px;
          padding: 0 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          border: 1px solid var(--accent);
          transition: all 0.28s ease;
        }

        .pricing-btn-primary {
          background: var(--accent);
          color: #081210;
        }

        .pricing-btn-secondary {
          background: transparent;
          color: var(--accent);
        }

        .pricing-btn:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 960px) {
          .pricing-section {
            min-height: auto;
            padding: 92px 5vw;
          }

          .pricing-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .pricing-card {
            min-height: auto;
            padding: 24px 20px 20px;
          }

          .pricing-price {
            font-size: clamp(3rem, 15vw, 4.2rem);
          }

          .pricing-desc {
            max-width: none;
            font-size: 0.97rem;
          }

          .pricing-expand.is-open {
            max-height: 520px;
          }

          .pricing-actions {
            flex-direction: column;
          }

          .pricing-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}