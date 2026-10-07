/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF7EE',
          50: '#FDFCF9',
          100: '#FAF7EE',
          200: '#F4EFE2',
          300: '#ECE4CF',
          400: '#DFD4B8',
          border: '#E5DFCF',
        },
        charcoal: {
          DEFAULT: '#141414',
          50: '#F7F7F7',
          100: '#E3E3E3',
          400: '#737373',
          500: '#525252',
          700: '#262626',
          800: '#1A1A1A',
          900: '#141414',
        },
        terracotta: {
          DEFAULT: '#D35433',
          hover: '#BC4525',
          light: '#FAEEE9',
        },
        buttercup: {
          DEFAULT: '#F7E98D',
          hover: '#EEDC6E',
          light: '#FCF8DC',
          dark: '#3A3516',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(22, 22, 22, 0.03), 0 1px 3px rgba(22, 22, 22, 0.02)',
        'card': '0 10px 30px -10px rgba(30, 25, 20, 0.06)',
        'elevated': '0 20px 40px -15px rgba(30, 25, 20, 0.1)',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
