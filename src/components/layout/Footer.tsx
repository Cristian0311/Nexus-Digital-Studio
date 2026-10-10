import { Phone, MessageCircle, Clock } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_URL } from '../../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-[#050b14]/80 backdrop-blur-md pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold tracking-tighter text-white">
              <span className="text-brand">PALMYRA</span> DIGITAL STUDIO
            </h3>
            <p className="text-gray-400">
              Creamos páginas web, tiendas online y soluciones digitales para presentar tu negocio y facilitar que los clientes te contacten.
            </p>
            <a href={`${WHATSAPP_URL}?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios%20web.`} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-brand/15 px-4 py-2 text-sm font-semibold text-brand-light transition-colors hover:bg-brand hover:text-white">
              <MessageCircle size={16} /> Escríbenos por WhatsApp
            </a>
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
          <p>&copy; {currentYear} PALMYRA DIGITAL STUDIO. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
