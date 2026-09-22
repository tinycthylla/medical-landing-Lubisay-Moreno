export default function Testimonials() {
  // Array de testimonios: Agrega o edita opiniones fácilmente aquí
  const reviews = [
    {
      initials: "MC",
      name: "María C.",
      time: "Hace 2 semanas",
      quote: "La Dra. Lubisay es increíblemente profesional y cálida. Me explicó cada detalle durante mi ecografía morfológica con mucha paciencia. Sentí mucha tranquilidad durante toda la consulta. ¡Totalmente recomendada!",
      colorClass: "bg-primary-container text-white"
    },
    {
      initials: "AV",
      name: "Ana V.",
      time: "Hace 1 mes",
      quote: "Excelente atención desde que entras a la clínica. Los equipos son de última generación, las imágenes de mi bebé en 4D fueron hermosas y nítidas. Un trato muy humano y empático.",
      colorClass: "bg-pink-300 text-white"
    },
    {
      initials: "SR",
      name: "Sofía R.",
      time: "Hace 3 meses",
      quote: "El ambiente de la consulta es súper relajante, nada que ver con hospitales fríos. Fui por una ecografía ginecológica de rutina y me sentí muy cómoda y respetada. La mejor doctora.",
      colorClass: "bg-whatsapp text-white"
    }
  ];

  return (
    <section className="w-full px-6 py-16 md:py-24 bg-surface md:max-w-[1200px] md:mx-auto">
      
      {/* Encabezado de la Sección */}
      <div className="flex flex-col md:items-center md:text-center mb-8">
        
        {/* Badges superiores */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4 md:justify-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/20 text-primary font-label-md text-xs uppercase tracking-wider font-semibold">
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
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mt-4 md:mt-6">
          <p className="text-sm text-on-surface-variant md:mx-auto">
            Opiniones reales de nuestra comunidad
          </p>
          <a className="text-sm text-primary font-semibold flex items-center gap-1 hover:opacity-80 transition-opacity mt-2 sm:mt-0 md:hidden" href="#">
            Ver más <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* Grid de Testimonios */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <article 
            key={index} 
            className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
          >
            {/* Estrellas y Badge de Verificada */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-on-surface-variant text-[11px] font-medium bg-gray-50 px-2 py-1 rounded-md">
                <span className="material-symbols-outlined text-[14px] text-whatsapp">check_circle</span>
                Verificada
              </span>
            </div>

            {/* Texto del Testimonio */}
            <blockquote className="text-sm text-on-surface-variant italic leading-relaxed flex-grow">
              “{review.quote}”
            </blockquote>

            {/* Perfil del Paciente */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-50">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-sm ${review.colorClass}`}>
                  {review.initials}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-on-background font-bold leading-none">{review.name}</span>
                  <span className="text-xs text-gray-500 mt-1">{review.time}</span>
                </div>
              </div>
              
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-[16px]">thumb_up</span>
              </div>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}