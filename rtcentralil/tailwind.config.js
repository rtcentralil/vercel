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
        jellyBean: "#196d85",
        persianRed: "#cc3037",      // stays the same
        greenWhite: "#eaeee1",      // stays the same
        // Adjusted fireBush to be slightly darker
        fireBush: "#d89d1f",
        // Darkened oliveGreen for better text contrast
        oliveGreen: "#8b9d4a",
        // Darkened regentGray so white text on buttons is more legible
        regentGray: "#707d8a",
        cabbagePont: "#454e41",     // stays the same
        outerSpace: "#293130",      // stays the same
        canCan: "#d69398",          // stays the same
        // Darkened turquoiseBlue for improved readability when used with outerSpace
        turquoiseBlue: "#3bb7d3",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // ✅ Added Tailwind Typography Plugin
  ],
};
