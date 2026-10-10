import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart3, ClipboardList, Package, Users } from 'lucide-react';
import { CRM_URL } from '../../data';

const highlights = [
  { icon: Users, title: 'Clientes y seguimiento', description: 'Mantén la información comercial organizada y más fácil de consultar.' },
  { icon: Package, title: 'Ventas e inventario', description: 'Conecta las operaciones diarias con una visión más clara del negocio.' },
  { icon: BarChart3, title: 'Reportes para decidir', description: 'Consulta información de gestión y detecta dónde enfocar tus esfuerzos.' },
  { icon: ClipboardList, title: 'Operaciones centralizadas', description: 'Reduce la dispersión de tareas con herramientas de gestión en un mismo lugar.' },
];

export default function CRMShowcase() {
  return (
    <section id="palmyra-crm" className="relative z-10 overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-brand/15 via-[#080B18] to-sky-950/20" aria-hidden="true" />
      <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-brand/15 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="mb-5 inline-flex rounded-full border border-brand/40 bg-brand/10 px-4 py-2 text-sm font-semibold text-brand-light">
            Una solución de nuestro ecosistema
          </span>
          <h2 className="mb-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Conoce <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-sky-300">PALMYRA CRM</span>
          </h2>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-300">
            Una plataforma de gestión para ayudar a organizar clientes, ventas, inventario y reportes desde una experiencia digital centralizada.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={CRM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 font-bold text-white shadow-lg shadow-brand/20 transition hover:-translate-y-0.5 hover:bg-brand-light"
            >
              Abrir PALMYRA CRM <ArrowUpRight size={19} />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Crear una solución a medida
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-400">El CRM se abre en una pestaña nueva.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 shadow-2xl shadow-brand/10 backdrop-blur-xl sm:p-7">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">PALMYRA</p>
                <h3 className="mt-1 text-xl font-bold text-white">Gestión del negocio</h3>
              </div>
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, title, description }) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-brand/40 hover:bg-brand/5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand/15 text-brand-light">
                    <Icon size={20} />
                  </div>
                  <h4 className="mb-2 font-semibold text-white">{title}</h4>
                  <p className="text-sm leading-relaxed text-slate-400">{description}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between rounded-2xl border border-brand/20 bg-brand/10 p-4">
              <div>
                <p className="text-sm font-semibold text-white">¿Listo para conocerlo?</p>
                <p className="mt-1 text-xs text-slate-400">Visita la plataforma PALMYRA CRM</p>
              </div>
              <a href={CRM_URL} target="_blank" rel="noopener noreferrer" aria-label="Abrir PALMYRA CRM" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white transition hover:bg-brand-light">
                <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
