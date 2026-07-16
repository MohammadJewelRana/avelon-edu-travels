/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DC2626",      // Red
        secondary: "#FACC15",    // Yellow
        dark: "#0F0F0F",         // Main Background
        darkLight: "#181818",    // Card Background
        border: "#2A2A2A",
        text: "#E5E5E5",
        muted: "#A1A1AA",
      },

      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },

      boxShadow: {
        primary: "0 10px 35px rgba(220,38,38,.25)",
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
        },
      },
    },
  },
  plugins: [],
};