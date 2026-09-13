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
          mute: "#746B5C",
        },
        clay: {
          DEFAULT: "#D97757",
          deep: "#A34C32",
        },
        line: {
          DEFAULT: "rgba(30,26,20,0.12)",
          strong: "rgba(30,26,20,0.22)",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        body: ["Georgia", "Times New Roman", "serif"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
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
