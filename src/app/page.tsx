import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import Marquee from '@/app/components/Marquee';
import Services from '@/app/components/Services';
import Portfolio from '@/app/components/Portfolio';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}