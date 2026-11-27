import AnimatedNumber from '../components/ui/AnimatedNumber';
import CtaDetailed from '../components/layout/CtaDetailed';
import Testimonials from '../components/layout/Testimonials';
import FotoLuDiu from '../assets/img/ludiu2.webp';
import FotoLuConsultorio from '../assets/img/lu_consultorio.webp';
import LogoSimple from '../assets/icons/logosimple.svg';
import SiluetaLogo from '../assets/icons/logosimple-3.svg';
import IconoHeart2 from '../assets/icons/icon-heart2.svg';
import FotoLuGineco from '../assets/img/lu_gineco.JPG';
import FotoLuXtremeBike from '../assets/img/lu_xtremebike.webp';
import FotoLuEquipo from '../assets/img/lu_equipo.webp';
import { useState, useEffect } from 'react';
import { DOCTOR_INFO } from '../data/clinicInfo';
import { CurvedArrowLeftIcon, CurvedArrowRightIcon } from '../components/ui/Icons';
import RevealOnScroll from '../components/ui/RevealOnScroll';

const aboutHighlights = [
  {
    title: 'Medicina cercana, real y sin tabúes',
    description:
      'Ir al ginecólogo no tiene por qué ser una experiencia fría ni incómoda. Me importa que desde el primer minuto sientas la confianza de hablar claro, resolver tus dudas sin pena y sentirte escuchada sin juicios. Mi enfoque busca romper con la consulta distante para ofrecerte un espacio cálido donde siempre te sientas acompañada y respetada.',
    image: FotoLuGineco,
    alt: 'Dra. Lubisay Moreno en consulta explicando con modelo anatómico',
    imagePosition: 'object-[50%_55%]',
  },
  {
    title: 'Energía en movimiento fuera del consultorio',
    description:
      'Creo firmemente que el bienestar se practica con el ejemplo. Cuando me quito la bata, mi espacio favorito para desconectar y recargar pilas es sobre la bici como instructora de Xtreme Bike. Entrenar me conecta con la disciplina, la buena música y la fuerza física; esa misma energía y ganas de ver a otras mujeres sentirse capaces es lo que me llevo cada día a consulta.',
    image: FotoLuXtremeBike,
    alt: 'Dra. Lubisay Moreno como instructora de Xtreme Bike',
    imagePosition: 'object-[50%_15%]',
  },
  {
    title: 'Vocación y trabajo en equipo en quirófano',
    description:
      'Más allá de las consultas de rutina, mi compromiso también está en los momentos que requieren máxima precisión médica. Contar con un equipo preparado y mantener la calma dentro del quirófano me permite respaldar el trato cercano que tanto valoro con excelencia clínica y seguridad en cada procedimiento.',
    image: FotoLuEquipo,
    alt: 'Dra. Lubisay Moreno junto a su equipo médico en quirófano',
    imagePosition: 'object-center',
  },
];

export default function About({ onOpenModal }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <main className="pt-20 flex flex-col w-full overflow-hidden font-body-md border-none">
      
      <div className="relative w-full">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-brand-pink/15 blur-[120px] rounded-full pointer-events-none" />

        <section className="w-full bg-brand-grape pt-10 pb-0 md:pt-14 md:pb-0 relative overflow-hidden">
          <div 
            className={`max-w-[1240px] mx-auto px-4 md:px-8 relative flex flex-col items-center transition-all duration-1200 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
        <img 
          src={SiluetaLogo} 
          alt="" 
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] sm:w-[70%] md:right-auto md:left-0 lg:left-0 md:top-1/2 md:translate-x-0 md:-translate-y-1/2 md:w-[250px] lg:w-[500px] opacity-5 brightness-0 invert pointer-events-none select-none z-0"
        />
            
           <h1 className="relative top-6 md:top-0 text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-[68px] mb-4 md:mb-4 tracking-tight z-20 leading-tight">
              <span className="font-extralight block md:inline">Hola, soy la </span>
              <span className="font-bold italic tracking-normal block md:inline">Dra. Lubisay</span>
            </h1>

            <div className="relative w-full h-[430px] sm:h-[400px] md:h-[430px] lg:h-[460px] flex justify-center">

              {/* Atributos Mobile */}
              <div className="flex flex-col items-end md:hidden absolute top-[15%] left-[4%] sm:left-[10%] z-20">
                <p className="text-white text-right text-[11px] sm:text-xs leading-snug">
                  <span className="font-light">Soy médico</span><br />
                  <span className="font-bold">Ginecólogo y Obstetra</span>
                </p>
                <CurvedArrowLeftIcon className="w-14 sm:w-16 h-auto fill-white mt-2 mr-1" />
              </div>

              <div className="absolute left-1/2 bottom-0 -translate-x-1/2 h-[92%] md:h-[105%] w-max z-10 flex justify-center items-end">
              <img 
              alt="Dra. Lubisay Moreno" 
              className="h-full w-auto object-contain drop-shadow-2xl" 
              src={FotoLuDiu}/>
              </div>

              <div className="flex flex-col items-end md:hidden absolute bottom-[12%] right-[2%] sm:right-[8%] z-20">
                <p className="text-white text-right text-[11px] sm:text-xs leading-snug mb-1">
                  <span className="font-light italic">Mi trabajo abarca desde</span><br />
                  <span className="font-bold">la Ginecología General</span><br />
                  <span className="font-bold">hasta el</span><br />
                  <span className="font-bold">control prenatal</span><br />
                  <span className="font-bold">y la salud hormonal.</span>
                </p>
                <CurvedArrowRightIcon className="w-20 sm:w-24 h-auto fill-white mr-20 -mt-2" />
              </div>

              {/* Atributos Desktop */}
              <div className="hidden md:flex items-center absolute top-[8%] left-[10%] lg:left-[15%] z-20">
                <p className="text-white text-right text-sm lg:text-[17px] leading-snug">
                  <span className="font-light">Soy médico</span><br />
                  <span className="font-bold">Ginecólogo y Obstetra</span>
                </p>
                <svg className="w-14 lg:w-[70px] h-auto fill-white ml-3 translate-y-4" viewBox="0 0 312.67 203.98">
                  <path d="m311.96,194.52c-7.4-14.51-17.78-32.76-32.42-45.23-8.4-7.15-17.38-11.68-26.88-13.59,4.02-21.14-1.91-43.2-18.11-64.19-20.98-27.18-56.66-48.36-95.47-56.67-39.19-8.39-76.41-2.88-106.05,15.46L21.37,0l-3.49,24.87c-.98,6.99-4.69,17.12-9.46,25.8L0,66.04l16.41-6.16c9.28-3.48,19.86-5.75,26.89-5.7l25.1.07-25.86-14.45c58.91-33.83,144.85-8.12,181.72,39.65,14.11,18.29,19.11,37.17,15.21,55.27-5.39.26-10.93,1.29-16.6,3.09-21.03,3.18-32.68,5.01-39.79,15.78-9.15,13.47-5.83,27.13,1.52,34.7,8.02,8.25,20.39,9.33,30.78,2.68l.54-.39c16.21-12.87,27.29-27.23,33.12-42.31,23.34,4.02,38.92,27.81,51.34,52.14,1.15,2.25,3.43,3.55,5.8,3.55.99,0,2-.23,2.95-.71,3.2-1.63,4.47-5.55,2.84-8.74Zm-103.84-14.33c-5.2,3.21-10.48,2.86-14.19-.96-3.68-3.79-5.13-10.93-.07-18.36l.06-.09c3.83-5.82,11.9-7.25,31.42-10.2l.53-.08.51-.17c2.91-.95,5.71-1.63,8.43-2.06-5.34,11.22-14.26,21.98-26.7,31.91Z"/>
                </svg>
              </div>

              <div className="hidden md:flex flex-col items-end absolute top-[28%] left-[1%] lg:left-[3%] z-20">
                <p className="text-white text-right text-sm lg:text-[17px] leading-snug">
                  <span className="font-light italic">Mi trabajo abarca desde </span>
                  <span className="font-bold">la Ginecología</span><br />
                  <span className="font-bold">general hasta el control prenatal</span><br />
                  <span className="font-bold">y la salud hormonal.</span>
                </p>
                <CurvedArrowLeftIcon className="w-16 lg:w-[85px] h-auto fill-white mt-2 -mr-10" />
              </div>

              <div className="hidden md:flex flex-col items-end absolute bottom-[12%] left-[5%] lg:left-[8%] z-20">
                <p className="text-white text-right text-sm lg:text-[17px] leading-snug">
                  <span className="font-light italic">Disfruto la </span>
                  <span className="font-bold">buena música</span><span className="font-light italic">,</span><br />
                  <span className="font-light italic">los </span>
                  <span className="font-bold">retos físicos</span><br />
                  <span className="font-light italic">y </span>
                  <span className="font-bold">ayudar a otras mujeres</span><br />
                  <span className="font-light italic">a sentirse fuertes</span>
                </p>
                <svg className="w-20 lg:w-[95px] h-auto fill-white mt-3 -mr-8" viewBox="0 0 423.09 172.96">
                  <path d="m422.65,148.68c-1.29-3.35-5.05-5.02-8.4-3.73-56.15,21.64-128.75,19.84-204.45-5.07-68.22-22.45-131.63-61.38-175.34-107.44l24.28-8.15C40.23,20.88,16.84,10.2,0,0c6.11,18.72,11.2,43.92,10.33,62.73l13.77-22.32c45.19,48.01,110.96,88.56,181.64,111.82,41.92,13.8,83.04,20.72,121.23,20.72,33.35,0,64.48-5.28,91.95-15.87,3.35-1.29,5.02-5.05,3.73-8.4Z"/>
                </svg>
              </div>

              <div className="hidden md:flex items-end absolute top-[12%] right-[1%] lg:right-[3%] z-20">
                <svg className="w-16 lg:w-[75px] h-auto fill-white mr-2 translate-y-6" viewBox="0 0 361.94 217.12">
                  <path d="m299.09,0l16.9,19.92c-47.94,20.83-71.89,43.04-73.12,67.77-1.15,23.05,17.82,39.57,34.56,54.15,11.72,10.21,22.79,19.86,21.46,27.48-.83,4.78-8.54,16.81-61.9,25.22-49.13,7.74-126.64,10.82-230.38,9.14-3.55-.08-6.55,2.81-6.6,6.39-.06,3.59,2.8,6.55,6.39,6.6,18.36.3,35.9.45,52.63.45,78.47,0,138.88-3.26,179.98-9.74,46.6-7.34,69.7-18.73,72.68-35.83,2.59-14.85-11.17-26.83-25.73-39.52-15.21-13.25-30.94-26.96-30.11-43.7.93-18.7,23.22-38.05,64.57-56.17l.24,25.77c8.98-16.55,26.37-35.5,41.28-48.36-19.69.03-45.23-2.93-62.85-9.57Z"/>
                </svg>
                <p className="text-white text-left text-sm lg:text-[17px] leading-snug">
                  <span className="font-light">Amo entrenar intenso pero</span><br />
                  <span className="font-light">en mi tiempo libre </span>
                  <span className="font-bold">no negocio descansar.</span>
                </p>
              </div>

              <div className="hidden md:flex items-center absolute top-[44%] right-[3%] lg:right-[7%] z-20">
                <svg className="w-16 lg:w-20 h-auto fill-white mr-3 -translate-y-1" viewBox="0 0 376.39 162.66">
                  <path d="m376.39,0c-17.56,8.9-41.69,17.77-60.42,19.78l20.12,8.5c-23.39,6.53-48.3,7.72-72.19,3.38-4.15-.75-8.42-1.7-12.56-2.61-13.23-2.92-26.91-5.93-41.01-4.06-6.06.8-12.09,2.86-17.53,5.91-19.25-7.17-39.9-6.36-55.91-4.81-40.71,3.94-73.49,15.88-97.44,35.47-13.95,11.41-25.36,26.68-32.14,43C-.05,122.26-1.9,140.61,1.98,157.61c.69,3.01,3.37,5.06,6.33,5.06.48,0,.96-.05,1.45-.16,3.5-.8,5.69-4.28,4.89-7.78-6.45-28.28,6.82-61.68,33.02-83.11,21.93-17.93,52.36-28.9,90.46-32.59,12.39-1.2,27.77-1.94,42.39,1.68-6.13,6.98-9.67,15.75-8.53,25.35.85,7.12,4.09,13.25,6.96,18.66,12.87,24.32,26.33,26.89,35.36,24.76,13.77-3.25,19.82-18.71,18.53-31.61-1.52-15.17-10.91-29.53-24.96-39.17,1.37-.36,2.76-.63,4.14-.82,11.83-1.57,23.81,1.07,36.5,3.87,4.25.94,8.66,1.91,13.04,2.71,26.62,4.83,54.41,3.34,80.35-4.31,2.39-.7,4.72-1.51,7-2.38l12.41,24.01c.56-18.83,7.54-43.57,15.05-61.77Zm-156.48,79.16c.74,7.35-2.33,16.19-8.58,17.66-8.71,2.05-16.83-10.52-20.89-18.19-2.45-4.62-4.98-9.4-5.54-14.12-.87-7.3,3.09-14.02,9.17-18.91,14.5,7.26,24.47,20.06,25.83,33.56Z"/>
                </svg>
                <p className="text-white text-left text-sm lg:text-[17px] leading-snug">
                  <span className="font-light italic">Fuera del consultorio</span><br />
                  <span className="font-light italic">me encuentras </span>
                  <span className="font-bold">rodando como</span><br />
                  <span className="font-bold">instructora de Xtreme bike</span>
                </p>
              </div>

              <div className="hidden md:flex items-end absolute bottom-[12%] right-[5%] lg:right-[8%] z-20">
                <CurvedArrowRightIcon className="w-24 lg:w-[115px] h-auto fill-white mr-2 translate-y-4" />
                <p className="text-white text-left text-sm lg:text-[17px] leading-snug">
                  <span className="font-light">Cuidar tu cuerpo por dentro</span><br />
                  <span className="font-light">y por fuera es</span><br />
                  <span className="font-bold">mi prioridad en consulta.</span>
                </p>
              </div>

            </div>

            <div className="w-full absolute bottom-3 left-4 md:bottom-5 md:left-8 md:right-8 md:w-auto flex flex-col md:flex-row md:justify-between md:items-end z-20 pointer-events-none">
              <img 
                src={LogoSimple} 
                alt="Logo Dra. Lubisay Moreno" 
                className="w-24 sm:w-28 md:w-36 h-auto brightness-0 invert mb-1 md:mb-0"
              />
              <span className="text-white/90 font-bold text-[8px] sm:text-[10px] md:text-xs tracking-[0.08em] md:tracking-[0.12em] uppercase">
                {DOCTOR_INFO.credentials}
              </span>
            </div>

          </div>
        </section>
      </div>

      <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <RevealOnScroll
            threshold={0.15}
            durationClass="duration-1200"
            hiddenClass="opacity-0 translate-y-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
          <div className="lg:col-span-7 relative flex flex-col justify-center lg:self-start">
            
            <div className="absolute top-[-5%] left-[-10%] md:top-[-15%] md:left-[-15%] lg:left-[-25%] w-[80%] md:w-[60%] lg:w-[85%] max-w-[400px] opacity-10 pointer-events-none z-0">
              <img 
                src={IconoHeart2} 
                alt="" 
                className="w-full h-auto" 
              />
            </div>

              <div className="relative z-10">

                <div className="flex justify-center lg:justify-start mb-5">
                  <div className="inline-flex items-center gap-2.5 bg-white border border-brand-pink/30 rounded-full px-4 py-2 shadow-[0_4px_14px_rgba(0,0,0,0.06)]">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-4 h-4 text-brand-pink shrink-0"
                    >
                      <path d="M12 11v4" />
                      <path d="M14 13h-4" />
                      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                      <rect width="20" height="14" x="2" y="6" rx="2" />
                    </svg>
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-pink leading-none">
                      Tu salud en manos expertas
                    </span>
                  </div>
                </div>

                <h2 className="font-body-md text-center lg:text-left text-4xl md:text-5xl lg:text-[54px] font-bold text-brand-grape uppercase tracking-tighter mb-6 leading-tight">
                  Conoce más <br className="hidden md:block" /> acerca de mí
                </h2>
                
                <p className="font-body-md text-base md:text-lg text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
                  Como especialista en ginecología y obstetricia, mi enfoque va más allá de la clínica tradicional. Me dedico a ofrecer un espacio seguro, donde la medicina con rigor científico se encuentra con el trato humano y empático. Creo firmemente en educar y empoderar a cada mujer para que tome las mejores decisiones sobre su salud en todas las etapas de su vida.
                </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 pt-8 border-t border-pink-100/50">
                    <div className="flex flex-col">
                      <span className="font-body-md text-3xl md:text-4xl text-brand-pink font-bold tracking-tight">
                        <AnimatedNumber end={9} prefix="+" duration={1200} />
                      </span>
                      <span className="font-bold text-sm text-on-background mt-1 leading-tight">Años de Trayectoria</span>
                      <span className="text-[11px] text-on-surface-variant mt-1 leading-tight">Dedicación exclusiva médica</span>
                    </div>

                    <div className="flex flex-col">
                      <span className="font-body-md text-3xl md:text-4xl text-brand-pink font-bold tracking-tight">
                        <AnimatedNumber end={1.2} decimals={1} prefix="+" suffix="k" duration={1500} />
                      </span>
                      <span className="font-bold text-sm text-on-background mt-1 leading-tight">Familias Acompañadas</span>
                      <span className="text-[11px] text-on-surface-variant mt-1 leading-tight">Parto y seguimiento integral</span>
                    </div>

                    <div className="flex flex-col">
                      <span className="font-body-md text-3xl md:text-4xl text-brand-pink font-bold tracking-tight">
                        <AnimatedNumber end={99} suffix="%" duration={1600} />
                      </span>
                      <span className="font-bold text-sm text-on-background mt-1 leading-tight">Satisfacción de Pacientes</span>
                      <span className="text-[11px] text-on-surface-variant mt-1 leading-tight">Opiniones y recomendaciones</span>
                    </div>

                    <div className="flex flex-col">
                      <span className="font-body-md text-3xl md:text-4xl text-brand-pink font-bold tracking-tight">
                        <AnimatedNumber end={100} suffix="%" duration={1600} />
                      </span>
                      <span className="font-bold text-sm text-on-background mt-1 leading-tight">Atención Humanizada</span>
                      <span className="text-[11px] text-on-surface-variant mt-1 leading-tight">Espacio seguro y empático</span>
                    </div>
                  </div>
                </div>

              </div>

              <div className="lg:col-span-5 relative mt-10 lg:mt-0 flex justify-center">
               <div className="relative w-full max-w-[340px] sm:max-w-md lg:max-w-[380px] xl:max-w-[420px] mx-auto lg:ml-auto lg:mr-0">
                  
                  <div className="absolute inset-0 bg-brand-pink/10 rounded-2xl translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 z-0"></div>
                  
                  <div className="relative z-10">
                    <img 
                      src={FotoLuConsultorio} 
                      alt="Dra. Lubisay Moreno en consultorio" 
                      className="w-full h-auto object-cover rounded-2xl shadow-sm"
                    />
                  </div>
                  
                </div>
              </div>
              

            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="w-full bg-brand-pink-light py-20 md:py-24 overflow-hidden" id="filosofia">
        <div className="max-w-[920px] mx-auto px-6 md:px-8">
          
          <RevealOnScroll
            threshold={0.15}
            durationClass="duration-1200"
            hiddenClass="opacity-0 translate-y-12"
          >
            <div className="text-center max-w-xl mx-auto mb-14 md:mb-16">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-white border border-brand-pink/30 text-brand-pink text-xs font-bold uppercase tracking-wider shadow-sm mb-3">
                Mi Esencia
              </span>
              <h2 className="font-body-md text-3xl md:text-4xl text-brand-grape mt-2 font-bold tracking-tight">
                Vocación, Energía y Cercanía
              </h2>
              <p className="font-body-md text-base text-on-surface-variant mt-3 leading-relaxed">
                Detrás de cada consulta hay una médico apasionada por su trabajo, el movimiento y el trato humano.
              </p>
            </div>
          </RevealOnScroll>

          <div className="flex flex-col gap-12 md:gap-16">
            {aboutHighlights.map((item, index) => {
              const isReversed = index % 2 === 1;

              return (
                <RevealOnScroll
                  key={item.title}
                  threshold={0.15}
                  durationClass="duration-1200"
                  hiddenClass="opacity-0 translate-y-12"
                >
                  <div
                    className={`flex flex-col items-center justify-center ${
                      isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
                    }`}
                  >
                    <div className="w-full max-w-[360px] md:w-[46%] shrink-0 relative z-0">
                      <div className="aspect-4/5 w-full rounded-3xl overflow-hidden shadow-md shadow-pink-200/30 bg-white">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className={`w-full h-full object-cover ${item.imagePosition}`}
                        />
                      </div>
                    </div>

                    <div
                      className={`w-[92%] max-w-[330px] md:max-w-none md:w-[60%] bg-white rounded-3xl p-7 md:p-9 shadow-lg shadow-pink-200/40 relative z-10 -mt-8 md:mt-0 ${
                        isReversed ? 'md:-mr-12' : 'md:-ml-12'
                      }`}
                    >
                      <h3 className="text-xl md:text-[25px] font-bold text-brand-grape leading-snug mb-3">
                        {item.title}
                      </h3>
                      <p className="font-body-md text-sm md:text-[15px] text-on-surface-variant leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>

        </div>
      </section>

      <Testimonials />
      <CtaDetailed onOpenModal={onOpenModal} />

    </main>
  );
}