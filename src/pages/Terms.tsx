import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-brand hover:text-brand-light mb-8 transition-colors">
          <ArrowLeft size={20} /> Volver al inicio
        </Link>
        <h1 className="text-3xl md:text-5xl font-black text-white mb-8 neon-text">Términos y Condiciones</h1>
        
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Aceptación de los Términos</h2>
            <p>Al acceder y utilizar los servicios de Nexus Digital Studio, usted acepta estar sujeto a estos términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá utilizar nuestros servicios.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Servicios Ofrecidos</h2>
            <p>Nexus Digital Studio proporciona servicios de diseño web, desarrollo de software, creación de landing pages, tiendas online y consultoría tecnológica. Nos reservamos el derecho de modificar o descontinuar cualquier servicio en cualquier momento.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Pagos y Facturación</h2>
            <p>Los proyectos se facturan por etapas según lo acordado en la propuesta inicial. Típicamente estructuramos los pagos en: 20% anticipo, 30% diseño, 30% desarrollo y 20% entrega final. Ningún proyecto pasará a la siguiente fase sin el pago correspondiente de la fase anterior.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Propiedad Intelectual</h2>
            <p>Una vez liquidado el 100% del costo del proyecto, la propiedad intelectual del código específico desarrollado para el cliente le será transferida, excluyendo librerías de terceros, frameworks open-source y componentes base de Nexus Digital Studio.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Revisiones y Modificaciones</h2>
            <p>Cada etapa del proyecto incluye un número predefinido de rondas de revisión. Cambios solicitados fuera del alcance original del proyecto serán cotizados por separado.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
