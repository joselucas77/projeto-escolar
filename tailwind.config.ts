import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        notification: "notification 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0s",
      },
      keyframes: {
        notification: {
          "0%": { transform: "translateY(-1000px)", opacity: "0" },
          "100%": { transform: "tranlateY(0px)", opacity: "100" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
