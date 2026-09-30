import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import FotoLuDiu from '../assets/ludiu2.png';
import Testimonials from '../components/layout/Testimonials';
import CtaBanner from '../components/layout/CtaBanner';
import iconPrenatal from '../assets/icono-prenatal.svg';
import iconEco from '../assets/icono-eco.svg';
import iconGineco from '../assets/icono-gineco.svg';
import iconPlan from '../assets/icono-plan.svg';
import iconObste from '../assets/icono-obste.svg';
import iconSexual from '../assets/icono-sexual.svg';
import iconMeno from '../assets/icono-meno.svg';
import fotoPregnant from '../assets/woman_pregnant.jpg';
import fotoEco from '../assets/ecography.jpg';
import fotoLu from '../assets/lu_gineco.jpg';
import fotoUterus from '../assets/ginecology.jpg';

export default function Services({ onOpenModal }) {
  
  const { hash } = useLocation();
  const heroRef = useRef(null);
  
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

  const useScrollAnimation = () => {
    const ref = useRef(null);
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
      if (ref.current) observer.observe(ref.current);
      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }, []);
    return ref;
  };

  const quickServices = [
    { title: "Control Prenatal", image: iconPrenatal, target: "control-prenatal" },
    { title: "Ecografías Integrales", image: iconEco, target: "ecografias" },
    { title: "Ginecología General", image: iconGineco, target: "ginecologia" },
    { title: "Planificación Familiar", image: iconPlan, target: "planificacion" },
    { title: "Control Obstétrico", image: iconObste, target: "control-obstetrico" },
    { title: "Salud Sexual", image: iconSexual, target: "salud-sexual" },
    { title: "Menopausia", image: iconMeno, target: "menopausia" }
  ];

  const detailRefs = Array.from({ length: 7 }, () => useScrollAnimation());
  const philosophyRef = useScrollAnimation();
  const quickServicesRef = useScrollAnimation();
  const mainTitleRef = useScrollAnimation();

  return (
    <main className="flex-grow pt-20 md:pt-24">
      
      {/* =========================================================
          1. HERO DE SERVICIOS
      ========================================================= */}
      <section className="w-full bg-surface-variant/30 pt-8 pb-0 md:pt-12 md:pb-8">
        <div 
          ref={heroRef} 
          className="opacity-0 animate-fade-in-up px-6 md:max-w-[1200px] md:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center"
        >
          <div className="relative w-full h-full min-h-[500px] lg:min-h-[600px] flex items-end justify-center lg:justify-start lg:-ml-6 pt-12">
            <div className="absolute bottom-0 lg:left-6 w-[85%] max-w-[420px] h-[100%] bg-gray-200 rounded-[150px] shadow-inner z-0"></div>
            <img 
              src={FotoLuDiu} 
              alt="Dra. Lubisay Moreno de rojo" 
              className="relative z-10 w-[95%] max-w-[480px] h-auto object-contain drop-shadow-2xl translate-y-2 lg:-translate-x-2"
            />
            <div className="absolute bottom-10 -left-2 sm:left-4 lg:-left-4 z-20 bg-white p-4 md:p-5 rounded-2xl shadow-xl border border-gray-100 max-w-[280px]">
              <p className="text-sm font-medium text-on-surface-variant leading-snug">
                "Cada consulta es atendida personalmente por la <strong className="text-pink-500">Dra. Lubisay Moreno</strong>, garantizando un espacio seguro, empático y de la más alta calidad."
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center pt-4 pb-0 lg:py-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-100 text-pink-500 text-xs font-bold uppercase tracking-wider mb-4 w-fit">
              Tratamiento Personalizado
            </div>
            <h1 className="text-3xl md:text-5xl font-headline-sm font-bold text-on-background mb-4 leading-tight">
              Consulta Ginecológica <span className="text-pink-500">Integral</span>
            </h1>
            <p className="text-on-surface-variant text-base mb-8 leading-relaxed max-w-lg">
              Un espacio seguro y empático diseñado para evaluar tu salud íntima a profundidad. Mi objetivo es que te sientas cómoda, escuchada y bien informada sobre tu cuerpo.
            </p>

            <h3 className="font-bold text-on-background uppercase tracking-wider text-sm mb-4">
              ¿Qué incluye la consulta?
            </h3>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500 mt-0.5">check_circle</span>
                <p className="text-sm text-on-surface-variant"><strong className="text-on-background">Cuidado y evaluación de tus mamas:</strong> Un chequeo físico detallado para detectar cualquier anomalía a tiempo y darte tranquilidad.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500 mt-0.5">check_circle</span>
                <p className="text-sm text-on-surface-variant"><strong className="text-on-background">Despistaje de cáncer de cuello uterino:</strong> Realizamos tu citología (Papanicolaou) de forma cuidadosa, un paso clave para prevenir y proteger tu salud a futuro.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500 mt-0.5">check_circle</span>
                <p className="text-sm text-on-surface-variant"><strong className="text-on-background">Examen físico integral:</strong> Una revisión ginecológica completa (externa y con espéculo) hecha con empatía y respetando tu comodidad.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500 mt-0.5">check_circle</span>
                <p className="text-sm text-on-surface-variant"><strong className="text-on-background">Revisión de útero y ovarios:</strong> A través del tacto bimanual, evaluamos el estado de tus órganos reproductivos para asegurarnos de que todo marche bien.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500 mt-0.5">check_circle</span>
                <p className="text-sm text-on-surface-variant"><strong className="text-on-background">Orientación preventiva:</strong> Más allá del chequeo, te guiamos para que conozcas mejor tu cuerpo y sepas cómo cuidarte día a día.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500 mt-0.5">check_circle</span>
                <p className="text-sm text-on-surface-variant"><strong className="text-on-background">Ecografía detallada (Opcional):</strong> Si lo necesitas, complementamos tu chequeo con un ultrasonido pélvico o transvaginal para una visión mucho más profunda y precisa.</p>
              </li>
            </ul>

            <button 
              onClick={onOpenModal}
              className="w-full sm:w-auto bg-whatsapp text-white font-bold text-sm px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg active:scale-[0.98]"
            >
              <span>Agendar mi consulta</span>
              <span className="material-symbols-outlined">calendar_month</span>
            </button>
          </div>
        </div>
      </section>

      {/* ====={/* =========================================================
          2. ICONOS RÁPIDOS 
      ========================================================= */}
      <section className="w-full bg-surface-variant/30 pt-10 pb-8 md:pt-12 md:pb-20">
        <div className="px-6 md:max-w-[1200px] md:mx-auto">
          
          <div ref={quickServicesRef} className="opacity-0">
            <div className="flex flex-col items-center text-center mb-8 md:mb-12">
              <div className="flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-pink-100 text-pink-500 font-label-md text-xs uppercase tracking-wider font-bold shadow-sm">
                  <span className="material-symbols-outlined text-[16px]">medical_services</span>
                  Nuestros Servicios
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 md:gap-4 mb-10">
              {quickServices.map((service, index) => (
                <a 
                  key={index} 
                  href={`#${service.target}`}
                  className="flex flex-col items-center text-center p-2 hover:-translate-y-2 transition-transform cursor-pointer group"
                >
                  <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mb-4">
                    <img src={service.image} alt={service.title} className="w-full h-full object-contain" />
                  </div>
                  <h4 className="font-bold text-sm md:text-base text-on-background leading-snug group-hover:text-pink-500 transition-colors">
                    {service.title}
                  </h4>
                </a>
              ))}
            </div>

            <div className="flex justify-center">
              <button 
                onClick={onOpenModal}
                className="bg-whatsapp text-white font-bold text-sm px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md active:scale-[0.98]"
              >
                <span>Agendar alguno de estos servicios</span>
                <span className="material-symbols-outlined">calendar_month</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          3. DETALLES EN ZIGZAG (AHORA CON FONDO bg-pink-50)
      ========================================================= */}
      <section className="w-full bg-pink-50 pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="px-6 md:max-w-[1200px] md:mx-auto">

          {/* --- BLOQUE: TÍTULO PRINCIPAL --- */}
          <div ref={mainTitleRef} className="opacity-0 flex flex-col items-center text-center mb-4 md:mb-4">
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-headline-sm font-headline-sm font-bold text-on-background mb-4 md:mb-6">
              Guía de nuestras <span className="text-pink-500">especialidades médicas</span></h2>
            <p className="text-base md:text-lg text-on-surface-variant leading-relaxed max-w-3xl">
              Te explicamos de forma sencilla de qué trata cada especialidad para que sepas exactamente qué necesitas antes de tu consulta.
            </p>
          </div>
          </div>

          {/* --- BLOQUE: DETALLES EN ZIGZAG --- */}
          <div className="pt-0 space-y-12 lg:space-y-16">
            
            {/* Detalle 1: Imagen Izquierda (Desktop) */}
            <div id="control-prenatal" ref={detailRefs[0]} className="opacity-0 scroll-mt-32 flex flex-col lg:flex-row items-center">
              <div className="order-1 lg:order-1 w-full lg:w-[55%] aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
                <img src={fotoPregnant} alt="Control Prenatal" className="w-full h-full object-cover" />
              </div>
              {/* Le quitamos el fondo blanco en móvil (bg-transparent) para que se funda con el rosa */}
              <div className="order-2 lg:order-2 w-full lg:w-[50%] relative z-10 bg-transparent lg:bg-white p-0 lg:p-12 lg:rounded-3xl lg:shadow-xl mt-5 lg:mt-0 lg:-ml-12 flex flex-col items-start text-left">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-pink-100 text-pink-500 text-xs font-bold uppercase tracking-wider mb-4">
                  Cuidando la vida desde el inicio
                </div>
                <h2 className="text-2xl md:text-3xl font-headline-sm font-bold text-on-background mb-4">Control Prenatal Humanizado</h2>
                <p className="text-on-surface-variant mb-6 leading-relaxed">
                  Acompañamos cada etapa de tu embarazo para asegurar tu bienestar físico y el de tu bebé. 
                  Realizamos los chequeos mensuales necesarios, monitoreando el crecimiento fetal y previniendo cualquier complicación. 
                  Nuestro objetivo es que vivas esta etapa con total tranquilidad, sintiéndote segura y respaldada hasta el día del parto.
                </p>
                <button onClick={onOpenModal} className="text-pink-500 font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  Agendar para este servicio <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Detalle 2: Imagen Derecha (Desktop) */}
            <div id="ecografias" ref={detailRefs[1]} className="opacity-0 scroll-mt-32 flex flex-col lg:flex-row items-center">
              <div className="order-1 lg:order-2 w-full lg:w-[55%] aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
                <img src={fotoEco} alt="Ecografia Integral" className="w-full h-full object-cover" />
              </div>
              <div className="order-2 lg:order-1 w-full lg:w-[50%] relative z-10 bg-transparent lg:bg-white p-0 lg:p-12 lg:rounded-3xl lg:shadow-xl mt-5 lg:mt-0 lg:-mr-12 flex flex-col items-start text-left">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-pink-100 text-pink-500 text-xs font-bold uppercase tracking-wider mb-4">
                  Diagnóstico avanzado para tu salud
                </div>
                <h2 className="text-2xl md:text-3xl font-headline-sm font-bold text-on-background mb-4">Ecografías Integrales</h2>
                <p className="text-on-surface-variant mb-6 leading-relaxed">
                  Utilizamos tecnología de ultrasonido avanzado para obtener imágenes precisas de tu sistema reproductivo. 
                  Este estudio rápido y sin dolor nos permite evaluar la salud de tu útero y ovarios, detectar quistes o hacer seguimiento gestacional. 
                  Es una herramienta clave para darte un diagnóstico certero y mantener tu salud preventiva al día.
                </p>
                <button onClick={onOpenModal} className="text-pink-500 font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  Agendar para este servicio <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Detalle 3: Imagen Izquierda (Desktop) */}
            <div id="ginecologia" ref={detailRefs[2]} className="opacity-0 scroll-mt-32 flex flex-col lg:flex-row items-center">
              <div className="order-1 lg:order-1 w-full lg:w-[55%] aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
                <img src={fotoUterus} alt="Ginecología General" className="w-full h-full object-cover" />
              </div>
              <div className="order-2 lg:order-2 w-full lg:w-[50%] relative z-10 bg-transparent lg:bg-white p-0 lg:p-12 lg:rounded-3xl lg:shadow-xl mt-5 lg:mt-0 lg:-ml-12 flex flex-col items-start text-left">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-pink-100 text-pink-500 text-xs font-bold uppercase tracking-wider mb-4">
                  Prevención
                </div>
                <h2 className="text-2xl md:text-3xl font-headline-sm font-bold text-on-background mb-4">Ginecología General</h2>
                <p className="text-on-surface-variant mb-6 leading-relaxed">
                  Evaluación clínica completa para la prevención, diagnóstico y tratamiento de cualquier alteración del sistema reproductor femenino, garantizando tu salud integral a cualquier edad.
                </p>
                <button onClick={onOpenModal} className="text-pink-500 font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  Agendar para este servicio <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Detalle 4: Imagen Derecha (Desktop) */}
            <div id="planificacion" ref={detailRefs[3]} className="opacity-0 scroll-mt-32 flex flex-col lg:flex-row items-center">
              <div className="order-1 lg:order-2 w-full lg:w-[55%] aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
                <img src={fotoUterus} alt="Planificación Familiar" className="w-full h-full object-cover" />
              </div>
              <div className="order-2 lg:order-1 w-full lg:w-[50%] relative z-10 bg-transparent lg:bg-white p-0 lg:p-12 lg:rounded-3xl lg:shadow-xl mt-5 lg:mt-0 lg:-mr-12 flex flex-col items-start text-left">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-pink-100 text-pink-500 text-xs font-bold uppercase tracking-wider mb-4">
                  Salud Reproductiva
                </div>
                <h2 className="text-2xl md:text-3xl font-headline-sm font-bold text-on-background mb-4">Planificación Familiar</h2>
                <p className="text-on-surface-variant mb-6 leading-relaxed">
                  Asesoría profesional y sin juicios para elegir el método anticonceptivo que mejor se adapte a tus necesidades biológicas, estilo de vida y planes a futuro.
                </p>
                <button onClick={onOpenModal} className="text-pink-500 font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  Agendar para este servicio <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Detalle 5: Imagen Izquierda (Desktop) */}
            <div id="control-obstetrico" ref={detailRefs[4]} className="opacity-0 scroll-mt-32 flex flex-col lg:flex-row items-center">
              <div className="order-1 lg:order-1 w-full lg:w-[55%] aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
                <img src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=800&auto=format&fit=crop" alt="Control Obstétrico" className="w-full h-full object-cover" />
              </div>
              <div className="order-2 lg:order-2 w-full lg:w-[50%] relative z-10 bg-transparent lg:bg-white p-0 lg:p-12 lg:rounded-3xl lg:shadow-xl mt-5 lg:mt-0 lg:-ml-12 flex flex-col items-start text-left">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-pink-100 text-pink-500 text-xs font-bold uppercase tracking-wider mb-4">
                  Maternidad
                </div>
                <h2 className="text-2xl md:text-3xl font-headline-sm font-bold text-on-background mb-4">Control Obstétrico</h2>
                <p className="text-on-surface-variant mb-6 leading-relaxed">
                  Seguimiento clínico especializado durante toda la gestación. Evaluamos los factores de riesgo y garantizamos el desarrollo óptimo de tu embarazo con controles estrictos y humanos.
                </p>
                <button onClick={onOpenModal} className="text-pink-500 font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  Agendar para este servicio <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Detalle 6: Imagen Derecha (Desktop) */}
            <div id="salud-sexual" ref={detailRefs[5]} className="opacity-0 scroll-mt-32 flex flex-col lg:flex-row items-center">
              <div className="order-1 lg:order-2 w-full lg:w-[55%] aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
                <img src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800&auto=format&fit=crop" alt="Salud Sexual" className="w-full h-full object-cover" />
              </div>
              <div className="order-2 lg:order-1 w-full lg:w-[50%] relative z-10 bg-transparent lg:bg-white p-0 lg:p-12 lg:rounded-3xl lg:shadow-xl mt-5 lg:mt-0 lg:-mr-12 flex flex-col items-start text-left">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-pink-100 text-pink-500 text-xs font-bold uppercase tracking-wider mb-4">
                  Bienestar
                </div>
                <h2 className="text-2xl md:text-3xl font-headline-sm font-bold text-on-background mb-4">Salud Sexual y Prevención</h2>
                <p className="text-on-surface-variant mb-6 leading-relaxed">
                  Espacio informativo y clínico para la prevención y despistaje de infecciones de transmisión sexual (ITS), citologías oportunas y educación orientada a una sexualidad sana y plena.
                </p>
                <button onClick={onOpenModal} className="text-pink-500 font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  Agendar para este servicio <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Detalle 7: Imagen Izquierda (Desktop) */}
            <div id="menopausia" ref={detailRefs[6]} className="opacity-0 scroll-mt-32 flex flex-col lg:flex-row items-center">
              <div className="order-1 lg:order-1 w-full lg:w-[55%] aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop" alt="Menopausia" className="w-full h-full object-cover" />
              </div>
              <div className="order-2 lg:order-2 w-full lg:w-[50%] relative z-10 bg-transparent lg:bg-white p-0 lg:p-12 lg:rounded-3xl lg:shadow-xl mt-5 lg:mt-0 lg:-ml-12 flex flex-col items-start text-left">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-pink-100 text-pink-500 text-xs font-bold uppercase tracking-wider mb-4">
                  Etapa Madura
                </div>
                <h2 className="text-2xl md:text-3xl font-headline-sm font-bold text-on-background mb-4">Bienestar en la Menopausia</h2>
                <p className="text-on-surface-variant mb-6 leading-relaxed">
                  Acompañamiento médico especializado para transitar esta nueva etapa con vitalidad. Evaluamos alternativas de manejo sintomático y prevención de riesgos metabólicos y óseos.
                </p>
                <button onClick={onOpenModal} className="text-pink-500 font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  Agendar para este servicio <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          4. BLOQUE DE LA DOCTORA (Filosofía)
      ========================================================= */}
      <section className="w-full bg-pink-50 py-20 px-6 overflow-hidden">
        <div ref={philosophyRef} className="opacity-0 md:max-w-[1000px] md:mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2 relative w-56 h-56 md:w-full md:h-auto md:aspect-square mx-auto rounded-full md:rounded-3xl overflow-hidden shadow-xl border-4 border-white">
             <img src={FotoLuDiu} alt="Dra. Lubisay" className="w-full h-full object-cover bg-gray-100" />
          </div>
          <div className="md:col-span-3 flex flex-col text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-headline-sm font-bold text-on-background mb-4">
              Medicina basada en la empatía y la ciencia
            </h2>
            <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-6">
              "Mi compromiso es brindarte atención médica actualizada sin dejar de lado el calor humano. Quiero que mi consultorio sea tu espacio seguro para hablar sin tabúes, entender tu cuerpo y tomar decisiones informadas sobre tu salud."
            </p>
            <p className="font-bold text-lg text-pink-500">- Dra. Lubisay Moreno</p>
          </div>
        </div>
      </section>

      <Testimonials />
      <CtaBanner onOpenModal={onOpenModal} />

    </main>
  );
}