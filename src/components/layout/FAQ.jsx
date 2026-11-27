import fotoConsulta from '../../assets/img/lu_consulta.jpg';
import { SOCIAL_LINKS } from '../../data/clinicInfo';
import { WhatsAppOutlineIcon } from '../UI/Icons';
import useInView from '../../hooks/useInView';

export default function FAQ() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  const faqs = [
    {
      question: "¿A qué edad debo ir al ginecólogo por primera vez?",
      answer: "Lo ideal es entre los 13 y 15 años, o antes si inicias tu vida sexual o presentas irregularidades fuertes en tu periodo. Esta primera visita no siempre requiere un examen físico; es un espacio seguro para educarte sobre tu ciclo, higiene, prevención y aclarar dudas sin tabúes."
    },
    {
      question: "¿Cuál es el mejor método anticonceptivo para mí?",
      answer: "No existe un método único para todas. La elección depende de tu historial médico, si sufres de ovarios poliquísticos, tu estilo de vida y tu tolerancia a las hormonas. En consulta evaluamos todas las opciones (pastillas, DIU, implantes, parches) para recetar el que mejor se adapte a tu cuerpo."
    },
    {
      question: "¿Cada cuánto tiempo debo hacerme un chequeo ginecológico?",
      answer: "La recomendación estándar es una vez al año. Este control anual incluye la citología (Papanicolaou), examen manual de mamas y una ecografía pélvica o transvaginal para asegurar que todo tu sistema reproductivo esté sano."
    },
    {
      question: "¿Cuándo debo empezar a hacerme exámenes de las mamas?",
      answer: "Debes realizarte el autoexamen en casa todos los meses a partir de los 20 años (unos días después de tu periodo). En cuanto a los estudios de imagen, la ecografía mamaria y la mamografía anual se indican a partir de los 35 años, o antes si tienes antecedentes directos (madre o hermana) con cáncer de mama."
    },
    {
      question: "¿Es necesario ir depilada?",
      answer: "No es necesario que te depiles o rasures. El vello púbico es natural y no interfiere en absoluto con la evaluación médica, la citología o las ecografías; dejarlo o quitarlo es una decisión estrictamente tuya."
    },
    {
      question: "¿Cómo debo vestirme para la consulta?",
      answer: "Para tu comodidad, te recomiendo llevar ropa de dos piezas (pantalón, short o falda con una blusa). Evita los enterizos, bragas o vestidos muy complicados, ya que tendrás que desvestirte de la cintura para abajo y te resultará mucho más práctico."
    }
  ];

  return (
    <section id="faq" className="scroll-mt-32 w-full px-6 pt-6 pb-16 md:pt-10 md:pb-24 bg-brand-pink-light transition-colors duration-500">
      <div
        ref={sectionRef}
        className={`max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${
          isInView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      >
        
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full mb-8">
          <div className="flex justify-center md:justify-start w-full mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-pink-100 text-brand-pink font-label-md text-[10px] sm:text-xs uppercase tracking-wider font-bold shadow-sm">
          <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
            Preguntas Frecuentes
          </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-body-md font-bold text-on-background tracking-tight">
            Dudas y Consultas
          </h2>
          <p className="text-sm md:text-base font-body-md text-on-surface-variant mt-2 mb-8 leading-relaxed max-w-2xl">
          Respuestas claras a las dudas más comunes sobre nuestras consultas y procedimientos médicos.
          </p>

          <div className="flex flex-col gap-4 w-full text-left">
            {faqs.map((faq, index) => (
              <details 
                key={index} 
                className="group bg-white rounded-2xl shadow-md shadow-pink-200/40 hover:shadow-lg hover:shadow-pink-200/60 transition-all duration-300 overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none">
                  <span className="font-bold text-on-background pr-4">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-brand-pink-light flex items-center justify-center shrink-0 text-brand-pink group-open:rotate-180 transition-transform duration-300">
                    <span className="material-symbols-outlined text-[20px]">keyboard_arrow_down</span>
                  </div>
                </summary>
                <div className="px-5 pb-5 pt-1 border-t border-brand-pink-light/50 mt-2">
                  <p className="text-body-md text-on-surface-variant leading-relaxed pt-2">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>

       <div className="w-full lg:sticky lg:top-24 flex flex-col p-2 lg:p-4">
        <div
          className="relative w-full h-[400px] lg:h-[550px] overflow-hidden bg-white shadow-md shadow-pink-200/40 hover:shadow-lg hover:shadow-pink-200/60 transform transition-all duration-700 hover:scale-[1.02]"
          style={{ borderRadius: '40px 120px 40px 120px' }}>
          <img 
            src={fotoConsulta} 
            alt="Dra. Lubisay en consulta" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-10 text-center md:text-left">
            <span className="text-white font-body-md text-2xl font-bold leading-tight drop-shadow-md">
              Atención cercana y empática
            </span>
            <span className="text-gray-100 text-sm mt-1.5 drop-shadow-md">
              Un espacio seguro diseñado para tu bienestar
            </span>
          </div>
        </div>

  <div className="mt-6 p-5 rounded-3xl bg-white shadow-md shadow-pink-200/40 flex flex-col xl:flex-row items-center justify-between gap-5">
    
    <div className="flex items-center gap-4">
      <WhatsAppOutlineIcon className="w-8 h-8 text-brand-purple shrink-0" />
      
      <div className="flex flex-col text-center xl:text-left">
        <span className="text-sm font-body-md font-bold text-on-background leading-none">
          ¿Tienes otra pregunta?
        </span>
        <span className="text-xs font-body-md text-on-surface-variant mt-1.5">
          Atención directa por WhatsApp
        </span>
      </div>
    </div>
    
    <a 
      href={SOCIAL_LINKS.whatsapp} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group w-full xl:w-auto px-8 py-2.5 rounded-full flex items-center justify-center gap-2 font-label-md font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.99] bg-brand-purple text-white"
    >
      <span>Preguntar</span>
      <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
        arrow_forward
      </span>
    </a>

  </div>
</div>

      </div>
    </section>
  );
}