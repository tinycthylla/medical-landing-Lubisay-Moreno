import { Link } from 'react-router-dom';
import { SERVICES } from '../../data/services';
import useInView from '../../hooks/useInView';

export default function SpecialitySections() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  return (
    <section className="w-full px-6 pt-2 md:pt-12 pb-6 md:pb-20 md:max-w-[1200px] md:mx-auto">
      <div ref={sectionRef} className={isInView ? 'animate-fade-in-up' : 'opacity-0'}>
        
        <div className="flex flex-col gap-2 md:text-center md:items-center">
          <div className="flex items-center mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-pink-100 text-brand-pink font-label-md text-xs uppercase tracking-wider font-bold shadow-sm">
              <span className="material-symbols-outlined text-[16px]">medical_services</span>
              Tu Salud en Manos Expertas
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-body-md font-bold text-on-background">
            Nuestras especialidades
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant leading-relaxed max-w-2xl mt-2 font-body-md">
            Atención médica especializada para la mujer en todas sus etapas, brindando confianza y tranquilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mt-12">
          {SERVICES.map((service, index) => {
            const isPink = index % 2 === 0;

                        const cardBg = isPink 
                          ? 'bg-brand-pink-light hover:bg-pink-100/50 shadow-md shadow-pink-200/50 hover:shadow-lg hover:shadow-pink-200/60' 
                          : 'bg-brand-lilac/10 hover:bg-brand-lilac/20 shadow-md shadow-brand-lilac/20 hover:shadow-lg hover:shadow-brand-lilac/30';

                        const badgeTheme = isPink 
                          ? 'text-brand-pink border-pink-100' 
                          : 'text-brand-purple border-brand-lilac/40';

                        const hoverText = isPink 
                          ? 'group-hover:text-brand-pink' 
                          : 'group-hover:text-brand-purple';

                        const buttonTheme = isPink 
                          ? 'bg-brand-pink text-white hover:opacity-90' 
                          : 'bg-brand-purple text-white hover:opacity-90';

                        return (
                          <Link 
                            key={service.id} 
                            to={service.href}
                            className={`group relative p-6 rounded-3xl transition-all duration-300 flex flex-col gap-4 cursor-pointer ${cardBg}`}
                          >
                <div className="flex items-start justify-between">
                  <img 
                    src={service.icon} 
                    alt={`Ícono de ${service.cardTitle}`} 
                    className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110" 
                  />

                  <span className={`text-[10px] px-3 py-1.5 rounded-full font-bold bg-white shadow-sm border uppercase tracking-wider ${badgeTheme}`}>
                    {service.badge}
                  </span>
                </div>

                <div className="flex flex-col gap-1 mt-2 flex-grow">
                  <h3 className={`text-lg font-bold text-on-background font-body-md transition-colors duration-150 ${hoverText}`}>
                    {service.cardTitle}
                  </h3>
                  <p className="text-sm text-on-surface-variant mt-1 font-body-md">
                    {service.cardDescription}
                  </p>
                </div>

                <div className="pt-4 mt-auto w-full">
                  <div className={`w-full py-2.5 rounded-full flex items-center justify-center gap-2 font-label-md font-semibold text-sm transition-all duration-300 shadow-sm group-hover:shadow-md active:scale-[0.99] ${buttonTheme}`}>
                    <span>Explorar servicio</span>
                    <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}