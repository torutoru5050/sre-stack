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
        foreground: "var(--foreground)",
        surface: {
          DEFAULT: "#080e1a",
          dim: "#080e1a",
          bright: "#232c3e",
          container: "#131a28",
          "container-low": "#0d1320",
          "container-high": "#18202f",
          "container-highest": "#1e2637",
          "container-lowest": "#000000",
          variant: "#1e2637",
        },
        primary: {
          DEFAULT: "#69f6b8",
          container: "#06b77f",
          dim: "#58e7ab",
        },
        "on-surface": {
          DEFAULT: "#e0e5f6",
          variant: "#a6abbb",
        },
        outline: {
          DEFAULT: "#8b90a0",
          variant: "#424855",
        },
        secondary: {
          DEFAULT: "#6bff8f",
          container: "#006e2f",
        },
        error: {
          DEFAULT: "#ff716c",
          container: "#9f0519",
        },
        tertiary: {
          DEFAULT: "#77e6ff",
          container: "#00dcfd",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
