import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: "20px",
        center: true
      },
      colors: {
        background: "#282c34",
        foreground: "#f5f5f5",
        primary: {
          DEFAULT: '#F0F4C3'
        }
      },
    },
  	fontFamily: {
  		primary: 'var(--font-fira-code)'
  	}
  },
  plugins: [],
} satisfies Config;
