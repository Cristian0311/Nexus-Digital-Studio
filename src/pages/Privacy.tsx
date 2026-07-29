import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-brand hover:text-brand-light mb-8 transition-colors">
          <ArrowLeft size={20} /> Volver al inicio
        </Link>
        <h1 className="text-3xl md:text-5xl font-black text-white mb-8 neon-text">Política de Privacidad</h1>
        
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Información que recopilamos</h2>
            <p>Recopilamos información que usted nos proporciona directamente al completar formularios en nuestro sitio web o comunicarse con nosotros vía WhatsApp, incluyendo: nombre, correo electrónico, número de teléfono e información relacionada con su proyecto.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Uso de la información</h2>
            <p>Utilizamos la información recopilada exclusivamente para comprender sus necesidades, proporcionarle cotizaciones, ejecutar los servicios contratados y mantener comunicación relacionada con su proyecto.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Compartir información</h2>
            <p>Nexus Digital Studio NO vende, alquila ni comparte su información personal con terceros para fines comerciales o de marketing. Solo compartiremos información cuando sea estrictamente necesario para la ejecución técnica de su proyecto (ej. registro de dominios) y con su autorización previa.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Seguridad de los datos</h2>
            <p>Implementamos medidas de seguridad técnicas y organizativas para proteger su información contra accesos no autorizados, alteración, divulgación o destrucción. Nuestro sitio utiliza encriptación SSL.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Sus Derechos</h2>
            <p>Usted tiene derecho a solicitar acceso, corrección o eliminación de sus datos personales en cualquier momento contactándonos a través de nuestros canales oficiales.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
