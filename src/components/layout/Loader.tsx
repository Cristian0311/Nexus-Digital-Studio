import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 350);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.25, ease: 'easeOut' } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050b14]"
          aria-label="Cargando PALMYRA DIGITAL STUDIO"
          role="status"
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col items-center gap-5 px-6 text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-brand/40 bg-brand/10 text-brand-light shadow-lg shadow-brand/20">
              <Sparkles size={28} />
            </div>
            <div>
              <p className="text-lg font-black tracking-tight text-white">PALMYRA <span className="text-brand-light">DIGITAL STUDIO</span></p>
              <p className="mt-2 text-xs font-medium tracking-[0.18em] text-slate-400">IDEAS QUE TOMAN FORMA</p>
            </div>
            <div className="h-1 w-36 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.35, ease: 'linear' }}
                className="h-full rounded-full bg-gradient-to-r from-brand to-sky-300"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
