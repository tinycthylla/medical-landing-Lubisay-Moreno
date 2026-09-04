export default function SpecialitySections() {
  // Array de datos: aquí controlas toda la información de los servicios
  const services = [
    {
      title: "Control Prenatal",
      description: "Seguimiento completo de tu embarazo para asegurar el bienestar de ambos en cada trimestre.",
      badge: "Trimestral",
      icon: "pregnant_woman",
      bgIcon: "child_care",
      colorClass: "bg-primary-container/20 text-primary",
    },
    {
      title: "Ecografías",
      description: "Estudios ecográficos detallados de alta resolución obstétricos y ginecológicos.",
      badge: "Alta Definición",
      icon: "monitor_heart",
      bgIcon: "radiology",
      colorClass: "bg-pink-100 text-pink-300",
    },
    {
      title: "Ginecología General y Obstetricia",
      description: "Chequeos rutinarios, Papanicolaou, citología y cuidado preventivo integral.",
      badge: "Integral",
      icon: "stethoscope",
      bgIcon: "health_and_safety",
      colorClass: "bg-primary-container/20 text-primary",
    },
    {
      title: "Planificación Familiar",
      description: "Asesoría médica especializada para elegir el método anticonceptivo que mejor se adapte a ti.",
      badge: "Prevención",
      icon: "family_restroom",
      bgIcon: "favorite",
      colorClass: "bg-pink-100 text-pink-300",
    },
    {
      title: "Control Obstétrico",
      description: "Atención especializada durante la gestación, el parto y el puerperio.",
      badge: "Especializado",
      icon: "baby_changing_station",
      bgIcon: "escalator_warning",
      colorClass: "bg-primary-container/20 text-primary",
    },
    {
      title: "Salud Sexual y Prevención",
      description: "Orientación, diagnóstico y tratamiento para una vida íntima segura y saludable.",
      badge: "Cuidado",
      icon: "diversity_1",
      bgIcon: "healing",
      colorClass: "bg-pink-100 text-pink-300",
    },
    {
      title: "Bienestar en la Menopausia",
      description: "Manejo integral de los síntomas para una mejor calidad de vida y bienestar hormonal.",
      badge: "Plenitud",
      icon: "psychiatry",
      bgIcon: "self_improvement",
      colorClass: "bg-primary-container/20 text-primary",
    }
  ];

  return (
    <section className="w-full px-6 py-20 md:max-w-[1200px] md:mx-auto">
      
      {/* Encabezado de la sección */}
      <div className="flex flex-col gap-2 md:text-center md:items-center">
        <span className="font-label-md text-sm text-primary font-semibold uppercase tracking-wider">
          Especialidades Médicas
        </span>
        <h2 className="text-3xl md:text-4xl font-headline-sm font-bold text-on-background">
          Nuestros Servicios
        </h2>
        <p className="text-sm md:text-base text-on-surface-variant leading-relaxed max-w-2xl mt-2">
          Atención médica especializada para la mujer en todas sus etapas, brindando confianza y tranquilidad.
        </p>
      </div>

      {/* Grid de Cards (1 col en móvil, 2 en tablet, 3 en desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {services.map((service, index) => (
          <article 
            key={index} 
            className="group relative p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-4 cursor-pointer"
          >
            <div className="flex items-start justify-between">
              {/* Ícono dinámico con colores alternados */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.colorClass}`}>
                <span className="material-symbols-outlined text-[26px]">{service.icon}</span>
              </div>
              <span className="text-[10px] px-3 py-1.5 rounded-full bg-surface-variant/50 text-on-surface-variant font-medium">
                {service.badge}
              </span>
            </div>
            
            <div className="flex flex-col gap-1 mt-2 flex-grow">
              <h3 className="text-lg font-bold text-on-background group-hover:text-primary transition-colors duration-150">
                {service.title}
              </h3>
              <p className="text-sm text-on-surface-variant mt-1">
                {service.description}
              </p>
            </div>
            
            <div className="pt-4 mt-auto flex items-center justify-between text-primary font-medium text-sm">
              <span className="flex items-center gap-1">
                Conocer más
                <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
              </span>
              <span className="material-symbols-outlined text-gray-200 text-3xl opacity-50">
                {service.bgIcon}
              </span>
            </div>
          </article>
        ))}
      </div>
      
    </section>
  );
}