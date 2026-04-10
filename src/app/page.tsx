import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import Marquee from '@/app/components/Marquee';
import Services from '@/app/components/Services';
import Portfolio from '@/app/components/Portfolio';
import Footer from '@/app/components/Footer';
import ValueProp from './components/ValueProp';
import Pricing from './components/Pricing';
import Why from './components/Why';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Feature Grid  <Marquee /> */}
        <ValueProp />
        <Services />
        <Portfolio /> 
        <Why />
        <Pricing />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}