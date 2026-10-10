import { motion } from 'framer-motion';
import { pricingPlans, WHATSAPP_URL } from '../../data';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="precios" className="relative py-24 z-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-black text-white md:text-5xl neon-text"
          >
            Planes y <span className="text-brand">Precios</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-gray-400"
          >
            Precios orientativos en USD. El alcance final se confirma por escrito antes de comenzar; dominio, alojamiento, servicios de terceros y mantenimiento recurrente pueden cotizarse por separado.
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative flex flex-col rounded-3xl p-8 ${
                plan.recommended 
                  ? 'bg-gradient-to-b from-brand/20 to-[#02040a] border border-brand shadow-[0_0_30px_rgba(8,109,102,0.15)]' 
                  : 'glass border border-white/10'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Más Solicitado
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="mb-2 text-2xl font-bold text-white">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-brand">~</span>
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-1 font-medium">USD</span>
                </div>
                <p className="mt-2 text-sm text-brand-light">⏱ Tiempo: {plan.time}</p>
              </div>

              <div className="mb-8 flex-1">
                <ul className="flex flex-col gap-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={20} className="shrink-0 text-brand" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#calculadora"
                className={`flex w-full items-center justify-center rounded-xl py-4 font-bold transition-all ${
                  plan.recommended
                    ? 'bg-brand text-white hover:bg-brand-light neon-glow'
                    : 'bg-white/10 text-white hover:bg-brand hover:text-white'
                }`}
              >
                Comenzar Proyecto
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
