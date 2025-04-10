import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        poppins: ["var(--font-poppins)"],
        royal: ["var(--font-royalbrand)"],
      },
    },
  },
  plugins: [],
} satisfies Config;