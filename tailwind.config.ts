import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F4F1EA",
        surface: "#EDE9DF",
        card: "#FBFAF6",
        ink: {
          DEFAULT: "#1E1A14",
          soft: "#6B6455",
          mute: "#9C9484",
        },
        clay: {
          DEFAULT: "#D97757",
          deep: "#B85C3E",
        },
        line: {
          DEFAULT: "rgba(30,26,20,0.12)",
          strong: "rgba(30,26,20,0.22)",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-source-serif)", "serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      maxWidth: {
        wrap: "980px",
      },
      borderRadius: {
        pill: "999px",
      },
    },
  },
  plugins: [],
};
export default config;
