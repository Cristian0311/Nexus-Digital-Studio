import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolio, WHATSAPP_URL } from '../../data';
import { ArrowRight, CheckCircle2, X, Target, Star, Check } from 'lucide-react';

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<typeof portfolio[0] | null>(null);

  return (
    <section id="portafolio" className="relative py-24 z-10 bg-[#02040a]/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-black text-white md:text-5xl neon-text"
          >
            Casos de <span className="text-brand">Éxito</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-gray-400"
          >
            Explora algunos de nuestros proyectos más recientes y descubre cómo podemos ayudarte.
          </motion.p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {portfolio.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-3xl glass-card border-white/10 p-2 flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden rounded-2xl md:h-80">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02040a]/90 via-[#02040a]/40 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="mb-2 inline-block rounded-full bg-brand/20 border border-brand/50 px-3 py-1 text-xs font-semibold tracking-wide text-brand-light backdrop-blur-md">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-6 grid grid-cols-2 gap-3">
                  {item.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 size={16} className="text-brand" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto border-t border-white/10 pt-6">
                  <div className="flex justify-between gap-8 mb-6">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Inversión aprox.</p>
                      <p className="text-xl font-bold text-white">~ {item.price} USD</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Desarrollo</p>
                      <p className="text-xl font-bold text-white">{item.time}</p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="group inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-8 py-3 text-sm font-bold text-white transition-all hover:bg-brand hover:border-brand hover:shadow-[0_0_15px_rgba(8,109,102,0.3)]"
                    >
                      Ver Detalles <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-[#050b14] border border-white/10 shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-brand"
              >
                <X size={20} />
              </button>

              <div className="relative h-48 w-full shrink-0 md:h-auto md:w-2/5">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-[#050b14]/50 to-transparent md:bg-gradient-to-r md:from-transparent md:via-[#050b14]/20 md:to-[#050b14]" />
              </div>

              <div className="p-6 sm:p-8 md:w-3/5 flex flex-col">
                <h3 className="text-3xl font-bold text-white neon-text mb-4">{selectedItem.title}</h3>
                
                <p className="mb-6 text-gray-300 leading-relaxed">{selectedItem.description}</p>
                
                <div className="mb-8 flex-1 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">Ideal Para</h4>
                    <ul className="space-y-3">
                      {selectedItem.idealFor.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                            <Target size={12} />
                          </div>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">Beneficios</h4>
                    <ul className="space-y-3">
                      {selectedItem.benefits.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                            <Star size={12} />
                          </div>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">Características</h4>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {selectedItem.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/5 text-white border border-white/10">
                          <Check size={12} />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-white/10 pt-6">
                  <div className="flex w-full sm:w-auto justify-between gap-8">
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Inversión Base</span>
                      <span className="text-xl font-bold text-white">~ {selectedItem.price} USD</span>
                    </div>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Tiempo Est.</span>
                      <span className="text-xl font-bold text-white">{selectedItem.time}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 w-full sm:w-auto">
                    <a
                      href={`${WHATSAPP_URL}?text=Hola%2C%20me%20interesa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20${encodeURIComponent(selectedItem.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 sm:flex-none items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-4 font-bold text-white transition-all hover:bg-[#20bd5a]"
                    >
                      WhatsApp
                    </a>
                    <button
                      onClick={() => {
                        setSelectedItem(null);
                        const calc = document.getElementById('calculadora');
                        if (calc) calc.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="flex flex-1 sm:flex-none items-center justify-center gap-2 rounded-xl bg-brand px-4 py-4 font-bold text-white transition-all hover:bg-brand-light neon-glow"
                    >
                      Cotizar Proyecto <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
