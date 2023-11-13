/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#555962",
        secondary: "#222020",
        background: "#0e0d0c",
        text: "#f1f0ef",
        accent: "#26282c",
      }
    },
  },
  plugins: [
    ({addUtilities}) => {
      addUtilities({
        ".transtition": {
          "@apply transition-all duration-300": {}
        }
      })
    }
  ],
}

