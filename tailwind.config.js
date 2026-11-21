/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- 1. FONDOS ESTRUCTURALES ---
        "background": "#F2F2F2",
        "surface": "#ffffff",
        "on-background": "#442E54", // Ahora los textos oscuros usarán tu morado principal
        "on-surface-variant": "#444841",
        "on-secondary": "#ffffff",

        // --- 2. PALETA DE MARCA OFICIAL (Para usar de ahora en adelante) ---
        brand: {
          purple: '#442E54', 
          pink: '#F385DE',   
          'pink-light': '#FCF0F9', 
          lilac: '#C285F2',  
          muted: '#855BA6',  
          cyan: '#BBFFF8',   
          green: '#10B981',
          grape: '#735D83',  
        },

        // --- 3. CLASES VIEJAS (Mapeadas a la nueva paleta para no romper el diseño) ---
        "pink-50": "#FCF0F9",  // Mapeado a tu nuevo rosa clarito
        "pink-100": "#F8D4F0", 
        "pink-300": "#F0A3DF", 
        "pink-500": "#F385DE", // Mapeado a tu nuevo rosa principal
        
        "whatsapp": "#442E54", // Mapeado a tu morado principal para que los botones de CTA se integren elegante a la marca desde ya
        "green-100": "#D1FAE5", 
        "green-200": "#A7F3D0", 
      },
      fontFamily: {
        // Las fuentes nuevas conectadas
        "body-md": ["Poppins", "sans-serif"],
        "headline-sm": ["Carena", "serif"],
        "label-md": ["Poppins", "sans-serif"],
      },
      fontSize: {
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-sm": ["24px", { lineHeight: "1.4", fontWeight: "600" }],
        "label-md": ["14px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "600" }],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}