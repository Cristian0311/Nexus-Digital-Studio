import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 30, label: 'Proyectos Entregados', suffix: '+' },
  { value: 98, label: 'Confiabilidad', suffix: '%' },
  { value: 24, label: 'Soporte', suffix: '/7' },
  { value: 5, label: 'Años de Experiencia', suffix: '+' },
];

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-black text-brand neon-text flex items-center justify-center">
      {count}{suffix}
    </div>
  );
};

export default function Stats() {
  return (
    <section className="relative py-16 z-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 rounded-3xl glass-card border-brand/20 p-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center space-y-2"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
