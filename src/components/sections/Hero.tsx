import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '../../data';
import { ArrowRight, Code2 } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, scale: 0.8, filter: "blur(10px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.5, ease: "power3.out", delay: 0.5 }
      );
    }
  }, []);

  return (
    <section id="hero" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-20">
      
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gradient-to-t from-[#050b14] via-transparent to-transparent pb-12 sm:pb-24">
        
        <div className="flex flex-col items-center text-center max-w-4xl px-6 mt-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/50 glass px-4 py-2"
          >
            <Code2 size={16} className="text-brand" />
            <span className="text-sm font-medium text-gray-300">Desarrollo Web Premium</span>
          </motion.div>
          
          <h1
            ref={titleRef}
            className="mb-6 text-4xl font-black tracking-tighter text-white md:text-6xl lg:text-7xl neon-text opacity-0"
          >
            PALMYRA <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">DIGITAL STUDIO</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-10 max-w-2xl text-base text-gray-400 md:text-lg"
          >
            Creamos páginas web profesionales que explican tu oferta, generan confianza y convierten visitas en oportunidades de negocio. Diseño moderno, rápido y adaptado a móviles.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#calculadora"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-brand px-8 py-4 font-bold text-white transition-all hover:scale-105 neon-glow"
            >
              <span className="relative z-10">Solicitar Presupuesto</span>
              <ArrowRight size={20} className="relative z-10 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-light to-brand opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 glass px-8 py-4 font-bold text-white transition-all hover:bg-white/10"
            >
              Ver Servicios
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
