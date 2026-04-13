"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

const navItems = [
  { label: "Hizmetler", href: "#services" },
  { label: "İşler", href: "#portfolio" },
  { label: "Fiyatlar", href: "#pricing" },
  { label: "İletişim", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const mobileLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      ".nav-container",
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "expo.out", delay: 0.2 }
    );

    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setMobileOpen(false);
    }
  }, [isMobile]);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const links = mobileLinksRef.current.filter(Boolean);

    if (mobileOpen && isMobile) {
      document.body.style.overflow = "hidden";

      gsap.set(overlay, { display: "block", pointerEvents: "auto" });
      gsap.set(links, { opacity: 0, y: 26 });
      gsap.set(".mobile-overlay-cta", { opacity: 0, y: 18, scale: 0.98 });

      const tl = gsap.timeline();

      tl.fromTo(
        overlay,
        { opacity: 0, clipPath: "inset(0 0 100% 0)" },
        {
          opacity: 1,
          clipPath: "inset(0 0 0% 0)",
          duration: 0.6,
          ease: "expo.inOut",
        }
      )
        .to(
          links,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.15"
        )
        .to(
          ".mobile-overlay-cta",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
            ease: "power3.out",
          },
          "-=0.18"
        );
    } else {
      document.body.style.overflow = "";

      if (overlay.style.display === "block") {
        gsap.to(overlay, {
          opacity: 0,
          clipPath: "inset(0 0 100% 0)",
          duration: 0.45,
          ease: "expo.inOut",
          onComplete: () => {
            gsap.set(overlay, { display: "none", pointerEvents: "none" });
          },
        });
      }
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, isMobile]);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <>
      <nav
        className="nav-container"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          padding: isScrolled
            ? isMobile
              ? "12px 5vw"
              : "18px 5vw"
            : isMobile
              ? "12px 5vw"
              : "34px 5vw",
          transition: "all 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
          mixBlendMode: "difference",
        }}
      >
        <div className="nav-inner">
          <Link href="/" className="logo">
            SEGLEAD<span>.</span>
          </Link>

          {!isMobile && (
            <div className="desktop-nav">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} className="nav-link">
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          )}

          <div className="right-side">
            {!isMobile && (
              <Link href="#contact" className="cta-desktop">
                <span>PROJEYİ BAŞLAT ✦</span>
              </Link>
            )}

            {isMobile && (
              <button
                type="button"
                aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
                aria-expanded={mobileOpen}
                className={`mobile-menu-button ${mobileOpen ? "open" : ""}`}
                onClick={() => setMobileOpen((prev) => !prev)}
              >
                <span />
                <span />
                <span />
              </button>
            )}
          </div>
        </div>

        <style jsx>{`
          .nav-inner {
            max-width: 1600px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: auto 1fr auto;
            align-items: center;
            column-gap: 24px;
          }

          .logo {
            font-size: 1.9rem;
            font-weight: 800;
            letter-spacing: -0.05em;
            color: #fff;
            text-decoration: none;
            line-height: 1;
            white-space: nowrap;
          }

          .logo span {
            color: #5dd3b6;
          }

          .desktop-nav {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 42px;
          }

          .nav-link {
            position: relative;
            color: #fff;
            font-size: 0.95rem;
            font-weight: 500;
            opacity: 0.62;
            text-decoration: none;
            padding: 6px 2px 10px;
            transition:
              opacity 0.28s ease,
              transform 0.28s ease,
              color 0.28s ease,
              letter-spacing 0.28s ease;
          }

          .nav-link span {
            display: inline-block;
            transition: transform 0.28s ease, color 0.28s ease;
          }

          .nav-link::before {
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            width: 42px;
            height: 42px;
            border-radius: 999px;
            background: rgba(93, 211, 182, 0.16);
            filter: blur(14px);
            transform: translate(-50%, -52%) scale(0.6);
            opacity: 0;
            transition: opacity 0.3s ease, transform 0.3s ease;
            pointer-events: none;
          }

          .nav-link::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            background: linear-gradient(
              90deg,
              transparent 0%,
              rgba(93, 211, 182, 0.95) 20%,
              rgba(93, 211, 182, 0.95) 80%,
              transparent 100%
            );
            transform: scaleX(0);
            transform-origin: center;
            opacity: 0;
            transition:
              transform 0.34s cubic-bezier(0.16, 1, 0.3, 1),
              opacity 0.34s ease;
          }

          .nav-link:hover {
            opacity: 1;
            color: #5dd3b6;
            transform: translateY(-1px);
            letter-spacing: 0.01em;
          }

          .nav-link:hover span {
            transform: translateY(-1px);
            color: #5dd3b6;
          }

          .nav-link:hover::before {
            opacity: 1;
            transform: translate(-50%, -52%) scale(1);
          }

          .nav-link:hover::after {
            transform: scaleX(1);
            opacity: 1;
          }

          .right-side {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 26px;
          }

          .cta-desktop {
            font-size: 0.8rem;
            letter-spacing: 0.16em;
            color: #5dd3b6;
            text-decoration: none;
            position: relative;
            padding: 6px 0 10px;
            white-space: nowrap;
            transition:
              opacity 0.28s ease,
              transform 0.28s ease,
              letter-spacing 0.28s ease,
              color 0.28s ease;
          }

          .cta-desktop span {
            display: inline-block;
            transition: transform 0.28s ease;
          }

          .cta-desktop::before {
            content: "";
            position: absolute;
            inset: 50% auto auto 50%;
            width: 48px;
            height: 48px;
            border-radius: 999px;
            background: rgba(93, 211, 182, 0.08);
            filter: blur(14px);
            transform: translate(-50%, -50%) scale(0.7);
            opacity: 0;
            transition: opacity 0.3s ease, transform 0.3s ease;
            pointer-events: none;
          }

          .cta-desktop::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            background: linear-gradient(
              90deg,
              transparent 0%,
              rgba(93, 211, 182, 0.95) 20%,
              rgba(93, 211, 182, 0.95) 80%,
              transparent 100%
            );
            transform: scaleX(0.4);
            transform-origin: center;
            opacity: 0.65;
            transition: transform 0.3s ease, opacity 0.3s ease;
          }

          .cta-desktop:hover {
            transform: translateY(-1px);
            letter-spacing: 0.19em;
            opacity: 1;
            color: #8ce5cf;
          }

          .cta-desktop:hover span {
            transform: translateY(-1px);
          }

          .cta-desktop:hover::before {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }

          .cta-desktop:hover::after {
            transform: scaleX(1);
            opacity: 1;
          }

          .mobile-menu-button {
            width: 40px;
            height: 40px;
            position: relative;
            border: none;
            background: transparent;
            cursor: pointer;
            padding: 0;
            z-index: 1400;
          }

          .mobile-menu-button span {
            position: absolute;
            left: 50%;
            width: 17px;
            height: 1.6px;
            background: #fff;
            border-radius: 999px;
            transform: translateX(-50%);
            transition:
              top 0.28s ease,
              transform 0.28s ease,
              opacity 0.28s ease;
          }

          .mobile-menu-button span:nth-child(1) {
            top: 12px;
          }

          .mobile-menu-button span:nth-child(2) {
            top: 19px;
          }

          .mobile-menu-button span:nth-child(3) {
            top: 26px;
          }

          .mobile-menu-button.open span:nth-child(1) {
            top: 19px;
            transform: translateX(-50%) rotate(45deg);
          }

          .mobile-menu-button.open span:nth-child(2) {
            opacity: 0;
          }

          .mobile-menu-button.open span:nth-child(3) {
            top: 19px;
            transform: translateX(-50%) rotate(-45deg);
          }

          @media (max-width: 768px) {
            .nav-inner {
              grid-template-columns: 1fr auto;
              column-gap: 10px;
            }

            .logo {
              font-size: 1.45rem;
              letter-spacing: -0.04em;
            }

            .right-side {
              width: 40px;
              gap: 0;
            }
          }

          @media (max-width: 420px) {
            .logo {
              font-size: 1.32rem;
            }
          }
        `}</style>
      </nav>

      <div
        ref={overlayRef}
        className="fullscreen-mobile-menu"
        style={{
          display: "none",
          pointerEvents: "none",
        }}
      >
        <div className="mobile-grid" />
        <div className="mobile-glow mobile-glow-1" />
        <div className="mobile-glow mobile-glow-2" />

        <div className="mobile-overlay-inner">
          <div className="mobile-overlay-top">
            <Link href="/" className="mobile-overlay-logo" onClick={closeMobileMenu}>
              SEGLEAD<span>.</span>
            </Link>

            <button
              type="button"
              aria-label="Menüyü kapat"
              className="mobile-close"
              onClick={closeMobileMenu}
            >
              <span />
              <span />
            </button>
          </div>

          <div className="mobile-overlay-center">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                ref={(el) => {
                  mobileLinksRef.current[index] = el;
                }}
                onClick={closeMobileMenu}
                className="mobile-overlay-link"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={closeMobileMenu}
              className="mobile-overlay-cta"
            >
              PROJEYİ BAŞLAT ✦
            </Link>
          </div>
        </div>

        <style jsx>{`
          .fullscreen-mobile-menu {
            position: fixed;
            inset: 0;
            z-index: 1300;
            background:
              radial-gradient(circle at 20% 18%, rgba(93, 211, 182, 0.08), transparent 28%),
              radial-gradient(circle at 82% 22%, rgba(93, 211, 182, 0.06), transparent 24%),
              linear-gradient(180deg, #050505 0%, #080808 100%);
            overflow: hidden;
          }

          .mobile-grid {
            position: absolute;
            inset: 0;
            opacity: 0.08;
            background-image:
              linear-gradient(rgba(255, 255, 227, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 227, 0.08) 1px, transparent 1px);
            background-size: 22vw 22vw;
          }

          .mobile-glow {
            position: absolute;
            border-radius: 999px;
            filter: blur(40px);
            pointer-events: none;
          }

          .mobile-glow-1 {
            width: 220px;
            height: 220px;
            top: -40px;
            right: -40px;
            background: rgba(93, 211, 182, 0.16);
          }

          .mobile-glow-2 {
            width: 180px;
            height: 180px;
            bottom: 14%;
            left: -50px;
            background: rgba(93, 211, 182, 0.08);
          }

          .mobile-overlay-inner {
            position: relative;
            z-index: 2;
            min-height: 100vh;
            padding: 20px 24px 32px;
            display: flex;
            flex-direction: column;
          }

          .mobile-overlay-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .mobile-overlay-logo {
            color: var(--text);
            text-decoration: none;
            font-size: 1.75rem;
            font-weight: 800;
            letter-spacing: -0.05em;
          }

          .mobile-overlay-logo span {
            color: var(--accent);
          }

          .mobile-close {
            width: 44px;
            height: 44px;
            border: none;
            background: transparent;
            position: relative;
            padding: 0;
            cursor: pointer;
          }

          .mobile-close span {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 18px;
            height: 1.6px;
            background: var(--text);
            border-radius: 999px;
          }

          .mobile-close span:first-child {
            transform: translate(-50%, -50%) rotate(45deg);
          }

          .mobile-close span:last-child {
            transform: translate(-50%, -50%) rotate(-45deg);
          }

          .mobile-overlay-center {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 18px;
            text-align: center;
            padding: 20px 0 40px;
          }

          .mobile-overlay-link {
            color: var(--text);
            text-decoration: none;
            font-size: clamp(2.3rem, 9vw, 4rem);
            letter-spacing: -0.05em;
            line-height: 1.02;
            transition:
              transform 0.25s ease,
              color 0.25s ease,
              opacity 0.25s ease;
          }

          .mobile-overlay-link:hover,
          .mobile-overlay-link:active {
            transform: translateY(-2px);
            color: var(--accent);
          }

          .mobile-overlay-cta {
            margin-top: 18px;
            color: var(--accent);
            text-decoration: none;
            font-size: 0.95rem;
            letter-spacing: 0.16em;
            padding: 14px 20px;
            border: 1px solid rgba(93, 211, 182, 0.22);
            border-radius: 999px;
            background: rgba(93, 211, 182, 0.06);
            transition:
              transform 0.28s ease,
              background 0.28s ease,
              border-color 0.28s ease,
              letter-spacing 0.28s ease;
          }

          .mobile-overlay-cta:hover,
          .mobile-overlay-cta:active {
            transform: translateY(-2px);
            background: rgba(93, 211, 182, 0.1);
            border-color: rgba(93, 211, 182, 0.4);
            letter-spacing: 0.18em;
          }
        `}</style>
      </div>
    </>
  );
}