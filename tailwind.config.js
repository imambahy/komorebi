/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        komorebi: {
          komoblack: "#000814",
          komonavy: "#001D3D",
          komoblue: "#003566",
          komoyellow: "#FFC300",
          komoyellow2: "#FFD60A",
        },
      },
    },
  },
  plugins: [],
};
