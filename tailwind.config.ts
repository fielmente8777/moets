import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5A150F",
        primary2: "#961B1E",
        secondary: "#EFE7DA",
        ternary: "#06584E",
        dark: "#534E4D",
        bg: "#F5F0E0",
      },
    },
  },
  plugins: [],
} satisfies Config;
