import ScrollReveal from '@/app/components/ScrollReveal';

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ padding: '120px 40px', maxWidth: '1600px', margin: '0 auto' }}>
      
      <ScrollReveal>
        <div style={{ width: '100%', maxWidth: '1200px', height: '1px', backgroundColor: 'var(--border)', marginBottom: '80px' }}></div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>Seçilmiş İşler</h2>
        </div>
      </ScrollReveal>

      <div className="border-t border-l" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', maxWidth: '1200px' }}>
        
        {/* Wrap each project box */}
        <ScrollReveal delay={0.1}>
          <div className="border-b border-r" style={{ aspectRatio: '4/3', backgroundColor: '#161616', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>Proje 01</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="border-b border-r" style={{ aspectRatio: '4/3', backgroundColor: '#161616', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>Proje 02</span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}