import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["light", "coffee", "cupcake", "sunset", "dim", "night"],
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: "#1A1A1A",
        darkGray: "#111111",
        red: "#E63946",
        orange: "#F77F00",
        lightGray: "#2E2E2E",
        mutedmidgray: "#3A3A44",
        lightestGray: "#4A4A4A",
        secondaryText: "#8A8A8A",
      },
      fontFamily: {
        sans: ["var(--font-caveat)"],
        mono: ["var(--font-roboto-mono)"],
        hand: ["var(--font-caveat)"],
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
