export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__dots" />

      <div className="site-footer__main container">
        <div className="site-footer__brand">
          <a href="#hero" className="site-footer__logo">
            SEGLEAD.
          </a>
          <p className="site-footer__desc">
            Premium tasarım, güçlü performans ve dönüşüm odaklı web deneyimleri.
          </p>
          <a href="#contact" className="site-footer__mini-cta">
            PROJEYİ BAŞLAT <span>↗</span>
          </a>
        </div>

        <div className="site-footer__nav">
          <div className="site-footer__col">
            <span className="site-footer__label">NAVİGASYON</span>
            <a href="#services">Hizmetler</a>
            <a href="#work">İşler</a>
            <a href="#pricing">Fiyatlar</a>
            <a href="#contact">İletişim</a>
          </div>

          <div className="site-footer__col">
            <span className="site-footer__label">SERVİSLER</span>
            <a href="#services">Kurumsal Web Sitesi</a>
            <a href="#services">UI/UX Tasarım</a>
            <a href="#services">CMS Entegrasyonu</a>
            <a href="#services">Performans</a>
          </div>

          <div className="site-footer__col">
            <span className="site-footer__label">İLETİŞİM</span>
            <a href="mailto:info@seglead.com">info@seglead.com</a>
            <span>İstanbul, Türkiye</span>
            <span>Pzt — Cmt</span>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom container">
        <span>© 2026 SEGLEAD</span>
        <span>Premium dijital deneyimler</span>
      </div>
    </footer>
  );
}