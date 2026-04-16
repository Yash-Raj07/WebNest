/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'arch-bg': '#FFFFFF',
        'arch-dark': '#1A1A1A',
        'arch-dark-blue': '#2E3D4D',
        'arch-accent': '#C59D5F',
        'arch-text-muted': '#7D7D7D',
        'arch-light-grey': '#F2F2F2',
      },
      fontFamily: {
        'serif': ['Prata', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.2em',
      },
    },
  },
  plugins: [],
}
