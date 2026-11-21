import fotoDoctora from '../../assets/img/lu_homepage3.png';
export default function Hero({ onOpenModal }) {
  return (
    // Fondo general del Hero
    <section className="w-full bg-background pt-28 px-6 md:pt-44 pb-12 md:pb-16 overflow-hidden">
      <div className="md:max-w-[1200px] md:mx-auto md:grid md:grid-cols-2 md:gap-12">
        
        {/* Columna Izquierda: */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left 
        space-y-5 opacity-0 animate-fade-in-up z-10 relative mb-12 md:mb-0 md:max-w-[420px] md:self-center">
          
          {/* Etiqueta / Badge: */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-brand-pink font-label-md text-[10px] sm:text-xs uppercase tracking-wider font-bold shadow-sm">
        <span className="material-symbols-outlined text-[16px]">verified</span>
        <span className="truncate">Salud Femenina Especializada</span>
        </div>

          {/* Título Principal: */}
          <h1 className="text-4xl md:text-6xl lg:text-[65px] font-body-md font-bold text-on-background leading-[1.05] tracking-tight">
            Acompañamiento <br className="hidden md:block" />
            médico desde tu <br className="hidden md:block" />
            primera consulta
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-on-surface-variant w-full max-w-[320px] md:max-w-md font-body-md">
            Atención médica actualizada para que tomes el control de tu salud íntima. Un espacio seguro, empático y sin tabúes junto a la <strong className="text-on-background font-semibold">Dra. Lubisay Moreno</strong>.
          </p>

          {/* Botón CTA y Checkmarks */}
          <div className="flex flex-col items-center md:items-start gap-3 w-full">
            <button 
              onClick={onOpenModal}
              className="w-full max-w-[280px] md:w-auto py-3.5 px-8 rounded-full bg-whatsapp text-white font-label-md text-sm shadow-md hover:opacity-80 active:scale-[0.98] transition-all flex items-center justify-center gap-2" 
              type="button"
            >
              <span>Agendar mi cita</span>
            </button>
           <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs md:text-sm font-bold text-on-background w-full mt-8 md:mt-0">
          <span className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[16px] text-brand-pink">check</span>
              Acompañamiento continuo
          </span>
          <span className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[16px] text-brand-pink">check</span>
              Ginecología preventiva
          </span>
          </div>
          </div>
        </div>

        {/* Columna Derecha: */}
        <div className="relative w-full max-w-[380px] mx-auto md:max-w-[450px] flex justify-center items-end opacity-0 animate-fade-in-up">
          
          {/* Círculo Sólido */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] aspect-square bg-brand-pink opacity-10 rounded-full z-0"></div>

         {/* Cruces decorativas  */}
          <span className="material-symbols-outlined absolute top-10 left-0 text-pink-500 text-3xl z-0 opacity-80 pointer-events-none">add</span>
          <span className="material-symbols-outlined absolute top-1/4 -right-2 text-pink-500 text-4xl z-0 opacity-80 pointer-events-none">add</span>
          <span className="material-symbols-outlined absolute bottom-1/4 -left-4 text-pink-500 text-2xl z-0 opacity-80 pointer-events-none">add</span>
          <img 
            src={fotoDoctora} 
            alt="Dra. Lubisay Moreno" 
            className="relative w-[90%] h-auto z-10 drop-shadow-2xl object-contain pointer-events-none"
          />

          {/* Tarjetas Flotantes adaptadas a la nueva paleta */}
          <div className="absolute top-1/3 -left-2 md:-left-8 z-20 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-pink-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-500">
              <span className="material-symbols-outlined">verified</span>
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-on-background">+9 Años</p>
              <p className="text-[10px] text-on-surface-variant">Cuidando la salud femenina</p>
            </div>
          </div>

          <div className="absolute bottom-12 -right-2 md:-right-4 z-20 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-pink-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-500">
              <span className="material-symbols-outlined">ecg_heart</span>
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-on-background">Ciencia Médica</p>
              <p className="text-[10px] text-on-surface-variant">Ginecología basada en evidencia</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}