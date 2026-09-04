import fotoDoctora from '../../assets/lu_homepage3.png';

export default function Hero() {
  return (
    <section className="w-full pt-28 px-6 space-y-8 md:space-y-0 md:max-w-[1200px] md:mx-auto md:pt-36 md:grid md:grid-cols-2 md:gap-16 md:items-center">
      
      {/* Columna Izquierda */}
      <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-6 opacity-0 animate-fade-in-up">
        
        {/* Etiqueta / Badge (Rosado) */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-pink-300 text-[10px] sm:text-xs font-medium max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-pink-300 animate-pulse shrink-0"></span>
          <span className="truncate">Salud Femenina Especializada</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline-sm font-bold text-on-background leading-[1.1] text-balance">
          Acompañamiento médico desde tu primera consulta
        </h1>

        <p className="text-sm md:text-base leading-relaxed text-on-surface-variant w-full max-w-[320px] md:max-w-md font-body-md">
          Atención médica actualizada para que tomes el control de tu salud íntima. Un espacio seguro, empático y sin tabúes junto a la <strong className="text-on-background font-semibold">Dra. Lubisay Moreno</strong>.
        </p>

        {/* Botón CTA (Verde WhatsApp) */}
        <div className="flex flex-col items-center md:items-start gap-5 w-full pt-2">
          <button 
            className="w-full max-w-[280px] md:w-auto py-3.5 px-8 rounded-full bg-whatsapp text-white font-label-md text-sm shadow-md hover:opacity-80 active:scale-[0.98] transition-all flex items-center justify-center gap-2" 
            type="button"
          >
            <span>Agendar mi cita</span>
            <span className="material-symbols-outlined text-lg">calendar_month</span>
          </button>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-[10px] md:text-xs font-medium text-on-surface-variant w-full">
            <span className="flex items-center gap-1 text-primary">
              <span className="material-symbols-outlined text-[14px]">check</span>
              Acompañamiento continuo
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block"></span>
            <span className="flex items-center gap-1 text-primary">
              <span className="material-symbols-outlined text-[14px]">check</span>
              Ginecología preventiva
            </span>
          </div>
        </div>
      </div>

      {/* Columna Derecha (Foto + Detalles Rosados) */}
      <div className="relative w-full max-w-[350px] mx-auto md:max-w-[420px] aspect-square mt-24 md:mt-0 flex justify-center opacity-0 animate-fade-in-up">
        
        {/* Círculo de Fondo (Rosa muy claro) */}
        <div className="absolute bottom-0 w-[90%] h-[90%] bg-pink-50 rounded-full border-4 border-surface shadow-inner z-0"></div>

        {/* Cruces decorativas (Rosado medio) */}
        <span className="material-symbols-outlined absolute top-12 left-4 text-pink-200 text-3xl z-0 opacity-60">add</span>
        <span className="material-symbols-outlined absolute top-1/4 -right-2 text-pink-200 text-4xl z-0 opacity-80">add</span>
        <span className="material-symbols-outlined absolute bottom-1/4 left-0 text-pink-300 text-2xl z-0 opacity-60">add</span>
        
        <img 
          src={fotoDoctora} 
          alt="Dra. Lubisay Moreno" 
          className="absolute bottom-0 w-[85%] h-auto z-10 drop-shadow-2xl object-contain"
        />

        {/* Tarjeta Flotante 1 */}
        <div className="absolute top-1/2 -left-4 md:-left-8 z-20 bg-surface/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-300">
            <span className="material-symbols-outlined">verified</span>
          </div>
          <div className="text-left">
            <p className="text-sm font-bold text-on-background">+9 Años</p>
            <p className="text-[10px] text-on-surface-variant">Cuidando la salud femenina</p>
          </div>
        </div>

        {/* Tarjeta Flotante 2 */}
        <div className="absolute bottom-10 -right-2 md:-right-6 z-20 bg-surface/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-300">
            <span className="material-symbols-outlined">ecg_heart</span>
          </div>
          <div className="text-left">
            <p className="text-sm font-bold text-on-background">Ciencia Médica</p>
            <p className="text-[10px] text-on-surface-variant">Ginecología basada en evidencia</p>
          </div>
        </div>

      </div>
    </section>
  );
}