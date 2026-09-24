import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function SpecialitySections() {
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

  const services = [
    {
      title: "Control Prenatal",
      description: "Seguimiento completo de tu embarazo para asegurar el bienestar de ambos en cada trimestre.",
      badge: "Trimestral",
      icon: "pregnant_woman",
      bgIcon: "child_care",
      link: "/servicios#control-prenatal"
    },
    {
      title: "Ecografías",
      description: "Estudios ecográficos detallados de alta resolución obstétricos y ginecológicos.",
      badge: "Alta Definición",
      icon: "monitor_heart",
      bgIcon: "radiology",
      link: "/servicios#ecografias"
    },
    {
      title: "Ginecología General",
      description: "Chequeos rutinarios, Papanicolaou, citología y cuidado preventivo integral.",
      badge: "Integral",
      icon: "stethoscope",
      bgIcon: "health_and_safety",
      link: "/servicios#ginecologia"
    },
    {
      title: "Planificación Familiar",
      description: "Asesoría médica especializada para elegir el método anticonceptivo que mejor se adapte a ti.",
      badge: "Prevención",
      icon: "family_restroom",
      bgIcon: "favorite",
      link: "/servicios#planificacion"
    },
    {
      title: "Control Obstétrico",
      description: "Atención especializada durante la gestación, el parto y el puerperio.",
      badge: "Especializado",
      icon: "baby_changing_station",
      bgIcon: "escalator_warning",
      link: "/servicios#control-obstetrico"
    },
    {
      title: "Salud Sexual y Prevención",
      description: "Orientación, diagnóstico y tratamiento para una vida íntima segura y saludable.",
      badge: "Cuidado",
      icon: "diversity_1",
      bgIcon: "healing",
      link: "/servicios#salud-sexual"
    },
    {
      title: "Bienestar en la Menopausia",
      description: "Manejo integral de los síntomas para una mejor calidad de vida y bienestar hormonal.",
      badge: "Plenitud",
      icon: "psychiatry",
      bgIcon: "self_improvement",
      link: "/servicios#menopausia"
    }
  ];

  return (
    <section className="w-full px-6 pt-2 md:pt-12 pb-6 md:pb-20 md:max-w-[1200px] md:mx-auto">
      
      <div ref={sectionRef} className="opacity-0">
        
        <div className="flex flex-col gap-2 md:text-center md:items-center">
          <h2 className="text-3xl md:text-4xl font-headline-sm font-bold text-on-background">
            Nuestras especialidades
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant leading-relaxed max-w-2xl mt-2">
            Atención médica especializada para la mujer en todas sus etapas, brindando confianza y tranquilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mt-12">
          {services.map((service, index) => {
            
            // Lógica para intercalar colores: si el índice es par es rosado, si es impar es verde
            const isPink = index % 2 === 0;
            
            // Variables dinámicas según el tema de la tarjeta
            const cardBg = isPink ? 'bg-pink-50 hover:bg-pink-100/50 border-pink-100' : 'bg-green-100/40 hover:bg-green-100/70 border-green-200/60';
            const iconTheme = isPink ? 'bg-pink-100 text-pink-500' : 'bg-green-200/60 text-whatsapp';
            const badgeTheme = isPink ? 'text-pink-500 border-pink-50' : 'text-whatsapp border-green-100/40';
            const hoverText = isPink ? 'group-hover:text-pink-500' : 'group-hover:text-whatsapp';
            const watermarkTheme = isPink ? 'text-pink-200/50' : 'text-green-200/70';

            return (
              <Link 
                key={index} 
                to={service.link}
                className={`group relative p-6 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4 cursor-pointer border ${cardBg}`}
              >
                <div className="flex items-start justify-between">
                  
                  {/* Ícono superior */}
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-sm ${iconTheme}`}>
                    <span className="material-symbols-outlined text-[28px]">{service.icon}</span>
                  </div>
                  
                  {/* Etiqueta */}
                  <span className={`text-[10px] px-3 py-1.5 rounded-full font-bold bg-white shadow-sm border uppercase tracking-wider ${badgeTheme}`}>
                    {service.badge}
                  </span>
                </div>
                
                <div className="flex flex-col gap-1 mt-2 flex-grow">
                  <h3 className={`text-lg font-bold text-on-background transition-colors duration-150 ${hoverText}`}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant mt-1">
                    {service.description}
                  </p>
                </div>
                
                {/* Texto inferior interactivo */}
                <div className={`pt-4 mt-auto flex items-center justify-between text-on-background font-medium text-sm transition-colors duration-150 ${hoverText}`}>
                  <span className="flex items-center gap-1">
                    Conocer más
                    <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
                  </span>
                  <span className={`material-symbols-outlined text-4xl opacity-40 ${watermarkTheme}`}>
                    {service.bgIcon}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}