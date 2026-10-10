import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import Services from '../components/sections/Services';
import CRMShowcase from '../components/sections/CRMShowcase';
import Portfolio from '../components/sections/Portfolio';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Process from '../components/sections/Process';
import TechStack from '../components/sections/TechStack';
import Pricing from '../components/sections/Pricing';
import Calculator from '../components/sections/Calculator';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <Hero />
      <Stats />
      <Services />
      <CRMShowcase />
      <Portfolio />
      <WhyChooseUs />
      <Process />
      <TechStack />
      <Pricing />
      <Calculator />
      <FAQ />
      <Contact />
    </main>
  );
}
