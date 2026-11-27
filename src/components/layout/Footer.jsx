import { Link } from 'react-router-dom';
import logoFullColor from '../../assets/icons/logofullcolor.svg';

const SERVICES_LINKS = [
  { label: 'Control Prenatal', to: '/servicios#control-prenatal' },
  { label: 'Control Obstétrico', to: '/servicios#control-obstetrico' },
  { label: 'Ecografías Integrales', to: '/servicios#ecografias' },
  { label: 'Ginecología General', to: '/servicios#ginecologia-general' },
  { label: 'Planificación Familiar', to: '/servicios#planificacion-familiar' },
  { label: 'Salud Sexual y Prevención', to: '/servicios#salud-sexual' },
  { label: 'Menopausia', to: '/servicios#menopausia' },
];

const SEDES_LINKS = [
  {
    name: 'Niña Madre (Caracas)',
    mapLink: 'https://maps.app.goo.gl/tT9hDW28kp9aR4Nx8',
  },
  {
    name: 'Servicios Médicos DR (San Antonio)',
    mapLink: 'https://maps.app.goo.gl/3cn21aB2vvQgNEha9',
  },
  {
    name: 'Impremer Salud (San Antonio)',
    mapLink: 'https://maps.app.goo.gl/3DKzT48KWtroA9nw5',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative mt-12">
      <div className="w-full overflow-hidden leading-none -mb-px text-brand-pink-light">
        <svg
          viewBox="0 0 1440 110"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-16 md:h-24 block"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M0,48 C260,-10 560,10 860,62 C1100,104 1290,102 1440,86 L1440,110 L0,110 Z"
          />
        </svg>
      </div>

      <div className="w-full bg-brand-pink-light pt-8 pb-8 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
              <div className="lg:col-span-3 flex flex-col items-start justify-center gap-4">
                <Link
                  to="/"
                  aria-label="Inicio - Dra. Lubisay Moreno"
                  className="w-full max-w-[240px] block"
                >
                  <img
                    src={logoFullColor}
                    alt="Dra. Lubisay Moreno - Ginecólogo & Obstetra"
                    className="w-full h-auto object-contain"
                  />
                </Link>

                <p className="font-label-md text-xs font-semibold text-brand-purple/80 tracking-wide">
                  M.P.P.S. 128037 | C.M.D.M.C. 37329
                </p>
              </div>

            <div className="lg:col-span-3 flex flex-col gap-4">
              <h4 className="font-body-md font-bold text-sm text-brand-purple tracking-tight">
                Servicios
              </h4>
              <ul className="flex flex-col gap-2.5 font-body-md text-sm text-brand-grape">
                {SERVICES_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="hover:text-brand-pink transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-4">
              <h4 className="font-body-md font-bold text-sm text-brand-purple tracking-tight">
                Dra. Lubisay
              </h4>
              <ul className="flex flex-col gap-2.5 font-body-md text-sm text-brand-grape">
                <li>
                  <Link to="/acerca" className="hover:text-brand-pink transition-colors">
                    Sobre mí
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-brand-pink transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/privacidad" className="hover:text-brand-pink transition-colors">
                    Aviso de Privacidad
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="flex flex-col gap-3.5">
                <h4 className="font-body-md font-bold text-sm text-brand-purple tracking-tight">
                  Contacto
                </h4>
                <ul className="flex flex-col gap-2.5 font-body-md text-sm text-brand-grape">
                  <li>
                    <a
                      href="tel:+584129360494"
                      className="inline-flex items-center gap-2 hover:text-brand-pink transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px] text-brand-purple">
                        call
                      </span>
                      +58 412 936 0494
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:morenolubisay@gmail.com"
                      className="inline-flex items-center gap-2 hover:text-brand-pink transition-colors break-all"
                    >
                      <span className="material-symbols-outlined text-[18px] text-brand-purple">
                        mail
                      </span>
                      morenolubisay@gmail.com
                    </a>
                  </li>
                  <li className="flex items-start gap-2 pt-0.5">
                    <span className="material-symbols-outlined text-[18px] text-brand-purple shrink-0 mt-0.5">
                      location_on
                    </span>
                    <div className="flex flex-col gap-1 text-xs leading-relaxed">
                      {SEDES_LINKS.map((sede) => (
                        <a
                          key={sede.name}
                          href={sede.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-brand-pink transition-colors"
                        >
                          {sede.name}
                        </a>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="font-body-md font-bold text-sm text-brand-purple tracking-tight">
                  Síguenos
                </h4>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://www.instagram.com/dra.lubisaymoreno"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram de Dra. Lubisay Moreno"
                    className="h-9 w-9 rounded-full bg-brand-purple text-white flex items-center justify-center hover:bg-brand-pink transition-colors shadow-sm"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.facebook.com/dralubisaymoreno"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook de Dra. Lubisay Moreno"
                    className="h-9 w-9 rounded-full bg-brand-purple text-white flex items-center justify-center hover:bg-brand-pink transition-colors shadow-sm"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.tiktok.com/@lubimorenoo"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok de Dra. Lubisay Moreno"
                    className="h-9 w-9 rounded-full bg-brand-purple text-white flex items-center justify-center hover:bg-brand-pink transition-colors shadow-sm"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>

                  <a
                    href="https://wa.me/584129360494"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp de Dra. Lubisay Moreno"
                    className="h-9 w-9 rounded-full bg-brand-purple text-white flex items-center justify-center hover:bg-brand-pink transition-colors shadow-sm"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                      <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.758.461 3.477 1.336 4.992L2 22l5.172-1.359a9.923 9.923 0 0 0 4.859 1.266h.004c5.512 0 9.965-4.453 9.965-9.969 0-2.66-1.035-5.164-2.914-7.043A9.914 9.914 0 0 0 12.031 2zm5.812 14.133c-.242.688-1.422 1.312-1.969 1.398-.508.078-1.164.109-1.875-.117-.43-.141-.984-.328-1.688-.633-2.961-1.281-4.891-4.266-5.039-4.461-.148-.195-1.203-1.602-1.203-3.055 0-1.453.758-2.164 1.031-2.461.273-.297.594-.375.797-.375.195 0 .398.008.57.016.18.008.43-.07.672.516.25.602.852 2.078.922 2.227.078.148.125.328.023.523-.094.195-.148.32-.297.492-.148.172-.312.383-.445.516-.148.148-.305.312-.133.609.172.297.766 1.266 1.648 2.047 1.133 1.008 2.086 1.32 2.383 1.469.297.148.469.125.641-.07.172-.195.742-.867.938-1.164.195-.297.398-.25.672-.148.273.094 1.742.82 2.039.969.297.148.492.227.562.352.078.125.078.719-.164 1.406z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-brand-purple/10 flex flex-col md:flex-row items-center justify-between gap-3 font-body-md text-xs text-brand-grape">
            <p className="text-center md:text-left">
              © {currentYear} Dra. Lubisay Moreno. Ginecología y Obstetricia.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              <Link
                to="/privacidad"
                className="hover:text-brand-pink transition-colors"
              >
                Aviso de Privacidad
              </Link>
              <span className="text-brand-purple/30" aria-hidden="true">|</span>
              <span className="inline-flex items-center gap-1">
                Creado con
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5 fill-brand-purple inline-block"
                  aria-label="corazón morado"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                por{' '}
                <a
                  href="https://github.com/tinycthylla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-purple hover:text-brand-pink transition-colors"
                >
                  Aries Tamayo
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}