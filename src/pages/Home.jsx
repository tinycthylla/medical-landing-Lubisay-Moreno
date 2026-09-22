import Hero from '../components/layout/Hero';
import SpecialitySections from '../components/layout/SpecialitySections';
import Testimonials from '../components/layout/Testimonials';
import FAQ from '../components/layout/FAQ';
import Locations from '../components/layout/Locations';
import CtaBanner from '../components/layout/CtaBanner';

export default function Home({ onOpenModal }) {
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