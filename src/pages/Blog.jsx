export default function Blog({ onOpenModal }) {
  return (
    <main className="flex-grow pt-32 pb-20 px-6 min-h-[70vh] flex flex-col justify-center items-center text-center">
      
      <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center text-pink-400 mb-6 shadow-inner">
        <span className="material-symbols-outlined text-4xl">edit_document</span>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-headline-sm font-bold text-on-background mb-4">
        Espacio de Salud Femenina
      </h1>
      
      <p className="text-on-surface-variant text-lg max-w-lg mx-auto mb-10 leading-relaxed">
        Estamos preparando artículos, guías y consejos médicos basados en evidencia científica para ayudarte a entender y cuidar mejor tu cuerpo. <strong className="text-primary">¡Próximamente!</strong>
      </p>
      
      <button 
        onClick={onOpenModal}
        className="bg-whatsapp text-white px-8 py-3.5 rounded-full font-bold shadow-md hover:opacity-90 active:scale-[0.98] transition-all flex items-center gap-2"
      >
        <span>Agendar una consulta mientras tanto</span>
        <span className="material-symbols-outlined text-[20px]">calendar_month</span>
      </button>
      
    </main>
  );
}