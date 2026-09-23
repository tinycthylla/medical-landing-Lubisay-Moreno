import { useState } from 'react';
import { Link } from 'react-router-dom';

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
      <div className="flex justify-between items-center h-20 px-8 max-w-[1200px] mx-auto">
        
        {/* Logo / Nombre */}
        <Link to="/" className="font-headline-sm text-primary tracking-tight font-bold text-lg hover:opacity-80 transition-opacity">
          Dra. Lubisay Moreno
        </Link>

        {/* Botón Hamburguesa Mobile */}
        <button 
          className="text-primary p-2 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* --- NAVEGACIÓN DESKTOP --- */}
        <nav className="hidden md:flex items-center space-x-6">
          
          {/* Dropdown Servicios */}
          <div className="relative group">
            <Link to="/servicios" className="text-on-surface-variant hover:text-primary transition-colors font-body-md flex items-center gap-1 py-4">
              Servicios
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </Link>
            
            {/* Contenido del Dropdown */}
            <div className="absolute top-full left-0 w-56 bg-surface border border-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
              <Link to="/servicios#control-prenatal" className="block px-4 py-3 text-sm text-on-surface-variant hover:bg-surface-variant hover:text-primary border-b border-gray-100">Control Prenatal</Link>
              <Link to="/servicios#ecografias" className="block px-4 py-3 text-sm text-on-surface-variant hover:bg-surface-variant hover:text-primary border-b border-gray-100">Ecografías Integrales</Link>
              <Link to="/servicios#ginecologia" className="block px-4 py-3 text-sm text-on-surface-variant hover:bg-surface-variant hover:text-primary border-b border-gray-100">Ginecología General</Link>
              <Link to="/servicios#planificacion" className="block px-4 py-3 text-sm text-on-surface-variant hover:bg-surface-variant hover:text-primary border-b border-gray-100">Planificación Familiar</Link>
              <Link to="/servicios#salud-sexual" className="block px-4 py-3 text-sm text-on-surface-variant hover:bg-surface-variant hover:text-primary border-b border-gray-100">Salud Sexual</Link>
              <Link to="/servicios#menopausia" className="block px-4 py-3 text-sm text-on-surface-variant hover:bg-surface-variant hover:text-primary">Bienestar en la Menopausia</Link>
            </div>
          </div>

          {/* Resto de los Links */}
          <Link to="/acerca" className="text-on-surface-variant hover:text-primary transition-colors font-body-md">Acerca de mí</Link>
          <Link to="/#testimonios" className="text-on-surface-variant hover:text-primary transition-colors font-body-md">Experiencias</Link>
          <Link to="/#faq" className="text-on-surface-variant hover:text-primary transition-colors font-body-md">Preguntas</Link>
          <Link to="/blog" className="text-on-surface-variant hover:text-primary transition-colors font-body-md">Blog</Link>
          
          <button 
            onClick={onOpenModal}
            className="bg-whatsapp text-on-secondary px-6 py-2 rounded-full font-label-md hover:opacity-80 transition-all duration-200"
          >
            Agendar mi cita
          </button>
        </nav>
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
              <div className="flex flex-col pl-4 mt-2 bg-surface-variant/30 rounded-md">
                <Link to="/servicios" onClick={closeMenu} className="text-sm font-bold text-primary py-3 border-b border-gray-100/50">Ver todos los servicios</Link>
                <Link to="/servicios#control-prenatal" onClick={closeMenu} className="text-sm text-on-surface-variant py-3 border-b border-gray-100/50">Control Prenatal</Link>
                <Link to="/servicios#ecografias" onClick={closeMenu} className="text-sm text-on-surface-variant py-3 border-b border-gray-100/50">Ecografías</Link>
                <Link to="/servicios#ginecologia" onClick={closeMenu} className="text-sm text-on-surface-variant py-3 border-b border-gray-100/50">Ginecología General</Link>
                <Link to="/servicios#planificacion" onClick={closeMenu} className="text-sm text-on-surface-variant py-3 border-b border-gray-100/50">Planificación Familiar</Link>
                <Link to="/servicios#menopausia" onClick={closeMenu} className="text-sm text-on-surface-variant py-3 border-b border-gray-100/50">Menopausia</Link>
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
            className="bg-whatsapp text-on-secondary px-6 py-3 rounded-full font-label-md w-full mt-4 flex items-center justify-center gap-2"
          >
            <span>Agendar mi cita</span>
            <span className="material-symbols-outlined text-[18px]">calendar_month</span>
          </button>
        </nav>
      )}
    </header>
  );
}