/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jellyBean: "#2786a7",
        persianRed: "#cc3037",
        greenWhite: "#eaeee1",
        fireBush: "#e8a425",
        oliveGreen: "#adb35e",
        regentGray: "#8999a3",
        cabbagePont: "#454e41",
        outerSpace: "#293130",
        canCan: "#d69398",
        turquoiseBlue: "#5cccec",
      },
    },
  },
  plugins: [],
};