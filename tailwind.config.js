/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'dark-mode': "url(../assets/bg-desktop.jpg)",
        'dark-mode-mobile': "url(../assets/bg-mobile.jpg)",
        'light-mode': "url(../assets/bg-desktop-light.jpg)",
        'light-mode-mobile': "url(../assets/bg-mobile-light.jpg)",
      }
    },
  },
  plugins: [],
}