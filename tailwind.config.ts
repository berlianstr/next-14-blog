import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        transparent: "transparent",
        agility: "#222",
        primary: {
          100: "#a273ff",
          200: "#935bff",
          300: "#8344ff",
          400: "#742cff",
          500: "#6415FF",
          600: "#5a13e6",
          700: "#5011cc",
          800: "#460fb3",
          900: "#3c0d99",
        },
        secondary: {
          100: "#7c8ba1",
          200: "#667892",
          300: "#506582",
          400: "#3a5173",
          500: "#243E63",
          600: "#203859",
          700: "#1d324f",
          800: "#192b45",
          900: "#16253b",
        },
      },
    },
  },
  plugins: [],
};
export default config;
