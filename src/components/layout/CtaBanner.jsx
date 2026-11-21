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
    <section className="w-full bg-brand-purple py-16 px-6 md:py-24 text-center overflow-hidden transition-colors duration-500">
  
  {/* Contenedor animado (inicia con opacity-0) */}
  <div ref={sectionRef} className="opacity-0 max-w-2xl mx-auto flex flex-col items-center">
    
    {/* Título con fuente Carena (font-headline-sm) */}
    <h2 className="text-3xl md:text-4xl font-headline-sm font-normal text-white mb-6 leading-tight">
      ¿Lista para priorizar tu salud íntima y maternal?
    </h2>
    
    {/* Párrafo con fuente Poppins (font-body-md) y tono rosado muy claro en vez de esmeralda */}
    <p className="text-base md:text-lg font-body-md text-pink-50/90 mb-10 leading-relaxed max-w-xl mx-auto">
      Agenda tu consulta hoy mismo. Nuestro equipo se contactará contigo para coordinar el mejor horario.
    </p>
    
    {/* Botón con fuente Poppins Semibold/Bold y colores de la marca */}
    <button 
      onClick={onOpenModal}
      type="button"
      className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-brand-purple font-label-md font-bold text-base hover:bg-pink-50 active:scale-[0.98] transition-all shadow-md hover:shadow-lg"
    >
      <span>Agendar por WhatsApp</span>
       <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 64.63 64.98" 
                    fill="currentColor" 
                    className="w-5 h-5 text-brand-purple shrink-0 mt-0.5"
                  >
                    <path d="m0,64.98c.17-.5.33-.96.5-1.42,1.64-4.57,3.27-9.14,4.92-13.71.08-.23.05-.4-.08-.61-2.07-3.29-3.59-6.82-4.43-10.63-.59-2.7-.8-5.43-.65-8.2.23-4.04,1.15-7.91,2.86-11.58,3.08-6.64,7.87-11.69,14.32-15.14,3.21-1.72,6.62-2.85,10.22-3.35,8.57-1.19,16.44.64,23.48,5.68,6.58,4.72,10.82,11.08,12.65,18.98,2.91,12.57-2.04,25.67-12.45,33.22-4.02,2.91-8.47,4.82-13.35,5.68-2.96.52-5.95.66-8.94.27-3.43-.44-6.68-1.5-9.79-3-.6-.29-1.19-.62-1.8-.9-.15-.07-.36-.1-.52-.06-5.54,1.55-11.08,3.12-16.62,4.68-.09.03-.19.04-.33.07Zm7.89-7.39c.14-.03.23-.04.32-.07,2.95-.83,5.9-1.65,8.85-2.49.25-.07.44-.05.67.09,4.03,2.54,8.41,4.01,13.18,4.27,3.83.21,7.55-.34,11.13-1.7,5.32-2.02,9.6-5.39,12.83-10.07,2.78-4.03,4.33-8.5,4.7-13.37.28-3.65-.14-7.23-1.32-10.7-2.3-6.71-6.54-11.83-12.75-15.25-5.66-3.12-11.72-4.05-18.07-2.89-6.31,1.16-11.57,4.21-15.74,9.08-3.97,4.64-6.11,10.04-6.48,16.14-.21,3.44.24,6.8,1.32,10.08.96,2.93,2.43,5.6,4.27,8.07.13.17.15.3.07.51-.69,1.89-1.37,3.78-2.05,5.67-.31.86-.62,1.73-.94,2.63Z"/>
                    <path d="m21.29,14.9c.36,0,.73,0,1.09,0,.45,0,.8.22,1.01.6.3.56.57,1.14.8,1.73.82,2.07,1.61,4.16,2.42,6.24.21.54.16,1.04-.07,1.56-.51,1.18-1.34,2.14-2.16,3.1-.61.72-.68,1.07-.22,1.9,2.22,4.05,5.19,7.39,9.25,9.67.83.47,1.7.87,2.57,1.28.66.31,1.09.23,1.54-.35.91-1.17,1.8-2.36,2.67-3.56.54-.75.95-.95,1.79-.55,1.38.64,2.74,1.34,4.11,2.03.91.46,1.8.98,2.72,1.42.7.33.99.84.95,1.6-.06,1.24-.26,2.45-.7,3.61-.36.94-1.07,1.63-1.84,2.24-1.16.92-2.41,1.68-3.88,1.94-1.86.34-3.7.22-5.5-.41-2.33-.82-4.64-1.72-6.78-2.98-2.7-1.6-5.05-3.63-7.19-5.92-2.58-2.76-4.81-5.79-6.66-9.08-1.02-1.81-1.77-3.74-2.03-5.82-.4-3.25.32-6.19,2.51-8.69.4-.46.86-.89,1.36-1.23.67-.46,1.47-.38,2.24-.32Z"/>
                  </svg>
    </button>

  </div>
</section>
  );
}