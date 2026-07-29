import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cookies() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-brand hover:text-brand-light mb-8 transition-colors">
          <ArrowLeft size={20} /> Volver al inicio
        </Link>
        <h1 className="text-3xl md:text-5xl font-black text-white mb-8 neon-text">Política de Cookies</h1>
        
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. ¿Qué son las cookies?</h2>
            <p>Las cookies son pequeños archivos de texto que los sitios web que visita colocan en su ordenador o dispositivo móvil. Se utilizan ampliamente para hacer que los sitios web funcionen, o funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Cómo utilizamos las cookies</h2>
            <p>Utilizamos cookies propias y de terceros para fines técnicos (permitir la navegación básica), analíticos (comprender cómo los usuarios interactúan con la página) y de personalización (recordar sus preferencias de idioma o tema).</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Tipos de cookies que utilizamos</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Cookies Esenciales:</strong> Necesarias para el funcionamiento del sitio web. No se pueden desactivar.</li>
              <li><strong>Cookies de Rendimiento:</strong> Nos permiten contar las visitas y fuentes de tráfico para evaluar y mejorar el rendimiento de nuestro sitio (ej. Google Analytics).</li>
              <li><strong>Cookies Funcionales:</strong> Permiten que el sitio web proporcione una funcionalidad y personalización mejoradas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Gestión de Cookies</h2>
            <p>Puede configurar su navegador para bloquear o alertarle sobre estas cookies, pero algunas partes del sitio web pueden no funcionar si lo hace. Puede eliminar las cookies ya almacenadas en su equipo en cualquier momento a través de la configuración de su navegador.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
