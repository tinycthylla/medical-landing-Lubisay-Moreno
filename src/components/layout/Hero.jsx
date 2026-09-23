import fotoDoctora from '../../assets/lu_homepage3.png';

export default function Hero({ onOpenModal }) {
  return (
    <section className="w-full bg-surface/40 pt-28 px-6 space-y-8 md:space-y-0 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="md:max-w-[1200px] md:mx-auto md:grid md:grid-cols-2 md:gap-12 md:items-center">
        
        {/* Columna Izquierda */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-6 opacity-0 animate-fade-in-up z-10 relative">
          
          {/* Etiqueta / Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-pink-100 text-pink-400 text-[10px] sm:text-xs font-medium max-w-full shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse shrink-0"></span>
            <span className="truncate">Salud Femenina Especializada</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-headline-sm font-bold text-on-background leading-[1.1] tracking-tight">
            Acompañamiento <br className="hidden md:block" />
            médico desde tu <br className="hidden md:block" />
            <span className="text-pink-500">primera consulta</span>
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-on-surface-variant w-full max-w-[320px] md:max-w-md font-body-md mt-2">
            Atención médica actualizada para que tomes el control de tu salud íntima. Un espacio seguro, empático y sin tabúes junto a la <strong className="text-on-background font-semibold">Dra. Lubisay Moreno</strong>.
          </p>

          {/* Botón CTA y Checkmarks */}
          <div className="flex flex-col items-center md:items-start gap-4 w-full mt-1">
            <button 
              onClick={onOpenModal}
              className="w-full max-w-[280px] md:w-auto py-3.5 px-8 rounded-full bg-whatsapp text-white font-label-md text-sm shadow-md hover:opacity-80 active:scale-[0.98] transition-all flex items-center justify-center gap-2" 
              type="button"
            >
              <span>Agendar mi cita</span>
              <span className="material-symbols-outlined text-lg">calendar_month</span>
            </button>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs md:text-sm font-bold text-on-background w-full">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-pink-500">check</span>
                Acompañamiento continuo
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-pink-500">check</span>
                Ginecología preventiva
              </span>
            </div>
          </div>
        </div>

        {/* Columna Derecha */}
        <div className="relative w-full max-w-[380px] mx-auto md:max-w-[450px] aspect-square mt-16 md:mt-0 flex justify-center opacity-0 animate-fade-in-up">
          
          {/* Círculo Difuminado (Estilo aura) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-pink-200/50 blur-[60px] rounded-full z-0 pointer-events-none"></div>

          {/* Cruces decorativas */}
          <span className="material-symbols-outlined absolute top-10 left-0 text-pink-300 text-3xl z-0 opacity-60 pointer-events-none">add</span>
          <span className="material-symbols-outlined absolute top-1/3 -right-6 text-pink-300 text-4xl z-0 opacity-60 pointer-events-none">add</span>
          <span className="material-symbols-outlined absolute bottom-1/4 -left-4 text-pink-300 text-2xl z-0 opacity-60 pointer-events-none">add</span>
          
          <img 
            src={fotoDoctora} 
            alt="Dra. Lubisay Moreno" 
            className="absolute bottom-0 w-[88%] h-auto z-10 drop-shadow-2xl object-contain pointer-events-none"
          />

          {/* Tarjetas Flotantes */}
          <div className="absolute top-1/2 -left-2 md:-left-10 z-20 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-pink-50 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-400">
              <span className="material-symbols-outlined">verified</span>
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-on-background">+9 Años</p>
              <p className="text-[10px] text-on-surface-variant">Cuidando la salud femenina</p>
            </div>
          </div>

          <div className="absolute bottom-10 -right-2 md:-right-6 z-20 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-pink-50 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-400">
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