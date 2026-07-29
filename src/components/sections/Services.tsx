import { motion, AnimatePresence } from 'framer-motion';
import { services, WHATSAPP_URL } from '../../data';
import { ArrowRight, Clock, X, Check, Target, Star } from 'lucide-react';
import { useState } from 'react';

const ServiceCard = ({ service, index, onOpenDetails }: { service: typeof services[0], index: number, onOpenDetails: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex flex-col overflow-hidden rounded-2xl glass-card group transition-all duration-300 hover:border-brand/50 hover:shadow-[0_0_30px_rgba(8,109,102,0.15)]"
    >
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-br from-brand/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" 
      />
      
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={service.image} 
          alt={service.name} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] to-transparent" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-2xl font-bold text-white">{service.name}</h3>
        <p className="mb-6 flex-1 text-sm text-gray-400">{service.description}</p>
        
        <div className="mb-6 rounded-xl bg-white/5 border border-white/10 p-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Inversión aprox.</span>
              <div className="flex items-center gap-1 font-bold text-white">
                <span className="text-lg">~ {service.price} USD</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Tiempo est.</span>
              <div className="flex items-center gap-1 font-medium text-gray-300">
                <Clock size={16} className="text-brand" />
                <span className="text-sm">{service.time}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto flex justify-center">
          <button
            onClick={() => onOpenDetails()}
            className="group inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-8 py-3 text-sm font-bold text-white transition-all hover:bg-brand hover:border-brand hover:shadow-[0_0_15px_rgba(8,109,102,0.3)]"
          >
            Ver Detalles <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="servicios" className="relative py-24 z-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-black text-white md:text-5xl neon-text"
          >
            Nuestros <span className="text-brand">Servicios</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-gray-400"
          >
            Soluciones digitales de alto impacto diseñadas para hacer crecer tu negocio y automatizar tus procesos.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={idx}
              onOpenDetails={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
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
                onClick={() => setSelectedService(null)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-brand"
              >
                <X size={20} />
              </button>

              <div className="relative h-48 w-full shrink-0 md:h-auto md:w-2/5">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.name} 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-[#050b14]/50 to-transparent md:bg-gradient-to-r md:from-transparent md:via-[#050b14]/20 md:to-[#050b14]" />
              </div>

              <div className="p-6 sm:p-8 md:w-3/5 flex flex-col">
                <h3 className="mb-2 text-3xl font-bold text-white neon-text">{selectedService.name}</h3>
                
                <p className="mb-6 text-gray-300 leading-relaxed">{selectedService.description}</p>
                
                <div className="mb-8 flex-1 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">Ideal Para</h4>
                    <ul className="space-y-3">
                      {selectedService.idealFor.map((item, idx) => (
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
                      {selectedService.benefits.map((item, idx) => (
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

                <div className="mb-6">
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">Características Clave</h4>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {selectedService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/5 text-white border border-white/10">
                          <Check size={12} />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-2xl bg-white/5 border border-white/10 p-5 mb-6">
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Inversión aprox.</span>
                    <span className="text-xl font-bold text-brand">~ {selectedService.price} USD</span>
                  </div>
                  <div className="h-px w-full bg-white/10 sm:h-8 sm:w-px" />
                  <div className="sm:text-right">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Tiempo est.</span>
                    <div className="flex items-center gap-2 font-medium text-gray-300">
                      <Clock size={16} className="text-brand" />
                      <span>{selectedService.time}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 w-full sm:w-auto">
                  <a
                    href={`${WHATSAPP_URL}?text=Hola%2C%20me%20interesa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20${encodeURIComponent(selectedService.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 sm:flex-none items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-4 font-bold text-white transition-all hover:bg-[#20bd5a]"
                  >
                    WhatsApp
                  </a>
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      const calc = document.getElementById('calculadora');
                      if (calc) calc.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex flex-1 sm:flex-none items-center justify-center gap-2 rounded-xl bg-brand px-4 py-4 font-bold text-white transition-all hover:bg-brand-light neon-glow"
                  >
                    Cotizar Proyecto <ArrowRight size={20} />
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
