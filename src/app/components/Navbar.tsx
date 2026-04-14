'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Hizmetler', href: '#services' },
  { label: 'İşler', href: '/portfilo' },
  { label: 'Fiyatlar', href: '#/' },
  { label: 'İletişim', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav-scrolled' : ''} ${menuOpen ? 'nav-hidden-on-mobile-open' : ''}`}>
        <div className="nav-inner">
          <Link href="/" className="nav-logo" onClick={closeMenu}>
            <span className="logo-glow" />
            <span className="logo-text">SEGLEAD.</span>
          </Link>

          <div className="nav-links desktop-only">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                <span>{item.label}</span>
              </a>
            ))}

            <a href="form" className="nav-link nav-link-cta">
              <span>Projeyi Başlat</span>
            </a>
          </div>

          <button
            className={`menu-toggle mobile-only ${menuOpen ? 'is-open' : ''}`}
            aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-bg" />

        <div className="mobile-menu-inner">
          <div className="mobile-menu-top">
            <Link href="/" className="mobile-logo" onClick={closeMenu}>
              SEGLEAD.
            </Link>

            <button
              className="mobile-close"
              aria-label="Menüyü kapat"
              onClick={closeMenu}
              type="button"
            >
              <span />
              <span />
            </button>
          </div>

          <div className="mobile-menu-center">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="mobile-link"
                onClick={closeMenu}
                style={{ transitionDelay: `${menuOpen ? 90 + index * 70 : 0}ms` }}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="mobile-cta"
              onClick={closeMenu}
              style={{ transitionDelay: `${menuOpen ? 380 : 0}ms` }}
            >
              PROJEYİ BAŞLAT ✦
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 20px 0;
          background: transparent;
          transition:
            padding 0.3s ease,
            opacity 0.25s ease;
          mix-blend-mode: difference;
        }

        .nav-scrolled {
          padding: 14px 0;
        }

        .nav-inner {
          width: min(1600px, 100%);
          margin: 0 auto;
          padding: 0 5vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .nav-logo {
          position: relative;
          display: inline-flex;
          align-items: center;
          min-height: 44px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .logo-glow {
          position: absolute;
          left: -12px;
          top: 50%;
          width: 120px;
          height: 44px;
          transform: translateY(-50%);
          background: radial-gradient(
            circle at 30% 50%,
            rgba(93, 211, 182, 0.18),
            rgba(93, 211, 182, 0.05) 42%,
            transparent 75%
          );
          filter: blur(14px);
          pointer-events: none;
          opacity: 0.3;
        }

        .logo-text {
          position: relative;
          font-size: 1.16rem;
          letter-spacing: 0.06em;
          font-weight: 500;
          color: #fff;
          transition:
            opacity 0.3s ease,
            transform 0.3s ease,
            letter-spacing 0.3s ease;
        }

        .nav-logo:hover .logo-text {
          opacity: 0.96;
          transform: translateY(-1px);
          letter-spacing: 0.072em;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-left: auto;
        }

        .nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          color: #fff;
          font-size: 0.96rem;
          font-weight: 400;
          letter-spacing: -0.01em;
          opacity: 1;
          transition:
            transform 0.3s ease,
            opacity 0.3s ease;
        }

        .nav-link span {
          position: relative;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 8px;
          width: 0;
          height: 1px;
          transform: translateX(-50%);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.96),
            transparent
          );
          opacity: 0;
          transition:
            width 0.32s ease,
            opacity 0.32s ease;
        }

        .nav-link:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }

        .nav-link:hover::before {
          width: 100%;
          opacity: 1;
        }

        .nav-link-cta::before {
          width: 34%;
          opacity: 0.9;
        }

        .nav-link-cta:hover::before {
          width: 100%;
        }

        .menu-toggle {
          position: relative;
          width: 48px;
          height: 48px;
          padding: 0;
          border: 0;
          background: transparent;
          display: none;
          align-items: center;
          justify-content: center;
          margin-left: auto;
          flex-shrink: 0;
        }

        .menu-toggle span {
          position: absolute;
          width: 22px;
          height: 1.5px;
          border-radius: 999px;
          background: var(--text);
          transition:
            transform 0.32s ease,
            opacity 0.22s ease,
            top 0.32s ease;
        }

        .menu-toggle span:nth-child(1) {
          top: 17px;
        }

        .menu-toggle span:nth-child(2) {
          top: 23px;
        }

        .menu-toggle span:nth-child(3) {
          top: 29px;
        }

        .menu-toggle.is-open span:nth-child(1) {
          top: 23px;
          transform: rotate(45deg);
        }

        .menu-toggle.is-open span:nth-child(2) {
          opacity: 0;
        }

        .menu-toggle.is-open span:nth-child(3) {
          top: 23px;
          transform: rotate(-45deg);
        }

        .mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 2000;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.32s ease;
        }

        .mobile-menu-open {
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-menu-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 78% 16%, rgba(93, 211, 182, 0.09), transparent 24%),
            radial-gradient(circle at 18% 84%, rgba(93, 211, 182, 0.05), transparent 22%),
            linear-gradient(180deg, rgba(3, 7, 7, 0.98), rgba(2, 2, 2, 0.995));
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }

        .mobile-menu-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
            circle,
            rgba(255, 255, 227, 0.08) 0.8px,
            transparent 0.9px
          );
          background-size: 56px 56px;
          background-position: center top;
          opacity: 0.22;
          mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 12%,
            black 88%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 12%,
            black 88%,
            transparent 100%
          );
        }

        .mobile-menu-inner {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          min-height: 100dvh;
          padding: 22px 24px 34px;
        }

        .mobile-menu-top {
          position: relative;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .mobile-logo {
          position: relative;
          z-index: 3;
          color: var(--text);
          font-size: 1.08rem;
          letter-spacing: 0.05em;
          font-weight: 500;
          text-decoration: none;
          mix-blend-mode: normal;
          isolation: isolate;
          opacity: 1;
        }

        .mobile-close {
          position: relative;
          z-index: 3;
          width: 44px;
          height: 44px;
          border: 0;
          background: transparent;
          padding: 0;
          appearance: none;
          -webkit-appearance: none;
        }

        .mobile-close span {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 22px;
          height: 1.5px;
          border-radius: 999px;
          background: var(--text);
        }

        .mobile-close span:first-child {
          transform: translate(-50%, -50%) rotate(45deg);
        }

        .mobile-close span:last-child {
          transform: translate(-50%, -50%) rotate(-45deg);
        }

        .mobile-menu-center {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 22px;
          padding: 40px 0;
        }

        .mobile-link,
        .mobile-cta {
          opacity: 0;
          transform: translateY(18px);
          transition:
            opacity 0.42s ease,
            transform 0.42s ease,
            color 0.3s ease;
          text-decoration: none;
        }

        .mobile-menu-open .mobile-link,
        .mobile-menu-open .mobile-cta {
          opacity: 1;
          transform: translateY(0);
        }

        .mobile-link {
          color: rgba(255, 255, 227, 0.84);
          font-size: clamp(1.6rem, 5vw, 2rem);
          font-weight: 400;
          letter-spacing: -0.03em;
        }

        .mobile-link:hover {
          color: var(--text);
        }

        .mobile-cta {
          margin-top: 8px;
          color: var(--text);
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: -0.02em;
        }

        .mobile-cta:hover {
          color: var(--accent);
        }

        .desktop-only {
          display: flex;
        }

        .mobile-only {
          display: none;
        }

        @media (max-width: 960px) {
          .nav {
            mix-blend-mode: normal;
            padding: 14px 0;
          }

          .nav-hidden-on-mobile-open {
            opacity: 0;
            pointer-events: none;
          }

          .desktop-only {
            display: none;
          }

          .mobile-only {
            display: inline-flex;
          }

          .nav-inner {
            padding: 0 20px;
          }

          .logo-glow {
            display: none;
          }

          .logo-text {
            font-size: 1.05rem;
            color: var(--text);
          }

          .menu-toggle span {
            background: var(--text);
          }
        }
      `}</style>
    </>
  );
}