import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invert: true },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Three.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg', invert: true },
];

export default function TechStack() {
  return (
    <section className="relative py-20 z-10 border-y border-white/5 bg-[#02040a]/80 backdrop-blur-md overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-gray-500">
          Tecnologías que utilizamos
        </p>
        
        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col items-center gap-3"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl glass p-3 transition-transform group-hover:scale-110">
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className={`h-full w-full object-contain ${tech.invert ? 'brightness-0 invert opacity-70 group-hover:opacity-100' : 'opacity-70 group-hover:opacity-100'}`} 
                />
              </div>
              <span className="text-xs font-medium text-gray-500 opacity-0 transition-opacity group-hover:opacity-100">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
