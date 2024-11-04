/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "gradient-accent-primary":
          "linear-gradient(to right, #10B981, #1E40AF)",
      },
      colors: {
        primary: "#1E40AF",
        secondary: "#D97706",
        accent: "#10B981",
        black: "#1a1a1a",
        blackSoft: "#242424",
        blackMute: "#2f2f2f",
        indigo: "#213547",
        indigoSoft: "#476582",
        indigoLight: "#aac8e4",
      },
    },
    screens: {
      sm: "425px",
      // => @media (min-width: 425px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1440px",
      // => @media (min-width: 1440px) { ... }
      "2xl": "2560px",
      // => @media (min-width: 2560px) { ... }
    },
  },
  plugins: [],
};
