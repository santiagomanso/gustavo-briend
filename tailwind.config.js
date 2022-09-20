/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        content2: '#3D5A80',
        lightBG: '#98C1D9',
        content1: '#E0FBFC',
        darkBG: '#293241',
        action: '#EE6C4D',
      },
      backgroundImage: {
        'hero-bg': "url('../assets/bg1.jpg)",
      },
    },
  },
  plugins: [],
}
