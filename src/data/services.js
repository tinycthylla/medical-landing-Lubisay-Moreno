import fotoPregnant from '../assets/img/woman_pregnant.webp';
import fotoEco from '../assets/img/ecography.webp';
import fotoUterus from '../assets/img/ginecology.webp';
import fotoContraceptives from '../assets/img/contraceptives.webp';
import fotoObstetricia from '../assets/img/obstetricia.webp';
import fotoSexEducation from '../assets/img/sexual_education.webp';
import fotoMenopause from '../assets/img/menopause.webp';

import iconPrenatal from '../assets/icons/icono-prenatal.svg';
import iconEco from '../assets/icons/icono-eco.svg';
import iconGineco from '../assets/icons/icono-gineco.svg';
import iconPlan from '../assets/icons/icono-plan.svg';
import iconObste from '../assets/icons/icono-obste.svg';
import iconSexual from '../assets/icons/icono-sexual.svg';
import iconMeno from '../assets/icons/icono-meno.svg';

export const SERVICES = [
  {
    id: 'control-prenatal',
    href: '/servicios#control-prenatal',
    headerDesktopLabel: 'Control Prenatal',
    headerMobileLabel: 'Control Prenatal',
    footerLabel: 'Control Prenatal',
    quickLabel: 'Control Prenatal',
    cardTitle: 'Control Prenatal',
    cardDescription:
      'Seguimiento completo de tu embarazo para asegurar el bienestar de ambos en cada trimestre.',
    badge: 'Trimestral',
    detailedTitle: 'Control Prenatal Humanizado',
    detailedDescription:
      'Acompañamos cada etapa de tu embarazo para asegurar tu bienestar físico y el de tu bebé. Realizamos los chequeos mensuales necesarios, monitoreando el crecimiento fetal y previniendo cualquier complicación. Nuestro objetivo es que vivas esta etapa con total tranquilidad, sintiéndote segura y respaldada hasta el día del parto.',
    alt: 'Control Prenatal',
    bookingValue: 'Control Prenatal',
    bookingLabel: 'Control Prenatal',
    icon: iconPrenatal,
    image: fotoPregnant,
  },
  {
    id: 'ecografias',
    href: '/servicios#ecografias',
    headerDesktopLabel: 'Ecografías Integrales',
    headerMobileLabel: 'Ecografías',
    footerLabel: 'Ecografías Integrales',
    quickLabel: 'Ecografías Integrales',
    cardTitle: 'Ecografías',
    cardDescription:
      'Estudios ecográficos detallados de alta resolución obstétricos y ginecológicos.',
    badge: 'Alta Definición',
    detailedTitle: 'Ecografías Integrales',
    detailedDescription:
      'Utilizamos tecnología de ultrasonido avanzado para obtener imágenes precisas de tu sistema reproductivo. Este estudio rápido y sin dolor nos permite evaluar la salud de tu útero y ovarios, detectar quistes o hacer seguimiento gestacional. Es una herramienta clave para darte un diagnóstico certero y mantener tu salud preventiva al día.',
    alt: 'Ecografía Integral',
    bookingValue: 'Ecografía Obstétrica',
    bookingLabel: 'Ecografías',
    icon: iconEco,
    image: fotoEco,
  },
  {
    id: 'ginecologia',
    href: '/servicios#ginecologia',
    headerDesktopLabel: 'Ginecología General',
    headerMobileLabel: 'Ginecología General',
    footerLabel: 'Ginecología General',
    quickLabel: 'Ginecología General',
    cardTitle: 'Ginecología General',
    cardDescription:
      'Chequeos rutinarios, Papanicolaou, citología y cuidado preventivo integral.',
    badge: 'Integral',
    detailedTitle: 'Ginecología General',
    detailedDescription:
      'Cuidamos tu salud reproductiva a través del chequeo anual preventivo, fundamental en cualquier etapa de tu vida. Realizamos evaluaciones físicas rutinarias, citologías (Papanicolaou) y despistaje de alteraciones para confirmar que todo esté en orden. Es el momento ideal para tratar infecciones, revisar síntomas atípicos y asegurarte de estar sana al 100%.',
    alt: 'Ginecología General',
    bookingValue: 'Ginecología General',
    bookingLabel: 'Ginecología General',
    icon: iconGineco,
    image: fotoUterus,
  },
  {
    id: 'planificacion',
    href: '/servicios#planificacion',
    headerDesktopLabel: 'Planificación Familiar',
    headerMobileLabel: 'Planificación Familiar',
    footerLabel: 'Planificación Familiar',
    quickLabel: 'Planificación Familiar',
    cardTitle: 'Planificación Familiar',
    cardDescription:
      'Asesoría médica especializada para elegir el método anticonceptivo que mejor se adapte a ti.',
    badge: 'Prevención',
    detailedTitle: 'Planificación Familiar',
    detailedDescription:
      'Te orientamos para que elijas el método anticonceptivo que mejor se adapte a tu cuerpo, rutina y planes a futuro. Evaluamos opciones como el DIU, pastillas o implantes, explicándote cómo funcionan y sus beneficios. Tú tienes el control total sobre tu fertilidad; nosotras te brindamos la guía médica para que decidas bien informada.',
    alt: 'Planificación Familiar',
    bookingValue: 'Planificación Familiar',
    bookingLabel: 'Planificación Familiar',
    icon: iconPlan,
    image: fotoContraceptives,
  },
  {
    id: 'control-obstetrico',
    href: '/servicios#control-obstetrico',
    headerDesktopLabel: 'Control Obstétrico',
    headerMobileLabel: 'Control Obstétrico',
    footerLabel: 'Control Obstétrico',
    quickLabel: 'Control Obstétrico',
    cardTitle: 'Control Obstétrico',
    cardDescription:
      'Atención especializada durante la gestación, el parto y el puerperio.',
    badge: 'Especializado',
    detailedTitle: 'Control Obstétrico',
    detailedDescription:
      'Nos encargamos del seguimiento clínico y la planificación médica integral durante tu gestación. Evaluamos tus laboratorios, ecos e historial para diseñar un plan de parto seguro y adaptado a ti. Estamos aquí para resolver tus dudas médicas, vigilar tu evolución y preparar tu cuerpo para dar a luz en las mejores condiciones.',
    alt: 'Control Obstétrico',
    bookingValue: 'Control Obstétrico',
    bookingLabel: 'Control Obstétrico',
    icon: iconObste,
    image: fotoObstetricia,
  },
  {
    id: 'salud-sexual',
    href: '/servicios#salud-sexual',
    headerDesktopLabel: 'Salud Sexual',
    headerMobileLabel: 'Salud Sexual',
    footerLabel: 'Salud Sexual y Prevención',
    quickLabel: 'Salud Sexual',
    cardTitle: 'Salud Sexual y Prevención',
    cardDescription:
      'Orientación, diagnóstico y tratamiento para una vida íntima segura y saludable.',
    badge: 'Cuidado',
    detailedTitle: 'Salud Sexual y Prevención',
    detailedDescription:
      'Te ofrecemos un espacio seguro, confidencial y sin juicios para hablar abiertamente sobre tu sexualidad. Resolvemos tus inquietudes sobre prevención de infecciones, higiene, placer y el funcionamiento de tu cuerpo. Queremos darte herramientas claras y actualizadas para que tomes decisiones libres, responsables y saludables sobre tu vida íntima.',
    alt: 'Salud Sexual',
    bookingValue: 'Salud Sexual',
    bookingLabel: 'Salud Sexual y Prevención',
    icon: iconSexual,
    image: fotoSexEducation,
  },
  {
    id: 'menopausia',
    href: '/servicios#menopausia',
    headerDesktopLabel: 'Bienestar en la Menopausia',
    headerMobileLabel: 'Menopausia',
    footerLabel: 'Menopausia',
    quickLabel: 'Menopausia',
    cardTitle: 'Bienestar en la Menopausia',
    cardDescription:
      'Manejo integral de los síntomas para una mejor calidad de vida y bienestar hormonal.',
    badge: 'Plenitud',
    detailedTitle: 'Bienestar en la Menopausia',
    detailedDescription:
      'Te acompañamos en esta transición natural para que la vivas con vitalidad y sin molestias que limiten tu día a día. Evaluamos tus síntomas físicos y cambios hormonales para ofrecerte tratamientos efectivos y recomendaciones de estilo de vida. Enfocamos nuestra atención en proteger tu bienestar a largo plazo para que disfrutes plenamente esta etapa.',
    alt: 'Menopausia',
    bookingValue: 'Menopausia',
    bookingLabel: 'Menopausia',
    icon: iconMeno,
    image: fotoMenopause,
  },
];

export const BOOKING_REASONS = [
  ...SERVICES.map(({ bookingValue, bookingLabel }) => ({
    value: bookingValue,
    label: bookingLabel,
  })),
  { value: 'Otro', label: 'Otro' },
];
