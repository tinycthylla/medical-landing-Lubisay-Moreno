import { useState } from 'react';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    cedula: '',
    motivo: '',
    sede: '',
    fecha: ''
  });
  
  const [dateError, setDateError] = useState('');

  // Configuración de las sedes y los días permitidos (0=Dom, 1=Lun, 2=Mar, 3=Mié, 4=Jue, 5=Vie, 6=Sáb)
  const sedesInfo = {
    nina_madre: { 
      name: "Asociación Civil Niña Madre", 
      allowedDays: [1], // Lunes
      errorMsg: "Esta sede solo atiende los Lunes (9:00 am - 4:00 pm)." 
    },
    dr: { 
      name: "Servicios Médicos DR", 
      allowedDays: [5, 6], // Viernes y Sábado
      errorMsg: "Esta sede solo atiende Viernes (2:00 pm) y Sábados." 
    },
    impremer: { 
      name: "Impremer Salud", 
      allowedDays: [4], // Jueves
      errorMsg: "Esta sede solo atiende los Jueves (1:00 pm)." 
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Si cambian de sede, limpiamos la fecha para obligarlos a elegir una nueva válida
    if (name === 'sede') {
      setFormData({ ...formData, [name]: value, fecha: '' });
      setDateError('');
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (e) => {
    const dateVal = e.target.value;
    
    if (!formData.sede) {
      setDateError('Por favor selecciona una sede primero para ver los días disponibles.');
      setFormData({ ...formData, fecha: '' });
      return;
    }

    // Extraemos el día exacto de la semana evitando problemas de zona horaria
    const [year, month, day] = dateVal.split('-');
    const selectedDate = new Date(year, month - 1, day);
    const dayOfWeek = selectedDate.getDay();

    // Validamos si el día seleccionado está en el arreglo de días permitidos para esa sede
    if (!sedesInfo[formData.sede].allowedDays.includes(dayOfWeek)) {
      setDateError(sedesInfo[formData.sede].errorMsg);
      setFormData({ ...formData, fecha: '' });
    } else {
      setDateError('');
      setFormData({ ...formData, fecha: dateVal });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const sedeName = sedesInfo[formData.sede].name;
    
    // Armamos el mensaje estructurado para WhatsApp
    const text = `Hola Dra. Lubisay, quiero agendar una cita.\n\n*Nombre:* ${formData.nombre}\n*Edad:* ${formData.edad}\n*Cédula:* ${formData.cedula}\n*Sede:* ${sedeName}\n*Motivo:* ${formData.motivo}\n*Fecha deseada:* ${formData.fecha}`;
    
    // El número de la doctora (584129360494)
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/584129360494?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
    onClose(); // Cerramos el modal después de enviar
  };

  // Si no está abierto, no renderizamos nada
  if (!isOpen) return null;

  // Obtenemos la fecha de hoy para el input (formato YYYY-MM-DD)
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden relative max-h-[90vh] overflow-y-auto">
        
        {/* Header con Imagen */}
        <div className="relative h-32 md:h-40 w-full">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuARqBIHRsY3_5WPSvnJLCGNtG7YsGxC6Qa3KdkaD-6pkjKFTlB9JJtKtJQPPyUg-QnelNJO2UlnC4Z2vBNlhz9eu3O4l6CkxTzGjZxHEULcZKBjYCFpp0f1iRzGLYb8cvVH-Lcqt7xzPblXSKn-6V87IWO_O_B-VL635n6sq3LwbJ-KpprLEVBzp_0mnctW3zxh5wwGWIV1d1pw9yOnrrPAen7SqdVgeDn8_gyZDDc7br7BI0hXklEu"
            alt="Consultorio" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/40 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Formulario */}
        <div className="px-8 pb-8 pt-2">
          <div className="text-center mb-6">
            <h1 className="font-headline-sm text-2xl font-bold text-on-background">Agendar Cita</h1>
            <p className="text-xs text-on-surface-variant uppercase tracking-widest mt-1">Dra. Lubisay Moreno</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Nombre y Apellido */}
              <div className="flex flex-col">
                <label className="text-xs text-on-surface-variant mb-1 font-semibold">Nombre y Apellido</label>
                <input 
                  type="text" name="nombre" required placeholder="Ej: María Pérez"
                  value={formData.nombre} onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2 bg-transparent text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Edad */}
              <div className="flex flex-col">
                <label className="text-xs text-on-surface-variant mb-1 font-semibold">Edad</label>
                <input 
                  type="number" name="edad" required placeholder="Ej: 28" min="10" max="99"
                  value={formData.edad} onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2 bg-transparent text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Cédula */}
            <div className="flex flex-col">
              <label className="text-xs text-on-surface-variant mb-1 font-semibold">Cédula (ID)</label>
              <input 
                type="text" name="cedula" required placeholder="V-12345678"
                value={formData.cedula} onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 bg-transparent text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Motivo de Consulta */}
            <div className="flex flex-col">
              <label className="text-xs text-on-surface-variant mb-1 font-semibold">Motivo de Consulta</label>
              <select 
                name="motivo" required
                value={formData.motivo} onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 bg-transparent text-sm focus:outline-none focus:border-primary transition-colors"
              >
                <option value="" disabled>Seleccionar motivo...</option>
                <option value="Control Prenatal">Control Prenatal</option>
                <option value="Ecografía Obstétrica">Ecografías</option>
                <option value="Ginecología General">Ginecología General</option>
                <option value="Planificación Familiar">Planificación Familiar</option>
                <option value="Control Obstétrico">Control Obstétrico</option>
                <option value="Salud Sexual">Salud Sexual y Prevención</option>
                <option value="Menopausia">Menopausia</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            {/* Sede */}
            <div className="flex flex-col">
              <label className="text-xs text-on-surface-variant mb-1 font-semibold">Sede / Ubicación</label>
              <select 
                name="sede" required
                value={formData.sede} onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 bg-transparent text-sm focus:outline-none focus:border-primary transition-colors"
              >
                <option value="" disabled>Seleccionar sede...</option>
                <option value="nina_madre">Asociación Civil Niña Madre (Lunes)</option>
                <option value="dr">Servicios Médicos DR (Viernes y Sábados)</option>
                <option value="impremer">Impremer Salud (Jueves)</option>
              </select>
            </div>

            {/* Fecha Deseada */}
            <div className="flex flex-col">
              <label className="text-xs text-on-surface-variant mb-1 font-semibold">Fecha deseada</label>
              <input 
                type="date" name="fecha" required min={today}
                value={formData.fecha} onChange={handleDateChange} disabled={!formData.sede}
                className="w-full border-b border-gray-300 py-2 bg-transparent text-sm focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
              />
              {dateError && (
                <p className="text-red-500 text-xs mt-2 font-medium bg-red-50 p-2 rounded">{dateError}</p>
              )}
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-whatsapp text-white font-bold text-sm py-4 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-[0.98] mt-6 shadow-md"
            >
              <span>Enviar por WhatsApp</span>
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}