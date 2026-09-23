import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function SpecialitySections() {
  const sectionRef = useRef(null);

  // Observador para la animación al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
            // Dejamos de observar una vez que ya apareció
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

  // Array de datos actualizado con el tono verde salvia extraído del CTA
  const services = [
    {
      title: "Control Prenatal",
      description: "Seguimiento completo de tu embarazo para asegurar el bienestar de ambos en cada trimestre.",
      badge: "Trimestral",
      icon: "pregnant_woman",
      bgIcon: "child_care",
      colorClass: "bg-primary-container/20 text-primary",
      badgeColorClass: "bg-[#8E9D82]/20 text-[#57664B]", // Verde Salvia
      link: "/servicios#control-prenatal"
    },
    {
      title: "Ecografías",
      description: "Estudios ecográficos detallados de alta resolución obstétricos y ginecológicos.",
      badge: "Alta Definición",
      icon: "monitor_heart",
      bgIcon: "radiology",
      colorClass: "bg-pink-100 text-pink-300",
      badgeColorClass: "bg-pink-100 text-pink-600", // Rosado
      link: "/servicios#ecografias"
    },
    {
      title: "Ginecología General",
      description: "Chequeos rutinarios, Papanicolaou, citología y cuidado preventivo integral.",
      badge: "Integral",
      icon: "stethoscope",
      bgIcon: "health_and_safety",
      colorClass: "bg-primary-container/20 text-primary",
      badgeColorClass: "bg-[#8E9D82]/20 text-[#57664B]", // Verde Salvia
      link: "/servicios#ginecologia"
    },
    {
      title: "Planificación Familiar",
      description: "Asesoría médica especializada para elegir el método anticonceptivo que mejor se adapte a ti.",
      badge: "Prevención",
      icon: "family_restroom",
      bgIcon: "favorite",
      colorClass: "bg-pink-100 text-pink-300",
      badgeColorClass: "bg-pink-100 text-pink-600", // Rosado
      link: "/servicios#planificacion"
    },
    {
      title: "Control Obstétrico",
      description: "Atención especializada durante la gestación, el parto y el puerperio.",
      badge: "Especializado",
      icon: "baby_changing_station",
      bgIcon: "escalator_warning",
      colorClass: "bg-primary-container/20 text-primary",
      badgeColorClass: "bg-[#8E9D82]/20 text-[#57664B]", // Verde Salvia
      link: "/servicios#control-obstetrico"
    },
    {
      title: "Salud Sexual y Prevención",
      description: "Orientación, diagnóstico y tratamiento para una vida íntima segura y saludable.",
      badge: "Cuidado",
      icon: "diversity_1",
      bgIcon: "healing",
      colorClass: "bg-pink-100 text-pink-300",
      badgeColorClass: "bg-pink-100 text-pink-600", // Rosado
      link: "/servicios#salud-sexual"
    },
    {
      title: "Bienestar en la Menopausia",
      description: "Manejo integral de los síntomas para una mejor calidad de vida y bienestar hormonal.",
      badge: "Plenitud",
      icon: "psychiatry",
      bgIcon: "self_improvement",
      colorClass: "bg-primary-container/20 text-primary",
      badgeColorClass: "bg-[#8E9D82]/20 text-[#57664B]", // Verde Salvia
      link: "/servicios#menopausia"
    }
  ];

  return (
    <section className="w-full px-6 pt-8 pb-20 md:max-w-[1200px] md:mx-auto">
      
      <div ref={sectionRef} className="opacity-0">
        
        <div className="flex flex-col gap-2 md:text-center md:items-center">
          {/* Título en color neutro (negro) */}
          <h2 className="text-3xl md:text-4xl font-headline-sm font-bold text-on-background">
            Nuestras especialidades
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant leading-relaxed max-w-2xl mt-2">
            Atención médica especializada para la mujer en todas sus etapas, brindando confianza y tranquilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to={service.link}
              className="group relative p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-4 cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.colorClass}`}>
                  <span className="material-symbols-outlined text-[26px]">{service.icon}</span>
                </div>
                <span className={`text-[10px] px-3 py-1 rounded-full font-bold ${service.badgeColorClass}`}>
                  {service.badge}
                </span>
              </div>
              
              <div className="flex flex-col gap-1 mt-2 flex-grow">
                <h3 className="text-lg font-bold text-on-background group-hover:text-pink-500 transition-colors duration-150">
                  {service.title}
                </h3>
                <p className="text-sm text-on-surface-variant mt-1">
                  {service.description}
                </p>
              </div>
              
              {/* "Conocer más" en color neutro, cambia a rosado en hover */}
              <div className="pt-4 mt-auto flex items-center justify-between text-on-background group-hover:text-pink-500 font-medium text-sm transition-colors duration-150">
                <span className="flex items-center gap-1">
                  Conocer más
                  <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
                </span>
                <span className="material-symbols-outlined text-gray-200 text-3xl opacity-50">
                  {service.bgIcon}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}