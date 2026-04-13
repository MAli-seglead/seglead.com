"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-content", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="contact"
      style={{
        backgroundColor: "var(--bg)",
        padding: "120px var(--section-x)",
        position: "relative",
        borderTop: "1px solid var(--border)",
        overflow: "hidden",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(var(--accent) 1px, transparent 1px)",
          opacity: 0.1,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      <div
        className="footer-content"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span
          style={{
            color: "var(--accent)",
            letterSpacing: "0.6em",
            fontSize: "0.7rem",
            fontWeight: 700,
          }}
        >
          GET_IN_TOUCH
        </span>

        <h2
          style={{
            fontSize: "clamp(2.4rem, 7vw, 6rem)",
            color: "var(--text)",
            fontWeight: 500,
            lineHeight: 1,
            marginTop: "30px",
            marginBottom: 0,
            WebkitFontSmoothing: "antialiased",
          }}
        >
          VİZYONUNUZU
          <br />
          <span style={{ color: "var(--accent)" }}>BİRLİKTE</span> KODLAYALIM.
        </h2>

        <div className="contact-actions">
          <a href="mailto:hello@seglead.com" className="lux-btn">
            PROJEYİ BAŞLAT
          </a>
        </div>
      </div>

      <style jsx>{`
        .contact-actions {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 56px;
        }

        .lux-btn {
          display: inline-block;
          padding: 18px 42px;
          background: var(--accent);
          color: var(--bg);
          font-weight: 800;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .lux-btn:hover {
          transform: scale(1.04);
          box-shadow: 0 10px 28px rgba(93, 211, 182, 0.18);
        }

        @media (max-width: 768px) {
          .contact-actions {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }

          .lux-btn {
            width: 100%;
            max-width: 320px;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}