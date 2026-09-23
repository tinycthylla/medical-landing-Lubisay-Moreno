import fotoDoctora from '../assets/lu_homepage3.png';
import FAQ from '../components/layout/FAQ';

export default function About({ onOpenModal }) {
  return (
    <main className="pt-20 flex flex-col w-full overflow-hidden">
      
      {/* Top Ambient Glow */}
      <div className="relative w-full">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-primary-container/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        {/* Hero Section: Editorial Split Presentation */}
        <section className="max-w-[1200px] mx-auto px-8 py-16 md:py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Text Column */}
            <div className="lg:col-span-7 flex flex-col gap-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 self-start bg-secondary-container/40 text-on-secondary-container px-3.5 py-1.5 rounded-full font-label-md text-caption uppercase tracking-wider">
                <span className="material-symbols-outlined text-[15px] text-tertiary">verified_user</span>
                <span>Esp. Obstetricia & Ginecología · C.M. 48.912</span>
              </div>
              
              <h1 className="font-headline-sm text-4xl md:text-5xl text-on-surface tracking-tight font-bold">
                Medicina con Rigor Científico, <br/>
                <span className="italic font-normal text-primary">Cuidado con Sensibilidad Humana.</span>
              </h1>
              
              <p className="font-body-md text-lg text-on-surface-variant max-w-xl">
                Acompaño cada ciclo vital de la mujer desde una ginecología integradora, cálida y rigurosamente actualizada. Un espacio donde tus dudas encuentran tiempo, respuestas comprensibles y diagnóstico de máxima precisión.
              </p>
              
              {/* Quote Block */}
              <div className="relative p-6 rounded-xl bg-surface-variant/30 shadow-sm mt-2">
                <span className="material-symbols-outlined absolute top-4 right-4 text-primary/20 text-4xl">format_quote</span>
                <p className="font-headline-sm text-base md:text-lg text-on-surface italic relative z-10 pr-6">
                  “Entiendo que acudir al ginecólogo no es solo una revisión clínica, es un momento de intimidad, escucha activa y confianza mutua.”
                </p>
                <span className="font-label-md text-sm text-primary block mt-3 font-semibold">— Dra. Lubisay Moreno</span>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button 
                  onClick={onOpenModal}
                  className="bg-primary text-white px-7 py-3.5 rounded-full font-bold text-sm hover:opacity-90 active:scale-[0.98] transition-all shadow-sm flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                  <span>Agendar mi consulta</span>
                </button>
                <a className="text-on-surface-variant hover:text-primary transition-colors font-bold text-sm flex items-center gap-1.5 px-4 py-3" href="#filosofia">
                  <span>Conoce mi método</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
                </a>
              </div>
            </div>
            
            {/* Image Column */}
            <div className="lg:col-span-5 relative order-1 lg:order-2">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Subtle backing card */}
                <div className="absolute -inset-3 bg-pink-50 rounded-2xl -rotate-2 scale-98"></div>
                <div className="relative rounded-xl overflow-hidden shadow-lg bg-surface-container">
                  <img 
                    alt="Dra. Lubisay Moreno" 
                    className="w-full h-[480px] lg:h-[540px] object-cover object-top hover:scale-[1.02] transition-transform duration-500" 
                    src={fotoDoctora}
                  />
                  {/* Subtle Floating pill overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-xl shadow-md flex items-center gap-3 border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-400 shrink-0">
                      <span className="material-symbols-outlined text-[20px]">monitor_heart</span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-xs uppercase text-on-surface-variant tracking-wider truncate">Ecografía Integral & Prenatal</p>
                      <p className="font-headline-sm text-sm text-on-surface truncate">Tecnología diagnóstica de alta resolución</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* Numbers & Experience Ribbon */}
      <section className="w-full bg-surface-variant/30 py-12 border-y border-gray-100">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <span className="font-headline-sm text-4xl text-primary font-bold tracking-tight">+10</span>
              <span className="font-bold text-sm text-on-surface mt-1">Años de Trayectoria</span>
              <span className="text-xs text-on-surface-variant mt-1">Dedicación exclusiva médica</span>
            </div>
            <div class="flex flex-col items-center">
              <span className="font-headline-sm text-4xl text-primary font-bold tracking-tight">+4.5k</span>
              <span className="font-bold text-sm text-on-surface mt-1">Ecografías Fetal/Gineco</span>
              <span className="text-xs text-on-surface-variant mt-1">Evaluaciones minuciosas</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-headline-sm text-4xl text-primary font-bold tracking-tight">+1.2k</span>
              <span className="font-bold text-sm text-on-surface mt-1">Familias Acompañadas</span>
              <span className="text-xs text-on-surface-variant mt-1">Parto y seguimiento integral</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-headline-sm text-4xl text-primary font-bold tracking-tight">99%</span>
              <span className="font-bold text-sm text-on-surface mt-1">Satisfacción de Pacientes</span>
              <span className="text-xs text-on-surface-variant mt-1">Opiniones y recomendaciones</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofía de Atención Boutique */}
      <section className="max-w-[1200px] mx-auto px-8 py-20 md:py-24" id="filosofia">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-bold text-xs uppercase tracking-wider text-primary">Nuestra Filosofía</span>
          <h2 className="font-headline-sm text-3xl md:text-4xl text-on-surface mt-2 font-bold">
            Una Consulta Concebida Para la Serenidad
          </h2>
          <p className="font-body-md text-base text-on-surface-variant mt-3">
            La salud ginecológica y obstétrica merece tiempo, respeto y claridad. Dejamos atrás las consultas mecánicas para ofrecer un trato genuinamente boutique.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-gray-50 p-7 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center text-pink-400 mb-6">
                <span className="material-symbols-outlined text-[24px]">schedule</span>
              </div>
              <h3 className="font-headline-sm text-lg text-on-surface mb-2 font-bold">Consultas Sin Prisa</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                De 45 a 60 minutos dedicados íntegramente a ti. Tiempo real para dialogar, resolver tus inquietudes y explorar cada detalle sin la presión del reloj.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white border border-gray-50 p-7 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-[24px]">cognition</span>
              </div>
              <h3 className="font-headline-sm text-lg text-on-surface mb-2 font-bold">Explicación Clara y Cercana</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Eliminamos la barrera de tecnicismos complejos. Utilizamos esquemas visuales y modelos anatómicos en pantalla para que entiendas tu propio cuerpo.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white border border-gray-50 p-7 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center text-pink-400 mb-6">
                <span className="material-symbols-outlined text-[24px]">vital_signs</span>
              </div>
              <h3 className="font-headline-sm text-lg text-on-surface mb-2 font-bold">Tecnología de Vanguardia</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Ecografía de alta definición (HD Live, Doppler, 3D/4D) para evaluaciones perinatales y ginecológicas con máxima certidumbre diagnóstica.
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white border border-gray-50 p-7 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-[24px]">favorite</span>
              </div>
              <h3 className="font-headline-sm text-lg text-on-surface mb-2 font-bold">Espacio Seguro y Empático</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Confidencialidad absoluta, confort y cero prejuicios. Una relación médico-paciente basada en la empatía, la calidez y el respeto profundo a tus decisiones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formación, Credenciales & Trayectoria */}
      <section className="w-full bg-surface-variant/30 py-20">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-5 flex flex-col gap-5">
              <span className="font-bold text-xs uppercase tracking-wider text-primary">Credenciales & Rigor</span>
              <h2 className="font-headline-sm text-3xl md:text-4xl font-bold text-on-surface">
                Formación Continua al Servicio de tu Salud
              </h2>
              <p className="text-base text-on-surface-variant leading-relaxed">
                La obstetricia y la ecografía exigen una actualización científica ininterrumpida. Respaldada por membresías en sociedades científicas y constante adiestramiento en diagnóstico prenatal y patología ginecológica.
              </p>
              
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-50 mt-2 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[28px]">workspace_premium</span>
                  <div>
                    <p className="font-bold text-sm text-on-surface">Miembro Titular Activo</p>
                    <p className="text-xs text-on-surface-variant">Sociedad de Obstetricia y Ginecología</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[28px]">verified</span>
                  <div>
                    <p className="font-bold text-sm text-on-surface">Registro Sanitario Nacional</p>
                    <p className="text-xs text-on-surface-variant">Habilitación profesional médica vigente</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Timeline / Credential blocks */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="bg-white border border-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined text-[20px]">school</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-lg text-on-surface font-bold">Médico Cirujano con Honores</h3>
                  <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                    Formación médica básica con distinción por rendimiento académico y vocación clínica en salud reproductiva.
                  </p>
                </div>
              </div>
              <div className="bg-white border border-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined text-[20px]">medical_services</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-lg text-on-surface font-bold">Especialista en Ginecología y Obstetricia</h3>
                  <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                    Entrenamiento exhaustivo en control prenatal de alto riesgo, parto humanizado, laparoscopia básica y patología del tracto genital inferior.
                  </p>
                </div>
              </div>
              <div className="bg-white border border-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined text-[20px]">health_and_safety</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-lg text-on-surface font-bold">Diplomado en Ecografía Fetal y Perinatología</h3>
                  <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                    Certificación en tamizaje de cromosomopatías del primer trimestre, ecografía morfológica avanzada y Doppler feto-placentario.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* El Consultorio: Espacio Diseñado para la Calma */}
      <section className="max-w-[1200px] mx-auto px-8 py-20 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-bold text-xs uppercase tracking-wider text-primary">El Consultorio</span>
          <h2 className="font-headline-sm text-3xl md:text-4xl text-on-surface mt-2 font-bold">
            Un Entorno Cálido y Privado
          </h2>
          <p className="text-base text-on-surface-variant mt-3">
            Hemos creado cada rincón para disipar la ansiedad clínica: luz natural, materiales orgánicos, ambientación sonora y absoluta privacidad para sentirte en confianza.
          </p>
        </div>
        
        {/* Mosaic Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <div className="bg-white border border-gray-50 rounded-2xl overflow-hidden shadow-sm flex flex-col">
            <div 
              className="h-60 bg-cover bg-center" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCegmie_kROG2SUx9M5ca-7FRahu60N9uJ40TPpEVfMgQen3x58yzeqBKyK8f11Dru50UKB-qdYW743tZY-FunlqVFOCyP9CkbdApD1nHALD0EA9Wn1B47rtHEpwvINlMsLBehP-Ep87elJ_iluUWABG34tFyG0oAIMq8KYOrO5OKwVYL-kttOyi_3J8FWE6GeELmLUdKZ3QyZc9LwEt9QufV0Sp060CJrkq8ijaUdF5jDeoVAQjOUE')" }}
            ></div>
            <div className="p-6 flex flex-col gap-2 flex-1 justify-between">
              <div>
                <h3 className="font-headline-sm text-lg text-on-surface font-bold">Área de Entrevista y Diálogo</h3>
                <p className="text-sm text-on-surface-variant mt-2">
                  Un escritorio despojado de barreras frías. Asientos cómodos y pantallas para revisar juntas tus estudios.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-50 rounded-2xl overflow-hidden shadow-sm flex flex-col">
            <div 
              className="h-60 bg-cover bg-center" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCMICcAkDz50kTm8HHYsqx1i6JOsTMgjw8FTLcndTBDnk5x6uqluSC3TymukQ49GMSnv6Mzr8OsDt7-OvBu0zfCKTJ9C9el1CjrQdgramGiKwU9UticUv2D7YUe-m28BbMUle7jClDJWda7S-iMlFPAWVAyNqI3jfu-IWCAdS93aG2bjDikOaJPFAwehWK5DopBBdZawC4b7WJW0K8sxUlopiljgaWu9CjSOwwqpRYSWlM7frU7aU4C')" }}
            ></div>
            <div className="p-6 flex flex-col gap-2 flex-1 justify-between">
              <div>
                <h3 className="font-headline-sm text-lg text-on-surface font-bold">Zona de Exploración y Ecografía</h3>
                <p className="text-sm text-on-surface-variant mt-2">
                  Camilla ergonómica acolchada, climatización templada y gel de ultrasonido a temperatura corporal.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-50 rounded-2xl overflow-hidden shadow-sm flex flex-col">
            <div 
              className="h-60 bg-cover bg-center" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAltQ1bJI-yf5-Vh3mAWlDL7Q0cxFE9Dzcu5BuWS0TSyQftgaOcuKRsCvjBXacchc7o8KTYy2Cb-T3VY6pC-NqHdpmlbyRgzr5CnfcgMbpGIw5HsMJrrqsD_frjLq6dV1gJEveV2nCDAHbraFZTCTHcjDFWub7X291hOeYd90hQHLZ93lUjTBRsLYXme2rsXzPILUmB7rrcRmTGTm952oqpS57tVOMq4gRhnqDBNTMZECW-RyrkMDo5')" }}
            ></div>
            <div className="p-6 flex flex-col gap-2 flex-1 justify-between">
              <div>
                <h3 className="font-headline-sm text-lg text-on-surface font-bold">Cambiador Privado</h3>
                <p className="text-sm text-on-surface-variant mt-2">
                  Espacio exclusivo para vestirte con total calma, batas suaves y amenidades para tu bienestar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ - Reutilizando el componente ya creado */}
      <FAQ />

      {/* CTA de Cierre: Boutique & Respetuoso */}
      <section className="max-w-[1200px] mx-auto px-8 py-20 pb-32" id="contacto">
        <div className="relative rounded-3xl bg-primary text-white p-8 md:p-14 overflow-hidden shadow-xl">
          {/* Decorative background circles */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 pointer-events-none blur-2xl"></div>
          <div className="absolute left-10 -top-10 w-48 h-48 rounded-full bg-white/10 pointer-events-none blur-xl"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col gap-4">
              <span className="font-bold text-xs uppercase tracking-wider text-pink-200">Tu Salud es Prioridad</span>
              <h2 className="font-headline-sm text-3xl md:text-5xl leading-tight font-bold">
                Empieza hoy a cuidar tu bienestar con el acompañamiento que mereces.
              </h2>
              <p className="text-base md:text-lg text-white/90 max-w-xl">
                Agenda tu cita presencial con la Dra. Lubisay Moreno. Atención personalizada en un entorno cálido, moderno y riguroso.
              </p>
            </div>
            
            <div className="lg:col-span-5 flex flex-col gap-4">
              <button 
                onClick={onOpenModal}
                className="w-full bg-white text-primary font-bold text-sm py-4 px-6 rounded-full text-center hover:bg-gray-50 active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                <span>Agendar Cita en Consultorio</span>
              </button>
              
              <button 
                onClick={onOpenModal}
                className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white font-bold text-sm py-4 px-6 rounded-full text-center active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>Hablar por WhatsApp</span>
              </button>
              
              <p className="text-center text-xs text-white/80 mt-2">
                Respuesta y confirmación en menos de 24 horas laborables.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}