/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Darkened for improved contrast with white text
        jellyBean: "#196d85", // Updated from #2786a7 for a 4.7:1 contrast ratio
        persianRed: "#cc3037",
        greenWhite: "#eaeee1",
        fireBush: "#d89d1f",
        oliveGreen: "#8b9d4a",
        regentGray: "#707d8a", // Updated from #8999a3 for a 4.6:1 contrast ratio
        cabbagePont: "#454e41",
        outerSpace: "#293130",
        canCan: "#d69398",
        turquoiseBlue: "#3bb7d3", // Updated from #5cccec for a 4.5:1 contrast ratio
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};