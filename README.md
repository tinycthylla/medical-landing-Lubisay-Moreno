# Dra. Lubisay Moreno - Landing Page Médica

Landing page moderna y profesional para la consulta de la Dra. Lubisay Moreno, especializada en ginecología y obstetricia. Una plataforma web diseñada para ofrecer información médica, facilitar la agenda de citas y mejorar la experiencia del paciente.

## 🚀 Características

- **Diseño moderno y responsive** - Adaptado a todos los dispositivos
- **Navegación intuitiva** - Menú desplegable y acordeón para servicios
- **Paleta de colores médicos** - Usando Material Design 3
- **Performance optimizada** - Construido con Vite + React
- **Tailwind CSS** - Estilización rápida y consistente
- **SEO amigable** - Estructura semántica y optimizada
- **Accesible** - Cumple con estándares WCAG

## 🛠️ Tecnologías

- **Frontend:** React 19 + Vite
- **Estilos:** Tailwind CSS + Material Design 3
- **Enrutamiento:** React Router DOM
- **Linting:** Oxlint
- **Build Tool:** Vite
- **PostCSS:** Autoprefixer

## 📁 Estructura del Proyecto

```
medical-landing/
├── public/           # Archivos estáticos
├── src/
│   ├── assets/       # Imágenes y recursos
│   ├── components/   # Componentes React
│   │   ├── common/   # Componentes reutilizables
│   │   ├── layout/   # Componentes de layout (Header, Footer, etc.)
│   │   └── specific/ # Componentes específicos de secciones
│   ├── hooks/        # Custom hooks
│   ├── pages/        # Páginas/views
│   ├── App.jsx       # Componente principal
│   ├── App.css       # Estilos globales
│   ├── index.css     # Estilos base
│   └── main.jsx      # Punto de entrada
├── tailwind.config.js # Configuración de Tailwind
├── vite.config.js    # Configuración de Vite
└── package.json      # Dependencias y scripts
```

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tinycthylla/medical-landing-Lubisay-Moreno.git
   cd medical-landing
   ```

2. Instalar dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

3. Ejecutar en modo desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. Abrir en navegador:
   ```
   http://localhost:5173
   ```

### Comandos Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Construye para producción
npm run lint     # Ejecuta linter
npm run preview  # Vista previa de producción
```

## 🎨 Diseño y Estilos

### Paleta de Colores (Material Design 3)
- **Primary:** Azul médico (#2563EB)
- **Surface:** Fondo principal (#FFFFFF)
- **Surface Variant:** Fondo secundario (#F1F5F9)
- **On Surface:** Texto principal (#1E293B)
- **On Surface Variant:** Texto secundario (#64748B)

### Tipografía
- **Headline:** Inter Bold (Títulos)
- **Body:** Inter Regular (Texto general)
- **Label:** Inter Medium (Botones y etiquetas)

### Componentes Implementados

#### Header
- Menú responsive con diseño mobile-first
- Dropdown de servicios para desktop
- Acordeón de servicios para mobile
- Navegación clara y accesible
- Botón de "Agendar cita" prominente

## 📱 Secciones Planeadas

1. **Hero Section** - Presentación principal con CTA
2. **Servicios** - Detalle de especialidades médicas
3. **Acerca de mí** - Perfil profesional
4. **Testimonios** - Experiencias de pacientes
5. **FAQ** - Preguntas frecuentes
6. **Blog** - Artículos médicos educativos
7. **Contacto** - Formulario y ubicación
8. **Footer** - Información legal y contacto

## 🔧 Configuración Personalizada

### Tailwind CSS
El proyecto usa Tailwind CSS v4 con configuración personalizada en `tailwind.config.js`. Los colores y tipografías están basados en Material Design 3.

### Variables CSS
Las variables CSS personalizadas están definidas en `src/index.css` para mantener consistencia en toda la aplicación.

## 📝 Scripts de Desarrollo

### Linting
```bash
npm run lint
```
Usa Oxlint para mantener la calidad del código.

### Build para Producción
```bash
npm run build
```
Genera archivos optimizados en la carpeta `dist/`.

### Preview de Producción
```bash
npm run preview
```
Sirve la versión de producción localmente para testing.

## 🌐 Deployment

El proyecto está listo para deployment en:

- **Vercel:** `vercel deploy`
- **Netlify:** `netlify deploy`
- **GitHub Pages:** `npm run build && gh-pages -d dist`
- **Servidor estático:** Cualquier servidor que sirva archivos estáticos

## 🤝 Contribuir

1. Fork el repositorio
2. Crear una rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo licencia MIT. Ver `LICENSE` para más detalles.

## 👩‍⚕️ Sobre la Dra. Lubisay Moreno

Especialista en ginecología y obstetricia con enfoque en:
- Control prenatal y obstetricia
- Ecografías ginecológicas y obstétricas
- Planificación familiar
- Bienestar en la menopausia
- Ginecología general

## 📞 Contacto

- **Email:** contacto@dralubisaymoreno.com
- **Teléfono:** +XX XXX XXX XXXX
- **Ubicación:** Ciudad, País
- **Horarios:** Lunes a Viernes 9:00-18:00

---

*Desarrollado con ❤️ para mejorar la experiencia digital de los pacientes.*