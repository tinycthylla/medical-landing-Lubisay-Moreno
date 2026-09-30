import { useEffect, useRef } from 'react';

export default function CtaBanner({ onOpenModal }) {
  const sectionRef = useRef(null);

  // Animación de entrada al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="w-full bg-[#064e3b] py-16 px-6 md:py-24 text-center overflow-hidden">
      
      {/* Contenedor animado (inicia con opacity-0) */}
      <div ref={sectionRef} className="opacity-0 max-w-2xl mx-auto flex flex-col items-center">
        
        <h2 className="text-3xl md:text-4xl font-headline-sm font-bold text-white mb-6 leading-tight">
          ¿Lista para priorizar tu salud íntima y maternal?
        </h2>
        
        <p className="text-base md:text-lg text-emerald-50/90 mb-10 leading-relaxed max-w-xl mx-auto">
          Agenda tu consulta hoy mismo. Nuestro equipo se contactará contigo para coordinar el mejor horario.
        </p>
        
        <button 
          onClick={onOpenModal}
          type="button"
          // Botón estándar con sombras limpias
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-whatsapp text-white font-bold text-base hover:opacity-90 active:scale-[0.98] transition-all shadow-md hover:shadow-lg"
        >
          <span>Agendar por WhatsApp</span>
          {/* Nuevo Icono de Send de Bootstrap */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" 
            viewBox="0 0 16 16"
            className="w-5 h-5"
          >
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
          </svg>
        </button>
        
      </div>
    </section>
  );
}