"use client";

import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="nav-container">
      
      {/* Logo */}
      <div className="nav-item" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.03em' }}>
        <Link href="/">Seglead.</Link>
      </div>

      {/* Navigation Links */}
      <div style={{
        display: 'flex', 
        gap: '10px', /* Smaller gap because the boxes need space */
        fontSize: '0.875rem', 
        fontWeight: 300,
        textTransform: 'uppercase'
      }} className="hide-on-mobile">
        <Link href="#services" className="nav-item">Hizmetler</Link>
        <Link href="#portfolio" className="nav-item">İşler</Link>
        <Link href="#pricing" className="nav-item">Fiyatlar</Link>
      </div>

      {/* CTA Button */}
      <Link href="#contact" className="nav-btn-inverted">
        İletişime Geç
      </Link>
      
    </div>
  );
}