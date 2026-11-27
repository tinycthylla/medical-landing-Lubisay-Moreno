import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Testimonials from '../components/layout/Testimonials';
import Locations from '../components/layout/Locations';
import CtaDetailed from '../components/layout/CtaDetailed';
import { SERVICES } from '../data/services';
import useInView from '../hooks/useInView';

import fotoLufilosofia2 from '../assets/img/lufilosofia2.png';
import fotoLusentada2 from '../assets/img/lu_sentada2.webp';

function FadeInBlock({ as: Tag = 'div', className = '', children, ...props }) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <Tag
      ref={ref}
      className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

const consultationIncludes = [
  {
    title: "Cuidado y evaluación de tus mamas:",
    text: "Un chequeo físico detallado para detectar cualquier anomalía a tiempo y darte tranquilidad."
  },
  {
    title: "Despistaje de cáncer de cuello uterino:",
    text: "Realizamos tu citología (Papanicolaou) de forma cuidadosa, un paso clave para prevenir y proteger tu salud a futuro."
  },
  {
    title: "Examen físico integral:",
    text: "Una revisión ginecológica completa (externa y con espéculo) hecha con empatía y respetando tu comodidad."
  },
  {
    title: "Revisión de útero y ovarios:",
    text: "A través del tacto bimanual, evaluamos el estado de tus órganos reproductivos para asegurarnos de que todo marche bien."
  },
  {
    title: "Orientación preventiva:",
    text: "Más allá del chequeo, te guiamos para que conozcas mejor tu cuerpo y sepas cómo cuidarte día a día."
  },
  {
    title: "Ecografía detallada (Opcional):",
    text: "Si lo necesitas, complementamos tu chequeo con un ultrasonido pélvico o transvaginal para una visión mucho más profunda y precisa."
  }
];

export default function Services({ onOpenModal }) {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <main className="flex-grow pt-20 md:pt-24 font-body-md">
  <section className="w-full bg-surface-variant/30 py-12 md:py-16">
  <FadeInBlock className="px-6 md:max-w-[1200px] md:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
    <div className="relative w-full flex items-center justify-center">
      <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[600px] flex items-center justify-center lg:-translate-y-8">
        <div className="absolute inset-x-4 top-8 bottom-4 bg-gray-200/90 rounded-full shadow-inner z-0" />
        <img 
          src={fotoLufilosofia2} 
          alt="Dra. Lubisay Moreno en consulta" 
          className=" relative z-10 w-full h-auto object-contain drop-shadow-2xl"
        />
        <div className="absolute -bottom-4 -left-2 sm:left-2 lg:-left-6 z-20 bg-white p-4 md:p-5 rounded-2xl shadow-md shadow-pink-200/40 max-w-[280px]">
          <p className="text-sm font-medium text-on-surface-variant leading-snug">
            "Cada consulta es atendida personalmente por la <strong className="text-brand-pink">Dra. Lubisay Moreno</strong>, garantizando un espacio seguro, empático y de la más alta calidad."
          </p>
        </div>
      </div>
    </div>

    <div className="flex flex-col justify-center">
      <span className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-pink-100 text-brand-pink font-label-md text-[10px] sm:text-xs uppercase tracking-wider font-bold shadow-sm mb-4 w-fit">
        Tratamiento Personalizado
      </span>

      <h1 className="text-3xl md:text-5xl font-body-md font-bold text-on-background mb-4 leading-tight">
        Consulta Ginecológica <span className="text-brand-pink">Integral</span>
      </h1>
      
      <p className="text-on-surface-variant text-base mb-8 leading-relaxed max-w-lg">
        Un espacio seguro y empático diseñado para evaluar tu salud íntima a profundidad. Mi objetivo es que te sientas cómoda, escuchada y bien informada sobre tu cuerpo.
      </p>

      <h2 className="font-bold text-on-background uppercase tracking-wider text-sm mb-4">
        ¿Qué incluye la consulta?
      </h2>
      
      <ul className="space-y-3 mb-8">
        {consultationIncludes.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="material-symbols-outlined text-brand-purple mt-0.5 shrink-0">
              check_circle
            </span>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              <strong className="text-on-background">{item.title}</strong> {item.text}
            </p>
          </li>
        ))}
      </ul>

          <button onClick={onOpenModal}
            type="button" className="w-full sm:w-auto px-8 py-3 rounded-full bg-brand-purple text-white font-label-md 
            font-semibold text-sm hover:opacity-90 active:scale-[0.98] 
            transition-all flex items-center justify-center shadow-sm hover:shadow-md">
            <span>Agendar mi consulta</span>
          </button>
            </div>
            </FadeInBlock>
      </section>

      <section className="w-full bg-surface-variant/30 pt-4 pb-8 md:pt-12 md:pb-20">
        <div className="px-6 md:max-w-[1200px] md:mx-auto">
          
          <FadeInBlock>
            <div className="flex flex-col items-center text-center mb-8 md:mb-12">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-pink-100 text-brand-pink font-label-md text-[10px] sm:text-xs uppercase tracking-wider font-bold shadow-sm">
                Nuestros Servicios
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 md:gap-4 mb-10">
              {SERVICES.map((service) => (
                <a 
                  key={service.id} 
                  href={`#${service.id}`}
                  className="flex flex-col items-center text-center p-2 hover:-translate-y-2 transition-transform cursor-pointer group"
                >
                  <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mb-4">
                    <img src={service.icon} alt={service.quickLabel} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="font-bold text-sm md:text-base text-on-background leading-snug group-hover:text-brand-pink transition-colors">
                    {service.quickLabel}
                  </h3>
                </a>
              ))}
            </div>

            <div className="flex justify-center">
              <button 
                onClick={onOpenModal}
                type="button"
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-brand-purple text-white font-label-md font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center shadow-sm hover:shadow-md"
              >
                <span>Agendar alguno de estos servicios</span>
              </button>
            </div>
          </FadeInBlock>

        </div>
      </section>

      <section className="w-full bg-pink-50 pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
        <div className="px-6 md:max-w-[1200px] md:mx-auto">

          <FadeInBlock className="flex flex-col items-center text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-body-md font-bold text-on-background mb-4 md:mb-6 tracking-tight">
              Guía de nuestras <span className="text-brand-pink">especialidades médicas</span>
            </h2>
            <p className="text-sm md:text-lg font-body-md text-on-surface-variant leading-relaxed max-w-3xl">
              Te explicamos de forma sencilla de qué trata cada especialidad para que sepas exactamente qué necesitas antes de tu consulta.
            </p>
          </FadeInBlock>

          <div className="space-y-12 lg:space-y-20">
            {SERVICES.map((service, index) => {
              const isEven = index % 2 === 0;

              return (
                <FadeInBlock
                  as="article"
                  key={service.id}
                  id={service.id}
                  className="group scroll-mt-32 flex flex-col lg:flex-row items-center"
                >
                  <div 
                    className={`order-1 w-full lg:w-[55%] aspect-[4/3] rounded-3xl overflow-hidden shadow-md shadow-pink-200/40 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <img 
                      src={service.image} 
                      alt={service.alt} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                    />
                  </div>

                  <div 
                    className={`order-2 w-[92%] sm:w-full lg:w-[50%] relative z-10 bg-white p-6 sm:p-8 lg:p-12 rounded-3xl shadow-lg shadow-pink-200/40 lg:shadow-xl lg:shadow-pink-200/30 group-hover:shadow-2xl group-hover:shadow-pink-200/50 transition-all duration-500 -mt-8 sm:mt-5 lg:mt-0 flex flex-col items-center lg:items-start text-center lg:text-left ${
                      isEven ? 'lg:order-2 lg:-ml-12' : 'lg:order-1 lg:-mr-12'
                    }`}
                  >
                    <h3 className="text-2xl md:text-3xl font-body-md font-bold text-on-background mb-3 md:mb-4">
                      {service.detailedTitle}
                    </h3>
                    
                    <p className="text-sm md:text-base font-body-md text-on-surface-variant mb-6 md:mb-8 leading-relaxed">
                      {service.detailedDescription}
                    </p>
                    
                    <button 
                      onClick={onOpenModal} 
                      type="button"
                      className="group/btn w-full sm:w-auto px-8 py-3 rounded-full bg-brand-pink text-white font-label-md font-semibold text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:opacity-95 active:scale-[0.99] transition-all duration-300"
                    >
                      <span>Agendar para este servicio</span>
                      <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover/btn:translate-x-1">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </FadeInBlock>
              );
            })}
          </div>

        </div>
      </section>

      <section className="w-full bg-background pt-4 pb-16 md:pt-6 md:pb-20 px-6 overflow-hidden">
        <FadeInBlock className="md:max-w-[1000px] md:mx-auto flex flex-col-reverse md:grid md:grid-cols-5 gap-8 md:gap-10 lg:gap-16 items-center">
          <div className="md:col-span-2 relative w-[80%] sm:w-[70%] md:w-full max-w-[320px] md:max-w-none mx-auto aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden bg-white shadow-md shadow-pink-200/40 hover:shadow-lg hover:shadow-pink-200/60 transition-all duration-300">
            <img 
              src={fotoLusentada2} 
              alt="Dra. Lubisay Moreno" 
              className="w-full h-full object-cover object-top" 
            />
          </div>

          <div className="md:col-span-3 flex flex-col text-center md:text-left font-body-md w-full">
            <div className="mb-4">
              <span className="text-brand-pink font-label-md text-xs font-bold uppercase tracking-[0.2em]">
                Atención centrada en ti
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-body-md font-medium text-on-background mb-4 md:mb-6 leading-[1.15]">
              Tu salud, <br className="hidden md:block" />
              <span className="text-brand-pink font-body-md italic font-medium">
                tus decisiones,
              </span> <br className="hidden md:block" />
              mi respaldo médico.
            </h2>

            <p className="text-on-surface-variant font-body-md font-normal text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
              La salud femenina es evolución constante. Mi objetivo es acompañarte con honestidad y mucha empatía a lo largo de toda tu vida.
              Quiero que salgas de cada consulta sintiéndote segura, conociendo mejor tu cuerpo y con la confianza de tener a una especialista dedicada a proteger tu bienestar integral, hoy y siempre.
            </p>

            <p className="font-body-md font-bold text-lg text-on-background">
              - Dra. Lubisay Moreno
            </p>
          </div>
          
        </FadeInBlock>
      </section>

      <Testimonials />
      <Locations />
      <CtaDetailed onOpenModal={onOpenModal} />

    </main>
  );
}