export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkPrimary: "#070608",
        darkerPrimary: "#040404",
        primary: "#1c002c",
      },
    },
  },
  plugins: [("@tailwindcss/typography")],
};
