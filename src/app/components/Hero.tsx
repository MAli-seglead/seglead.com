"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const phrases = [
  "İŞİNİZİ BÜYÜTEN",
  "SATIŞ ODAKLI",
  "GÖRÜNÜR",
  "MODERN",
  "AKILDA KALICI",
] as const;

type HeroTab = "design" | "develop" | "launch";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<HeroTab>("launch");
  const rollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intro = gsap.fromTo(
      ".hero-fade-in",
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      }
    );

    const rollItems = rollRef.current;
    if (!rollItems) return () => intro.kill();

    const loop = gsap.timeline({ repeat: -1 });
    phrases.forEach((_, i) => {
      loop.to(rollItems, {
        yPercent: -((i + 1) * (100 / (phrases.length + 1))),
        duration: 0.75,
        ease: "power4.inOut",
        delay: 1.8,
      });
    });
    loop.set(rollItems, { yPercent: 0 });

    return () => {
      intro.kill();
      loop.kill();
    };
  }, []);

  useEffect(() => {
    gsap.killTweensOf([".rocket-element", ".smoke-1", ".smoke-2"]);
    gsap.set([".rocket-element", ".smoke-1", ".smoke-2"], { xPercent: -50 });

    if (activeTab !== "launch") {
      gsap.to([".rocket-element", ".smoke-1", ".smoke-2"], {
        opacity: 0,
        duration: 0.25,
      });
      return;
    }

    gsap.set([".rocket-element", ".smoke-1", ".smoke-2"], { opacity: 0 });

    gsap.fromTo(
      ".smoke-2",
      { y: 30, scale: 0.92, opacity: 0 },
      { y: 0, scale: 1, opacity: 0.9, duration: 1.3, ease: "power2.out" }
    );

    gsap.fromTo(
      ".smoke-1",
      { y: 42, scale: 0.85, opacity: 0 },
      { y: 0, scale: 1, opacity: 1, duration: 1.1, ease: "power3.out", delay: 0.08 }
    );

    gsap.fromTo(
      ".rocket-element",
      { y: 130, scale: 0.72, opacity: 0 },
      {
        y: -8,
        scale: 1,
        opacity: 1,
        duration: 1.15,
        ease: "back.out(1.1)",
        delay: 0.12,
        onComplete: () => {
          gsap.to(".rocket-element", {
            y: "-=12",
            duration: 1.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        },
      }
    );
  }, [activeTab]);

  return (
    <section className="hero-section">
      <div className="grid-lines" />

      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="hero-badge hero-fade-in">
            <span>✦</span>
            Yeni Nesil Web Ajansı
          </div>

          <h1 className="hero-headline hero-fade-in">
            <span className="hero-line">Yeni nesil markalar için</span>

            <span className="hero-roller">
              <span className="hero-roller-viewport">
                <span ref={rollRef} className="hero-roller-list">
                  {phrases.map((phrase) => (
                    <span key={phrase} className="hero-roller-item">
                      {phrase}
                    </span>
                  ))}
                  <span className="hero-roller-item">{phrases[0]}</span>
                </span>
              </span>
            </span>

            <span className="hero-line">web siteleri.</span>
          </h1>

          <p className="hero-text hero-fade-in">
            Büyüyen girişimler için dijital dünyada fark yaratan çözümler.
            Sizi profesyonel gösterecek, SEO uyumlu ve yüksek dönüşüm odaklı
            sistemler tasarlıyor ve kodluyoruz.
          </p>

          <a className="hero-cta hero-fade-in" href="#contact">
            Ücretsiz Görüşme Ayarla
          </a>

          <div className="hero-points hero-fade-in">
            <div className="hero-point">
              <CheckIcon />
              Modern ve premium tasarım dili
            </div>
            <div className="hero-point">
              <CheckIcon />
              Hızlı süreç ve kusursuz kodlama
            </div>
            <div className="hero-point">
              <CheckIcon />
              Kolay yönetim ve güncelleme
            </div>
          </div>
        </div>

        <div className="hero-visual hero-fade-in">
          <div className="hero-laptop-container">
            <div className="hero-glow" />

            <Image
              src="/mac dev.avif"
              alt="Tasarım görünümü"
              fill
              priority
              sizes="(max-width: 960px) 100vw, 50vw"
              className="hero-screen"
              style={{ opacity: activeTab === "design" ? 1 : 0 }}
            />

            <Image
              src="/mac des.avif"
              alt="Yazılım görünümü"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              className="hero-screen"
              style={{ opacity: activeTab === "develop" ? 1 : 0 }}
            />

            <Image
              src="/mac.avif"
              alt="Lansman görünümü"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              className="hero-screen"
              style={{ opacity: activeTab === "launch" ? 1 : 0 }}
            />

            <div
              className="hero-overflow"
              style={{ visibility: activeTab === "launch" ? "visible" : "hidden" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="smoke-2" src="/smoke2.avif" alt="" aria-hidden="true" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="smoke-1" src="/smoke.avif" alt="" aria-hidden="true" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="rocket-element" src="/rocket.avif" alt="Rocket" />
            </div>
          </div>

          <div className="hero-tabs" aria-label="Hero tabs">
            <button
              type="button"
              className={activeTab === "design" ? "is-active" : ""}
              onClick={() => setActiveTab("design")}
            >
              ✦ Tasarım
            </button>
            <button
              type="button"
              className={activeTab === "develop" ? "is-active" : ""}
              onClick={() => setActiveTab("develop")}
            >
              {"</>"} Yazılım
            </button>
            <button
              type="button"
              className={activeTab === "launch" ? "is-active" : ""}
              onClick={() => setActiveTab("launch")}
            >
              🚀 Lansman
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 100svh;
          display: flex;
          align-items: center;
          padding: calc(var(--header-h) + 36px) 0 56px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          gap: clamp(28px, 4vw, 64px);
          align-items: center;
        }

        .hero-copy {
          z-index: 2;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          margin-bottom: 20px;
          border-radius: 999px;
          border: 1px solid rgba(93, 211, 182, 0.2);
          background: rgba(93, 211, 182, 0.1);
          color: var(--accent);
          font-size: 0.85rem;
          font-weight: 500;
        }

        .hero-headline {
          margin: 0 0 20px;
          font-size: clamp(2.7rem, 4.5vw, 5rem);
          line-height: 0.98;
          letter-spacing: -0.05em;
          font-weight: 500;
        }

        .hero-line {
          display: block;
        }

        .hero-roller {
          display: block;
          color: var(--text-muted);
        }

        .hero-roller-viewport {
          height: 1.12em;
          display: block;
          overflow: hidden;
          position: relative;
        }

        .hero-roller-list {
          display: flex;
          flex-direction: column;
        }

        .hero-roller-item {
          height: 1.12em;
          display: flex;
          align-items: center;
        }

        .hero-text {
          max-width: 520px;
          margin: 0 0 30px;
          color: var(--text-muted);
          font-size: 1.04rem;
          line-height: 1.7;
        }

        .hero-cta {
          display: inline-block;
          margin-bottom: 30px;
          padding: 16px 30px;
          border-radius: 10px;
          background: var(--accent);
          color: #111111;
          font-size: 1rem;
          font-weight: 700;
          box-shadow: 0 4px 25px rgba(93, 211, 182, 0.25);
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .hero-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(93, 211, 182, 0.22);
        }

        .hero-points {
          display: flex;
          flex-direction: column;
          gap: 12px;
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .hero-point {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .hero-visual {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-laptop-container {
          position: relative;
          width: 100%;
          max-width: 760px;
          aspect-ratio: 16 / 10;
        }

        .hero-glow {
          position: absolute;
          inset: 10% 10%;
          background: radial-gradient(
            circle,
            rgba(93, 211, 182, 0.16) 0%,
            rgba(17, 17, 17, 0) 70%
          );
          filter: blur(50px);
          z-index: 0;
        }

        .hero-screen {
          object-fit: contain;
          z-index: 1;
          transition: opacity 0.45s ease-in-out;
        }

.hero-overflow {
  position: absolute;
  inset: 0;
  overflow: visible;
  pointer-events: none;
  z-index: 5;
}

.smoke-2 {
  position: absolute;
  left: 50%;
  bottom: -9%;
  width: 128%;
  opacity: 0;
  object-fit: contain;
}

.smoke-1 {
  position: absolute;
  left: 50%;
  bottom: -3%;
  width: 94%;
  opacity: 0;
  object-fit: contain;
}

.rocket-element {
  position: absolute;
  left: 50%;
  bottom: 14%;
  width: 28%;
  opacity: 0;
  object-fit: contain;
}

.hero-tabs {
  display: flex;
  gap: 8px;
  margin-top: 18px;
  padding: 6px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 8;
}
        .hero-tabs button {
          border: none;
          padding: 8px 18px;
          border-radius: 8px;
          background: transparent;
          color: var(--text-muted);
          font-size: 0.85rem;
          transition: all 0.25s ease;
        }

        .hero-tabs button.is-active {
          background: var(--text);
          color: var(--bg);
          font-weight: 600;
        }

        @media (max-width: 960px) {
          .hero-section {
            padding: calc(var(--header-h) + 24px) 0 36px;
          }

          .hero-grid {
            grid-template-columns: 1fr;
          }

          .hero-copy {
            order: 2;
          }

          .hero-visual {
            order: 1;
          }

          .hero-headline {
            font-size: clamp(2.5rem, 10vw, 3.6rem);
            line-height: 1;
          }

          .hero-text {
            max-width: 100%;
            font-size: 0.98rem;
          }

          .hero-laptop-container {
            max-width: 100%;
          }

          .hero-tabs {
            display: none;
          }

          .rocket-element {
            width: 26%;
          }
        }
      `}</style>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--accent)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}