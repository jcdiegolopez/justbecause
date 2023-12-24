/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blanco: "#fff",
        dark2: "#000",
        morado: "#6d59a0",
        gray: "rgba(255, 255, 255, 0.7)",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        "inherit": "inherit",
      },
    },
    fontSize: {
      base: "1rem",
      inherit: "inherit",
    },
    rotate: {
      '45': '45deg',
      '90': '90deg',
      '180': '180deg',
      '270': '270deg',
    },
  },
  corePlugins: {
    preflight: false,
  },
};
