module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: false,
  theme: {
    extend: {
      colors: {
        red: "#FF5733",
        whit: "#F7F9FA",
      },
      fontFamily: {
        fredericka: ["Fredericka the Great", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        majorMonoDisplay: ["Major Mono Display", "monospace"],
      },
      screens: {
        mf: "990px",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
