"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const serviceOptions = [
  "Kurumsal Web Sitesi",
  "Landing Page",
  "E-Ticaret",
  "UI/UX Tasarım",
  "CMS Entegrasyonu",
  "Özel Yazılım",
  "Performans / Yenileme",
];

const pageOptions = [
  "Ana Sayfa",
  "Hakkımızda",
  "Hizmetler",
  "İşler / Portfolyo",
  "Blog",
  "İletişim",
  "Teklif Formu",
  "Yönetim Paneli",
];

const budgetOptions = [
  "5.000₺ – 15.000₺",
  "15.000₺ – 35.000₺",
  "35.000₺ – 75.000₺",
  "75.000₺+",
  "Emin değilim",
];

const timelineOptions = [
  "Hemen başlamak istiyorum",
  "2–4 hafta içinde",
  "1–2 ay içinde",
  "Sadece fiyat araştırıyorum",
];

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedPages, setSelectedPages] = useState<string[]>([]);

  const toggleItem = (
    item: string,
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setList((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  };

  return (
    
    <main className="contact-page">
        <Navbar />
      <div className="contact-dots" />

      <section className="contact-hero container">
        <div className="contact-hero-copy">
          <span className="contact-kicker">PROJE FORMU</span>
          <h1>
            Projenizi birkaç adımda
            <br />
            netleştirelim.
          </h1>
          <p>
            Bu form, size daha doğru fiyat, daha net yol haritası ve daha hızlı
            dönüş sunabilmemiz için hazırlandı. Kısa sürer, ama çok iş görür.
          </p>
        </div>
      </section>

      <section className="contact-form-section container">
        <div className="contact-layout">
          <aside className="contact-side">
            <div className="contact-side-box">
              <span className="contact-side-label">Neler soruyoruz?</span>
              <ul>
                <li>İşletmenizi ve sektörünüzü</li>
                <li>Ne tür bir site istediğinizi</li>
                <li>Bütçe ve zaman planınızı</li>
                <li>İhtiyaç duyduğunuz sayfa ve özellikleri</li>
              </ul>
            </div>

            <div className="contact-side-box">
              <span className="contact-side-label">İletişim</span>
              <p>info@seglead.com</p>
              <p>İstanbul, Türkiye</p>
            </div>
          </aside>

          <form className="contact-form">
            <div className="form-block">
              <div className="form-block-head">
                <span>01</span>
                <h2>İşletme Bilgileri</h2>
              </div>

              <div className="form-grid">
                <label className="field">
                  <span>İşletme / Marka Adı</span>
                  <input type="text" name="businessName" placeholder="Örn: Seglead" />
                </label>

                <label className="field">
                  <span>Sektör</span>
                  <input type="text" name="industry" placeholder="Örn: Yazılım, Moda, E-Ticaret" />
                </label>

                <label className="field field-full">
                  <span>Mevcut Web Sitesi / Sosyal Medya</span>
                  <input
                    type="text"
                    name="website"
                    placeholder="https://... veya Instagram hesabınız"
                  />
                </label>
              </div>
            </div>

            <div className="form-block">
              <div className="form-block-head">
                <span>02</span>
                <h2>Ne İstiyorsunuz?</h2>
              </div>

              <div className="field">
                <span>Hizmet Seçin</span>
                <div className="chip-group">
                  {serviceOptions.map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`chip ${selectedServices.includes(item) ? "is-active" : ""}`}
                      onClick={() =>
                        toggleItem(item, selectedServices, setSelectedServices)
                      }
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="field">
                <span>İhtiyacınız Olan Sayfalar</span>
                <div className="chip-group">
                  {pageOptions.map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`chip ${selectedPages.includes(item) ? "is-active" : ""}`}
                      onClick={() => toggleItem(item, selectedPages, setSelectedPages)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <label className="field">
                <span>Proje Özeti</span>
                <textarea
                  name="brief"
                  rows={6}
                  placeholder="Kısaca ne yapmak istediğinizi, hedefinizi ve varsa özel beklentilerinizi yazın."
                />
              </label>
            </div>

            <div className="form-block">
              <div className="form-block-head">
                <span>03</span>
                <h2>Bütçe ve Zaman</h2>
              </div>

              <div className="form-grid">
                <label className="field">
                  <span>Bütçe Aralığı</span>
                  <select name="budget" defaultValue="">
                    <option value="" disabled>
                      Seçiniz
                    </option>
                    {budgetOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="field">
                  <span>Ne Zaman Başlamak İstiyorsunuz?</span>
                  <select name="timeline" defaultValue="">
                    <option value="" disabled>
                      Seçiniz
                    </option>
                    {timelineOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            <div className="form-block">
              <div className="form-block-head">
                <span>04</span>
                <h2>İletişim Bilgileri</h2>
              </div>

              <div className="form-grid">
                <label className="field">
                  <span>Ad Soyad</span>
                  <input type="text" name="name" placeholder="Adınız soyadınız" />
                </label>

                <label className="field">
                  <span>E-posta</span>
                  <input type="email" name="email" placeholder="ornek@mail.com" />
                </label>

                <label className="field">
                  <span>Telefon / WhatsApp</span>
                  <input type="text" name="phone" placeholder="+90 ..." />
                </label>

                <label className="field">
                  <span>Tercih Edilen İletişim Şekli</span>
                  <select name="contactMethod" defaultValue="">
                    <option value="" disabled>
                      Seçiniz
                    </option>
                    <option value="email">E-posta</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="phone">Telefon</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="form-submit">
              <p>
                Formu gönderdiğinizde, projenizi inceleyip size en uygun yol
                haritası ile dönüş yapacağız.
              </p>
              <button type="submit" className="submit-btn">
                PROJEYİ GÖNDER
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </section>

      <style jsx>{ 
      ` 
        .contact-page {
          position: relative;
          background: var(--bg);
          min-height: 100vh;
          overflow: hidden;
          isolation: isolate;
        }

        .contact-dots {
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

        .contact-hero,
        .contact-form-section {
          position: relative;
          z-index: 2;
        }

        .contact-hero {
          padding-top: calc(var(--header-h) + 56px);
          padding-bottom: 44px;
        }

        .contact-kicker {
          display: inline-block;
          color: var(--accent);
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.42em;
          margin-bottom: 18px;
        }

        .contact-hero h1 {
          margin: 0 0 18px;
          color: var(--text);
          font-size: clamp(2.7rem, 5vw, 5.2rem);
          line-height: 0.94;
          letter-spacing: -0.06em;
          font-weight: 500;
          max-width: 11ch;
        }

        .contact-hero p {
          margin: 0;
          max-width: 620px;
          font-size: 1rem;
          line-height: 1.8;
        }

        .contact-layout {
          display: grid;
          grid-template-columns: minmax(260px, 0.46fr) minmax(0, 1fr);
          gap: 28px;
          align-items: start;
        }

        .contact-side {
          position: sticky;
          top: calc(var(--header-h) + 28px);
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .contact-side-box {
          border: 1px solid var(--border);
          background: rgba(0, 0, 0, 0.34);
          padding: 22px;
          border-radius: 16px;
        }

        .contact-side-label {
          display: inline-block;
          color: var(--accent);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.26em;
          margin-bottom: 14px;
        }

        .contact-side-box ul {
          margin: 0;
          padding-left: 18px;
          color: var(--text-muted);
          line-height: 1.8;
        }

        .contact-side-box p {
          margin: 0 0 10px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-block {
          border: 1px solid var(--border);
          background: rgba(0, 0, 0, 0.34);
          padding: 28px;
          border-radius: 18px;
        }

        .form-block-head {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 22px;
        }

        .form-block-head span {
          color: var(--accent);
          font-family: monospace;
          font-size: 1.1rem;
          font-weight: 700;
        }

        .form-block-head h2 {
          margin: 0;
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--text);
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .field-full {
          grid-column: 1 / -1;
        }

        .field span {
          color: var(--text);
          font-size: 0.9rem;
        }

        .field input,
        .field textarea,
        .field select {
          width: 100%;
          border: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.02);
          color: var(--text);
          padding: 15px 16px;
          border-radius: 12px;
          outline: none;
          font: inherit;
          transition: border-color 0.25s ease, background 0.25s ease;
        }

        .field input:focus,
        .field textarea:focus,
        .field select:focus {
          border-color: rgba(93, 211, 182, 0.55);
          background: rgba(255, 255, 255, 0.03);
        }

        .field textarea {
          resize: vertical;
          min-height: 140px;
        }

        .chip-group {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .chip {
          min-height: 42px;
          padding: 0 14px;
          border: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.02);
          color: var(--text-muted);
          border-radius: 999px;
          font: inherit;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .chip:hover {
          border-color: rgba(93, 211, 182, 0.4);
          color: var(--text);
        }

        .chip.is-active {
          border-color: rgba(93, 211, 182, 0.55);
          background: rgba(93, 211, 182, 0.08);
          color: var(--text);
        }

        .form-submit {
          border: 1px solid var(--border);
          background: rgba(0, 0, 0, 0.34);
          padding: 28px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .form-submit p {
          margin: 0;
          max-width: 640px;
        }

        .submit-btn {
          min-width: 220px;
          min-height: 56px;
          border: 1px solid var(--accent);
          background: var(--accent);
          color: #081210;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.24em;
          cursor: pointer;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 34px rgba(93, 211, 182, 0.18);
        }

        @media (max-width: 960px) {
          .contact-hero {
            padding-top: 110px;
            padding-bottom: 28px;
          }

          .contact-layout {
            grid-template-columns: 1fr;
          }

          .contact-side {
            position: relative;
            top: 0;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .form-submit {
            flex-direction: column;
            align-items: stretch;
          }

          .submit-btn {
            width: 100%;
            min-width: 0;
          }

          .contact-hero h1 {
            max-width: none;
            font-size: clamp(2.3rem, 10vw, 3.8rem);
          }
        }
      `}</style>
    </main>
  );
}