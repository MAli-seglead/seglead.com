"use client";
import gsap from "gsap";
import { useEffect } from "react";

export default function Marquee() {
  useEffect(() => {
    gsap.to(".marquee-content", {
      xPercent: -50,
      repeat: -1,
      duration: 20,
      ease: "none",
    });
  }, []);

  return (
    <div style={{ 
      width: '100%', overflow: 'hidden', borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)', padding: '30px 0',
      backgroundColor: 'var(--bg)', whiteSpace: 'nowrap'
    }}>
      <div className="marquee-content" style={{ display: 'inline-block', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, color: 'var(--text)' }}>
        NEXT.JS • GSAP • VERCEL • UI/UX • SEO • MODERN WEB •&nbsp;
        NEXT.JS • GSAP • VERCEL • UI/UX • SEO • MODERN WEB •&nbsp;
      </div>
    </div>
  );
}