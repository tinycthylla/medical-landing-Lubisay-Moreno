import { useState, useEffect, useRef } from 'react';
import { WhatsAppOutlineIcon } from '../UI/Icons';

export default function CtaBanner({ onOpenModal }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentEl = sectionRef.current;
    if (!currentEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(currentEl);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 md:px-8 py-16 md:py-20">
      <div
        ref={sectionRef}
        className={`relative rounded-3xl bg-brand-purple text-white px-6 py-12 sm:px-10 md:p-14 lg:p-16 text-center overflow-hidden shadow-xl shadow-brand-purple/20 transition-all duration-500 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-brand-pink/20 pointer-events-none blur-3xl" />
        <div className="absolute left-10 -top-10 w-48 h-48 rounded-full bg-white/10 pointer-events-none blur-2xl" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-headline-sm font-normal text-white mb-5 leading-tight">
            ¿Lista para priorizar tu salud íntima y maternal?
          </h2>

          <p className="text-base md:text-lg font-body-md text-brand-pink-light/90 mb-9 leading-relaxed max-w-xl mx-auto">
            Agenda tu consulta hoy mismo. Nuestro equipo se contactará contigo para coordinar el mejor horario.
          </p>

          <button
            onClick={onOpenModal}
            type="button"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-brand-purple font-label-md font-semibold text-base hover:bg-brand-pink-light active:scale-[0.98] transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            <span>Agendar por WhatsApp</span>
            <WhatsAppOutlineIcon className="w-5 h-5 text-brand-purple shrink-0" />
          </button>
        </div>
      </div>
    </section>
  );
}