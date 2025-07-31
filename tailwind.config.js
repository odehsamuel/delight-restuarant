/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          primary: "#d4af37",
          secondary: "#b8941f",
        },
        dark: {
          primary: "#2c2c2c",
          secondary: "#1a1a1a",
        },
        gray: {
          white: "#fafafa",
          light: "#777777",
          medium: "#666666",
          border: "#e9ecef",
          background: "#f8f9fa",
        },
        restuarant: {
          gold: "#d4af37",
          "gold-dark": "#b8941f",
          charcoal: "#2c2c2c",
          "rich-black": "#1a1a1a",
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #d4af37, #b8941f)",
        "food-gradient": "linear-gradient(135deg, #8b4513 , #d4af37)",
        "dark-gradient": "linear-gradient(135deg, #2c2c2c , #1a1a1a)",
      },
      // fontFamily: {
      //   'serif': []
      //   'elegant': []
      // }
    },
  },
  plugins: [],
};
