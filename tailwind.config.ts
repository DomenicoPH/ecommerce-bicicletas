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

      keyframes: {
        'fade-in-down': {
          '0%': { opacity: 0, transform: 'translateY(-5px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-out-up': {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(-5px)' },
        }
      },

      animation: {
        'fade-in-down': 'fade-in-down 200ms ease-out forwards',
        'fade-out-up': 'fade-out-up 150ms ease-in forwards',
      }
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
