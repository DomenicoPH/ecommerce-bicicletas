import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tokens semánticos
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: "var(--text)",

        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
