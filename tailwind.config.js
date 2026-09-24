/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fondos y textos base
        "background": "#F2F2F2",
        "surface": "#ffffff",
        "on-background": "#1b1c1c",
        "on-surface-variant": "#444841",
        "on-secondary": "#ffffff",
        
        // Escala de rosas 
        "pink-50": "#FDF4F8",
        "pink-100": "#F2D8E6", 
        "pink-300": "#D98BA7", 
        "pink-500": "#A65673", 
        
        // Escala de verdes para CTA y difuminados
        "whatsapp": "#0E9F6E", 
        "green-100": "#D7F7E1", // Verde claro actualizado con mejor contraste
        "green-200": "#BEE3D3", 
      },
      fontFamily: {
        "body-md": ["Inter", "sans-serif"],
        "headline-sm": ["Playfair Display", "serif"],
        "label-md": ["Inter", "sans-serif"],
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