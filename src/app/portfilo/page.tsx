"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const projects = [
  {
    id: "01",
    name: "NEXUS",
    category: "Mimari / Kurumsal",
    year: "2026",
    scope: "Brand Site / UI-UX / Development",
    desc: "Modern mimari ofisler için premium algı oluşturan, güçlü tipografi ve yüksek güven hissiyle tasarlanmış kurumsal vitrin.",
    accent: "architectural",
  },
  {
    id: "02",
    name: "AETHER",
    category: "Finans / Dashboard",
    year: "2026",
    scope: "Dashboard / Product Design / Frontend",
    desc: "Veriyi sade, güçlü ve premium bir deneyime dönüştüren finans odaklı dijital ürün arayüzü.",
    accent: "dashboard",
  },
  {
    id: "03",
    name: "VANGUARD",
    category: "E-Commerce / Retail",
    year: "2026",
    scope: "Storefront / UX / Performance",
    desc: "Ürün sunumunu daha lüks, dönüşümü daha net hale getiren yeni nesil e-ticaret deneyimi.",
    accent: "commerce",
  },
  {
    id: "04",
    name: "OBSIDIAN",
    category: "Creative Studio",
    year: "2026",
    scope: "Portfolio / Motion / Branding",
    desc: "Ajans ve yaratıcı stüdyolar için etkileyici geçişler, koyu tonlar ve güçlü görsel ritimle oluşturulmuş portfolyo yapısı.",
    accent: "studio",
  },
  {
    id: "05",
    name: "LUMA",
    category: "Wellness / Beauty",
    year: "2026",
    scope: "Brand Site / Booking / CMS",
    desc: "Zarif görsel dil, sakin kullanıcı akışı ve premium marka sunumuyla tasarlanmış modern wellness sitesi.",
    accent: "wellness",
  },
];

export default function ProjectsPage() {
  return (
    
    <main className="projects-page">
        <Navbar />
      <div className="projects-dots" />

      <section className="projects-hero container">
        <span className="projects-kicker">SELECTED PROJECTS</span>
        <h1>
          Markaları dijitalde daha güçlü gösteren
          projeler.
        </h1>
        <p>
          Aşağıda Seglead yaklaşımını göstermek için hazırlanmış 5 premium proje
          mockup’ı yer alıyor. Her biri farklı sektör ve ihtiyaç için kurgulandı.
        </p>
      </section>

      <section className="projects-list container">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className={`project-row ${index % 2 === 1 ? "is-reversed" : ""}`}
          >
            <div className="project-copy">
              <div className="project-meta-top">
                <span className="project-id">{project.id}</span>
                <span className="project-category">{project.category}</span>
              </div>

              <h2>{project.name}</h2>
              <p className="project-desc">{project.desc}</p>

              <div className="project-facts">
                <div className="project-fact">
                  <span>YIL</span>
                  <strong>{project.year}</strong>
                </div>
                <div className="project-fact">
                  <span>KAPSAM</span>
                  <strong>{project.scope}</strong>
                </div>
              </div>

              <a href="/form" className="project-link">
                PROJEYİ İNCELE <span>↗</span>
              </a>
            </div>

            <div className={`project-visual ${project.accent}`}>
              <div className="project-browser">
                <div className="project-browser-top">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="project-browser-inner">
  <img
    src={`https://picsum.photos/seed/${project.id}/1200/800`}
    alt={project.name}
  />
  <div className="project-image-overlay" />
</div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="projects-cta container">
        <div className="projects-cta-box">
          <div>
            <span className="projects-cta-kicker">NEXT STEP</span>
            <h2>Sizin markanız için de böyle bir proje kurgulayalım.</h2>
          </div>

          <a href="/form" className="projects-cta-button">
            PROJE FORMUNA GİT <span>↗</span>
          </a>
        </div>
        
      </section>
      <Footer />
      <style jsx>{`
        .projects-page {
          position: relative;
          min-height: 100vh;
          background: var(--bg);
          overflow: hidden;
          isolation: isolate;
        }

        .projects-dots {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0.12;
          background-image:
            radial-gradient(circle, rgba(255, 255, 227, 0.1) 0.8px, transparent 0.9px),
            radial-gradient(circle, rgba(93, 211, 182, 0.04) 0.7px, transparent 0.8px);
          background-size: 30px 30px, 60px 60px;
          background-position: 0 0, center top;
          mask-image: linear-gradient(
            to bottom,
            transparent,
            black 8%,
            black 92%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent,
            black 8%,
            black 92%,
            transparent
          );
        }

        .projects-hero,
        .projects-list,
        .projects-cta {
          position: relative;
          z-index: 2;
        }

        .projects-hero {
          padding-top: calc(var(--header-h) + 56px);
          padding-bottom: 48px;
        }

        .projects-kicker {
          display: inline-block;
          color: var(--accent);
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.42em;
          margin-bottom: 18px;
        }

        .projects-hero h1 {
          margin: 0 0 20px;
          color: var(--text);
          font-size: clamp(2rem, 5vw, 5rem);
          line-height: 0.93;
          letter-spacing: -0.065em;
          font-weight: 400;
          max-width: 11ch;
        }

        .projects-hero p {
          margin: 0;
          max-width: 760px;
          color: var(--text-muted);
          font-size: 1.02rem;
          line-height: 1.85;
        }

        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 34px;
          padding-bottom: 60px;
        }

        .project-row {
          display: grid;
          grid-template-columns: minmax(320px, 0.9fr) minmax(0, 1.1fr);
          gap: 28px;
          align-items: center;
        }

        .project-row.is-reversed {
          grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
        }

        .project-row.is-reversed .project-copy {
          order: 2;
        }

        .project-row.is-reversed .project-visual {
          order: 1;
        }

        .project-copy,
        .project-visual,
        .projects-cta-box {
          border: 1px solid var(--border);
          background: rgba(0, 0, 0, 0.34);
          border-radius: 22px;
        }

        .project-copy {
          padding: 30px;
        }

        .project-meta-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          margin-bottom: 18px;
        }

        .project-id {
          color: var(--accent);
          font-family: monospace;
          font-size: 1rem;
          font-weight: 700;
        }

        .project-category {
          color: var(--text-muted);
          font-size: 0.76rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .project-copy h2 {
          margin: 0 0 14px;
          color: var(--text);
          font-size: clamp(2rem, 4vw, 4rem);
          line-height: 0.96;
          letter-spacing: -0.05em;
          font-weight: 500;
        }

        .project-desc {
          margin: 0 0 24px;
          color: var(--text-muted);
          line-height: 1.85;
          max-width: 46ch;
        }

        .project-facts {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 24px;
        }

        .project-fact {
          border: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.015);
          border-radius: 14px;
          padding: 14px 16px;
        }

        .project-fact span {
          display: block;
          color: var(--text-muted);
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          margin-bottom: 8px;
        }

        .project-fact strong {
          color: var(--text);
          font-size: 0.95rem;
          font-weight: 500;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--accent);
          font-size: 0.84rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          transition: transform 0.24s ease, opacity 0.24s ease;
        }

        .project-link:hover {
          transform: translateX(4px);
          opacity: 0.92;
        }

        .project-visual {
          padding: 18px;
          min-height: 520px;
          position: relative;
          overflow: hidden;
        }

        .project-visual::before {
          content: "";
          position: absolute;
          inset: auto auto -15% -10%;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          filter: blur(20px);
          opacity: 0.28;
        }

        .project-visual.architectural::before {
          background: radial-gradient(circle, rgba(255, 255, 227, 0.12), transparent 72%);
        }

        .project-visual.dashboard::before {
          background: radial-gradient(circle, rgba(93, 211, 182, 0.14), transparent 72%);
        }

        .project-visual.commerce::before {
          background: radial-gradient(circle, rgba(255, 255, 227, 0.08), transparent 72%);
        }

        .project-visual.studio::before {
          background: radial-gradient(circle, rgba(93, 211, 182, 0.12), transparent 72%);
        }

        .project-visual.wellness::before {
          background: radial-gradient(circle, rgba(255, 255, 227, 0.1), transparent 72%);
        }

        .project-browser {
          position: relative;
          z-index: 2;
          border: 1px solid var(--border);
          border-radius: 18px;
          overflow: hidden;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.02),
            rgba(255, 255, 255, 0.01)
          );
          min-height: 480px;
        }

        .project-browser-top {
          display: flex;
          gap: 8px;
          padding: 16px;
          border-bottom: 1px solid var(--border);
        }

        .project-browser-top span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 227, 0.15);
        }

        .project-browser-inner {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          min-height: 430px;
        }

        .project-panel {
          border-radius: 16px;
          border: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.02);
          min-height: 110px;
        }

        .project-panel-hero {
          min-height: 180px;
        }

        .project-panel-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .project-panel-wide {
          min-height: 120px;
        }

        .projects-cta {
          padding-bottom: 100px;
        }

        .projects-cta-box {
          padding: 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
        }

        .projects-cta-kicker {
          display: inline-block;
          color: var(--accent);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.24em;
          margin-bottom: 12px;
        }

        .projects-cta-box h2 {
          margin: 0;
          color: var(--text);
          font-size: clamp(1.8rem, 3vw, 3rem);
          line-height: 1.02;
          letter-spacing: -0.04em;
          font-weight: 500;
          max-width: 16ch;
        }

        .projects-cta-button {
          min-width: 240px;
          min-height: 58px;
          padding: 0 24px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: var(--accent);
          color: #081210;
          border: 1px solid var(--accent);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .projects-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 34px rgba(93, 211, 182, 0.18);
        }

        @media (max-width: 960px) {
          .projects-hero {
            padding-top: 110px;
            padding-bottom: 34px;
          }

          .projects-hero h1 {
            max-width: none;
            font-size: clamp(2.35rem, 10vw, 4.2rem);
            line-height: 0.98;
          }

          .project-row,
          .project-row.is-reversed {
            grid-template-columns: 1fr;
          }

          .project-row.is-reversed .project-copy,
          .project-row.is-reversed .project-visual {
            order: initial;
          }

          .project-copy,
          .project-visual {
            padding: 20px;
          }

          .project-visual {
            min-height: auto;
          }

          .project-browser {
            min-height: auto;
          }

          .project-browser-inner {
            min-height: auto;
          }

          .project-facts {
            grid-template-columns: 1fr;
          }

          .projects-cta {
            padding-bottom: 80px;
          }

          .projects-cta-box {
            padding: 24px;
            flex-direction: column;
            align-items: flex-start;
          }

          .projects-cta-button {
            width: 100%;
            min-width: 0;
          }
        }
      `}</style>
    </main>
  );
}