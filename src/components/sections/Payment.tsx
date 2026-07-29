import { motion } from 'framer-motion';
import { CreditCard, ShieldCheck } from 'lucide-react';

export default function Payment() {
  const steps = [
    { percent: '20%', label: 'Inicio', desc: 'Firma de contrato y setup inicial.' },
    { percent: '30%', label: 'Diseño Aprobado', desc: 'Prototipos visuales listos y aprobados.' },
    { percent: '30%', label: 'Desarrollo Terminado', desc: 'Funcionalidad completa en entorno de prueba.' },
    { percent: '20%', label: 'Entrega Final', desc: 'Lanzamiento y paso a producción.' },
  ];

  return (
    <section className="relative py-24 z-10 bg-[#02040a]/50">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl glass border border-brand/20 p-8 md:p-12 relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-brand/20 blur-[80px]" />
          
          <div className="grid gap-12 md:grid-cols-2 items-center relative z-10">
            <div>
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/20 text-brand">
                <CreditCard size={24} />
              </div>
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Condiciones de Pago</h2>
              <p className="mb-6 text-gray-400">
                Trabajamos con total transparencia. Los pagos se dividen en etapas lógicas, asegurando que pagues conforme el proyecto avanza y cumple tus expectativas.
              </p>
              <div className="flex items-center gap-3 text-brand-light bg-brand/10 p-4 rounded-xl border border-brand/20">
                <ShieldCheck size={24} className="shrink-0" />
                <p className="text-sm font-medium">Cada etapa debe ser revisada y aprobada por el cliente antes de continuar y generar el siguiente cobro.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="rounded-2xl bg-black/40 border border-white/5 p-5 hover:border-brand/30 transition-colors"
                >
                  <div className="text-3xl font-black text-white mb-2 neon-text">{step.percent}</div>
                  <h4 className="font-bold text-gray-200 mb-1">{step.label}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
