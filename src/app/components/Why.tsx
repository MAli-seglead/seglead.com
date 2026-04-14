"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const chapters = [
  {
    id: "01",
    eyebrow: "TEKNİK ALTYAPI",
    title: "Hızlı, güçlü ve arama motorlarına anlaşılır altyapı.",
    desc: "Seglead, modern web sitelerini sadece görsel olarak değil, teknik olarak da güçlü inşa eder. Temiz kod yapısı, yüksek hız ve doğru sayfa kurgusu sayesinde hem kullanıcı deneyimi hem de organik görünürlük için sağlam bir temel oluşturur.",
    points: [
      "Yüksek açılış hızı",
      "Temiz semantik yapı",
      "Modern ve ölçeklenebilir sistem",
    ],
  },
  {
    id: "02",
    eyebrow: "DÖNÜŞÜM STRATEJİSİ",
    title: "Ziyaretçiyi müşteriye yaklaştıran sayfa kurgusu.",
    desc: "Her bölüm, ziyaretçinin neyi neden gördüğünü netleştirmek için tasarlanır. Böylece web sitesi yalnızca bilgi veren bir vitrin olmaz; güven oluşturan, aksiyona yönlendiren ve teklif talebini artıran bir satış aracı haline gelir.",
    points: [
      "Net hiyerarşi",
      "Güven oluşturan içerik akışı",
      "Daha güçlü teklif çağrıları",
    ],
  },
  {
    id: "03",
    eyebrow: "MARKA KONUMLANDIRMASI",
    title: "İşletmenizi premium gösteren dijital deneyim.",
    desc: "İyi bir web sitesi sadece çalışmaz, aynı zamanda markanızın seviyesini hissettirir. Tipografi, boşluk kullanımı, animasyon dili ve içerik yapısı birlikte çalışarak işletmenizi daha profesyonel, daha güven veren ve daha akılda kalıcı gösterir.",
    points: [
      "Premium görsel dil",
      "Tutarlı kullanıcı deneyimi",
      "Daha güçlü ilk izlenim",
    ],
  },
];

export default function Why() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let resizeHandler: (() => void) | null = null;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".why-intro-animate",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
          },
        }
      );

      const leftInner = sectionRef.current?.querySelector(
        ".why-left-inner"
      ) as HTMLElement | null;
      const rightCol = sectionRef.current?.querySelector(
        ".why-right"
      ) as HTMLElement | null;

      const createTravel = () => {
        ScrollTrigger.getAll().forEach((st) => {
          if (st.vars.id === "why-left-travel") st.kill();
        });

        gsap.killTweensOf(leftInner);

        if (!leftInner || !rightCol || window.innerWidth <= 960) return;

        const leftH = leftInner.offsetHeight;
        const rightH = rightCol.offsetHeight;
        const maxShift = Math.max(0, rightH - leftH - 40);

        gsap.to(leftInner, {
          y: maxShift,
          ease: "none",
          scrollTrigger: {
            id: "why-left-travel",
            trigger: sectionRef.current,
            start: "top top+=120",
            end: "bottom bottom-=80",
            scrub: true,
          },
        });
      };

      createTravel();
      resizeHandler = () => createTravel();
      window.addEventListener("resize", resizeHandler);

      gsap.utils.toArray<HTMLElement>(".why-chapter").forEach((item, index) => {
        const card = item.querySelector(".why-card");
        const line = item.querySelector(".why-chapter-line");
        const glow = item.querySelector(".why-card-glow");

        ScrollTrigger.create({
          trigger: item,
          start: "top 58%",
          end: "bottom 58%",
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 84%",
          },
        });

        tl.fromTo(
          line,
          { scaleY: 0, opacity: 0.25 },
          { scaleY: 1, opacity: 1, duration: 0.7, ease: "power2.out" }
        )
          .fromTo(
            card,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
            0.08
          )
          .fromTo(
            glow,
            { opacity: 0 },
            { opacity: 1, duration: 0.6, ease: "power2.out" },
            0.12
          );
      });
    }, sectionRef);

    return () => {
      if (resizeHandler) window.removeEventListener("resize", resizeHandler);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="neden-seglead"
      className="why-section"
      aria-labelledby="neden-seglead-title"
    >
      <div className="section-dots" />

      <div className="why-shell container">
        <aside className="why-left">
          <div className="why-left-inner">
            <div className="why-kicker-row why-intro-animate">
              <span className="why-kicker-line" />
              <span className="why-kicker">Neden Seglead</span>
            </div>

            <h2 id="neden-seglead-title" className="why-title why-intro-animate">
              Web sitesi sadece güzel görünmek için var olmamalı.
            </h2>

            <p className="why-intro why-intro-animate">
              İyi bir kurumsal web sitesi, markanızı net anlatmalı, güven vermeli
              ve doğru ziyaretçiyi potansiyel müşteriye dönüştürmelidir.
              Seglead bunu estetik, performans ve stratejiyi birlikte düşünerek kurar.
            </p>

            <div className="why-summary why-intro-animate">
              <div className="why-summary-label">Şu anki odak</div>
              <div className="why-summary-value">
                {chapters[activeIndex].eyebrow}
              </div>
            </div>
          </div>
        </aside>

        <div className="why-right">
          {chapters.map((chapter, index) => (
            <article key={chapter.id} className="why-chapter">
              <div className="why-chapter-rail">
                <div
                  className={`why-rail-dot ${
                    activeIndex === index ? "is-active" : ""
                  }`}
                />
                <div className="why-chapter-line" />
              </div>

              <div
                className={`why-card ${activeIndex === index ? "is-active" : ""}`}
              >
                <div className="why-card-glow" />

                <div className="why-card-top">
                  <span className="why-id">{chapter.id}</span>
                  <span className="why-eyebrow">{chapter.eyebrow}</span>
                </div>

                <h3 className="why-card-title">{chapter.title}</h3>
                <p className="why-card-desc">{chapter.desc}</p>

                <ul
                  className="why-points"
                  aria-label={`${chapter.eyebrow} başlıkları`}
                >
                  {chapter.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .why-section {
          position: relative;
          background: var(--bg);
          padding: 140px 0;
          overflow: hidden;
          isolation: isolate;
        }

        .section-dots {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          opacity: 0.32;
          background-image:
            radial-gradient(circle, rgba(255, 255, 227, 0.14) 0.9px, transparent 1px),
            radial-gradient(circle, rgba(93, 211, 182, 0.06) 0.8px, transparent 0.9px);
          background-size: 30px 30px, 60px 60px;
          background-position: 0 0, center top;
          mask-image: linear-gradient(
            to bottom,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }

        .why-shell {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: minmax(320px, 0.92fr) minmax(0, 1.08fr);
          gap: 88px;
          align-items: start;
        }

        .why-left {
          position: relative;
          min-width: 0;
          align-self: start;
        }

        .why-left-inner {
          position: relative;
          will-change: transform;
        }

        .why-kicker-row {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }

        .why-kicker-line {
          width: 28px;
          height: 1px;
          background: var(--accent);
        }

        .why-kicker {
          color: var(--accent);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.36em;
          text-transform: uppercase;
        }

        .why-title {
          margin: 0 0 18px;
          color: var(--text);
          font-size: clamp(2.5rem, 5vw, 4.7rem);
          font-weight: 500;
          line-height: 0.98;
          letter-spacing: -0.05em;
          max-width: 11ch;
        }

        .why-intro {
          max-width: 520px;
          margin: 0 0 34px;
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.82;
        }

        .why-summary {
          display: inline-flex;
          flex-direction: column;
          gap: 8px;
          padding: 16px 18px;
          border: 1px solid var(--border);
          background: rgba(0, 0, 0, 0.32);
          backdrop-filter: blur(6px);
          min-width: 220px;
        }

        .why-summary-label {
          color: var(--text-muted);
          font-size: 0.72rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .why-summary-value {
          color: var(--text);
          font-size: 1rem;
          font-weight: 500;
        }

        .why-right {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .why-chapter {
          display: grid;
          grid-template-columns: 34px minmax(0, 1fr);
          gap: 22px;
          align-items: stretch;
        }

        .why-chapter-rail {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .why-rail-dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 227, 0.18);
          background: rgba(255, 255, 227, 0.04);
          transition: all 0.25s ease;
          margin-top: 22px;
          z-index: 2;
        }

        .why-rail-dot.is-active {
          background: var(--accent);
          border-color: var(--accent);
          box-shadow: 0 0 20px rgba(93, 211, 182, 0.35);
          transform: scale(1.15);
        }

        .why-chapter-line {
          width: 1px;
          flex: 1;
          margin-top: 10px;
          background: linear-gradient(
            to bottom,
            rgba(93, 211, 182, 0.22),
            rgba(255, 255, 227, 0.08)
          );
          transform-origin: top;
        }

        .why-card {
          position: relative;
          padding: 28px 30px 30px;
          border: 1px solid var(--border);
          background: rgba(0, 0, 0, 0.52);
          backdrop-filter: blur(6px);
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .why-card.is-active {
          border-color: rgba(93, 211, 182, 0.18);
          transform: translateX(4px);
        }

        .why-card-glow {
          position: absolute;
          left: -24px;
          top: -18px;
          width: 140px;
          height: 140px;
          border-radius: 999px;
          background: radial-gradient(
            circle,
            rgba(93, 211, 182, 0.08),
            transparent 72%
          );
          filter: blur(18px);
          opacity: 0;
          pointer-events: none;
        }

        .why-card-top {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 14px;
          flex-wrap: wrap;
        }

        .why-id {
          color: var(--accent);
          font-family: monospace;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .why-eyebrow {
          color: var(--accent);
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
        }

        .why-card-title {
          margin: 0 0 14px;
          color: var(--text);
          font-size: clamp(1.7rem, 2.7vw, 2.45rem);
          line-height: 1.08;
          letter-spacing: -0.03em;
          font-weight: 500;
          max-width: 18ch;
        }

        .why-card-desc {
          margin: 0 0 18px;
          color: var(--text-muted);
          font-size: 1.02rem;
          line-height: 1.8;
          max-width: 72ch;
        }

        .why-points {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 12px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .why-points li {
          border: 1px solid var(--border);
          padding: 8px 12px;
          color: var(--text);
          font-size: 0.92rem;
          background: rgba(0, 0, 0, 0.28);
        }

        @media (max-width: 960px) {
          .why-section {
            padding: 100px 0;
          }

          .section-dots {
            opacity: 0.22;
            background-size: 26px 26px, 52px 52px;
          }

          .why-shell {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .why-left-inner {
            transform: none !important;
          }

          .why-title {
            font-size: clamp(2.2rem, 10vw, 3.4rem);
            line-height: 1;
            max-width: none;
          }

          .why-intro {
            max-width: 100%;
            font-size: 1rem;
            line-height: 1.72;
            margin-bottom: 24px;
          }

          .why-summary {
            min-width: 0;
            width: 100%;
          }

          .why-chapter {
            grid-template-columns: 22px minmax(0, 1fr);
            gap: 16px;
          }

          .why-rail-dot {
            margin-top: 18px;
          }

          .why-card {
            padding: 22px 20px 22px;
          }

          .why-card.is-active {
            transform: none;
          }

          .why-card-title {
            font-size: 1.45rem;
            margin-bottom: 10px;
            max-width: none;
          }

          .why-card-desc {
            font-size: 0.98rem;
            line-height: 1.72;
          }

          .why-points li {
            font-size: 0.86rem;
          }
        }
      `}</style>
    </section>
  );
}