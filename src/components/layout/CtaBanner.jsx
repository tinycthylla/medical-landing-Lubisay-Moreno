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
          // Brillo eliminado, reemplazado por sombras estándar y limpias
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-whatsapp text-white font-bold text-base hover:opacity-90 active:scale-[0.98] transition-all shadow-md hover:shadow-lg"
        >
          <span>Agendar por WhatsApp</span>
          <span className="material-symbols-outlined text-[20px]">send</span>
        </button>
        
      </div>
    </section>
  );
}