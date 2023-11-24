/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      lgg: "1300px",
      xl: "1500px",
      xxl: "1800px",
      custom: "900px",
    },
  },
  plugins: [],
};
