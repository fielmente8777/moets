/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./src/**/*.{js,jsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        brown: {
          100: "#F5F0EB",
          600: "#8B7355",
          700: "#6B5842",
          800: "#54483A",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#8b7355",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f5f0e8",
          foreground: "#8b7355",
        },
        clr1: "#343434",
        clr2: "#6D4F31",
        clr3: "#3b3b3b",
        clr4: "#39352D",
        clr5: "#846B52",
        clr6: "#231F20",
        clr7: "#997047",
        clr8: "#43301D",
        bgclr: "#F5F1EA"
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        cormo: ["Cormorant", "serif"],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

export default config;
