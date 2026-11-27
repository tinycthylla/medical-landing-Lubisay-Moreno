export const DOCTOR_INFO = {
  name: 'Dra. Lubisay Moreno',
  specialty: 'Ginecología y Obstetricia',
  credentials: 'M.P.P.S. 128037 | C.M.D.M.C. 37329',
  phoneDisplay: '+58 412 936 0494',
  phoneHref: 'tel:+584129360494',
  whatsappNumber: '584129360494',
  whatsappUrl: 'https://wa.me/584129360494',
  email: 'morenolubisay@gmail.com',
  emailHref: 'mailto:morenolubisay@gmail.com',
};

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/dra.lubisaymoreno',
  tiktok: 'https://www.tiktok.com/@lubimorenoo',
  facebook: 'https://www.facebook.com/profile.php?id=61593076585177',
  whatsapp: DOCTOR_INFO.whatsappUrl,
};

export const CLINICS = [
  {
    id: 'nina_madre',
    name: 'Asociación Civil Niña Madre',
    shortName: 'Niña Madre',
    footerName: 'Niña Madre (Caracas)',
    ctaLocationLabel: 'A.C. Niña Madre · Coche, Caracas',
    shortDays: 'Lunes',
    schedule: 'Lunes · 9:00 am a 4:00 pm',
    ctaScheduleDay: 'Lunes:',
    ctaScheduleHours: '9:00 AM – 4:00 PM (Niña Madre)',
    allowedDays: [1], // 0=Dom, 1=Lun, 2=Mar, 3=Mié, 4=Jue, 5=Vie, 6=Sáb
    address: 'Vereda 92, local 9, parroquia Coche, municipio Libertador, Caracas.',
    phone: '(0212) 6812498',
    whatsapp: null,
    instagram: 'ninamadre',
    mapLink: 'https://maps.app.goo.gl/tT9hDW28kp9aR4Nx8',
  },
  {
    id: 'dr',
    name: 'Servicios Médicos DR',
    shortName: 'Médicos DR',
    footerName: 'Servicios Médicos DR (San Antonio)',
    ctaLocationLabel: 'Servicios Médicos DR · Perimetral, San Antonio',
    shortDays: 'Vie y Sáb',
    schedule: 'Viernes 2:00 pm · Sábados previa cita',
    ctaScheduleDay: 'Vie 2:00 PM y Sáb:',
    ctaScheduleHours: 'previa cita (Médicos DR)',
    allowedDays: [5, 6],
    address: 'Av. Francisco Salias (Perimetral), al lado del Colegio Siso Martínez, entrada edf. La Cuadra.',
    phone: '0212-3731345 / 0212-3723402',
    whatsapp: '0414-6277168',
    instagram: 'servimedicos_dr',
    mapLink: 'https://maps.app.goo.gl/3cn21aB2vvQgNEha9',
  },
  {
    id: 'impremer',
    name: 'Impremer Salud',
    shortName: 'Impremer',
    footerName: 'Impremer Salud (San Antonio)',
    ctaLocationLabel: 'Impremer Salud · C.E. Coliseo, San Antonio',
    shortDays: 'Jueves',
    schedule: 'Jueves · 1:00 pm',
    ctaScheduleDay: 'Jueves:',
    ctaScheduleHours: '1:00 PM (Impremer Salud)',
    allowedDays: [4],
    address: 'Centro Empresarial Coliseo, piso 1, oficina 38-39, San Antonio de los Altos.',
    phone: '04122289555',
    whatsapp: null,
    instagram: 'impremersalud',
    mapLink: 'https://maps.app.goo.gl/3DKzT48KWtroA9nw5',
  },
];

export const CLINICS_BY_ID = Object.fromEntries(
  CLINICS.map((clinic) => [clinic.id, clinic])
);

export const CLINICS_BY_SCHEDULE = [
  CLINICS_BY_ID.nina_madre,
  CLINICS_BY_ID.impremer,
  CLINICS_BY_ID.dr,
];
