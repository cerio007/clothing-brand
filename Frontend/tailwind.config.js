/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'], 
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        ROYALTY: {
          whatsapp: '#25D366',
          gold: '#D4AF37',
          dark: '#1A1A1A',
        }
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}