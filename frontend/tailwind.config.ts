import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "hsl(var(--tnh-background-100))",
          secondary: "hsl(var(--tnh-background-200))",
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--tnh-primary))",
          "50": "#fef5ee",
          "100": "#fce9d8",
          "200": "#f9cfaf",
          "300": "#f4ad7d",
          "400": "#ef8148",
          "500": "#eb662d",
          "600": "#dc481a",
          "700": "#b63518",
          "800": "#912b1b",
          "900": "#752619",
          "950": "#3f100b",
        },
        secondary: {
          DEFAULT: "hsl(var(--tnh-secondary))",
          "50": "#e7f0ff",
          "100": "#d4e4ff",
          "200": "#b1cdff",
          "300": "#82a9ff",
          "400": "#5276ff",
          "500": "#2a45ff",
          "600": "#0710ff",
          "700": "#0007ff",
          "800": "#0209d1",
          "900": "#0d17a2",
          "950": "#05073c",
        },
        soft: "#f1ecf2",
        mecury: "#e7e6e6",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
