import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arial: ["Arial"],
      },
      colors: {
        steph: {
          blue: "#3A4EA1",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
