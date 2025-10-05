
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brandBlue: '#002D62',
        primary: '#5C3D99',
        accent: '#FFA500',
        darkBg: '#0B1220',
        card: '#121a2a',
        cardBorder: '#1e293b'
      }
    }
  },
  plugins: []
};
