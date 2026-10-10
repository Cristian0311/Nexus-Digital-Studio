import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Layers3,
  MousePointer2,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { CRM_URL } from '../../data';

const capabilities = [
  { icon: Zap, label: 'Rápido y ligero' },
  { icon: MousePointer2, label: 'Diseñado para convertir' },
  { icon: Layers3, label: 'Listo para crecer' },
];

export default function Hero() {
  return (
    <section id="hero" className="hero-shell relative isolate flex min-h-[auto] w-full items-center overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 lg:min-h-[92svh] lg:pb-24 lg:pt-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="hero-orb hero-orb-one absolute -left-40 top-10 h-80 w-80 rounded-full bg-brand/20 blur-[100px] sm:h-[28rem] sm:w-[28rem]" />
        <div className="hero-orb hero-orb-two absolute -right-24 top-24 h-72 w-72 rounded-full bg-sky-500/15 blur-[100px] sm:h-[32rem] sm:w-[32rem]" />
        <div className="hero-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050b14] to-transparent" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:gap-10 xl:gap-16">
        <div className="relative z-10 mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-brand/35 bg-brand/10 px-3 py-2 text-left text-xs font-semibold text-violet-100 shadow-lg shadow-brand/10 sm:px-4 sm:text-sm"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand-light">
              <Sparkles size={15} />
            </span>
            Ideas ambiciosas. Experiencias digitales extraordinarias.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="mb-6 text-balance text-4xl font-black leading-[1.02] tracking-[-0.055em] text-white sm:text-5xl md:text-6xl xl:text-7xl"
          >
            Tu negocio merece
            <span className="hero-gradient block pb-1">una presencia digital</span>
            que deje huella.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mx-auto mb-8 max-w-xl text-pretty text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:mx-0"
          >
            Diseñamos landing pages que convierten, tiendas online y software de punto de venta. Y para gestionar tu operación, conoce PALMYRA CRM: nuestra plataforma de gestión empresarial.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start"
          >
            <a href="#contacto" className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-4 text-base font-bold text-white shadow-xl shadow-brand/25 transition duration-200 hover:-translate-y-0.5 hover:bg-brand-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:ring-offset-2 focus-visible:ring-offset-[#050b14]">
              Hablemos de tu proyecto
              <ArrowRight size={19} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#servicios" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-4 text-base font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light">
              Explorar soluciones
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs font-medium text-slate-400 sm:text-sm lg:justify-start"
          >
            {capabilities.map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2">
                <CheckCircle2 size={15} className="shrink-0 text-emerald-300" />
                {label}
              </span>
            ))}
          </motion.div>

          <div className="mt-8 border-t border-white/10 pt-5 text-sm text-slate-400">
            ¿Buscas organizar también tu operación?
            <a href={CRM_URL} target="_blank" rel="noopener noreferrer" className="ml-2 inline-flex items-center gap-1 font-semibold text-violet-200 underline decoration-brand/50 underline-offset-4 transition hover:text-white">
              Descubre PALMYRA CRM <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
          aria-label="Vista conceptual de una experiencia digital y panel de negocio"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand/20 via-transparent to-sky-400/10 blur-2xl" aria-hidden="true" />
          <div className="hero-window relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#0a1020]/90 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl sm:rounded-[2rem] sm:p-4">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-2 pb-4 sm:px-3">
              <div className="flex min-w-0 items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/90" />
                <span className="ml-2 truncate text-xs font-medium text-slate-400">Tu próximo proyecto digital</span>
              </div>
              <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-200 sm:text-xs">Vista conceptual</span>
            </div>

            <div className="grid gap-3 p-1 pt-4 sm:grid-cols-[.82fr_1.18fr] sm:gap-4 sm:p-3 sm:pt-5">
              <div className="flex flex-col gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 sm:p-5">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand/20 text-violet-200">
                    <Code2 size={21} />
                  </div>
                  <p className="text-xs font-medium text-slate-400">Una marca. Una experiencia.</p>
                  <h2 className="mt-2 text-xl font-extrabold leading-tight text-white sm:text-2xl">Diseñada para destacar.</h2>
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-brand to-sky-300" />
                  </div>
                  <p className="mt-2 text-[11px] text-slate-500">Diseño · Desarrollo · Evolución</p>
                </div>
                <div className="rounded-2xl border border-brand/20 bg-gradient-to-br from-brand/15 to-sky-400/[0.06] p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-slate-300">Pensado para crecer</span>
                    <TrendingUp size={17} className="text-emerald-300" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-400">Una estructura clara que guía al visitante hacia el siguiente paso.</p>
                </div>
              </div>

              <div className="flex min-w-0 flex-col gap-3">
                <div className="rounded-2xl border border-white/10 bg-[#0d1527] p-4 sm:p-5">
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs text-slate-400">Panel de ejemplo</p>
                      <h3 className="mt-1 text-base font-bold text-white sm:text-lg">Tu negocio, más claro</h3>
                    </div>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-300/10 text-sky-200">
                      <BarChart3 size={18} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl border border-white/5 bg-white/[0.035] p-3">
                      <p className="text-[10px] text-slate-400 sm:text-xs">Experiencia</p>
                      <p className="mt-1 text-sm font-bold text-white sm:text-base">Intuitiva</p>
                      <div className="mt-2 h-1 rounded-full bg-white/10"><div className="h-full w-4/5 rounded-full bg-violet-300" /></div>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-white/[0.035] p-3">
                      <p className="text-[10px] text-slate-400 sm:text-xs">Adaptación</p>
                      <p className="mt-1 text-sm font-bold text-white sm:text-base">Multidispositivo</p>
                      <div className="mt-2 h-1 rounded-full bg-white/10"><div className="h-full w-full rounded-full bg-sky-300" /></div>
                    </div>
                  </div>
                  <div className="mt-3 flex h-24 items-end gap-2 rounded-xl border border-white/5 bg-white/[0.025] p-3 sm:h-28">
                    {[36, 52, 43, 68, 56, 82, 72, 94, 76, 100, 86, 110].map((height, index) => (
                      <div key={index} className="flex h-full flex-1 items-end">
                        <div className="w-full rounded-t-sm bg-gradient-to-t from-brand/70 to-sky-300/90" style={{ height: `${height / 1.1}%`, opacity: 0.45 + index * 0.045 }} />
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle2 size={15} className="text-emerald-300" />
                    Estructura clara. Próximos pasos visibles.
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3 sm:p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-300/10 text-amber-200">
                    <Sparkles size={19} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-white">Hecho para tu negocio</p>
                    <p className="text-xs leading-5 text-slate-400">Sin una plantilla que te obligue a encajar.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto mt-4 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-[#0a1020]/90 px-4 py-2 text-xs text-slate-300 shadow-lg sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            Diseño con intención. Tecnología con propósito.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
