import fotoDoctora from '../assets/lu_homepage3.png';
import Testimonials from '../components/layout/Testimonials';
import CtaBanner from '../components/layout/CtaBanner';

export default function Services({ onOpenModal }) {
  
  // Lista de servicios rápidos para el grid de iconos
  const quickServices = [
    { title: "Control Prenatal", icon: "pregnant_woman" },
    { title: "Ecografías", icon: "ultrasound" },
    { title: "Ginecología General", icon: "female" },
    { title: "Planificación", icon: "calendar_month" },
    { title: "Menopausia", icon: "spa" },
    { title: "Salud Sexual", icon: "favorite" }
  ];

  return (
    <main className="flex-grow pt-28 md:pt-36">
      
      {/* 1. HERO DE SERVICIOS: La Consulta Integral */}
      <section className="px-6 md:max-w-[1200px] md:mx-auto mb-20 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Imagen de la Dra (Estética del Home pero más grande) */}
          <div className="relative w-full max-w-[400px] lg:max-w-[500px] mx-auto aspect-square flex justify-center">
            <div className="absolute bottom-0 w-[95%] h-[95%] bg-pink-50 rounded-full border-4 border-surface shadow-inner z-0"></div>
            <img 
              src={fotoDoctora} 
              alt="Consulta con la Dra. Lubisay Moreno" 
              className="absolute bottom-0 w-[90%] h-auto z-10 drop-shadow-2xl object-contain"
            />
          </div>

          {/* Texto: Qué incluye la consulta */}
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-5xl font-headline-sm font-bold text-on-background mb-6 leading-tight">
              Consulta Ginecológica <span className="text-primary">Integral</span>
            </h1>
            <p className="text-on-surface-variant text-base md:text-lg mb-8 leading-relaxed">
              Un espacio seguro y empático diseñado para evaluar tu salud íntima a profundidad. Mi objetivo es que te sientas cómoda, escuchada y bien informada sobre tu cuerpo.
            </p>

            <h3 className="font-bold text-on-background uppercase tracking-wider text-sm mb-5">
              ¿Qué incluye la consulta?
            </h3>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                <div>
                  <strong className="text-on-background text-sm">Revisión de mamas:</strong>
                  <p className="text-sm text-on-surface-variant">Palpación preventiva para descartar anomalías o cambios en la piel.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                <div>
                  <strong className="text-on-background text-sm">Inspección física completa:</strong>
                  <p className="text-sm text-on-surface-variant">Evaluación externa (vulva) y especuloscopia para revisar el cuello uterino.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                <div>
                  <strong className="text-on-background text-sm">Citología (Papanicolaou):</strong>
                  <p className="text-sm text-on-surface-variant">Toma de muestra indolora para prevención y detección temprana.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                <div>
                  <strong className="text-on-background text-sm">Tacto Bimanual:</strong>
                  <p className="text-sm text-on-surface-variant">Evaluación precisa del tamaño y posición del útero y los ovarios.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                <div>
                  <strong className="text-on-background text-sm">Ecografía (Opcional):</strong>
                  <p className="text-sm text-on-surface-variant">Ultrasonido pélvico o transvaginal para un diagnóstico detallado.</p>
                </div>
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

      {/* 2. GRID RÁPIDO DE SERVICIOS */}
      <section className="w-full bg-surface-variant/30 py-16">
        <div className="px-6 md:max-w-[1200px] md:mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {quickServices.map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-50 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center text-pink-400 mb-4">
                  <span className="material-symbols-outlined">{service.icon}</span>
                </div>
                <h4 className="font-bold text-sm text-on-background">{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICIOS DETALLADOS (Alternando imagen y texto) */}
      <section className="px-6 py-20 md:py-32 md:max-w-[1200px] md:mx-auto space-y-20 md:space-y-32">
        
        {/* Detalle 1: Control Prenatal (Imagen Izq, Texto Der) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop" alt="Control Prenatal" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-container/20 text-primary text-xs font-bold mb-4">
              Obstetricia
            </div>
            <h2 className="text-3xl font-headline-sm font-bold text-on-background mb-4">Control Prenatal Humanizado</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Acompañamiento médico integral mes a mes para asegurar el bienestar tuyo y de tu bebé. Monitoreamos el crecimiento fetal, resolvemos tus dudas en cada etapa y preparamos tu cuerpo para un parto seguro y respetado.
            </p>
            <button onClick={onOpenModal} className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all">
              Agendar para este servicio <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Detalle 2: Ecografías (Texto Izq, Imagen Der) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 flex flex-col items-start">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-50 text-pink-400 text-xs font-bold mb-4">
              Diagnóstico
            </div>
            <h2 className="text-3xl font-headline-sm font-bold text-on-background mb-4">Ecografías Integrales</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Tecnología de precisión para visualizar la salud de tus órganos reproductivos o el desarrollo de tu bebé. Realizamos estudios pélvicos, transvaginales y obstétricos con la delicadeza y empatía que mereces.
            </p>
            <button onClick={onOpenModal} className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all">
              Agendar para este servicio <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          <div className="order-1 lg:order-2 w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" alt="Ecografía" className="w-full h-full object-cover" />
          </div>
        </div>

      </section>

      {/* 4. BLOQUE DE LA DOCTORA (Filosofía) */}
      <section className="w-full bg-primary-container text-white py-20 px-6">
        <div className="md:max-w-[1000px] md:mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2 relative w-48 h-48 md:w-full md:h-auto md:aspect-square mx-auto rounded-full md:rounded-2xl overflow-hidden shadow-xl border-4 border-white/20">
             <img src={fotoDoctora} alt="Dra. Lubisay" className="w-full h-full object-cover bg-pink-50" />
          </div>
          <div className="md:col-span-3 flex flex-col text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-headline-sm font-bold mb-4">
              Medicina basada en la empatía y la ciencia
            </h2>
            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
              "Mi compromiso es brindarte atención médica actualizada sin dejar de lado el calor humano. Quiero que mi consultorio sea tu espacio seguro para hablar sin tabúes, entender tu cuerpo y tomar decisiones informadas sobre tu salud."
            </p>
            <p className="font-bold text-lg">- Dra. Lubisay Moreno</p>
          </div>
        </div>
      </section>

      {/* 5. PRUEBA SOCIAL Y CTA FINAL (Reutilizamos componentes) */}
      <Testimonials />
      <CtaBanner onOpenModal={onOpenModal} />

    </main>
  );
}