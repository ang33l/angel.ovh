/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#FAFCFF",
        hover: "#F0F0FA",
        hoverDark: "#011223",
        background: "#001021",
        primary: "#086AE2",
        secondary: "#021C3B",
        accent: "#0E76F6",
        green: "rgb(34 197 94)",
      },
    },
  },
  plugins: [],
};
