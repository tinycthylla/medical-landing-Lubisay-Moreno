import { Link } from 'react-router-dom';
import logoFullColor from '../../assets/icons/logofullcolor.svg';
import { CLINICS, DOCTOR_INFO, SOCIAL_LINKS } from '../../data/clinicInfo';
import { SERVICES } from '../../data/services';
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
} from '../UI/Icons';

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
                  {DOCTOR_INFO.credentials}
                </p>
              </div>

            <div className="lg:col-span-3 flex flex-col gap-4">
              <h4 className="font-body-md font-bold text-sm text-brand-purple tracking-tight">
                Servicios
              </h4>
              <ul className="flex flex-col gap-2.5 font-body-md text-sm text-brand-grape">
                {SERVICES.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.href}
                      className="hover:text-brand-pink transition-colors"
                    >
                      {item.footerLabel}
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
                      href={DOCTOR_INFO.phoneHref}
                      className="inline-flex items-center gap-2 hover:text-brand-pink transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px] text-brand-purple">
                        call
                      </span>
                      {DOCTOR_INFO.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a
                      href={DOCTOR_INFO.emailHref}
                      className="inline-flex items-center gap-2 hover:text-brand-pink transition-colors break-all"
                    >
                      <span className="material-symbols-outlined text-[18px] text-brand-purple">
                        mail
                      </span>
                      {DOCTOR_INFO.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-2 pt-0.5">
                    <span className="material-symbols-outlined text-[18px] text-brand-purple shrink-0 mt-0.5">
                      location_on
                    </span>
                    <div className="flex flex-col gap-1 text-xs leading-relaxed">
                      {CLINICS.map((sede) => (
                        <a
                          key={sede.id}
                          href={sede.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-brand-pink transition-colors"
                        >
                          {sede.footerName}
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
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram de Dra. Lubisay Moreno"
                    className="h-9 w-9 rounded-full bg-brand-purple text-white flex items-center justify-center hover:bg-brand-pink transition-colors shadow-sm"
                  >
                    <InstagramIcon className="w-4 h-4 fill-current" />
                  </a>

                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook de Dra. Lubisay Moreno"
                    className="h-9 w-9 rounded-full bg-brand-purple text-white flex items-center justify-center hover:bg-brand-pink transition-colors shadow-sm"
                  >
                    <FacebookIcon className="w-4 h-4 fill-current" />
                  </a>

                  <a
                    href={SOCIAL_LINKS.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok de Dra. Lubisay Moreno"
                    className="h-9 w-9 rounded-full bg-brand-purple text-white flex items-center justify-center hover:bg-brand-pink transition-colors shadow-sm"
                  >
                    <TikTokIcon className="w-4 h-4 fill-current" />
                  </a>

                  <a
                    href={SOCIAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp de Dra. Lubisay Moreno"
                    className="h-9 w-9 rounded-full bg-brand-purple text-white flex items-center justify-center hover:bg-brand-pink transition-colors shadow-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
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