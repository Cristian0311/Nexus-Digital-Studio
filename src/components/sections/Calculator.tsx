import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WHATSAPP_URL } from '../../data';
import { Calculator as CalcIcon, Send, Check, Info } from 'lucide-react';

const options = {
  projectTypes: [
    { 
      id: 'landing', 
      label: 'Landing Page', 
      basePrice: 150, 
      baseTime: 3,
      desc: 'Página de aterrizaje de una sola vista enfocada en convertir visitantes en clientes.',
      extras: [
        { id: 'seo', label: 'SEO Básico', price: 50, time: 2, desc: 'Optimización para que Google te encuentre más fácil.' },
        { id: 'copy', label: 'Copywriting Persuasivo', price: 80, time: 3, desc: 'Textos redactados por expertos para aumentar ventas.' },
        { id: 'analytics', label: 'Google Analytics & Píxeles', price: 40, time: 1, desc: 'Medición de métricas y visitantes en tiempo real.' },
        { id: 'domain', label: 'Soporte y Mantenimiento', price: 60, time: 1, desc: 'Actualizaciones, backups y soporte técnico por 6 meses.' }
      ]
    },
    { 
      id: 'ecommerce', 
      label: 'Tienda Online / Catálogo', 
      basePrice: 400, 
      baseTime: 14,
      desc: 'Plataforma para vender productos por internet las 24 horas del día.',
      extras: [
        { id: 'shipping', label: 'Cotizador de Envíos', price: 100, time: 2, desc: 'Cálculo automático del costo de envío según la zona del cliente.' },
        { id: 'inventory', label: 'Gestión de Inventario Avanzado', price: 150, time: 4, desc: 'Variaciones complejas y alertas de bajo stock.' },
        { id: 'multilang', label: 'Multi-idioma / Multimoneda', price: 200, time: 5, desc: 'Vende internacionalmente en diferentes idiomas y monedas.' },
        { id: 'seo_adv', label: 'SEO Avanzado E-commerce', price: 150, time: 4, desc: 'Posicionamiento específico de productos en buscadores.' }
      ]
    },
    { 
      id: 'system', 
      label: 'Sistema Web / CRM', 
      basePrice: 800, 
      baseTime: 30,
      desc: 'Software a medida para automatizar y gestionar los procesos de tu empresa.',
      extras: [
        { id: 'roles', label: 'Roles y Permisos Múltiples', price: 200, time: 5, desc: 'Control detallado de lo que cada usuario (admin, empleado, cliente) puede ver o hacer.' },
        { id: 'reports', label: 'Reportes y Estadísticas', price: 250, time: 7, desc: 'Generación de gráficos y exportación de datos en PDF o Excel.' },
        { id: 'api', label: 'Integraciones Externas (API)', price: 300, time: 10, desc: 'Conectar el sistema con facturación electrónica, WhatsApp u otros servicios.' },
        { id: 'pwa', label: 'Aplicación Instalable (PWA)', price: 150, time: 5, desc: 'Permite que el sistema se instale como app en móviles o escritorio.' }
      ]
    },
    { 
      id: 'custom', 
      label: 'Otro / A la Medida', 
      basePrice: 500, 
      baseTime: 20,
      desc: 'Proyectos especiales, integraciones, IA, mantenimiento, etc.',
      extras: [
        { id: 'consulting', label: 'Consultoría Técnica', price: 150, time: 3, desc: 'Análisis detallado antes del desarrollo.' },
        { id: 'priority', label: 'Desarrollo Prioritario', price: 300, time: 0, desc: 'Tu proyecto salta a la cima de la cola.' },
        { id: 'advanced_security', label: 'Seguridad Avanzada', price: 200, time: 5, desc: 'Auditorías y protección anti-DDoS.' },
        { id: 'ai_integration', label: 'Integración con IA', price: 400, time: 10, desc: 'Agentes inteligentes o automatización con ChatGPT/Claude.' }
      ]
    }
  ]
};
export default function Calculator() {
  const [selectedType, setSelectedType] = useState(options.projectTypes[0]);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [pages, setPages] = useState(1);
  const [formData, setFormData] = useState({ name: '', details: '' });

  const toggleExtra = (id: string) => {
    setSelectedExtras(prev => 
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    let price = selectedType.basePrice;
    let time = selectedType.baseTime;

    if (!['system', 'custom'].includes(selectedType.id) && pages > 1) {
      price += (pages - 1) * 50;
      time += (pages - 1) * 1;
    }

    selectedExtras.forEach(extId => {
      const extra = selectedType.extras.find(e => e.id === extId);
      if (extra) {
        price += extra.price;
        time += extra.time;
      }
    });

    return { price, time };
  };

  const totals = calculateTotal();

  const handleSend = () => {
    if (!formData.name.trim() || !formData.details.trim()) {
      alert('Por favor, ingresa tu nombre y los detalles del proyecto para poder brindarte una mejor asesoría.');
      return;
    }

    const extrasList = selectedExtras.map(id => selectedType.extras.find(e => e.id === id)?.label).join(', ') || 'Ninguno';
    
    const text = `Hola, mi nombre es *${formData.name}* y me interesa cotizar un proyecto.
    
*Detalles del Proyecto:*
${formData.details}

*Configuración del Cotizador:*
- Tipo: ${selectedType.label}
${!['system', 'custom'].includes(selectedType.id) ? `- Páginas/Secciones: ${pages}\n` : ''}- Extras Seleccionados: ${extrasList}

*Inversión Aproximada:* ~${totals.price} USD
*Tiempo Estimado:* ~${totals.time} días

Quedo atento(a) para más información.`;
    
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(text)}`, '_blank');
  };

  // When changing type, clear extras that don't belong to the new type
  const handleTypeSelect = (type: typeof options.projectTypes[0]) => {
    setSelectedType(type);
    setSelectedExtras([]);
    if (['system', 'custom'].includes(type.id)) setPages(1);
  };

  return (
    <section id="calculadora" className="relative py-24 z-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 flex items-center justify-center gap-4 text-4xl font-black text-white md:text-5xl neon-text"
          >
            <CalcIcon size={40} className="text-brand" />
            Solicitar <span className="text-brand">Presupuesto</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-gray-400"
          >
            Configura tu proyecto, selecciona las herramientas que necesitas y obtén un estimado al instante antes de contactarnos.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-3 glass-card rounded-3xl p-6 lg:p-10 border border-brand/20 shadow-[0_0_30px_rgba(8,109,102,0.1)]"
        >
          <div className="lg:col-span-2 flex flex-col gap-8 pr-0 lg:pr-6">
            
            {/* Step 1: Project Type */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-white flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white text-sm">1</span>
                ¿Qué tipo de proyecto necesitas?
              </h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {options.projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleTypeSelect(type)}
                    className={`relative overflow-hidden rounded-xl border p-4 text-left transition-all ${
                      selectedType.id === type.id 
                        ? 'border-brand bg-brand/10 text-white shadow-[0_0_15px_rgba(8,109,102,0.3)]' 
                        : 'border-white/10 bg-white/5 text-gray-400 hover:border-brand/50 hover:bg-brand/5'
                    }`}
                  >
                    <AnimatePresence>
                      {selectedType.id === type.id && (
                        <motion.div
                          layoutId="activeType"
                          className="absolute inset-0 border-2 border-brand rounded-xl pointer-events-none"
                          initial={false}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </AnimatePresence>
                    <span className="relative z-10 font-bold block mb-1">{type.label}</span>
                    <span className="relative z-10 text-xs opacity-80 line-clamp-2">{type.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Pages (Conditional) */}
            {!['system', 'custom'].includes(selectedType.id) && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                <h3 className="mb-4 text-xl font-bold text-white flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white text-sm">2</span>
                  Tamaño del proyecto (Páginas o Secciones)
                </h3>
                <div className="flex items-center gap-6 bg-white/5 p-6 rounded-2xl border border-white/10">
                  <input 
                    type="range" 
                    min="1" 
                    max="20" 
                    value={pages} 
                    onChange={(e) => setPages(parseInt(e.target.value))}
                    className="w-full accent-brand h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="min-w-[4rem] text-center bg-brand/20 py-2 rounded-lg border border-brand/30">
                    <span className="text-2xl font-bold text-brand">{pages}</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Specific Extras */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-white flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white text-sm">
                  {!['system', 'custom'].includes(selectedType.id) ? '3' : '2'}
                </span>
                Complementos recomendados para {selectedType.label}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {selectedType.extras.map((extra) => {
                  const isSelected = selectedExtras.includes(extra.id);
                  return (
                    <button
                      key={extra.id}
                      onClick={() => toggleExtra(extra.id)}
                      className={`flex flex-col gap-2 rounded-xl border p-4 text-left transition-all ${
                        isSelected 
                          ? 'border-brand bg-brand/10 text-white shadow-[0_0_15px_rgba(8,109,102,0.15)]' 
                          : 'border-white/10 bg-white/5 text-gray-400 hover:border-brand/30 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-start gap-3 w-full">
                        <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${isSelected ? 'bg-brand border-brand' : 'border-gray-500'}`}>
                          {isSelected && <Check size={14} className="text-white" />}
                        </div>
                        <div>
                          <span className="font-bold text-sm text-white block mb-1">{extra.label}</span>
                          <span className="text-xs opacity-80 leading-relaxed block">{extra.desc}</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Result Panel & Form (Right Column) */}
          <div className="flex flex-col rounded-2xl bg-[#02040a] p-6 lg:p-8 border border-white/10 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 flex-1">
              <h3 className="mb-6 text-xl font-bold text-white">Resumen y Contacto</h3>
              
              <div className="mb-8 space-y-4 rounded-xl bg-white/5 p-5 border border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Desarrollo Base</span>
                  <span className="font-medium text-white">${selectedType.basePrice}</span>
                </div>
                {!['system', 'custom'].includes(selectedType.id) && pages > 1 && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Páginas adicionales x{pages - 1}</span>
                    <span className="font-medium text-white">${(pages - 1) * 50}</span>
                  </div>
                )}
                {selectedExtras.map(extId => {
                  const extra = selectedType.extras.find(e => e.id === extId);
                  if (!extra) return null;
                  return (
                    <div key={extId} className="flex justify-between items-center">
                      <span className="text-sm text-gray-400 truncate pr-4">{extra.label}</span>
                      <span className="font-medium text-brand">+${extra.price}</span>
                    </div>
                  );
                })}
                
                <div className="h-px w-full bg-white/10 my-4" />
                
                <div className="flex justify-between items-end">
                  <span className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Total Aprox.</span>
                  <div className="flex items-baseline gap-1 text-right">
                    <span className="text-2xl font-black text-brand neon-text">~</span>
                    <motion.span 
                      key={totals.price}
                      initial={{ y: -5, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="text-3xl font-black text-white"
                    >
                      {totals.price}
                    </motion.span>
                    <span className="text-gray-400 ml-1 text-sm font-medium">USD</span>
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Nombre Completo</label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Ej. Juan Pérez"
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-600 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-gray-400 mb-1">Cuéntanos sobre tu idea</label>
                  <textarea
                    id="details"
                    rows={4}
                    value={formData.details}
                    onChange={(e) => setFormData({...formData, details: e.target.value})}
                    placeholder="De qué trata tu negocio, qué funcionalidades clave necesitas..."
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-600 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 relative z-10">
              <div className="flex items-start gap-2 text-xs text-gray-500 mb-4">
                <Info size={14} className="shrink-0 mt-0.5" />
                <p>Al enviar, se generará un mensaje automático en WhatsApp con todos estos detalles para agilizar tu atención.</p>
              </div>
              <button
                onClick={handleSend}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 font-bold text-white transition-all hover:bg-brand-light neon-glow"
              >
                Enviar a WhatsApp <Send size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
