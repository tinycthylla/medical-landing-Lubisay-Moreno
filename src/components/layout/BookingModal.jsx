import { useState, useEffect } from 'react';
import logoFullColor from '../../assets/icons/logofullcolor.svg';

const SEDES_INFO = {
  nina_madre: {
    name: 'Asociación Civil Niña Madre',
    shortName: 'Niña Madre',
    shortDays: 'Lunes',
    schedule: 'Lunes · 9:00 am a 4:00 pm',
    allowedDays: [1], // 0=Dom, 1=Lun, 2=Mar, 3=Mié, 4=Jue, 5=Vie, 6=Sáb
  },
  dr: {
    name: 'Servicios Médicos DR',
    shortName: 'Médicos DR',
    shortDays: 'Vie y Sáb',
    schedule: 'Viernes 2:00 pm · Sábados previa cita',
    allowedDays: [5, 6],
  },
  impremer: {
    name: 'Impremer Salud',
    shortName: 'Impremer',
    shortDays: 'Jueves',
    schedule: 'Jueves · 1:00 pm',
    allowedDays: [4],
  },
};

const MOTIVOS = [
  { value: 'Control Prenatal', label: 'Control Prenatal' },
  { value: 'Ecografía Obstétrica', label: 'Ecografías' },
  { value: 'Ginecología General', label: 'Ginecología General' },
  { value: 'Planificación Familiar', label: 'Planificación Familiar' },
  { value: 'Control Obstétrico', label: 'Control Obstétrico' },
  { value: 'Salud Sexual', label: 'Salud Sexual y Prevención' },
  { value: 'Menopausia', label: 'Menopausia' },
  { value: 'Otro', label: 'Otro' },
];

const MONTHS_ES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
];

const WEEKDAYS_SHORT = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do'];
const WEEKDAYS_FULL = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

function getTomorrowStart() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
}

function getFirstAvailableMonth(sedeKey) {
  const allowed = SEDES_INFO[sedeKey].allowedDays;
  const tomorrow = getTomorrowStart();
  const year = tomorrow.getFullYear();
  const month = tomorrow.getMonth();
  const lastDay = new Date(year, month + 1, 0).getDate();

  for (let d = tomorrow.getDate(); d <= lastDay; d++) {
    if (allowed.includes(new Date(year, month, d).getDay())) {
      return new Date(year, month, 1);
    }
  }
  return new Date(year, month + 1, 1);
}

function toDateKey(year, month, day) {
  const m = String(month + 1).padStart(2, '0');
  const d = String(day).padStart(2, '0');
  return `${year}-${m}-${d}`;
}

function formatReadableDate(dateKey) {
  if (!dateKey) return '';
  const [y, m, d] = dateKey.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return `${WEEKDAYS_FULL[date.getDay()]} ${d} de ${MONTHS_ES[m - 1].toLowerCase()}, ${y}`;
}

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    cedula: '',
    motivo: '',
    sede: '',
    fecha: '',
  });

  const [mobileStep, setMobileStep] = useState(1);
  const [formError, setFormError] = useState('');
  const [viewDate, setViewDate] = useState(() => {
    const t = getTomorrowStart();
    return new Date(t.getFullYear(), t.getMonth(), 1);
  });

  // Bloquea scroll del fondo y permite cerrar con Escape
  useEffect(() => {
    if (!isOpen) return;

    setMobileStep(1);
    setFormError('');
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const tomorrowStart = getTomorrowStart();
  const minMonthStart = new Date(tomorrowStart.getFullYear(), tomorrowStart.getMonth(), 1);

  const viewYear = viewDate.getFullYear();
  const viewMonth = viewDate.getMonth();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  // Lunes = 0 ... Domingo = 6
  const startOffset = (new Date(viewYear, viewMonth, 1).getDay() + 6) % 7;

  const canGoPrev =
    viewYear > minMonthStart.getFullYear() ||
    (viewYear === minMonthStart.getFullYear() && viewMonth > minMonthStart.getMonth());

  const handleSelectSede = (sedeKey) => {
    setFormData((prev) => ({ ...prev, sede: sedeKey, fecha: '' }));
    setFormError('');
    setViewDate(getFirstAvailableMonth(sedeKey));
  };

  const handleSelectDay = (day) => {
    const key = toDateKey(viewYear, viewMonth, day);
    setFormData((prev) => ({ ...prev, fecha: key }));
    setFormError('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError('');
  };

  const handlePrevMonth = () => {
    if (!canGoPrev) return;
    setViewDate(new Date(viewYear, viewMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewYear, viewMonth + 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.sede || !formData.fecha) {
      setFormError('Selecciona una sede y una fecha disponible en el calendario.');
      setMobileStep(1);
      return;
    }

    const sedeName = SEDES_INFO[formData.sede].name;
    const readableDate = formatReadableDate(formData.fecha);

    const text = `Hola Dra. Lubisay, quiero agendar una cita.\n\n*Nombre:* ${formData.nombre}\n*Edad:* ${formData.edad}\n*Cédula:* ${formData.cedula}\n*Sede:* ${sedeName}\n*Motivo:* ${formData.motivo}\n*Fecha deseada:* ${readableDate}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/584129360494?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const selectedSede = formData.sede ? SEDES_INFO[formData.sede] : null;
  const inputBaseClass =
    'w-full rounded-xl bg-brand-pink-light/40 border border-brand-purple/10 px-3.5 py-2.5 text-sm font-body-md text-brand-purple placeholder:text-brand-grape/50 focus:outline-none focus:border-brand-pink focus:bg-white transition-all';

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-brand-purple/50 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[420px] md:max-w-[780px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-brand-purple/10"
      >
        <div className="bg-brand-pink-light/40 px-4 py-3 md:px-7 md:py-3.5 grid grid-cols-[1fr_auto_1fr] items-center gap-2 border-b border-brand-purple/10">
          {/* En paso 2 mobile el logo cede espacio a la flecha de volver */}
          <div className="flex items-center justify-start">
            {mobileStep === 2 && (
              <button
                type="button"
                onClick={() => setMobileStep(1)}
                aria-label="Volver al calendario"
                className="md:hidden h-8 w-8 rounded-full bg-white text-brand-purple flex items-center justify-center shadow-sm hover:bg-brand-purple hover:text-white transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              </button>
            )}

            <img
              src={logoFullColor}
              alt="Dra. Lubisay Moreno - Ginecólogo & Obstetra"
              className={`h-9 sm:h-10 md:h-12 w-auto object-contain ${
                mobileStep === 2 ? 'hidden md:block' : 'block'
              }`}
            />
          </div>

          <div className="text-center">
            <h2 className="font-body-md text-base sm:text-lg md:text-xl font-bold text-brand-purple leading-tight whitespace-nowrap">
              Agendar Cita
            </h2>
            <p className="md:hidden font-body-md text-[10px] font-semibold text-brand-pink mt-0.5">
              Paso {mobileStep} de 2
            </p>
          </div>

          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar modal"
              className="h-8 w-8 rounded-full bg-white text-brand-purple flex items-center justify-center shadow-sm hover:bg-brand-purple hover:text-white transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-4 sm:p-5 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-6 items-stretch">
            <div className={`md:col-span-6 flex flex-col justify-between ${mobileStep === 1 ? 'flex' : 'hidden md:flex'}`}>
              <div>
                <label className="block font-label-md text-xs font-semibold text-brand-purple mb-2">
                  1. Selecciona la sede
                </label>

                <div className="grid grid-cols-3 gap-2 mb-3">
                  {Object.entries(SEDES_INFO).map(([key, info]) => {
                    const isSelected = formData.sede === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => handleSelectSede(key)}
                        className={`px-2 py-2 rounded-2xl text-center transition-all border cursor-pointer ${
                          isSelected
                            ? 'bg-brand-purple text-white border-brand-purple shadow-md'
                            : 'bg-brand-pink-light/60 text-brand-purple border-brand-purple/10 hover:border-brand-pink hover:bg-brand-pink-light'
                        }`}
                      >
                        <span className="block font-label-md text-xs font-semibold leading-tight">
                          {info.shortName}
                        </span>
                        <span
                          className={`block text-[10px] mt-0.5 font-body-md ${
                            isSelected ? 'text-brand-pink-light/90' : 'text-brand-grape'
                          }`}
                        >
                          {info.shortDays}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mb-3 px-3 py-1.5 rounded-xl bg-brand-pink-light/50 border border-brand-purple/10 flex items-center gap-2 min-h-[30px]">
                  <span className="material-symbols-outlined text-[15px] text-brand-pink shrink-0">
                    {selectedSede ? 'schedule' : 'touch_app'}
                  </span>
                  <p className="font-body-md text-[11px] text-brand-grape leading-tight">
                    {selectedSede
                      ? selectedSede.schedule
                      : 'Elige una sede para habilitar los días disponibles'}
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-brand-purple/10 p-3 shadow-sm">
                  <div className="flex items-center justify-between mb-2.5">
                    <button
                      type="button"
                      onClick={handlePrevMonth}
                      disabled={!canGoPrev}
                      aria-label="Mes anterior"
                      className="h-7 w-7 rounded-full flex items-center justify-center text-brand-purple hover:bg-brand-pink-light disabled:opacity-25 disabled:cursor-not-allowed transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                    </button>

                    <span className="px-3.5 py-1 rounded-full bg-brand-purple text-white font-label-md text-xs font-semibold tracking-wide">
                      {MONTHS_ES[viewMonth]} {viewYear}
                    </span>

                    <button
                      type="button"
                      onClick={handleNextMonth}
                      aria-label="Mes siguiente"
                      className="h-7 w-7 rounded-full flex items-center justify-center text-brand-purple hover:bg-brand-pink-light transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-1 mb-1">
                    {WEEKDAYS_SHORT.map((day) => (
                      <div
                        key={day}
                        className="text-center font-label-md text-[11px] font-semibold text-brand-grape/70 py-0.5"
                      >
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: startOffset }).map((_, idx) => (
                      <div key={`empty-${idx}`} className="h-8" />
                    ))}

                    {Array.from({ length: daysInMonth }, (_, i) => {
                      const dayNum = i + 1;
                      const cellDate = new Date(viewYear, viewMonth, dayNum);
                      const dateKey = toDateKey(viewYear, viewMonth, dayNum);
                      const isFuture = cellDate >= tomorrowStart;
                      const isAllowedDay = selectedSede
                        ? selectedSede.allowedDays.includes(cellDate.getDay())
                        : false;
                      const isAvailable = Boolean(selectedSede) && isFuture && isAllowedDay;
                      const isSelected = formData.fecha === dateKey;

                      return (
                        <button
                          key={dateKey}
                          type="button"
                          disabled={!isAvailable}
                          onClick={() => handleSelectDay(dayNum)}
                          className={`h-8 w-full rounded-xl font-body-md text-xs flex items-center justify-center transition-all ${
                            isSelected
                              ? 'bg-brand-purple text-white font-bold shadow-md scale-105 cursor-pointer'
                              : isAvailable
                              ? 'bg-brand-pink-light text-brand-purple font-semibold hover:bg-brand-pink hover:text-white cursor-pointer'
                              : 'text-gray-300 cursor-not-allowed'
                          }`}
                        >
                          {dayNum}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <button
                type="button"
                disabled={!formData.sede || !formData.fecha}
                onClick={() => setMobileStep(2)}
                className="md:hidden mt-3.5 w-full py-3 rounded-full bg-brand-purple text-white font-label-md font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>Continuar con tus datos</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>

            <div className={`md:col-span-6 flex flex-col justify-between ${mobileStep === 2 ? 'flex' : 'hidden md:flex'}`}>
              <div className="space-y-3">
                <label className="hidden md:block font-label-md text-xs font-semibold text-brand-purple">
                  2. Completa tus datos
                </label>

                <div className="rounded-2xl bg-brand-pink-light/60 border border-brand-purple/10 px-3.5 py-2.5 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="font-label-md text-[11px] font-semibold text-brand-purple truncate">
                      {selectedSede ? selectedSede.name : 'Sede sin seleccionar'}
                    </p>
                    <p className="font-body-md text-xs text-brand-grape truncate">
                      {formData.fecha
                        ? formatReadableDate(formData.fecha)
                        : 'Elige una fecha en el calendario'}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileStep(1)}
                    className="md:hidden shrink-0 text-[11px] font-label-md font-semibold text-brand-pink underline cursor-pointer"
                  >
                    Cambiar
                  </button>
                </div>

                <div>
                  <label className="block font-label-md text-xs font-semibold text-brand-grape mb-1">
                    Nombre y Apellido
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    placeholder="Ej: María Pérez"
                    value={formData.nombre}
                    onChange={handleChange}
                    className={inputBaseClass}
                  />
                </div>

                <div className="grid grid-cols-12 gap-2.5">
                  <div className="col-span-8">
                    <label className="block font-label-md text-xs font-semibold text-brand-grape mb-1">
                      Cédula (ID)
                    </label>
                    <input
                      type="text"
                      name="cedula"
                      required
                      placeholder="V-12345678"
                      value={formData.cedula}
                      onChange={handleChange}
                      className={inputBaseClass}
                    />
                  </div>

                  <div className="col-span-4">
                    <label className="block font-label-md text-xs font-semibold text-brand-grape mb-1">
                      Edad
                    </label>
                    <input
                      type="number"
                      name="edad"
                      required
                      placeholder="28"
                      min="10"
                      max="99"
                      value={formData.edad}
                      onChange={handleChange}
                      className={inputBaseClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-label-md text-xs font-semibold text-brand-grape mb-1">
                    Motivo de Consulta
                  </label>
                  <div className="relative">
                    <select
                      name="motivo"
                      required
                      value={formData.motivo}
                      onChange={handleChange}
                      className={`${inputBaseClass} appearance-none pr-9 cursor-pointer`}
                    >
                      <option value="" disabled>
                        Seleccionar motivo...
                      </option>
                      {MOTIVOS.map((m) => (
                        <option key={m.value} value={m.value}>
                          {m.label}
                        </option>
                      ))}
                    </select>
                    <span className="material-symbols-outlined text-[18px] text-brand-grape pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                      expand_more
                    </span>
                  </div>
                </div>

                {formError && (
                  <p className="text-red-600 text-xs font-body-md bg-red-50 border border-red-200 px-3 py-2 rounded-xl">
                    {formError}
                  </p>
                )}
              </div>

              <div className="mt-4 pt-1">
                <p className="text-[11px] font-body-md text-brand-grape text-center mb-2">
                  Coordinarás la hora exacta con la Dra. por WhatsApp
                </p>
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-brand-purple text-white font-label-md font-semibold text-sm flex items-center justify-center gap-2 hover:bg-brand-pink transition-colors active:scale-[0.98] shadow-md cursor-pointer"
                >
                  <span>Enviar por WhatsApp</span>
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}