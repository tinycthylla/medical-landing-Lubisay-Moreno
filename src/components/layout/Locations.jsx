import { useState, useRef, useEffect } from 'react';

export default function Locations() {
  const sectionRef = useRef(null);

  const clinics = [
    {
      name: "Asociación Civil Niña Madre",
      address: "Vereda 92, local 9, parroquia Coche, municipio Libertador, Caracas.",
      phone: "(0212) 6812498",
      whatsapp: null,
      instagram: "ninamadre",
      mapLink: "https://maps.app.goo.gl/tT9hDW28kp9aR4Nx8"
    },
    {
      name: "Servicios Médicos DR",
      address: "Av. Francisco Salias (Perimetral), al lado del Colegio Siso Martínez, entrada edf. La Cuadra.",
      phone: "0212-3731345 / 0212-3723402",
      whatsapp: "0414-6277168",
      instagram: "servimedicos_dr",
      mapLink: "https://maps.app.goo.gl/3cn21aB2vvQgNEha9"
    },
    {
      name: "Impremer Salud",
      address: "Centro Empresarial Coliseo, piso 1, oficina 38-39, San Antonio de los Altos.",
      phone: "04122289555",
      whatsapp: null,
      instagram: "impremersalud",
      mapLink: "https://maps.app.goo.gl/3DKzT48KWtroA9nw5"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  // Animación al hacer scroll
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
        {/* Contenedor animado */}
        <div ref={sectionRef} className="opacity-0 md:max-w-[1200px] md:mx-auto">
          
          <div className="flex flex-col px-6 md:items-center md:text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-headline-sm font-bold text-on-background tracking-tight">
              Ubicación y Contacto
            </h2>
            <p className="text-sm md:text-base text-on-surface-variant mt-3 max-w-2xl">
              Visítanos en nuestras instalaciones diseñadas para tu confort.
            </p>
          </div>

          <div className="relative w-full">
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 md:px-6 lg:px-0 pb-4"
            >
              {clinics.map((clinic, index) => (
                <article 
                  key={index} 
                  className="w-[85vw] max-w-[340px] shrink-0 snap-center flex flex-col p-6 rounded-3xl bg-white border border-pink-100 shadow-sm hover:shadow-md transition-all duration-300 md:w-auto md:max-w-none h-full"
                >
                  
                  <h3 className="font-headline-sm text-xl lg:text-2xl font-bold text-on-background mb-6 pb-4 border-b border-gray-50">
                    {clinic.name}
                  </h3>

                  <div className="flex flex-col gap-5 mb-8 flex-grow">
                    
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-pink-500 text-[24px] shrink-0">location_on</span>
                      <div className="flex flex-col">
                        <span className="font-bold text-sm text-on-background mb-1">Dirección</span>
                        <p className="text-sm text-on-surface-variant leading-relaxed">
                          {clinic.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-pink-500 text-[24px] shrink-0">call</span>
                      <div className="flex flex-col">
                        <span className="font-bold text-sm text-on-background mb-1">Teléfonos</span>
                        <a href={`tel:${clinic.phone.replace(/\D/g,'')}`} className="text-sm text-on-surface-variant hover:text-pink-500 transition-colors">
                          {clinic.phone}
                        </a>
                        {clinic.whatsapp && (
                          <a href={`https://wa.me/58${clinic.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer" className="text-sm text-whatsapp hover:opacity-80 transition-opacity mt-1 font-medium flex items-center gap-1">
                            {clinic.whatsapp} (WhatsApp)
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-pink-500 text-[24px] shrink-0">photo_camera</span>
                      <div className="flex flex-col">
                        <span className="font-bold text-sm text-on-background mb-1">Redes Sociales</span>
                        <a href={`https://instagram.com/${clinic.instagram.replace('@', '').replace(/ /g, '')}`} target="_blank" rel="noopener noreferrer" className="text-sm text-on-surface-variant hover:text-pink-500 transition-colors">
                          @{clinic.instagram.replace('@', '')}
                        </a>
                      </div>
                    </div>

                  </div>

                  <a 
                    href={clinic.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full py-3.5 rounded-full bg-whatsapp text-white font-bold text-sm hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Cómo llegar</span>
                    <span className="material-symbols-outlined text-[18px]">directions</span>
                  </a>
                </article>
              ))}
            </div>

            <div className="flex md:hidden items-center justify-center gap-2 mt-4">
              {clinics.map((_, idx) => (
                <button 
                  key={idx} 
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