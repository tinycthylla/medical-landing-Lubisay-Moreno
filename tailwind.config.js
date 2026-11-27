/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#F2F2F2",
        "surface": "#ffffff",
        "on-background": "#442E54",
        "on-surface-variant": "#444841",
        "on-secondary": "#ffffff",

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

        // Alias legacy mantenidos por compatibilidad
        "pink-50": "#FCF0F9",
        "pink-100": "#F8D4F0", 
        "pink-300": "#F0A3DF", 
        "pink-500": "#F385DE",
        
        "whatsapp": "#442E54",
        "green-100": "#D1FAE5", 
        "green-200": "#A7F3D0", 
      },
      fontFamily: {
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