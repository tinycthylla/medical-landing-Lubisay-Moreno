import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoIcon from "../../assets/icons/isotipo_rosa.svg";
import logoText from "../../assets/icons/logotipo_lila.svg";

export default function Header({ onOpenModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Función para cerrar todo el menú en versión móvil al hacer clic en un link
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-md shadow-sm">
      {/* Contenedor principal con altura aumentada (h-24 móvil, h-28 PC) */}
      <div className="flex justify-between items-center h-24 md:h-28 px-4 md:px-8 max-w-[1200px] mx-auto">
        
        {/* 1. IZQUIERDA: Logo Completo */}
        <Link to="/" className="flex items-center gap-1 md:gap-2 hover:opacity-80 transition-opacity shrink-0">
          <img src={logoIcon} alt="Isotipo Dra. Lubisay" className="h-16 md:h-20 w-auto" />
          <img src={logoText} alt="Dra. Lubisay Moreno" className="h-14 md:h-16 w-auto" />
        </Link>

        {/* 2. CENTRO: Menú Hamburguesa (Móvil) / Navegación (Desktop) */}
        <div className="flex-1 flex justify-center">
          
          {/* Botón Hamburguesa Mobile */}
          <button 
            className="text-on-background p-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            
            {/* Dropdown Servicios */}
            <div className="relative group">
  <Link to="/servicios" className="font-body-md font-semibold text-on-background hover:text-brand-pink transition-colors flex items-center gap-1 py-4">
    Servicios
    <span className="material-symbols-outlined text-sm">expand_more</span>
  </Link>
  
  {/* Contenido del Dropdown */}
  <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-surface border border-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
    <Link to="/servicios#control-prenatal" className="block px-4 py-3 font-body-md text-sm text-on-surface-variant hover:bg-brand-pink-light hover:text-brand-pink border-b border-gray-100 transition-colors">Control Prenatal</Link>
    <Link to="/servicios#ecografias" className="block px-4 py-3 font-body-md text-sm text-on-surface-variant hover:bg-brand-pink-light hover:text-brand-pink border-b border-gray-100 transition-colors">Ecografías Integrales</Link>
    <Link to="/servicios#ginecologia" className="block px-4 py-3 font-body-md text-sm text-on-surface-variant hover:bg-brand-pink-light hover:text-brand-pink border-b border-gray-100 transition-colors">Ginecología General</Link>
    <Link to="/servicios#planificacion" className="block px-4 py-3 font-body-md text-sm text-on-surface-variant hover:bg-brand-pink-light hover:text-brand-pink border-b border-gray-100 transition-colors">Planificación Familiar</Link>
    <Link to="/servicios#control-obstetrico" className="block px-4 py-3 font-body-md text-sm text-on-surface-variant hover:bg-brand-pink-light hover:text-brand-pink border-b border-gray-100 transition-colors">Control Obstétrico</Link>
    <Link to="/servicios#salud-sexual" className="block px-4 py-3 font-body-md text-sm text-on-surface-variant hover:bg-brand-pink-light hover:text-brand-pink border-b border-gray-100 transition-colors">Salud Sexual</Link>
    <Link to="/servicios#menopausia" className="block px-4 py-3 font-body-md text-sm text-on-surface-variant hover:bg-brand-pink-light hover:text-brand-pink transition-colors">Bienestar en la Menopausia</Link>
  </div>
</div>

            {/* Resto de los Links */}
            <Link to="/acerca" className="text-on-surface-variant hover:text-pink-500 transition-colors font-body-md">Acerca de mí</Link>
            <Link to="/#testimonios" className="text-on-surface-variant hover:text-pink-500 transition-colors font-body-md">Experiencias</Link>
            <Link to="/#faq" className="text-on-surface-variant hover:text-pink-500 transition-colors font-body-md">Preguntas</Link>
            <Link to="/blog" className="text-on-surface-variant hover:text-pink-500 transition-colors font-body-md">Blog</Link>
          </nav>
        </div>

        {/* 3. DERECHA: Botón Agendar */}
        <div className="shrink-0">
          <button 
            onClick={onOpenModal}
            className="bg-whatsapp text-on-secondary px-4 py-2 md:px-6 md:py-2.5 rounded-full font-label-md hover:opacity-80 transition-all duration-200 flex items-center gap-1 shadow-md"
          >
            <span className="hidden md:inline">Agendar mi cita</span>
            <span className="md:hidden text-xs">Agendar cita</span>
          </button>
        </div>
      </div>

      {/* --- NAVEGACIÓN MOBILE --- */}
      {isMenuOpen && (
        <nav className="md:hidden bg-surface border-t border-gray-200 px-8 py-4 flex flex-col space-y-4 shadow-lg absolute w-full max-h-[80vh] overflow-y-auto">
          
          {/* Acordeón Servicios Mobile */}
          <div>
            <button 
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full flex justify-between items-center text-on-surface-variant font-body-md py-2 border-b border-gray-100"
            >
              Servicios
              <span className="material-symbols-outlined">
                {isServicesOpen ? 'expand_less' : 'expand_more'}
              </span>
            </button>
            
            {/* Opciones internas del Acordeón */}
            {isServicesOpen && (
              <div className="flex flex-col pl-4 mt-2 bg-pink-50 rounded-md">
                <Link to="/servicios" onClick={closeMenu} className="text-sm font-bold text-pink-500 py-3 border-b border-white">Ver todos los servicios</Link>
                <Link to="/servicios#control-prenatal" onClick={closeMenu} className="text-sm text-on-surface-variant py-3 border-b border-white">Control Prenatal</Link>
                <Link to="/servicios#ecografias" onClick={closeMenu} className="text-sm text-on-surface-variant py-3 border-b border-white">Ecografías</Link>
                <Link to="/servicios#ginecologia" onClick={closeMenu} className="text-sm text-on-surface-variant py-3 border-b border-white">Ginecología General</Link>
                <Link to="/servicios#planificacion" onClick={closeMenu} className="text-sm text-on-surface-variant py-3 border-b border-white">Planificación Familiar</Link>
                <Link to="/servicios#menopausia" onClick={closeMenu} className="text-sm text-on-surface-variant py-3">Menopausia</Link>
              </div>
            )}
          </div>

          {/* Resto de los Links */}
          <Link to="/acerca" onClick={closeMenu} className="text-on-surface-variant font-body-md py-2 border-b border-gray-100">Acerca de mí</Link>
          <Link to="/#testimonios" onClick={closeMenu} className="text-on-surface-variant font-body-md py-2 border-b border-gray-100">Experiencias</Link>
          <Link to="/#faq" onClick={closeMenu} className="text-on-surface-variant font-body-md py-2 border-b border-gray-100">Preguntas Frecuentes</Link>
          <Link to="/blog" onClick={closeMenu} className="text-on-surface-variant font-body-md py-2 border-b border-gray-100">Blog</Link>
          
          <button 
            onClick={() => {
              onOpenModal();
              closeMenu();
            }}
            className="bg-whatsapp text-on-secondary px-6 py-3 rounded-full font-label-md w-full mt-4 flex items-center justify-center gap-2 shadow-md"
          >
            <span>Agendar mi cita</span>
          </button>
        </nav>
      )}
    </header>
  );
}