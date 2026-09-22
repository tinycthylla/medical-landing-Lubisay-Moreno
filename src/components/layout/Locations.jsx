export default function Locations() {
  const clinics = [
    {
      name: "Asociación Civil Niña Madre",
      address: "Vereda 92, local 9, parroquia Coche, municipio Libertador, Caracas.",
      phone: "(0212) 6812498",
      whatsapp: null,
      instagram: "NIÑAMADRE",
      // Aquí pegarás el link directo de Google Maps
      mapLink: "https://maps.google.com/?q=Asociación+Civil+Niña+Madre+Coche+Caracas"
    },
    {
      name: "Servicios Médicos DR",
      address: "Av. Francisco Salias (Perimetral), al lado del Colegio Siso Martínez, entrada edf. La Cuadra.",
      phone: "0212-3731345 / 0212-3723402",
      whatsapp: "0414-6277168",
      instagram: "Servicios Médicos DR",
      mapLink: "https://maps.google.com/?q=Colegio+Siso+Martinez+San+Antonio+de+los+Altos"
    },
    {
      name: "Impremer Salud",
      address: "Centro Empresarial Coliseo, piso 1, oficina 38-39, San Antonio de los Altos.",
      phone: "04122289555",
      whatsapp: "04122289555",
      instagram: "impremersalud",
      mapLink: "https://maps.google.com/?q=Centro+Empresarial+Coliseo+San+Antonio+de+los+Altos"
    }
  ];

  return (
    <section className="w-full px-6 py-16 bg-surface md:py-24">
      <div className="md:max-w-[1200px] md:mx-auto">
        
        {/* Encabezado */}
        <div className="flex flex-col md:items-center md:text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline-sm font-bold text-on-background tracking-tight">
            Ubicación y Contacto
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant mt-3 max-w-2xl">
            Visítanos en nuestras instalaciones diseñadas para tu confort.
          </p>
        </div>

        {/* Grid de Sedes (1 col móvil, 3 cols escritorio) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {clinics.map((clinic, index) => (
            <article 
              key={index} 
              className="flex flex-col p-8 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300 h-full"
            >
              
              {/* Título de la Clínica */}
              <h3 className="font-headline-sm text-xl font-bold text-on-background mb-6 pb-4 border-b border-gray-100">
                {clinic.name}
              </h3>

              {/* Lista de Detalles */}
              <div className="flex flex-col gap-5 mb-8 flex-grow">
                
                {/* Dirección */}
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-[24px] shrink-0">location_on</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-on-background mb-1">Dirección</span>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {clinic.address}
                    </p>
                  </div>
                </div>

                {/* Teléfonos */}
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-[24px] shrink-0">call</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-on-background mb-1">Teléfonos</span>
                    <a href={`tel:${clinic.phone.replace(/\D/g,'')}`} className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                      {clinic.phone}
                    </a>
                    {clinic.whatsapp && (
                      <a href={`https://wa.me/58${clinic.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer" className="text-sm text-on-surface-variant hover:text-whatsapp transition-colors mt-1">
                        {clinic.whatsapp} (WhatsApp)
                      </a>
                    )}
                  </div>
                </div>

                {/* Redes Sociales */}
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-[24px] shrink-0">photo_camera</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-on-background mb-1">Redes Sociales</span>
                    <a href={`https://instagram.com/${clinic.instagram.replace('@', '').replace(/ /g, '')}`} target="_blank" rel="noopener noreferrer" className="text-sm text-on-surface-variant hover:text-pink-300 transition-colors">
                      @{clinic.instagram.replace('@', '')}
                    </a>
                  </div>
                </div>

              </div>

              {/* Botón de Mapa */}
              <a 
                href={clinic.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full py-3.5 rounded-full bg-primary-container text-white font-label-md text-sm hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Cómo llegar</span>
                <span className="material-symbols-outlined text-[18px]">directions</span>
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}