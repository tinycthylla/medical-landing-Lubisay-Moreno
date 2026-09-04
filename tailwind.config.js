/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface": "#faf9f8",
        "primary": "#53634b",
        "primary-container": "#8c9d82",
        "on-surface-variant": "#444841",
        "on-secondary": "#ffffff",
        "background": "#faf9f8",
        "on-background": "#1b1c1c",
        "whatsapp": "#25D366",
        "pink-50": "#FFF3F4",
        "pink-100": "#FFD1D9",
        "pink-200": "#FF9FB3",
        "pink-300": "#D85A7A"
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