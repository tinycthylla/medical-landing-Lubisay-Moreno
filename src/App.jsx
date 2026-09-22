import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Componentes Globales
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BookingModal from './components/layout/BookingModal';

// Páginas
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-background min-h-screen overflow-x-hidden flex flex-col relative">
      
      {/* El Header y el Footer siempre se renderizan, sin importar la página */}
      <Header onOpenModal={() => setIsModalOpen(true)} />
      
      {/* Aquí es donde cambia el contenido según la URL */}
      <Routes>
        <Route path="/" element={<Home onOpenModal={() => setIsModalOpen(true)} />} />
        <Route path="/acerca" element={<About onOpenModal={() => setIsModalOpen(true)} />} />
        <Route path="/servicios" element={<Services onOpenModal={() => setIsModalOpen(true)} />} />
      </Routes>
      
      <Footer />
      
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
    </div>
  )
}

export default App