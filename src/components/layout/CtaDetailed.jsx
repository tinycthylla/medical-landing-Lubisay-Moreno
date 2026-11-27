import { CLINICS_BY_SCHEDULE, DOCTOR_INFO } from '../../data/clinicInfo';
import { WhatsAppOutlineIcon } from '../ui/Icons';

export default function CtaDetailed({ onOpenModal }) {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 md:px-8 py-16 md:py-20 border-none" id="contacto">
      <div className="relative rounded-3xl bg-brand-purple text-white p-8 md:p-12 lg:p-14 overflow-hidden shadow-xl shadow-brand-purple/20">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-brand-pink/20 pointer-events-none blur-3xl" />
        <div className="absolute left-10 -top-10 w-48 h-48 rounded-full bg-white/10 pointer-events-none blur-2xl" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-pink-200 font-label-md text-xs font-bold uppercase tracking-[0.2em] block mb-3">
              Tu Salud Íntima en Manos Expertas
            </span>
            
            <h2 className="font-headline-sm text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.2] text-white mb-4">
              Agenda tu cita hoy y vive una experiencia médica diferente
            </h2>
            
            <p className="font-body-md text-brand-pink-light/90 text-sm md:text-base leading-relaxed max-w-xl mb-8">
              Permíteme acompañarte con calidez, tiempo exclusivo y la más avanzada precisión diagnóstica en un entorno diseñado para tu bienestar y serenidad.
            </p>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a 
                href={DOCTOR_INFO.phoneHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-brand-purple font-label-md font-semibold text-sm hover:bg-brand-pink-light active:scale-[0.98] transition-all shadow-md hover:shadow-lg"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>{DOCTOR_INFO.phoneDisplay}</span>
              </a>

              <button 
                onClick={onOpenModal}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/20 font-label-md font-semibold text-sm active:scale-[0.98] transition-all shadow-sm backdrop-blur-sm cursor-pointer"
              >
                <WhatsAppOutlineIcon className="w-4 h-4 shrink-0" />
                <span>Consultar por WhatsApp</span>
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-5 w-full">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-white/15 flex flex-col gap-5 text-left shadow-inner">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-pink-200 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">schedule</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-headline-sm font-normal text-white text-base leading-snug">
                    Horarios de Consulta
                  </h3>
                  <ul className="font-body-md text-xs sm:text-sm text-pink-100/85 mt-1.5 space-y-1">
                    {CLINICS_BY_SCHEDULE.map((clinic) => (
                      <li key={clinic.id}>
                        <strong className="text-white font-medium">{clinic.ctaScheduleDay}</strong>{' '}
                        {clinic.ctaScheduleHours}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-pink-200 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-headline-sm font-normal text-white text-base leading-snug">
                    Consultas & Resultados
                  </h3>
                  <a 
                    href={DOCTOR_INFO.emailHref} 
                    className="font-body-md text-xs sm:text-sm text-pink-100/85 mt-1 hover:text-white underline-offset-2 hover:underline transition-colors break-all"
                  >
                    {DOCTOR_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-pink-200 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-headline-sm font-normal text-white text-base leading-snug">
                    Ubicaciones
                  </h3>
                  <div className="font-body-md text-xs sm:text-sm text-pink-100/85 mt-1.5 flex flex-col gap-1">
                    {CLINICS_BY_SCHEDULE.map((clinic) => (
                      <a
                        key={clinic.id}
                        href={clinic.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white underline-offset-2 hover:underline transition-colors"
                      >
                        {clinic.ctaLocationLabel}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}