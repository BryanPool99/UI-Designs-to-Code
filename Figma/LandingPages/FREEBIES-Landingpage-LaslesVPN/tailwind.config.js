/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Aquí tus colores personalizados
        'primary': '#F53838', // Mapea $primary-color
        'text-primary': '#0B132A', // Mapea $text-primary-color
        'text-secondary': '#4F5665', // Mapea $text-secondary-color
        'background-body': '#F6F6F6', // Mapea $background-body-color
        'background-card': '#FFFFFF', // Mapea $background-card-color
        'border-light': '#DDDDDD', // Le puse un nombre más descriptivo para Tailwind
        'separator': '#EEEFF2', // Mapea $separator-color
      },
    },
  },
  plugins: [],
}