import { useState, useRef, useEffect } from 'react';
import { CLINICS } from '../../data/clinicInfo';
import { WhatsAppOutlineIcon } from '../UI/Icons';

export default function Locations() {
  const sectionRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

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

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.children[0].offsetWidth;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  const scrollTo = (index) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0].offsetWidth;
      scrollRef.current.scrollTo({
        left: index * (cardWidth + 24),
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  return (
    <>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <section id="ubicacion" className="w-full py-16 md:pt-8 md:pb-24 overflow-hidden">
  <div ref={sectionRef} className="opacity-0 md:max-w-[1200px] md:mx-auto">
    
    <div className="flex flex-col px-6 items-center text-center mb-10">
      <div className="flex items-center justify-center mb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-pink-100 text-pink-500 font-label-md text-xs uppercase tracking-wider font-bold shadow-sm">
          <span className="material-symbols-outlined text-[16px]">domain</span>
          Consultorios
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-body-md font-bold text-on-background tracking-tight">
        Ubicación y Contacto
      </h2>
      <p className="text-sm md:text-base font-body-md text-on-surface-variant mt-3 max-w-2xl">
        Visítanos en nuestras instalaciones diseñadas para tu confort.
      </p>
    </div>

    <div className="relative w-full">
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 md:px-6 lg:px-0 pb-4"
      >
        {CLINICS.map((clinic) => (
          <article 
            key={clinic.id} 
           className="w-[85vw] max-w-[340px] shrink-0 snap-center flex flex-col p-6 rounded-3xl bg-white shadow-md shadow-brand-lilac/20 hover:shadow-lg hover:shadow-brand-lilac/30 transition-all duration-300 md:w-auto md:max-w-none h-full"
>
            <h3 className="font-body-md text-xl lg:text-2xl font-bold text-on-background mb-6 pb-4 border-b border-gray-50">
              {clinic.name}
            </h3>

            <div className="flex flex-col gap-5 mb-8 flex-grow font-body-md">
              <div className="flex items-start gap-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 54.38 83.7" 
                  fill="currentColor" 
                  className="w-6 h-6 text-brand-purple shrink-0 mt-0.5"
                >
                  <path d="m44.06,53.15c3.26-5.53,6.25-11.21,8.47-17.25,1.03-2.8,1.86-5.67,1.85-8.69-.02-7.09-2.39-13.3-7.23-18.46C41.06,2.25,33.47-.71,24.6.14,15.42,1.03,8.4,5.64,3.67,13.56.78,18.39-.44,23.67.14,29.3c.29,2.84,1.24,5.52,2.29,8.15,2.72,6.8,6.29,13.16,10.07,19.4,1.56,2.58,3.19,5.12,4.85,7.76-.24.05-.42.09-.59.13-1.97.5-3.96.92-5.9,1.52-2.19.68-4.26,1.67-5.98,3.24-2.75,2.51-2.8,5.85-.11,8.41.57.54,1.22,1.03,1.89,1.45,2.6,1.63,5.49,2.49,8.45,3.11,6.67,1.4,13.4,1.52,20.15.68,3.55-.44,7.03-1.21,10.32-2.67,1.84-.82,3.55-1.83,4.81-3.44,1.58-2.02,1.67-4.45.05-6.43-.78-.96-1.77-1.81-2.81-2.47-2.67-1.7-5.69-2.52-8.76-3.17-.61-.13-1.22-.24-1.88-.37.15-.23.25-.39.34-.55,2.24-3.64,4.55-7.25,6.72-10.93Zm.61,17.87c.87.44,1.68,1.03,2.41,1.68.81.73.84,1.46,0,2.15-.98.8-2.05,1.54-3.19,2.06-3.05,1.41-6.34,2.04-9.66,2.41-2.33.26-4.68.36-5.87.45-6.33-.06-11.46-.52-16.38-2.27-1.42-.51-2.81-1.23-4.06-2.08-1.64-1.1-1.58-2.08-.02-3.31,1.32-1.04,2.83-1.75,4.43-2.18,2.28-.61,4.61-1.05,6.92-1.57.43-.1.67.04.92.4,1.72,2.5,3.46,4.99,5.22,7.47,1.05,1.48,2.53,1.48,3.59-.02,1.73-2.44,3.45-4.9,5.14-7.37.28-.41.55-.57,1.07-.49,3.26.51,6.49,1.14,9.46,2.65Zm-17.05.2c-.12.17-.25.33-.46.6-1.22-1.72-2.39-3.35-3.53-5.01-4.47-6.47-8.65-13.13-12.4-20.04-2.28-4.2-4.28-8.53-5.96-13.02C1.4,23.36,6.83,12.75,14.2,7.86c13.7-9.08,32.1-1.72,35.72,14.31.91,4.02.47,7.89-.89,11.74-2.07,5.86-4.95,11.33-8.03,16.69-4.09,7.11-8.55,13.98-13.38,20.61Z"/>
                  <path d="m17.21,27.18c0-5.54,4.48-10.02,9.99-10.01,5.52.01,9.97,4.49,9.96,10.04,0,5.47-4.49,9.9-10.02,9.91-5.42.02-9.93-4.5-9.93-9.95Zm9.98,6.01c3.39-.01,6.06-2.7,6.05-6.09-.02-3.34-2.73-6.01-6.08-6-3.33.01-6.02,2.72-6.01,6.07,0,3.35,2.7,6.03,6.05,6.02Z"/>
                </svg>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-on-background mb-1">Dirección</span>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {clinic.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 74.22 74.22" 
                  fill="currentColor" 
                  className="w-5 h-5 text-brand-purple shrink-0 mt-0.5"
                >
                  <path d="m14.61,0c1.44.03,2.73.62,3.64,1.97,3.29,4.89,6.52,9.81,9.75,14.74.89,1.35.9,2.78.43,4.27-.41,1.32-1.14,2.48-1.8,3.67-.81,1.46-1.65,2.91-2.48,4.35-.13.22-.15.38.01.61,1.37,2,2.94,3.84,4.57,5.64,3.27,3.61,6.72,7.05,10.33,10.32,1.77,1.6,3.58,3.15,5.56,4.5.23.15.38.15.62.02,2.16-1.24,4.31-2.49,6.51-3.66.88-.47,1.81-.79,2.82-.9,1.06-.11,2.05.11,2.94.68,3.7,2.37,7.35,4.82,11.01,7.25,1.31.88,2.63,1.75,3.93,2.64,1.09.75,1.65,1.82,1.77,3.12.13,1.46-.25,2.8-1.09,3.97-2.32,3.23-4.92,6.22-7.93,8.83-.68.59-1.4,1.13-2.18,1.58-.77.44-1.59.64-2.48.61-2.29-.09-4.52-.53-6.7-1.22-3.21-1.01-6.22-2.47-9.12-4.16-4.92-2.87-9.42-6.3-13.7-10.04-6.44-5.62-12.43-11.68-17.86-18.29-2.64-3.21-5.09-6.56-7.23-10.12-2.11-3.5-3.91-7.15-4.99-11.11-.46-1.7-.73-3.42-.88-5.17-.14-1.57.47-2.84,1.37-4.04,1.67-2.21,3.68-4.08,5.75-5.89,1.17-1.02,2.38-2.01,3.64-2.91C11.89.48,13.1.02,14.61,0Zm46.51,70.69c.82-.37,1.53-.91,2.19-1.5,2.48-2.21,4.63-4.73,6.65-7.36.33-.43.62-.87.76-1.41.19-.71.03-1.39-.42-1.68-4.63-3.08-9.28-6.13-13.89-9.24-.81-.55-1.57-.61-2.44-.34-.4.12-.78.31-1.15.51-2.59,1.46-5.19,2.93-7.78,4.4-.19.11-.31.11-.5,0-1.71-.99-3.25-2.2-4.76-3.46-5.72-4.77-10.97-10.01-15.78-15.7-1.4-1.66-2.76-3.36-3.85-5.25-.09-.16-.1-.27,0-.43,1.35-2.37,2.7-4.75,4.04-7.13.42-.74.86-1.47,1.01-2.33.1-.58.09-1.1-.28-1.62-.83-1.18-1.6-2.42-2.4-3.63-2.32-3.51-4.65-7.01-6.98-10.52-.15-.23-.33-.37-.6-.44-.87-.23-1.62.04-2.3.55-2.63,1.98-5.13,4.12-7.35,6.55-.6.66-1.17,1.34-1.58,2.14-.2.39-.35.77-.32,1.23.09,1.21.24,2.42.53,3.6.75,3.06,2.01,5.92,3.5,8.67,2.42,4.48,5.4,8.58,8.63,12.5,4.1,4.97,8.57,9.6,13.27,14,3.99,3.74,8.16,7.26,12.67,10.36,3.39,2.33,6.91,4.4,10.74,5.92,2.44.97,4.95,1.68,7.63,1.77.26.06.5-.03.75-.14Z"/>
                </svg>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-on-background mb-1">Teléfono</span>
                  <a 
                    href={`tel:${clinic.phone.split('/')[0].replace(/\D/g, '')}`} 
                    className="text-sm text-on-surface-variant hover:text-brand-purple transition-colors"
                  >
                    {clinic.phone}
                  </a>
                </div>
              </div>

              {clinic.whatsapp && (
                <div className="flex items-start gap-4">
                  <WhatsAppOutlineIcon className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-on-background mb-1">WhatsApp</span>
                    <a 
                      href={`https://wa.me/58${clinic.whatsapp.replace(/\D/g, '').replace(/^0/, '')}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm text-on-surface-variant hover:text-brand-purple transition-colors"
                    >
                      {clinic.whatsapp}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 62.34 62.34" 
                  fill="currentColor" 
                  className="w-5 h-5 text-brand-purple shrink-0 mt-0.5"
                >
                  <path d="m61.48,13.38c-1.84-7.73-7.78-12.62-15.71-13.09-.71-.04-1.42-.19-2.13-.29h-24.94c-1.68.24-3.38.39-5.04.75C5.93,2.42.79,8.49.3,16.42c-.05.76-.2,1.52-.3,2.28v24.94c.34,2.08.5,4.21,1.06,6.23,2,7.14,7.95,11.73,15.51,12.16.82.05,1.63.2,2.44.31h24c1.99-.28,4.01-.42,5.95-.88,7.78-1.85,12.65-7.84,13.07-15.85.05-.87.2-1.73.3-2.6v-24c-.28-1.88-.43-3.79-.87-5.64Zm-5.06,31.28c-.02,2.79-.79,5.44-2.6,7.67-2.3,2.82-5.44,3.96-8.92,4.07-4.56.14-9.13.04-13.7.04,0,0,0,.01,0,.02-4.46,0-8.93.12-13.38-.03-7.35-.24-11.73-4.48-11.89-11.84-.2-8.97-.19-17.95,0-26.92.16-7.27,4.5-11.58,11.8-11.74,8.92-.19,17.85-.2,26.77,0,7.46.16,11.77,4.52,11.91,11.96.17,8.92.08,17.85,0,26.77Z"/>
                  <path d="m47.15,31.22c-.03,8.93-7.17,15.99-16.09,15.92-8.87-.07-15.88-7.11-15.88-15.97,0-8.93,7.08-16.01,16.01-16,8.92,0,16,7.12,15.96,16.05Zm-15.9-10.39c-5.82-.02-10.4,4.5-10.42,10.28-.02,5.74,4.49,10.33,10.17,10.38,5.83.05,10.46-4.46,10.49-10.21.03-5.83-4.48-10.43-10.25-10.45Z"/>
                  <path d="m51.52,14.47c.03,2.08-1.61,3.8-3.66,3.84-2.02.03-3.79-1.67-3.84-3.7-.05-2.03,1.64-3.75,3.71-3.78,2.14-.03,3.75,1.52,3.79,3.65Z"/>
                </svg>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-on-background mb-1">Instagram</span>
                  <a 
                    href={`https://instagram.com/${clinic.instagram.replace('@', '').replace(/ /g, '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-on-surface-variant hover:text-brand-purple transition-colors"
                  >
                    @{clinic.instagram.replace('@', '')}
                  </a>
                </div>
              </div>

            </div>

            <a 
              href={clinic.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full py-3 rounded-full bg-brand-purple text-white font-label-md font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center shadow-sm hover:shadow-md"
            >
              <span>Ver en Google Maps</span>
            </a>

          </article>
        ))}
      </div>

      <div className="flex md:hidden items-center justify-center gap-2 mt-4">
        {CLINICS.map((clinic, idx) => (
          <button 
            key={clinic.id} 
            onClick={() => scrollTo(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-6 bg-pink-500' : 'w-2 bg-pink-200'}`}
            aria-label={`Ir a la sede ${idx + 1}`}
          />
        ))}
      </div>

    </div>
  </div>
</section>
    </>
  );
}