/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        'primary-dark': '#03150B',
        secondary: '#F5FAF7',
        danger: '#DC2638',
        warning: '#F97316',
        'disabled-dark': '#BDC7C2',
        success: '#16A34A',    // Green shade
        info: '#0EA5E9',       // Cyan shade
        light: '#F3F4F6',      // Light gray
        dark: '#111827',       // Dark gray
      },
    },
  },
  plugins: [],
}
