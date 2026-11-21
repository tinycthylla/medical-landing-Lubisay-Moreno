export default function CtaDetailed({ onOpenModal }) {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 md:px-8 py-16 md:py-20 border-none" id="contacto">
      <div className="relative rounded-3xl bg-brand-purple text-white p-8 md:p-12 lg:p-14 overflow-hidden shadow-xl shadow-brand-purple/20">
        
        {/* Destellos sutiles de fondo */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-brand-pink/20 pointer-events-none blur-3xl" />
        <div className="absolute left-10 -top-10 w-48 h-48 rounded-full bg-white/10 pointer-events-none blur-2xl" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Columna Izquierda: Mensaje y Botones de Acción */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-pink-200 font-label-md text-xs font-bold uppercase tracking-[0.2em] block mb-3">
              Tu Salud Íntima en Manos Expertas
            </span>
            
            <h2 className="font-headline-sm text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.2] text-white mb-4">
              Agenda tu cita hoy y vive una experiencia médica diferente
            </h2>
            
            <p className="font-body-md text-pink-50/90 text-sm md:text-base leading-relaxed max-w-xl mb-8">
              Permíteme acompañarte con calidez, tiempo exclusivo y la más avanzada precisión diagnóstica en un entorno diseñado para tu bienestar y serenidad.
            </p>

            {/* Botones de llamada y WhatsApp en fila */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              {/* Botón de Llamar */}
              <a 
                href="tel:+582129852244"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-brand-purple font-label-md font-bold text-sm hover:bg-pink-50 active:scale-[0.98] transition-all shadow-md hover:shadow-lg"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>+58 (212) 985-2244</span>
              </a>

              {/* Botón de WhatsApp con el SVG oficial */}
              <button 
                onClick={onOpenModal}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/20 font-label-md font-semibold text-sm active:scale-[0.98] transition-all shadow-sm backdrop-blur-sm"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 64.63 64.98" 
                  fill="currentColor" 
                  className="w-4 h-4 shrink-0"
                >
                  <path d="m0,64.98c.17-.5.33-.96.5-1.42,1.64-4.57,3.27-9.14,4.92-13.71.08-.23.05-.4-.08-.61-2.07-3.29-3.59-6.82-4.43-10.63-.59-2.7-.8-5.43-.65-8.2.23-4.04,1.15-7.91,2.86-11.58,3.08-6.64,7.87-11.69,14.32-15.14,3.21-1.72,6.62-2.85,10.22-3.35,8.57-1.19,16.44.64,23.48,5.68,6.58,4.72,10.82,11.08,12.65,18.98,2.91,12.57-2.04,25.67-12.45,33.22-4.02,2.91-8.47,4.82-13.35,5.68-2.96.52-5.95.66-8.94.27-3.43-.44-6.68-1.5-9.79-3-.6-.29-1.19-.62-1.8-.9-.15-.07-.36-.1-.52-.06-5.54,1.55-11.08,3.12-16.62,4.68-.09.03-.19.04-.33.07Zm7.89-7.39c.14-.03.23-.04.32-.07,2.95-.83,5.9-1.65,8.85-2.49.25-.07.44-.05.67.09,4.03,2.54,8.41,4.01,13.18,4.27,3.83.21,7.55-.34,11.13-1.7,5.32-2.02,9.6-5.39,12.83-10.07,2.78-4.03,4.33-8.5,4.7-13.37.28-3.65-.14-7.23-1.32-10.7-2.3-6.71-6.54-11.83-12.75-15.25-5.66-3.12-11.72-4.05-18.07-2.89-6.31,1.16-11.57,4.21-15.74,9.08-3.97,4.64-6.11,10.04-6.48,16.14-.21,3.44.24,6.8,1.32,10.08.96,2.93,2.43,5.6,4.27,8.07.13.17.15.3.07.51-.69,1.89-1.37,3.78-2.05,5.67-.31.86-.62,1.73-.94,2.63Z"/>
                  <path d="m21.29,14.9c.36,0,.73,0,1.09,0,.45,0,.8.22,1.01.6.3.56.57,1.14.8,1.73.82,2.07,1.61,4.16,2.42,6.24.21.54.16,1.04-.07,1.56-.51,1.18-1.34,2.14-2.16,3.1-.61.72-.68,1.07-.22,1.9,2.22,4.05,5.19,7.39,9.25,9.67.83.47,1.7.87,2.57,1.28.66.31,1.09.23,1.54-.35.91-1.17,1.8-2.36,2.67-3.56.54-.75.95-.95,1.79-.55,1.38.64,2.74,1.34,4.11,2.03.91.46,1.8.98,2.72,1.42.7.33.99.84.95,1.6-.06,1.24-.26,2.45-.7,3.61-.36.94-1.07,1.63-1.84,2.24-1.16.92-2.41,1.68-3.88,1.94-1.86.34-3.7.22-5.5-.41-2.33-.82-4.64-1.72-6.78-2.98-2.7-1.6-5.05-3.63-7.19-5.92-2.58-2.76-4.81-5.79-6.66-9.08-1.02-1.81-1.77-3.74-2.03-5.82-.4-3.25.32-6.19,2.51-8.69.4-.46.86-.89,1.36-1.23.67-.46,1.47-.38,2.24-.32Z"/>
                </svg>
                <span>Consultar por WhatsApp</span>
              </button>
            </div>
          </div>
          
          {/* Columna Derecha: Tarjeta de Horarios, Correo y Ubicación */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-white/15 flex flex-col gap-6 text-left shadow-inner">
              
              {/* Horario de Consulta */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-pink-200 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">schedule</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-headline-sm font-normal text-white text-base leading-snug">
                    Horario de Consulta Privada
                  </h3>
                  <p className="font-body-md text-xs sm:text-sm text-pink-100/80 mt-1">
                    Lunes a Viernes: 8:00 AM – 5:00 PM
                  </p>
                </div>
              </div>

              {/* Consultas y Resultados */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-pink-200 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-headline-sm font-normal text-white text-base leading-snug">
                    Consultas & Resultados
                  </h3>
                  <a 
                    href="mailto:consulta@dralubisaymoreno.com" 
                    className="font-body-md text-xs sm:text-sm text-pink-100/80 mt-1 hover:text-white underline-offset-2 hover:underline transition-colors break-all"
                  >
                    consulta@dralubisaymoreno.com
                  </a>
                </div>
              </div>

              {/* Ubicación */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-pink-200 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-headline-sm font-normal text-white text-base leading-snug">
                    Ubicación
                  </h3>
                  <p className="font-body-md text-xs sm:text-sm text-pink-100/80 mt-1">
                    Suite 402, Centro San Gabriel, Caracas
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}