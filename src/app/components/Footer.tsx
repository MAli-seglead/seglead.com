export default function Footer() {
    return (
      <footer style={{ padding: '100px 40px 40px', borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '60px' }}>
          <div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>SEGLEAD.</h2>
            <p style={{ color: 'var(--text-muted)' }}>Yeni nesil dijital deneyimler.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 300 }}>NAVİGASYON</span>
            <a href="#services" style={{ textDecoration: 'none' }}>Hizmetler</a>
            <a href="#work" style={{ textDecoration: 'none' }}>İşler</a>
            <a href="#pricing" style={{ textDecoration: 'none' }}>Fiyatlar</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 300 }}>İLETİŞİM</span>
            <p>info@seglead.com</p>
            <p>İstanbul, TR</p>
          </div>
        </div>
        <div style={{ marginTop: '80px', display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
          <span>© 2024 SEGLEAD</span>
          <span>DESIGNED BY SEGLEAD</span>
        </div>
      </footer>
    );
  }