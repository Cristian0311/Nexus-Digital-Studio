import Hero from '../components/sections/Hero';
import Featured from '../components/sections/Featured';
import Services from '../components/sections/Services';
import TechStack from '../components/sections/TechStack';
import Portfolio from '../components/sections/Portfolio';
import Calculator from '../components/sections/Calculator';
import Process from '../components/sections/Process';
import Payment from '../components/sections/Payment';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Stats from '../components/sections/Stats';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Featured />
      <TechStack />
      <Services />
      <Portfolio />
      <Stats />
      <Calculator />
      <Process />
      <Payment />
      <WhyChooseUs />
      <FAQ />
      <Contact />
    </main>
  );
}
