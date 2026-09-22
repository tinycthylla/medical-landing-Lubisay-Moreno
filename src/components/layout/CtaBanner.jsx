export default function CtaBanner({ onOpenModal }) {
  return (
    <section className="w-full bg-primary-container py-16 px-6 md:py-24 text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        
        <h2 className="text-3xl md:text-4xl font-headline-sm font-bold text-white mb-6 leading-tight">
          ¿Lista para priorizar tu salud íntima y maternal?
        </h2>
        
        <p className="text-base md:text-lg text-white/90 mb-10 leading-relaxed max-w-xl mx-auto">
          Agenda tu consulta hoy mismo. Nuestro equipo se contactará contigo para coordinar el mejor horario.
        </p>
        
        <button 
          onClick={onOpenModal}
          type="button"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-whatsapp text-white font-bold text-base hover:opacity-90 active:scale-[0.98] transition-all shadow-lg"
        >
          <span>Agendar por WhatsApp</span>
          <span className="material-symbols-outlined text-[20px]">send</span>
        </button>
        
      </div>
    </section>
  );
}