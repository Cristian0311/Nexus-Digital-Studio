import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDownRight, ArrowUpRight, BarChart3, Boxes, CheckCircle2,
  ClipboardCheck, ContactRound, CreditCard, Package, ShieldCheck, Sparkles, Users,
} from 'lucide-react';
import { CRM_URL } from '../../data';

const features = [
  { icon: ContactRound, title: 'Clientes y seguimiento', copy: 'Ten la información comercial a mano y da continuidad a cada oportunidad.' },
  { icon: CreditCard, title: 'Ventas y punto de venta', copy: 'Organiza las operaciones diarias con una visión más clara de tu negocio.' },
  { icon: Boxes, title: 'Inventario y productos', copy: 'Mantén el control de tus productos y existencias.' },
  { icon: BarChart3, title: 'Reportes de gestión', copy: 'Consulta los datos disponibles para tomar decisiones con más contexto.' },
];

export default function CRMShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="palmyra-crm" className="relative isolate overflow-hidden py-20 sm:py-28 lg:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-[#080b18]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_10%_10%,rgba(117,101,246,.25),transparent_42%),radial-gradient(ellipse_at_90%_80%,rgba(56,189,248,.13),transparent_38%)]" />
      <div aria-hidden="true" className="crm-grid absolute inset-0 -z-10 opacity-40" />
      <motion.div
        aria-hidden="true"
        className="absolute -right-24 top-20 -z-10 h-64 w-64 rounded-full bg-violet-500/20 blur-[90px] sm:h-96 sm:w-96"
        animate={reduceMotion ? undefined : { x: [0, -24, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[.92fr_1.08fr] lg:gap-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-300/30 bg-violet-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[.13em] text-violet-100 sm:text-sm">
            <Sparkles size={15} /> Nuestro producto estrella
          </div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[.22em] text-sky-200">Creado por PALMYRA</p>
          <h2 className="text-balance text-4xl font-black leading-[1.05] tracking-[-.045em] text-white sm:text-5xl lg:text-6xl">
            Conoce <span className="bg-gradient-to-r from-violet-300 via-fuchsia-200 to-sky-300 bg-clip-text text-transparent">PALMYRA CRM</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Tu negocio merece más que hojas sueltas y procesos dispersos. PALMYRA CRM es nuestra plataforma de gestión creada para ayudarte a organizar clientes, ventas, productos e información de negocio desde un solo lugar.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 text-sm text-slate-200">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-3 py-2"><CheckCircle2 size={16} className="text-emerald-300" /> Un espacio de gestión</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-3 py-2"><CheckCircle2 size={16} className="text-emerald-300" /> Diseñado para el día a día</span>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={CRM_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-500 px-6 py-4 font-bold text-white shadow-xl shadow-violet-950/50 transition hover:-translate-y-0.5 hover:from-violet-500 hover:to-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200">
              Entrar a PALMYRA CRM <ArrowUpRight size={19} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a href="#contacto" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[.04] px-6 py-4 font-semibold text-white transition hover:bg-white/10">
              Solicitar información <ArrowDownRight size={18} />
            </a>
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-500">Se abrirá PALMYRA CRM en una pestaña nueva para que puedas explorarlo.</p>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-2xl [perspective:1400px]"
          initial={reduceMotion ? false : { opacity: 0, y: 30, rotateX: 5 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="relative [transform-style:preserve-3d]"
            animate={reduceMotion ? undefined : { y: [0, -7, 0], rotateY: [0, 1.2, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div aria-hidden="true" className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-500/25 via-transparent to-sky-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#090f20]/95 p-3 shadow-[0_30px_100px_rgba(0,0,0,.45)] backdrop-blur-2xl sm:rounded-[2rem] sm:p-5">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 px-2 pb-4 sm:px-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 text-white shadow-lg shadow-violet-950/60"><Sparkles size={20} /></div>
                  <div className="min-w-0"><p className="text-xs font-bold tracking-[.16em] text-violet-200">PALMYRA</p><h3 className="truncate text-base font-bold text-white sm:text-lg">Centro de gestión</h3></div>
                </div>
                <span className="shrink-0 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-200 sm:text-xs">Vista ilustrativa</span>
              </div>

              <div className="grid gap-3 py-4 sm:grid-cols-[.75fr_1.25fr] sm:gap-4 sm:p-3">
                <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-col">
                  <div className="rounded-xl border border-white/10 bg-white/[.035] p-3 sm:p-4">
                    <Users size={18} className="mb-3 text-violet-200" />
                    <p className="text-xs text-slate-400">Clientes</p><p className="mt-1 text-sm font-bold text-white">Organizados</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[.035] p-3 sm:p-4">
                    <Package size={18} className="mb-3 text-sky-200" />
                    <p className="text-xs text-slate-400">Productos</p><p className="mt-1 text-sm font-bold text-white">Bajo control</p>
                  </div>
                  <div className="col-span-2 rounded-xl border border-violet-300/15 bg-gradient-to-br from-violet-500/15 to-sky-400/[.04] p-3 sm:p-4">
                    <div className="flex items-center gap-2"><ShieldCheck size={17} className="text-emerald-300" /><p className="text-xs font-semibold text-slate-200">Información centralizada</p></div>
                    <p className="mt-2 text-xs leading-5 text-slate-400">Una visión más clara de las tareas y operaciones.</p>
                  </div>
                </div>

                <div className="min-w-0 rounded-xl border border-white/10 bg-[#0d1528] p-3 sm:p-4">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div><p className="text-xs text-slate-400">Panel de ejemplo</p><p className="mt-1 text-base font-bold text-white sm:text-lg">Tu operación, de un vistazo</p></div>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-300/10 text-sky-200"><BarChart3 size={18} /></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl border border-white/5 bg-white/[.035] p-3"><p className="text-[11px] text-slate-400">Flujo de trabajo</p><p className="mt-1 text-sm font-bold text-white">Más orden</p><div className="mt-3 h-1.5 rounded-full bg-white/10"><div className="h-full w-4/5 rounded-full bg-gradient-to-r from-violet-400 to-sky-300" /></div></div>
                    <div className="rounded-xl border border-white/5 bg-white/[.035] p-3"><p className="text-[11px] text-slate-400">Información</p><p className="mt-1 text-sm font-bold text-white">Más visible</p><div className="mt-3 h-1.5 rounded-full bg-white/10"><div className="h-full w-3/4 rounded-full bg-gradient-to-r from-sky-300 to-emerald-300" /></div></div>
                  </div>
                  <div className="mt-3 flex h-28 items-end gap-2 rounded-xl border border-white/5 bg-white/[.025] p-3 sm:h-36">
                    {[30, 45, 39, 58, 49, 70, 62, 83, 68, 92, 79, 100].map((h, i) => <motion.div key={i} className="flex h-full flex-1 items-end"><motion.div className="w-full rounded-t-sm bg-gradient-to-t from-violet-600 to-sky-300" initial={false} animate={reduceMotion ? { height: h + '%' } : { height: [h * .72 + '%', h + '%', h * .84 + '%'] }} transition={{ duration: 3 + i * .13, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }} style={{ opacity: .55 + i * .035 }} /></motion.div>)}
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-400"><ClipboardCheck size={15} className="text-emerald-300" /> Menos dispersión. Más claridad operativa.</div>
                </div>
              </div>
              <div className="mt-1 flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[.035] p-3 sm:p-4">
                <div className="flex min-w-0 items-center gap-3"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-300/10 text-violet-200"><Sparkles size={17} /></div><div><p className="text-sm font-bold text-white">Conoce la plataforma</p><p className="text-xs text-slate-400">Explora PALMYRA CRM por ti mismo</p></div></div>
                <a href={CRM_URL} target="_blank" rel="noopener noreferrer" aria-label="Abrir PALMYRA CRM" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-500 text-white transition hover:bg-violet-400"><ArrowUpRight size={20} /></a>
              </div>
            </div>
          </motion.div>
          <div className="relative mx-auto mt-5 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-[#090f20]/90 px-4 py-2 text-xs font-medium text-slate-300 shadow-lg sm:text-sm"><span className="h-2 w-2 rounded-full bg-emerald-300" /> Una solución real del ecosistema PALMYRA</div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-14 grid max-w-7xl gap-3 px-5 sm:grid-cols-2 sm:px-8 lg:mt-20 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, copy }, i) => (
          <motion.div key={title} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08, duration: .45 }} className="group rounded-2xl border border-white/10 bg-white/[.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-300/30 hover:bg-violet-300/[.06]">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-300/10 text-violet-200 transition group-hover:rotate-3 group-hover:scale-105"><Icon size={21} /></div>
            <h3 className="text-base font-bold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
