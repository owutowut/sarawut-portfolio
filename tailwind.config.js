/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
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
  },
  plugins: [],
};
