import { useState } from 'react';
import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '../../data';
import { Send, User, Briefcase, Layout, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    project: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*Nueva Solicitud de Proyecto*%0A%0A*Nombre:* ${formData.name}%0A*Empresa:* ${formData.company || 'N/A'}%0A*Tipo de Proyecto:* ${formData.project}%0A*Descripción:* ${formData.description}`;
    window.open(`${WHATSAPP_URL}?text=${text}`, '_blank');
  };

  return (
    <section id="contacto" className="relative py-24 z-10">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-black text-white md:text-5xl neon-text"
          >
            Inicia tu <span className="text-brand">Proyecto</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-gray-400"
          >
            Completa el formulario y te enviaremos una cotización directamente por WhatsApp.
          </motion.p>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="rounded-3xl glass-card border border-white/10 p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent pointer-events-none" />
          
          <div className="relative grid gap-6 md:grid-cols-2">
            
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <User size={16} className="text-brand" />
                Nombre Completo *
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                value={formData.name}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
                placeholder="Ej. Juan Pérez"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <Briefcase size={16} className="text-brand" />
                Empresa (Opcional)
              </label>
              <input 
                type="text" 
                id="company" 
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
                placeholder="Ej. Mi Startup"
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="project" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <Layout size={16} className="text-brand" />
                Tipo de Proyecto *
              </label>
              <select 
                id="project" 
                name="project"
                required
                value={formData.project}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors [&>option]:bg-gray-900"
              >
                <option value="">Selecciona una opción...</option>
                <option value="Landing Page">Landing Page</option>
                <option value="Tienda Online">Tienda Online</option>
                <option value="Catálogo">Catálogo Digital</option>
                <option value="App / Dashboard">Aplicación Web / Dashboard</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="description" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <MessageSquare size={16} className="text-brand" />
                Descripción Breve *
              </label>
              <textarea 
                id="description" 
                name="description" 
                required
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className="resize-none rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
                placeholder="Cuéntanos un poco sobre tu idea o requerimiento..."
              />
            </div>

          </div>

          <div className="relative mt-8">
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 font-bold text-white transition-all hover:bg-brand-light neon-glow"
            >
              Enviar por WhatsApp <Send size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <p className="mt-4 text-center text-xs text-gray-500">No almacenamos tus datos. El envío se realiza directamente a través de WhatsApp.</p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
