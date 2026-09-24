import fotoDoctora from '../../assets/lu_homepage3.png';

export default function Hero({ onOpenModal }) {
  return (
    // Fondo general del Hero en pink-100 (#F2D8E6)
    <section className="w-full bg-[#FDF4F8] pt-28 px-6 md:pt-32 pb-12 md:pb-16 overflow-hidden">
      {/* Usamos items-end para que el contenido de ambas columnas se apoye en la misma base imaginaria */}
      <div className="md:max-w-[1200px] md:mx-auto md:grid md:grid-cols-2 md:gap-12 md:items-end">
        
        {/* Columna Izquierda: Redujimos el gap (space-y-4) para unir más los elementos */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-4 opacity-0 animate-fade-in-up z-10 relative mb-8 md:mb-4">
          
          {/* Etiqueta / Badge: Estilo "Experiencias Reales" (Blanco + Texto Rosado 500) */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-pink-500 font-label-md text-[10px] sm:text-xs uppercase tracking-wider font-bold shadow-sm">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            <span className="truncate">Salud Femenina Especializada</span>
          </div>

          {/* Título Principal: Mantiene el #A65673 exacto */}
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-headline-sm font-bold text-on-background leading-[1.05] tracking-tight">
            Acompañamiento <br className="hidden md:block" />
            médico desde tu <br className="hidden md:block" />
            <span className="text-[#A65673]">primera consulta</span>
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-on-surface-variant w-full max-w-[320px] md:max-w-md font-body-md">
            Atención médica actualizada para que tomes el control de tu salud íntima. Un espacio seguro, empático y sin tabúes junto a la <strong className="text-on-background font-semibold">Dra. Lubisay Moreno</strong>.
          </p>

          {/* Botón CTA y Checkmarks más unidos al texto */}
          <div className="flex flex-col items-center md:items-start gap-3 w-full">
            <button 
              onClick={onOpenModal}
              className="w-full max-w-[280px] md:w-auto py-3.5 px-8 rounded-full bg-whatsapp text-white font-label-md text-sm shadow-md hover:opacity-80 active:scale-[0.98] transition-all flex items-center justify-center gap-2" 
              type="button"
            >
              <span>Agendar mi cita</span>
              <span className="material-symbols-outlined text-lg">calendar_month</span>
            </button>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs md:text-sm font-bold text-on-background w-full">
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

        {/* Columna Derecha: Encuadre arreglado anclando al fondo (items-end) */}
        <div className="relative w-full max-w-[380px] mx-auto md:max-w-[450px] flex justify-center items-end opacity-0 animate-fade-in-up">
          
          {/* Círculo Sólido en pink-500 (#A65673) anclado al fondo (bottom-0) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] aspect-square bg-pink-500 rounded-full z-0"></div>

          {/* Cruces decorativas en el mismo tono del círculo */}
          <span className="material-symbols-outlined absolute top-10 left-0 text-pink-500 text-3xl z-0 opacity-80 pointer-events-none">add</span>
          <span className="material-symbols-outlined absolute top-1/4 -right-2 text-pink-500 text-4xl z-0 opacity-80 pointer-events-none">add</span>
          <span className="material-symbols-outlined absolute bottom-1/4 -left-4 text-pink-500 text-2xl z-0 opacity-80 pointer-events-none">add</span>
          
          {/* Imagen de la Dra. anclada al fondo de forma natural */}
          <img 
            src={fotoDoctora} 
            alt="Dra. Lubisay Moreno" 
            className="relative w-[85%] h-auto z-10 drop-shadow-2xl object-contain pointer-events-none"
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