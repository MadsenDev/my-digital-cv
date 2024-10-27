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
        background: "var(--background)",
        background2: "var(--background2",
        foreground: "var(--foreground)",
        primary: "var(--primary-color)",        // Your primary color
        primaryHover: "var(--primary-hover)",   // Hover state for primary
      },
      backgroundImage: {
        'hero-pattern': "url('/pattern4.webp')",
      },
    },
  },
  plugins: [],
};

export default config;