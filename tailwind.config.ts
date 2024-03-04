import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#49BBBD",
        lightBlue: "#9DCCFF",
        darkBlue: "#252641",
      },
      fontFamily: {
        play: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
