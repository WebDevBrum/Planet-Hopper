/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      primeBlack: "#070724",
      grey: "#38384F",
      BLUE: "#419EBB",
      lightOrange: "#EDA249",
      purple: "#6F2ED6",
      red: "#D83834",
      darkOrange: "#CD5120",
      green: "#1EC2A4",
    },
    fontFamily: {
      spartanBold: ["SPARTAN-BOLD"],
      spartanReg: ["SPARTAN-REG"],
      antonio: ["ANTONIO-MD"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
