/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.svelte',
    './src/**/*.js',
    './src/**/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        'basico-red': '#dc3545',
        'basico-red-light': '#f857a6',
        'basico-orange': '#fd7e14',
      },
    },
  },
  plugins: [],
}
