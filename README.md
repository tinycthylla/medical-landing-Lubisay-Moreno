# Dra. Lubisay Moreno — Sitio Web y Blog Médico

Aplicación web y blog educativo de la **Dra. Lubisay Moreno**, especialista en Ginecología y Obstetricia. Presenta sus servicios médicos, perfil profesional, testimonios, preguntas frecuentes, sedes de consulta, un modal interactivo de agendamiento vía WhatsApp y un blog clínico gestionado con Sanity CMS.

## Stack Tecnológico

- **React** `19.2` (`react`, `react-dom`)
- **Vite** `8.2` (`@vitejs/plugin-react` `6.1`)
- **React Router DOM** `7.18`
- **Tailwind CSS** `4.3` (`@tailwindcss/postcss`, `postcss` `8.5`, con tokens de marca en `tailwind.config.js`)
- **Sanity CMS** (`@sanity/client` `8.15`, `@sanity/image-url` `2.1`, `@portabletext/react` `8.0`)
- **Oxlint** `1.79` (configurado en `.oxlintrc.json` con plugins `react` y `oxc`)
- **Tipografía e iconos**: `Poppins` y `Material Symbols Outlined` (Google Fonts), más la fuente local `Carena` (`src/assets/fonts/Carena-Regular.otf`)

## Funcionalidades Principales

- **Rutas de la aplicación** (`src/App.jsx`):
  - `/` (`Home`): sección hero, resumen de especialidades, carrusel de testimonios, preguntas frecuentes, sedes y banner CTA.
  - `/acerca` (`About`): perfil de la especialista, estadísticas con contadores animados (`AnimatedNumber`), sección de filosofía, testimonios y CTA detallado.
  - `/servicios` (`Services`): desglose de la consulta ginecológica integral, accesos rápidos y descripción detallada de los 7 servicios con navegación por `#hash`.
  - `/blog` (`Blog`): listado dinámico desde Sanity con búsqueda en tiempo real (insensible a tildes), filtro automático por categorías y paginación incremental.
  - `/blog/:slug` (`BlogPost`): artículo completo con Portable Text, índice interactivo de encabezados `H2` (TOC), barra para compartir y copiar enlace, tarjeta editorial, artículos recientes, actualización dinámica de meta tags (Open Graph, Twitter, `canonical`) y datos estructurados JSON-LD (`BlogPosting` y `BreadcrumbList`).
  - `/privacidad` (`PrivacyPolicy`): aviso de privacidad, descargo de responsabilidad médica y contacto.
- **Agendamiento de citas (`BookingModal`)**: modal responsive (2 pasos en móvil y 2 columnas en escritorio) con selección de sede, calendario filtrado según los días de atención de cada consultorio y envío directo del resumen prellenado hacia WhatsApp, sin almacenamiento en base de datos propia.
- **Datos e iconos centralizados**: contacto, credenciales, sedes, horarios, servicios y SVGs compartidos consumidos desde una única fuente de verdad.
- **Animaciones y navegación**: aparición progresiva al hacer scroll mediante `useInView` (`IntersectionObserver`) y `RevealOnScroll`, junto con gestión centralizada de scroll al cambiar de ruta o `#hash` en `useScrollToTop`.

## Estructura del Proyecto

```text
medical-landing/
├── public/
│   └── icon-heart2.svg            # Favicon del sitio
├── src/
│   ├── assets/
│   │   ├── fonts/                 # Fuente local Carena-Regular.otf
│   │   ├── icons/                 # Logotipos e íconos SVG de servicios
│   │   └── img/                   # Fotografías (WebP / JPG / PNG)
│   ├── components/
│   │   ├── layout/                # Header, Footer, BookingModal y secciones reutilizables
│   │   │   ├── BookingModal.jsx
│   │   │   ├── CtaBanner.jsx
│   │   │   ├── CtaDetailed.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Locations.jsx
│   │   │   ├── SpecialitySections.jsx
│   │   │   └── Testimonials.jsx
│   │   └── ui/                    # Primitivos de interfaz reutilizables
│   │       ├── AnimatedNumber.jsx
│   │       ├── BlogLoader.jsx
│   │       ├── Icons.jsx
│   │       └── RevealOnScroll.jsx
│   ├── data/
│   │   ├── clinicInfo.js          # Contacto, credenciales, redes y sedes
│   │   └── services.js            # Lista única de los 7 servicios y motivos de consulta
│   ├── hooks/
│   │   ├── useInView.js           # Hook reutilizable de IntersectionObserver
│   │   └── useScrollToTop.js      # Gestión centralizada de scroll y #hash entre rutas
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   ├── Home.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   └── Services.jsx
│   ├── App.jsx                    # Definición de rutas y layout global
│   ├── index.css                  # Import de Tailwind v4, @font-face y animaciones base
│   ├── main.jsx                   # Punto de entrada con BrowserRouter
│   └── sanityClient.js            # Cliente de Sanity y helper urlFor
├── .oxlintrc.json                 # Reglas de linting
├── index.html                     # Documento base HTML (lang="es", fuentes y favicon)
├── package.json                   # Dependencias y scripts
├── postcss.config.js              # Plugin @tailwindcss/postcss
├── tailwind.config.js             # Tokens de paleta de marca, tipografía y animaciones
└── vite.config.js                 # Configuración de Vite
```

## Instalación y Desarrollo Local

### Prerrequisitos

- Node.js 20+ (recomendado para Vite 8)
- npm

### Pasos

1. Clonar el repositorio e ingresar al proyecto:
   ```bash
   git clone https://github.com/tinycthylla/medical-landing-Lubisay-Moreno.git
   cd medical-landing
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

### Configuración de Sanity CMS

El cliente de lectura pública del blog se configura en `src/sanityClient.js`. Actualmente las consultas son de solo lectura sobre un dataset público mediante CDN, por lo que no se requieren variables de entorno (`.env`) ni tokens privados para levantar el proyecto en local.

Si deseas conectar el frontend a otra instancia de Sanity, actualiza los parámetros en `src/sanityClient.js`:

```js
export const client = createClient({
  projectId: '<tu-project-id>',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});
```

> Nunca incluyas tokens de escritura ni secretos privados en el código del frontend.

### Scripts Disponibles

| Script | Comando | Descripción |
| :--- | :--- | :--- |
| Desarrollo | `npm run dev` | Levanta el servidor local de Vite con HMR |
| Producción | `npm run build` | Genera el bundle optimizado en `dist/` |
| Linting | `npm run lint` | Ejecuta Oxlint sobre el código fuente |
| Vista previa | `npm run preview` | Sirve localmente el build generado en `dist/` |

## Mantenimiento Rápido

- **Datos de contacto, credenciales, redes sociales y sedes/horarios**: editar `src/data/clinicInfo.js` (se refleja automáticamente en `Footer`, `Locations`, `BookingModal`, `CtaDetailed`, `FAQ`, `About`, `BlogPost` y `PrivacyPolicy`).
- **Servicios médicos, descripciones, `#slug` y motivos del modal**: editar `src/data/services.js` (alimenta `Header`, `Footer`, `SpecialitySections`, `Services` y `BookingModal`).
- **Íconos SVG compartidos**: agregar o actualizar componentes en `src/components/ui/Icons.jsx`.
- **Tokens de marca y tipografía**: definidos en `tailwind.config.js` (`brand-purple`, `brand-pink`, `brand-pink-light`, `brand-lilac`, `brand-grape`, etc.) y `src/index.css`.
