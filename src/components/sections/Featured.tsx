import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, X, Check, Target } from 'lucide-react';
import { WHATSAPP_URL } from '../../data';

const featuredItems = [
  {
    id: "featured-1",
    title: "Página Web para Negocios",
    subtitle: "Lo más pedido",
    description: "Atrae nuevos clientes y promociona tus servicios 24/7 con una landing page optimizada y profesional. Perfecta para consultores, clínicas, y negocios locales.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3",
    tags: ["Captación de Leads", "Diseño Responsive", "Botón WhatsApp"],
    price: "60 - 300",
    time: "3-5 días",
    features: ["Diseño de alta conversión", "Formulario de contacto", "Integración con redes", "Optimizado para móviles"],
    idealFor: ["Emprendedores", "Consultores", "Negocios locales"],
    benefits: ["Mayor captación de prospectos", "Presencia profesional 24/7", "Fácil contacto por WhatsApp"],
    href: "#calculadora"
  },
  {
    id: "featured-2",
    title: "Sistema de Inventario + Ventas",
    subtitle: "El favorito de comercios",
    description: "Controla tu stock, registra tus ventas y gestiona tus productos desde cualquier lugar. Una solución completa para administrar tu comercio de forma eficiente.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3",
    tags: ["Control de Stock", "Reportes en Tiempo Real", "Facturación"],
    price: "150 - 800",
    time: "2-4 semanas",
    features: ["Control de inventario en la nube", "Módulo de ventas y facturación", "Reportes de ganancias", "Gestión de usuarios"],
    idealFor: ["Tiendas físicas", "Distribuidores", "Pequeñas empresas"],
    benefits: ["Evita pérdidas de stock", "Conoce tus ganancias reales", "Trabaja desde cualquier lugar"],
    href: "#calculadora"
  },
  {
    id: "featured-3",
    title: "Calculadora Solar Inteligente",
    subtitle: "Innovación y Sostenibilidad",
    description: "App que analiza el consumo eléctrico del hogar y calcula exactamente cuántos paneles solares (Wh), inversores y baterías necesitas.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3",
    tags: ["Eficiencia Energética", "Cálculo de Paneles", "Cotizador Automatizado"],
    price: "300 - 600",
    time: "2-3 semanas",
    features: ["Cálculo preciso de Wh", "Recomendación de equipos", "Generación de PDF", "Base de datos de paneles"],
    idealFor: ["Instaladores solares", "Empresas de energía", "Consultores energéticos"],
    benefits: ["Agiliza las ventas", "Presupuestos en segundos", "Imagen altamente profesional"],
    href: "#calculadora"
  }
];

export default function Featured() {
  const [selectedItem, setSelectedItem] = useState<typeof featuredItems[0] | null>(null);

  return (
    <section className="relative py-24 z-10 bg-gradient-to-b from-[#02040a] to-[#050b14]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-2 text-sm font-semibold text-brand mb-4 border border-brand/20"
          >
            <Star size={16} fill="currentColor" />
            <span>Los Favoritos de Nuestros Clientes</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-black text-white md:text-5xl neon-text"
          >
            Servicios <span className="text-brand">Destacados</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-gray-400"
          >
            Descubre las soluciones tecnológicas más elegidas por emprendedores y empresas para escalar al siguiente nivel.
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {featuredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-[#050b14] border border-white/10 shadow-2xl transition-all hover:border-brand/50 hover:shadow-[0_0_30px_rgba(8,109,102,0.15)]"
            >
              <div className="relative h-64 w-full overflow-hidden sm:h-72">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-[#050b14]/40 to-transparent" />
                <div className="absolute top-4 left-4 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                  {item.subtitle}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8 relative z-10 -mt-12 bg-gradient-to-b from-transparent to-[#050b14]">
                <h3 className="mb-3 text-3xl font-bold text-white neon-text">{item.title}</h3>
                <p className="mb-6 flex-1 text-gray-300 leading-relaxed text-sm sm:text-base">{item.description}</p>
                
                <div className="mb-6 flex items-center justify-between border-t border-white/10 pt-4">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Aprox.</p>
                      <p className="font-bold text-white">~ {item.price} USD</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Tiempo</p>
                      <p className="font-bold text-white">{item.time}</p>
                    </div>
                </div>

                <div className="mb-8 flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-xs font-medium text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex justify-center">
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="group inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-8 py-3 text-sm font-bold text-white transition-all hover:bg-brand hover:border-brand hover:shadow-[0_0_15px_rgba(8,109,102,0.3)]"
                  >
                    Ver Detalles <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && createPortal(
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
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
                      Cotizar <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>,
          document.body
        )}
      </AnimatePresence>
    </section>
  );
}
