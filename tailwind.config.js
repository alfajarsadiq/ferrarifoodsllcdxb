/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        trusted: ['Trusted', 'sans-serif'], // <-- ADD THIS LINE
        noken: ['Noken', 'sans-serif'],
        rokhald: ['Rokhald', 'sans-serif'],
        mourich: ['Mourich', 'sans-serif'],
      },
      colors: {
        'brand-gold': '#C6A664',
      },
    },
  },
  plugins: [],
};