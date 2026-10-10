import { motion } from 'framer-motion';

const valueProps = [
  { title: 'Diseño adaptado', description: 'Una experiencia clara y cómoda en móviles, tablets y computadoras.' },
  { title: 'Presupuesto transparente', description: 'Alcance, entregables y tiempos definidos antes de comenzar.' },
  { title: 'Contacto directo', description: 'Habla con nosotros para explicar tu idea y resolver dudas.' },
  { title: 'Enfoque en objetivos', description: 'Cada sección se diseña para presentar tu oferta y facilitar el contacto.' },
];

export default function Stats() {
  return (
    <section className="relative py-16 z-10" aria-label="Ventajas de PALMYRA DIGITAL STUDIO">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 rounded-3xl glass-card border-brand/20 p-8">
          {valueProps.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex flex-col items-center text-center gap-3 rounded-2xl p-3"
            >
              <h3 className="text-lg font-bold text-brand">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
