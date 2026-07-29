import { motion } from 'framer-motion';
import { Gem, Code, Rocket, Smartphone, Shield, Scaling, Headphones } from 'lucide-react';

const reasons = [
  { icon: Gem, title: 'Diseño Premium', desc: 'Interfaces modernas, limpias y orientadas a la conversión.' },
  { icon: Code, title: 'Código Limpio', desc: 'Arquitectura escalable y mantenible para el futuro.' },
  { icon: Rocket, title: 'Alta Velocidad', desc: 'Optimización extrema para tiempos de carga < 2s.' },
  { icon: Smartphone, title: 'Responsive 100%', desc: 'Experiencia perfecta en móviles, tablets y escritorio.' },
  { icon: Shield, title: 'Seguridad', desc: 'Protección contra vulnerabilidades y encriptación.' },
  { icon: Scaling, title: 'Escalabilidad', desc: 'Sistemas preparados para crecer junto a tu empresa.' },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 z-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-black text-white md:text-5xl neon-text"
          >
            ¿Por qué <span className="text-brand">Elegirnos</span>?
          </motion.h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group rounded-2xl glass p-8 transition-all hover:bg-brand/5 hover:border-brand/30"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/20 text-brand transition-transform group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                  <Icon size={24} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{reason.title}</h3>
                <p className="text-gray-400">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
