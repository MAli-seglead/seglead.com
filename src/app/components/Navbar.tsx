"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Hizmetler", href: "#services" },
    { name: "İşler", href: "#work" },
    { name: "Fiyatlar", href: "#pricing" },
  ];

  return (
    <>
      <header className="site-header-fixed">
        <div className="header-inner-container">
          {/* Brand Logo */}
          <Link href="/" className="brand-logo blend-target" onClick={() => setIsOpen(false)}>
            SEGLEAD.
          </Link>

          {/* Desktop Links */}
          <div className="desktop-menu hide-on-mobile">
            {navLinks.map((link, i) => (
              <Link key={i} href={link.href} className="menu-link blend-target">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="header-actions">
            <Link href="#contact" className="action-btn blend-target hide-on-mobile">
              İLETİŞİME GEÇ
            </Link>
            
            {/* Mobile Toggle Button */}
            <button 
              className="mobile-toggle blend-target" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className={`hamburger-lines ${isOpen ? "open" : ""}`}>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Overlay Menu */}
      <div className={`fullscreen-mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-menu-wrapper">
          {navLinks.map((link, i) => (
            <Link 
              key={i} 
              href={link.href} 
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: `${isOpen ? 0.15 + (i * 0.1) : 0}s` }}
            >
              {link.name}
            </Link>
          ))}
          <div className="mobile-separator" style={{ transitionDelay: `${isOpen ? 0.45 : 0}s` }} />
          <Link 
            href="#contact" 
            className="mobile-nav-link cta-mobile"
            onClick={() => setIsOpen(false)}
            style={{ transitionDelay: `${isOpen ? 0.55 : 0}s` }}
          >
            PROJEYİ BAŞLAT ✦
          </Link>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* Container strictly transparent. Renamed classes to bypass globals.css conflicts */
        .site-header-fixed {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100px;
          z-index: 1000;
          background: transparent !important;
          pointer-events: none; 
          display: flex;
          align-items: center;
          mix-blend-mode: normal !important; /* Force override old global CSS */
        }

        .header-inner-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 5vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* The difference blend mode is strictly applied only to the text elements */
        .blend-target {
          pointer-events: auto;
          color: #ffffff !important;
          mix-blend-mode: difference;
          -webkit-mix-blend-mode: difference;
        }

        /* Brand */
        .brand-logo {
          font-size: 1.4rem;
          font-weight: 900 !important;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        /* Desktop Links */
        .desktop-menu {
          display: flex;
          gap: 40px;
          align-items: center;
        }

        .menu-link {
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          position: relative;
          padding: 5px 0;
        }

        .menu-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 1px;
          background-color: #ffffff;
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .menu-link:hover::after {
          width: 100%;
        }

        /* CTA Button */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .action-btn {
          padding: 12px 28px;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .action-btn:hover {
          border-color: #ffffff;
          transform: translateY(-2px);
        }

        /* Mobile Toggle Button */
        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px;
          z-index: 1001;
        }

        .hamburger-lines {
          width: 24px;
          height: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }

        .hamburger-lines span {
          display: block;
          width: 100%;
          height: 2px;
          background-color: #ffffff;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: center;
        }

        .hamburger-lines.open span:first-child {
          transform: translateY(9px) rotate(45deg);
        }

        .hamburger-lines.open span:last-child {
          transform: translateY(-9px) rotate(-45deg);
        }

        /* Mobile Menu Overlay */
        .fullscreen-mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: var(--bg);
          z-index: 999;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0;
          visibility: hidden;
          clip-path: circle(0% at 100% 0);
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .fullscreen-mobile-menu.open {
          opacity: 1;
          visibility: visible;
          clip-path: circle(150% at 100% 0);
        }
        
        .mobile-menu-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
          text-align: center;
        }
        
        .mobile-nav-link {
          font-size: clamp(2rem, 8vw, 3.5rem);
          font-weight: 500;
          color: var(--text);
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .fullscreen-mobile-menu.open .mobile-nav-link {
          opacity: 1;
          transform: translateY(0);
        }

        .mobile-separator {
          width: 0px;
          height: 1px;
          background: var(--border);
          margin: 10px 0;
          transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .fullscreen-mobile-menu.open .mobile-separator {
          width: 100px;
        }

        .cta-mobile {
          font-size: 1.2rem;
          color: var(--accent);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        @media (max-width: 960px) {
          .hide-on-mobile {
            display: none !important;
          }
          .mobile-toggle {
            display: block;
          }
          .site-header-fixed {
            height: 80px;
          }
        }
      `}} />
    </>
  );
}