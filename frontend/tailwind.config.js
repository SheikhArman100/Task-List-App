/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customOrange: "hsl(5,77%,55%)",
        customBlack: "hsl(0,0%,12%)",
        customGray:"hsl(0,0%,16%)",
      },
    },
  },
  plugins: [require("daisyui")],
};
