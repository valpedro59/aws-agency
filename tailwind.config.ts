import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        bleu: '0 0 0 2px rgb(255 255 255), 0 0 0 3px rgba(30 64 175), 0 0 0 5px rgb(30 64 175), 0 0 0 6.5px rgb(255 255 255),0 0 0 7px rgb(30 64 175)'
      },
    },
  },
  plugins: [],
};
export default config;
