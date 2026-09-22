export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background border-t border-surface-variant/30 pt-16 pb-8 px-6">
      <div className="md:max-w-[1200px] md:mx-auto">
        
        {/* Grid de 4 columnas (Estética minimalista, estructura organizada) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Columna 1: Servicios */}
          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-sm text-on-background uppercase tracking-wider">
              Servicios
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">Control Prenatal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ecografías Integrales</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ginecología General</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Planificación Familiar</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Menopausia</a></li>
            </ul>
          </div>

          {/* Columna 2: Dra. Lubisay Moreno */}
          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-sm text-on-background uppercase tracking-wider">
              Dra. Lubisay Moreno
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre mí</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Aviso de Privacidad</a></li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-sm text-on-background uppercase tracking-wider">
              Contacto
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-on-surface-variant">
              <li>
                <a href="tel:+584129360494" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  +58 412 9360494
                </a>
              </li>
              <li>
                <a href="mailto:morenolubisay@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors break-all">
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                  morenolubisay@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] shrink-0 mt-0.5">location_on</span>
                <span className="leading-relaxed">Caracas <br/> San Antonio de los Altos</span>
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-sm text-on-background uppercase tracking-wider">
              Síguenos
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-on-surface-variant">
              <li>
                <a href="https://facebook.com/dralubisaymoreno" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">thumb_up</span>
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com/dra.lubisaymoreno" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-pink-300 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://tiktok.com/@lubimorenoo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[18px]">play_circle</span>
                  TikTok
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divisor y Copyright */}
        <div className="pt-8 border-t border-surface-variant/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant">
          <p className="text-center md:text-left">
            © {currentYear} Dra. Lubisay Moreno. Obstetricia y Ecografía Integral.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Términos</a>
            <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
          </div>
        </div>

      </div>
    </footer>
  );
}