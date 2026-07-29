import { Phone, MessageCircle, Clock } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { WHATSAPP_NUMBER, WHATSAPP_URL } from '../../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-[#050b14]/80 backdrop-blur-md pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold tracking-tighter text-white">
              <span className="text-brand">NEXUS</span> DIGITAL STUDIO
            </h3>
            <p className="text-gray-400">
              Transformamos ideas en soluciones digitales de alto impacto. Creamos experiencias premium para marcas que buscan destacar.
            </p>
            <div className="mt-4 flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-colors hover:bg-brand hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-colors hover:bg-brand hover:text-white">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-colors hover:bg-brand hover:text-white">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-white">Enlaces Rápidos</h4>
            <nav className="flex flex-col gap-2">
              <a href="#servicios" className="text-gray-400 hover:text-brand transition-colors">Servicios</a>
              <a href="#portafolio" className="text-gray-400 hover:text-brand transition-colors">Portafolio</a>
              <a href="#proceso" className="text-gray-400 hover:text-brand transition-colors">Nuestro Proceso</a>
              <a href="#precios" className="text-gray-400 hover:text-brand transition-colors">Planes y Precios</a>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-white">Legal</h4>
            <nav className="flex flex-col gap-2">
              <a href="/terms" className="text-gray-400 hover:text-brand transition-colors">Términos y Condiciones</a>
              <a href="/privacy" className="text-gray-400 hover:text-brand transition-colors">Política de Privacidad</a>
              <a href="/cookies" className="text-gray-400 hover:text-brand transition-colors">Política de Cookies</a>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-white">Contacto</h4>
            <div className="flex flex-col gap-3">
              <a href={`tel:+${WHATSAPP_NUMBER}`} className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                  <Phone size={16} />
                </div>
                <span>+{WHATSAPP_NUMBER}</span>
              </a>
              <a href={`${WHATSAPP_URL}?text=Hola`} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                  <MessageCircle size={16} />
                </div>
                <span>WhatsApp</span>
              </a>
              <div className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                  <Clock size={16} />
                </div>
                <span>Lun - Vie, 9:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Nexus Digital Studio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
