import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import SpecialitySections from './components/layout/SpecialitySections'; // Importamos el nuevo componente

function App() {
  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <SpecialitySections /> 
    </div>
  )
}

export default App