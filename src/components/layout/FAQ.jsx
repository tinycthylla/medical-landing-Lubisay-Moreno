export default function FAQ() {
  // Array de preguntas frecuentes: Fácil de editar y escalar
  const faqs = [
    {
      question: "¿Qué debo llevar a mi primera ecografía?",
      answer: "Recomendamos traer tu orden médica, estudios o análisis previos si los tienes, y acudir con ropa cómoda de dos piezas. Para ecografías de primer trimestre no se requiere preparación compleja especial, solo una hidratación normal."
    },
    {
      question: "¿Aceptan seguros médicos?",
      answer: "Trabajamos con las principales pólizas de reembolso nacional e internacional. Te proporcionamos informe médico detallado y factura timbrada para tramitar tu reintegro de manera ágil."
    },
    {
      question: "¿Cómo puedo agendar una cita?",
      answer: "Puedes agendar directamente desde el botón de WhatsApp, o seleccionando el día y turno que prefieras en nuestro calendario en línea."
    },
    {
      question: "¿Con cuántas semanas se realiza la ecografía morfológica?",
      answer: "El momento óptimo es entre las semanas 20 y 24 de gestación. Es el período donde las estructuras fetales han alcanzado el desarrollo ideal para una evaluación anatómica detallada."
    }
  ];

  return (
    <section className="w-full px-6 py-16 md:py-24 md:max-w-[1200px] md:mx-auto">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        
        {/* Columna Izquierda: Encabezado y Acordeón */}
        <div className="flex flex-col">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/20 text-primary font-label-md text-xs uppercase tracking-wider font-semibold">
              <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
              Preguntas Frecuentes
            </span>
          </div>
          
          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-headline-sm font-bold text-on-background tracking-tight">
            Dudas y Consultas
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant mt-2 mb-8 leading-relaxed">
            Respuestas claras a las dudas más comunes sobre nuestras consultas y procedimientos ecográficos.
          </p>

          {/* Acordeón de FAQs */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <details 
                key={index} 
                className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none">
                  <span className="font-bold text-on-background pr-4">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-surface-variant/30 flex items-center justify-center shrink-0 text-primary group-open:rotate-180 transition-transform duration-300">
                    <span className="material-symbols-outlined text-[20px]">keyboard_arrow_down</span>
                  </div>
                </summary>
                <div className="px-5 pb-5 pt-1">
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Columna Derecha: Imagen decorativa y Tarjeta WhatsApp */}
        <div className="flex flex-col gap-6 md:sticky md:top-24">
          
          {/* Imagen Decorativa */}
          <div className="relative w-full h-56 md:h-72 rounded-3xl overflow-hidden shadow-md group">
            <div 
              className="bg-cover bg-center w-full h-full transform transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAQNuju541biisAv1jjITBnYCtpUq66ZntJDb8jMCNojqz-kBz3MDivT51pDaIDsLVUoy45Tlc5CxZgfXxw_j5GZD90eGYKOMhJO227V38NtE-7_ljj9IDhqAsdMTyM5eqPr_ZDhlhMsaT6mNpKFu6z2BFXXfavISGkWodESMAXmmHGkueJg13EtuGoolZ5Ui-uxLqmpEwUt-lNOhdykTJ1Q2EryZwfVmBvCkMjxPia1cK3dIKIX7jS')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
              <span className="text-white font-headline-sm text-xl md:text-2xl font-bold leading-tight">
                Tecnología de alta definición
              </span>
              <span className="text-gray-200 text-xs md:text-sm mt-1">
                Espacio pensado para tu tranquilidad y confort
              </span>
            </div>
          </div>

          {/* Tarjeta de Ayuda Rápida */}
          <div className="p-5 rounded-3xl bg-white border border-gray-100 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-pink-100 text-pink-300 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[24px]">chat_bubble_outline</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-on-background leading-tight">¿Tienes dudas adicionales?</span>
                <span className="text-xs text-on-surface-variant mt-0.5">Atención directa e inmediata</span>
              </div>
            </div>
            <a 
              href="#" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-whatsapp text-white font-bold text-sm hover:opacity-80 active:scale-95 transition-all"
            >
              <span>WhatsApp</span>
              <span className="material-symbols-outlined text-[18px]">send</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}