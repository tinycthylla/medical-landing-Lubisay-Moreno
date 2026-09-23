import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/layout/Hero';
import SpecialitySections from '../components/layout/SpecialitySections';
import Testimonials from '../components/layout/Testimonials';
import FAQ from '../components/layout/FAQ';
import Locations from '../components/layout/Locations';
import CtaBanner from '../components/layout/CtaBanner';

export default function Home({ onOpenModal }) {
  // Hook para detectar si la URL trae un hash y hacer scroll automático
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Un pequeñísimo retraso para asegurar que los componentes (Testimonios/FAQ) ya existen en pantalla
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Si no hay hash, simplemente vamos al tope de la página
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <main className="flex-grow">
      <Hero onOpenModal={onOpenModal} />
      <SpecialitySections />
      <Testimonials />
      <FAQ />
      <Locations />
      <CtaBanner onOpenModal={onOpenModal} />
    </main>
  );
}