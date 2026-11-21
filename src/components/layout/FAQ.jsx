import { useState, useEffect, useRef } from 'react';
import fotoConsulta from '../../assets/img/lu_consulta.jpg';

export default function FAQ() {
  const sectionRef = useRef(null);

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
      answer: "No es necesario que te depiles o rasureces. El vello púbico es natural y no interfiere en absoluto con la evaluación médica, la citología o las ecografías; dejarlo o quitarlo es una decisión estrictamente tuya."
    },
    {
      question: "¿Cómo debo vestirme para la consulta?",
      answer: "Para tu comodidad, te recomiendo llevar ropa de dos piezas (pantalón, short o falda con una blusa). Evita los enterizos, bragas o vestidos muy complicados, ya que tendrás que desvestirte de la cintura para abajo y te resultará mucho más práctico."
    }
  ];

  // Lógica de animación al hacer scroll
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
    <section id="faq" className="scroll-mt-32 w-full px-6 pt-6 pb-16 md:pt-10 md:pb-24 bg-pink-50 transition-colors duration-500">
      
      {/* Contenedor animado */}
      <div ref={sectionRef} className="opacity-0 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full mb-8">
          <div className="flex justify-center md:justify-start w-full mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-pink-100 text-pink-500 font-label-md text-[10px] sm:text-xs uppercase tracking-wider font-bold shadow-sm">
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
                  <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center shrink-0 text-pink-500 group-open:rotate-180 transition-transform duration-300">
                    <span className="material-symbols-outlined text-[20px]">keyboard_arrow_down</span>
                  </div>
                </summary>
                <div className="px-5 pb-5 pt-1 border-t border-pink-50/50 mt-2">
                  <p className="text-body-md text-on-surface-variant leading-relaxed pt-2">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>

       <div className="w-full lg:sticky lg:top-24 flex flex-col p-2 lg:p-4">
  
      {/* CONTENEDOR DE LA IMAGEN */}
        <div
          className="relative w-full h-[400px] lg:h-[550px] overflow-hidden bg-white shadow-md shadow-pink-200/40 hover:shadow-lg hover:shadow-pink-200/60 transform transition-all duration-700 hover:scale-[1.02]"
          style={{ borderRadius: '40px 120px 40px 120px' }}>
          <img 
            src={fotoConsulta} 
            alt="Dra. Lubisay en consulta" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Ajuste de padding (px-8) y text-center para móvil, alineado a la izquierda en PC (md:text-left) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-10 text-center md:text-left">
            <span className="text-white font-body-md text-2xl font-bold leading-tight drop-shadow-md">
              Atención cercana y empática
            </span>
            <span className="text-gray-100 text-sm mt-1.5 drop-shadow-md">
              Un espacio seguro diseñado para tu bienestar
            </span>
          </div>
        </div>

  {/* TARJETA DE WHATSAPP */}
  <div className="mt-6 p-5 rounded-3xl bg-white shadow-md shadow-pink-200/40 flex flex-col xl:flex-row items-center justify-between gap-5">
    
    <div className="flex items-center gap-4">
      {/* Nuevo ícono de WhatsApp en lila oscuro, sin círculo de fondo */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 64.63 64.98" 
        fill="currentColor" 
        className="w-8 h-8 text-brand-purple shrink-0">
        <path d="m0,64.98c.17-.5.33-.96.5-1.42,1.64-4.57,3.27-9.14,4.92-13.71.08-.23.05-.4-.08-.61-2.07-3.29-3.59-6.82-4.43-10.63-.59-2.7-.8-5.43-.65-8.2.23-4.04,1.15-7.91,2.86-11.58,3.08-6.64,7.87-11.69,14.32-15.14,3.21-1.72,6.62-2.85,10.22-3.35,8.57-1.19,16.44.64,23.48,5.68,6.58,4.72,10.82,11.08,12.65,18.98,2.91,12.57-2.04,25.67-12.45,33.22-4.02,2.91-8.47,4.82-13.35,5.68-2.96.52-5.95.66-8.94.27-3.43-.44-6.68-1.5-9.79-3-.6-.29-1.19-.62-1.8-.9-.15-.07-.36-.1-.52-.06-5.54,1.55-11.08,3.12-16.62,4.68-.09.03-.19.04-.33.07Zm7.89-7.39c.14-.03.23-.04.32-.07,2.95-.83,5.9-1.65,8.85-2.49.25-.07.44-.05.67.09,4.03,2.54,8.41,4.01,13.18,4.27,3.83.21,7.55-.34,11.13-1.7,5.32-2.02,9.6-5.39,12.83-10.07,2.78-4.03,4.33-8.5,4.7-13.37.28-3.65-.14-7.23-1.32-10.7-2.3-6.71-6.54-11.83-12.75-15.25-5.66-3.12-11.72-4.05-18.07-2.89-6.31,1.16-11.57,4.21-15.74,9.08-3.97,4.64-6.11,10.04-6.48,16.14-.21,3.44.24,6.8,1.32,10.08.96,2.93,2.43,5.6,4.27,8.07.13.17.15.3.07.51-.69,1.89-1.37,3.78-2.05,5.67-.31.86-.62,1.73-.94,2.63Z"/>
        <path d="m21.29,14.9c.36,0,.73,0,1.09,0,.45,0,.8.22,1.01.6.3.56.57,1.14.8,1.73.82,2.07,1.61,4.16,2.42,6.24.21.54.16,1.04-.07,1.56-.51,1.18-1.34,2.14-2.16,3.1-.61.72-.68,1.07-.22,1.9,2.22,4.05,5.19,7.39,9.25,9.67.83.47,1.7.87,2.57,1.28.66.31,1.09.23,1.54-.35.91-1.17,1.8-2.36,2.67-3.56.54-.75.95-.95,1.79-.55,1.38.64,2.74,1.34,4.11,2.03.91.46,1.8.98,2.72,1.42.7.33.99.84.95,1.6-.06,1.24-.26,2.45-.7,3.61-.36.94-1.07,1.63-1.84,2.24-1.16.92-2.41,1.68-3.88,1.94-1.86.34-3.7.22-5.5-.41-2.33-.82-4.64-1.72-6.78-2.98-2.7-1.6-5.05-3.63-7.19-5.92-2.58-2.76-4.81-5.79-6.66-9.08-1.02-1.81-1.77-3.74-2.03-5.82-.4-3.25.32-6.19,2.51-8.69.4-.46.86-.89,1.36-1.23.67-.46,1.47-.38,2.24-.32Z"/>
      </svg>
      
      <div className="flex flex-col text-center xl:text-left">
        <span className="text-sm font-body-md font-bold text-on-background leading-none">
          ¿Tienes otra pregunta?
        </span>
        <span className="text-xs font-body-md text-on-surface-variant mt-1.5">
          Atención directa por WhatsApp
        </span>
      </div>
    </div>
    
    {/* Botón */}
    <a 
      href="https://wa.me/584129360494" 
      target="_blank" 
      rel="noopener noreferrer"
      className="group w-full xl:w-auto px-8 py-2.5 rounded-full flex items-center justify-center gap-2 font-label-md font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.99] bg-brand-purple text-white"
    >
      <span>Preguntar</span>
      {/* Flechita animada opcional */}
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