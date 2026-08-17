/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#090f2b',
        billred: '#d62828',
        billwhite: '#ffffff',
        card: '#f8fafc'
      }
    }
  },
  plugins: []
}
