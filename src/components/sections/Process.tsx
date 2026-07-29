import { motion } from 'framer-motion';
import { processSteps } from '../../data';

export default function Process() {
  return (
    <section id="proceso" className="relative py-24 z-10 bg-[#02040a]/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-black text-white md:text-5xl neon-text"
          >
            Nuestro <span className="text-brand">Proceso</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-gray-400"
          >
            Metodología ágil en 8 pasos para garantizar el éxito de tu proyecto.
          </motion.p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Central Line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-brand/0 via-brand to-brand/0 md:left-1/2 md:-translate-x-1/2" />

          <div className="flex flex-col gap-12 md:gap-24">
            {processSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-center md:justify-between ${
                    isEven ? 'flex-row' : 'flex-row md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#02040a] bg-brand shadow-[0_0_15px_rgba(8,109,102,1)] md:left-1/2">
                    <span className="text-xs font-bold text-white">{step.number}</span>
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 w-full md:ml-0 md:w-[45%]">
                    <div className="rounded-2xl glass border border-white/5 p-6 transition-transform hover:-translate-y-1 hover:border-brand/30">
                      <h3 className="mb-3 text-xl font-bold text-white flex items-center gap-3">
                        <span className="text-brand text-opacity-50 font-black text-3xl">0{step.number}</span>
                        {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block md:w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
