import { useEffect, useRef } from 'react';
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const reviews = [
    {
      name: "Lizaveta Acevedo.",
      time: "Hace 2 semanas",
      image: fotoLizaveta,
      quote: "Tuve un embarazo de cuidado y la doctora estuvo pendiente en todo momento. Su monitoreo constante me dio la paz que necesitaba para llegar a término.",
    },
    {
      name: "Yoleida García.",
      time: "Hace 1 mes",
      image: fotoYoleida,
      quote: "Me ha ayudado muchísimo a manejar los síntomas de la menopausia. Es una doctora actualizada que realmente se preocupa por tu calidad de vida.",
    },
    {
      name: "Katiuska Rodríguez.",
      time: "Hace 3 meses",
      image: fotoKatiuska,
      quote: "Excelente atención. Lo que más valoro es que te escucha de verdad, no te apura en la consulta y responde todas tus dudas sin usar términos complicados.",
    },
    {
      name: "Gabriela Guzmán.",
      time: "Hace 4 meses",
      image: fotoGabriela,
      quote: "Después de dar muchas vueltas, fue la única que logró darme un diagnóstico claro y un tratamiento efectivo para mis ovarios poliquísticos. Excelente profesional.",
    },

    {
      name: "Francis Peña.",
      time: "Hace 8 meses",
      image: fotoFrancis,
      quote: "Fui para asesorarme sobre métodos anticonceptivos y me explicó todas las opciones con mucha claridad para poder elegir la mejor para mi cuerpo.",
    },

    {
      name: "Orianna Rodríguez.",
      time: "Hace 1 año",
      image: fotoOrianna,
      quote: "Acudí por unos dolores menstruales muy fuertes y gracias a su ecografía logramos un diagnóstico certero de inmediato. Muy agradecida por su precisión.",
    },

    {
      name: "Elizabeth de Ponte.",
      time: "Hace 2 años",
      image: fotoEliza,
      quote: "Me ha ayudado muchísimo a regular mis ciclos menstruales y a entender mejor mi cuerpo. Es una doctora joven, actualizada y con excelente trato.",
    },

    {
      name: "Dinora Rodríguez.",
      time: "Hace 2 días",
      image: fotoDinora,
      quote: "Tengo años atendiéndome con la Dra. Moreno. Es directa al explicar y tiene mucha empatía con sus pacientes. Definitivamente no la cambio por nadie.",
    },

    {
      name: "Barbara Cisneros.",
      time: "Hace 2 semanas",
      image: fotoBarbara,
      quote: "Fui para un chequeo de rutina y me sorprendió lo completa que fue la evaluación. Te revisa de forma integral y te explica el porqué de cada estudio.",
    },

    {
      name: "Yeilys Acosta.",
      time: "Hace 1 meses",
      image: fotoYei,
      quote: "La Dra. Lubisay llevó el control de todo mi embarazo. Sus ecos son súper detallados y siempre nos explicó cada avance con mucha paciencia. Me dio muchísima tranquilidad.",
    },

    {
      name: "Yorlianys López.",
      time: "Hace 6 meses",
      image: fotoYor,
      quote: "Era mi primera consulta ginecológica y estaba bastante nerviosa. La doctora me hizo sentir cómoda y segura desde el primer momento.",
    }
  ];

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Ajuste crítico: pt-2 para móvil, pt-8 para PC */}
      <section id="testimonios" className="scroll-mt-32 w-full pt-0 md:pt-12 pb-16 md:pb-24 overflow-hidden">
  <div ref={sectionRef} className="opacity-0 md:max-w-[1200px] md:mx-auto px-6">
          
          <div className="flex flex-col md:items-center md:text-center mb-8 md:mb-12">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4 md:justify-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-500 font-label-md text-xs uppercase tracking-wider font-bold">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                Experiencias Reales
              </span>
              <div className="flex items-center gap-1 text-primary bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">
                <span className="material-symbols-outlined text-[16px]">thumb_up</span>
                <span className="text-xs font-semibold">100% recomendada</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-headline-sm font-bold text-on-background tracking-tight">
              Lo que dicen nuestras pacientes
            </h2>
            <p className="text-sm text-on-surface-variant md:mx-auto mt-2 md:mt-4">
              Opiniones reales de nuestra comunidad
            </p>
          </div>
        </div>

        <div className="relative w-full overflow-hidden mt-6 md:mt-8">
          
          <div className="flex w-max animate-marquee">
            
            {[...reviews, ...reviews].map((review, index) => (
              <article 
                key={index} 
                className="w-[300px] md:w-[380px] flex-shrink-0 mx-3 md:mx-4 p-5 md:p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4 text-left cursor-default"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[18px] md:text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-on-surface-variant text-[10px] md:text-[11px] font-medium bg-gray-50 px-2 py-1 rounded-md">
                    <span className="material-symbols-outlined text-[12px] md:text-[14px] text-whatsapp">check_circle</span>
                    Verificada
                  </span>
                </div>

                <blockquote className="text-xs md:text-sm text-on-surface-variant italic leading-relaxed flex-grow">
                  “{review.quote}”
                </blockquote>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm border border-gray-100 bg-gray-50 flex items-center justify-center shrink-0">
                      <img 
                        src={review.image} 
                        alt={review.name} 
                        className="w-full h-full object-cover grayscale opacity-90"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-on-background font-bold leading-none">{review.name}</span>
                      <span className="text-[11px] md:text-xs text-gray-500 mt-1">{review.time}</span>
                    </div>
                  </div>
                  
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                    <span className="material-symbols-outlined text-[14px] md:text-[16px]">thumb_up</span>
                  </div>
                </div>
              </article>
            ))}

          </div>
          
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
        </div>

      </section>
    </>
  );
}