import type { Config } from 'tailwindcss'
const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary:'#5C3D99', accent:'#FFA500', brandBlue:'#002D62',
        surface:'#0B1220', card:'#121a2a', border:'#1e293b'
      }
    }
  },
  plugins: [],
}
export default config
