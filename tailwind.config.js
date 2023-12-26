/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blanco: "#fff",
        morado: "#6d59a0",
        gray: "rgba(255, 255, 255, 0.7)",
      },
      spacing: {},
      fontFamily: {
        pangram:["Pangram"],
        century:["Century Gothic"]
        
      },
    },
    fontSize: {
      base: "1rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
