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
      }
    },
  },
  plugins: [],
}