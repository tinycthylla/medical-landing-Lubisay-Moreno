import { Link } from 'react-router-dom';

const SECTIONS = [
  {
    icon: 'verified_user',
    title: '1. Responsable del sitio web',
    content:
      'Este sitio web informativo pertenece a la Dra. Lubisay Moreno, médico especialista en Ginecología y Obstetricia (M.P.P.S. 128037 | C.M.D.M.C. 37329), con consulta presencial en Caracas y San Antonio de los Altos, Venezuela.',
  },
  {
    icon: 'chat',
    title: '2. Datos ingresados en el formulario de citas',
    content:
      'Esta página web no cuenta con base de datos propia ni almacena historiales clínicos ni información personal en servidores. Los datos que escribes al solicitar una cita (nombre, edad, cédula, sede, motivo y fecha deseada) se procesan únicamente en tu navegador para redactar un mensaje directo hacia el WhatsApp profesional de la doctora.',
  },
  {
    icon: 'lock',
    title: '3. Confidencialidad y secreto médico',
    content:
      'Toda la información que compartas voluntariamente a través de WhatsApp, correo electrónico o durante la consulta presencial se maneja bajo estricta confidencialidad y secreto médico profesional, exclusivamente para coordinar citas y brindar atención clínica.',
  },
  {
    icon: 'medical_information',
    title: '4. Descargo de responsabilidad médica',
    content:
      'Los textos, guías y artículos publicados en la sección de Servicios y Blog tienen fines estrictamente educativos e informativos. En ningún caso sustituyen una evaluación médica presencial, un diagnóstico clínico ni una prescripción. Ante cualquier síntoma de alarma o emergencia obstétrica o ginecológica, acude de inmediato al centro de salud más cercano.',
  },
  {
    icon: 'public',
    title: '5. Enlaces a plataformas de terceros',
    content:
      'Este sitio incluye enlaces externos a WhatsApp, Google Maps, Instagram, Facebook y TikTok para facilitar el contacto y la ubicación de las sedes. Al salir hacia cualquiera de esas plataformas, el tratamiento de tus datos queda sujeto a sus propias políticas de privacidad y términos de uso.',
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="flex-1 pt-28 pb-16 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10 pb-8 border-b border-brand-purple/10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-pink-light text-brand-purple font-label-md text-xs font-semibold tracking-wide mb-4">
            <span className="material-symbols-outlined text-[15px] text-brand-pink">
              policy
            </span>
            Información Legal
          </span>

          <h1 className="font-body-md text-3xl sm:text-4xl font-bold text-brand-purple tracking-tight leading-tight">
            Aviso de Privacidad y Uso del Sitio
          </h1>

          <p className="font-body-md text-sm text-brand-grape mt-3">
            Dra. Lubisay Moreno · M.P.P.S. 128037 | C.M.D.M.C. 37329
          </p>
          <p className="font-body-md text-xs text-brand-grape/70 mt-1">
            Última actualización: noviembre de 2026
          </p>
        </header>

        <div className="space-y-5">
          {SECTIONS.map((section) => (
            <section
              key={section.title}
              className="p-6 rounded-3xl bg-brand-pink-light/35 border border-brand-purple/10"
            >
              <div className="flex items-start gap-3.5">
                <div className="h-9 w-9 rounded-2xl bg-white text-brand-purple flex items-center justify-center shrink-0 shadow-sm border border-brand-purple/5">
                  <span className="material-symbols-outlined text-[20px]">
                    {section.icon}
                  </span>
                </div>
                <div>
                  <h2 className="font-body-md text-base sm:text-lg font-bold text-brand-purple mb-1.5">
                    {section.title}
                  </h2>
                  <p className="font-body-md text-sm text-brand-grape leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </section>
          ))}

          <section className="p-6 rounded-3xl bg-brand-pink-light/60 border border-brand-purple/10">
            <div className="flex items-start gap-3.5">
              <div className="h-9 w-9 rounded-2xl bg-brand-purple text-white flex items-center justify-center shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </div>
              <div>
                <h2 className="font-body-md text-base sm:text-lg font-bold text-brand-purple mb-1.5">
                  6. Contacto y consultas sobre privacidad
                </h2>
                <p className="font-body-md text-sm text-brand-grape leading-relaxed">
                  Si tienes alguna duda sobre este aviso o deseas solicitar la actualización o
                  eliminación de conversaciones previas por correo o mensajería, puedes escribir a{' '}
                  <a
                    href="mailto:morenolubisay@gmail.com"
                    className="font-semibold text-brand-purple underline hover:text-brand-pink transition-colors break-all"
                  >
                    morenolubisay@gmail.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-10 pt-6 border-t border-brand-purple/10 flex justify-start">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-purple text-white font-label-md font-semibold text-sm hover:bg-brand-pink transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}