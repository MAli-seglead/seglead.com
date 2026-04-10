"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import Link from 'next/link';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="nav-container">
      <Link href="/" className="nav-item" style={{ fontSize: '1.4rem', fontWeight: 900, color: '#FFFFFF' }}>
        SEGLEAD.
      </Link>

      <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }} className="hide-on-mobile">
        <Link href="#services" className="nav-item">Hizmetler</Link>
        <Link href="#work" className="nav-item">İşler</Link>
        <Link href="#pricing" className="nav-item">Fiyatlar</Link>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="nav-item"
            style={{ background: 'none', border: '1px solid #FFFFFF', padding: '10px', cursor: 'pointer', justifyContent: 'center' }}
          >
            {theme === "dark" ? <Sun size={18} strokeWidth={2} color="white" /> : <Moon size={18} strokeWidth={2} color="white" />}
          </button>
        )}
        <Link href="#contact" className="nav-btn-inverted" style={{ fontSize: '0.7rem' }}>
          İLETİŞİME GEÇ
        </Link>
      </div>
    </nav>
  );
}