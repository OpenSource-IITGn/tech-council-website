/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "560px",
      },
      fontFamily: {
        roboto: "roboto",
      },
      colors: {
        golden: {
          400: "#ffba11",
          500: "#e3a712",
        },
        neutral: {
          720: "#373737",
          750: "#2d2d2d",
          850: "#222222",
        },
      },
    },
  },
  plugins: [],
};
