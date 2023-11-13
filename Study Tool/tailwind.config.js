/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: colors.zinc[900],
        },

        text: {
          light: colors.zinc[100],
          DEFAULT: colors.zinc[300],
          dark: colors.zinc[400],
        },

        primary: {
            DEFAULT: colors.zinc[600],
        },

        secondary: {
          DEFAULT: colors.zinc[800],
        },

        accent: {
          DEFAULT: colors.zinc[50],
        }
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".text-box": {
          "@apply bg-primary py-1 px-2 rounded-lg": {}
        },
        ".outer-box": {
          "@apply bg-secondary p-2 rounded-lg": {}
        },
        ".glow": {
          "@apply rounded-full bg-accent blur-xl": {}
        },
        ".rounded": {
          "@apply rounded-3xl": {}
        },
        ".button-primary": {
          "@apply px-2 py-1 border-2 border-primary/70 bg-secondary rounded-lg text-sm font-bold text-text-dark hover:text-text hover:border-primary w-fit": {}
        }
      })
    }
  ],
}

