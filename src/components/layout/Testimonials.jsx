import { useState, useEffect, useRef } from 'react';
import fotoLizaveta from '../../assets/lizaveta_acevedo.jpg';
import fotoYoleida from '../../assets/yoleida_garcia.jpg';
import fotoKatiuska from '../../assets/katiuska_rodriguez.jpg';
import fotoGabriela from '../../assets/gabriela_guzman.jpg';
import fotoFrancis from '../../assets/francis_pena.jpg';
import fotoOrianna from '../../assets/orianna_rodriguez.jpg';
import fotoEliza from '../../assets/elizabeth_de_ponte.jpg';
import fotoDinora from '../../assets/dinora_rodriguez.jpg';
import fotoBarbara from '../../assets/barbara_cisneros.jpg';
import fotoYei from '../../assets/yeilysacosta.jpg';
import fotoYor from '../../assets/yorlianis.jpg';

export default function Testimonials() {
  const sectionRef = useRef(null);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

  const reviews = [
    { name: "Lizaveta Acevedo.", time: "Hace 2 semanas", image: fotoLizaveta, quote: "Tuve un embarazo de cuidado y la doctora estuvo pendiente en todo momento. Su monitoreo constante me dio la paz que necesitaba para llegar a término." },
    { name: "Yoleida García.", time: "Hace 1 mes", image: fotoYoleida, quote: "Me ha ayudado muchísimo a manejar los síntomas de la menopausia. Es una doctora actualizada que realmente se preocupa por tu calidad de vida." },
    { name: "Katiuska Rodríguez.", time: "Hace 3 meses", image: fotoKatiuska, quote: "Excelente atención. Lo que más valoro es que te escucha de verdad, no te apura en la consulta y responde todas tus dudas sin usar términos complicados." },
    { name: "Gabriela Guzmán.", time: "Hace 4 meses", image: fotoGabriela, quote: "Después de dar muchas vueltas, fue la única que logró darme un diagnóstico claro y un tratamiento efectivo para mis ovarios poliquísticos. Excelente profesional." },
    { name: "Francis Peña.", time: "Hace 8 meses", image: fotoFrancis, quote: "Fui para asesorarme sobre métodos anticonceptivos y me explicó todas las opciones con mucha claridad para poder elegir la mejor para mi cuerpo." },
    { name: "Orianna Rodríguez.", time: "Hace 1 año", image: fotoOrianna, quote: "Acudí por unos dolores menstruales muy fuertes y gracias a su ecografía logramos un diagnóstico certero de inmediato. Muy agradecida por su precisión." },
    { name: "Elizabeth de Ponte.", time: "Hace 2 años", image: fotoEliza, quote: "Me ha ayudado muchísimo a regular mis ciclos menstruales y a entender mejor mi cuerpo. Es una doctora joven, actualizada y con excelente trato." },
    { name: "Dinora Rodríguez.", time: "Hace 2 días", image: fotoDinora, quote: "Tengo años atendiéndome con la Dra. Moreno. Es directa al explicar y tiene mucha empatía con sus pacientes. Definitivamente no la cambio por nadie." },
    { name: "Barbara Cisneros.", time: "Hace 2 semanas", image: fotoBarbara, quote: "Fui para un chequeo de rutina y me sorprendió lo completa que fue la evaluación. Te revisa de forma integral y te explica el porqué de cada estudio." },
    { name: "Yeilys Acosta.", time: "Hace 1 meses", image: fotoYei, quote: "La Dra. Lubisay llevó el control de todo mi embarazo. Sus ecos son súper detallados y siempre nos explicó cada avance con mucha paciencia. Me dio muchísima tranquilidad." },
    { name: "Yorlianys López.", time: "Hace 6 meses", image: fotoYor, quote: "Era mi primera consulta ginecológica y estaba bastante nerviosa. La doctora me hizo sentir cómoda y segura desde el primer momento." }
  ];

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1); 
      else if (window.innerWidth < 1024) setItemsPerView(2); 
      else setItemsPerView(3); 
    };
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = reviews.length - itemsPerView;

  const nextSlide = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        nextSlide();
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isHovered, maxIndex]);

  return (
    // Se eliminó el bg-pink-50 para volver al fondo natural
    <section id="testimonios" className="scroll-mt-32 w-full pt-10 md:pt-2 pb-16 md:pb-24 overflow-hidden transition-colors duration-500">
      <div ref={sectionRef} className="opacity-0 w-full max-w-[1300px] mx-auto px-4 md:px-6">
        
        {/* Cabecera: Forzamos flex-col y items-center para centrar todo en móvil */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          
          {/* Etiquetas: Usamos flex-row y flex-wrap para que se acomoden juntas y centradas */}
          <div className="flex flex-row flex-wrap justify-center items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white text-pink-500 font-label-md text-[10px] sm:text-xs uppercase tracking-wider font-bold shadow-sm border border-pink-100">
              <span className="material-symbols-outlined text-[14px] sm:text-[16px]">verified</span>
              Experiencias Reales
            </span>
            <div className="flex items-center gap-1 text-whatsapp bg-white px-2.5 py-1 rounded-full shadow-sm border border-green-100">
              <span className="material-symbols-outlined text-[14px] sm:text-[16px]">thumb_up</span>
              <span className="text-[10px] sm:text-xs font-semibold">100% recomendada</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-headline-sm font-bold text-on-background tracking-tight">
            Lo que dicen nuestras pacientes
          </h2>
          <p className="text-sm text-on-surface-variant mt-2 md:mt-4">
            Opiniones reales de nuestra comunidad
          </p>
        </div>

        {/* Contenedor Principal del Carrusel */}
        <div 
          className="relative w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          
          <button 
            onClick={prevSlide}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-md border border-pink-100 items-center justify-center text-pink-500 hover:bg-pink-100 hover:scale-105 transition-all"
          >
            <span className="material-symbols-outlined text-2xl">chevron_left</span>
          </button>

          <div className="overflow-hidden w-full px-2 py-4">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {reviews.map((review, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }} 
                >
                  <article className="h-full p-6 rounded-3xl bg-white border border-pink-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4 text-left cursor-default">
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="material-symbols-outlined text-[18px] md:text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-on-surface-variant text-[10px] md:text-[11px] font-medium bg-green-50 text-whatsapp px-2 py-1 rounded-md">
                        <span className="material-symbols-outlined text-[12px] md:text-[14px]">check_circle</span>
                        Verificada
                      </span>
                    </div>

                    <blockquote className="text-sm md:text-base text-on-surface-variant italic leading-relaxed flex-grow">
                      “{review.quote}”
                    </blockquote>

                    <div className="flex items-center justify-between pt-4 border-t border-pink-50">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm border border-pink-100 bg-pink-50 flex items-center justify-center shrink-0">
                          <img 
                            src={review.image} 
                            alt={review.name} 
                            className="w-full h-full object-cover grayscale opacity-90"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm text-on-background font-bold leading-none">{review.name}</span>
                          <span className="text-[11px] md:text-xs text-on-surface-variant mt-1.5">{review.time}</span>
                        </div>
                      </div>
                      
                      <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-pink-300">
                        <span className="material-symbols-outlined text-[16px]">thumb_up</span>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={nextSlide}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-md border border-pink-100 items-center justify-center text-pink-500 hover:bg-pink-100 hover:scale-105 transition-all"
          >
            <span className="material-symbols-outlined text-2xl">chevron_right</span>
          </button>
        </div>

        {/* Controles para Móviles */}
        <div className="flex md:hidden items-center justify-center gap-6 mt-6">
          <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-white shadow-sm border border-pink-100 flex items-center justify-center text-pink-500 active:bg-pink-100 transition-colors">
            <span className="material-symbols-outlined text-xl">chevron_left</span>
          </button>
          
          <div className="flex gap-1.5">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-6 bg-pink-500' : 'bg-pink-200'}`}
                aria-label={`Ir a la diapositiva ${idx + 1}`}
              />
            ))}
          </div>

          <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-white shadow-sm border border-pink-100 flex items-center justify-center text-pink-500 active:bg-pink-100 transition-colors">
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </button>
        </div>

      </div>
    </section>
  );
}