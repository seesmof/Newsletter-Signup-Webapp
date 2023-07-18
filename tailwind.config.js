/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        background: "#36384d",
        accentHover: "#a5f3fc",
      },
    },
  },
  plugins: [],
};
