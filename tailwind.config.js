/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',    // Small screens, like mobile
      'md': '768px',    // Medium screens, like tablets
      'lg': '1024px',   // Large screens, like laptops
      'xl': '1280px',   // Extra large screens, like desktops
    },
    extend: {},
  },
  plugins: [],
}
