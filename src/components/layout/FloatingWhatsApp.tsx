import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../../data';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={`${WHATSAPP_URL}?text=Hola%2C%20quisiera%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-transform hover:scale-110"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={{ 
          boxShadow: [
            "0 0 0 0 rgba(37,211,102,0.7)",
            "0 0 0 20px rgba(37,211,102,0)"
          ]
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute inset-0 rounded-full"
      />
      <MessageCircle size={32} className="relative z-10" />
    </motion.a>
  );
}
