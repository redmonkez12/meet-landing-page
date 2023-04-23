/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: "#28283D",
        gray: "#87879D",
        green: "#4D96A9",
        hoverGreen: "#71C0D4",
        lightGreen: "#8FE3F9",
        purple: "#855FB1",
        hoverPurple: "#B18BDD",
        lightPurple: "#D9B8FF",
        darkWhite: "#FAFAFA",
      },
    },
  },
  plugins: [],
}
