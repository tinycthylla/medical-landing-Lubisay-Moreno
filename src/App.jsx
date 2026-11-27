import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BookingModal from './components/layout/BookingModal';
import BlogPost from './pages/BlogPost';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-background min-h-screen overflow-x-hidden flex flex-col relative">
      <ScrollToTop />
      <Header onOpenModal={() => setIsModalOpen(true)} />

      <Routes>
        <Route path="/" element={<Home onOpenModal={() => setIsModalOpen(true)} />} />
        <Route path="/acerca" element={<About onOpenModal={() => setIsModalOpen(true)} />} />
        <Route path="/servicios" element={<Services onOpenModal={() => setIsModalOpen(true)} />} />
        <Route path="/blog" element={<Blog onOpenModal={() => setIsModalOpen(true)} />} />
       <Route path="/blog/:slug" element={<BlogPost onOpenModal={() => setIsModalOpen(true)} />} />
        <Route path="/privacidad" element={<PrivacyPolicy />} />
        
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