/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      minHeight: {
        offsetHeight: 'calc(100vh - var(--offset) + 60px)',
      },
    },
  },
  plugins: [],
}
