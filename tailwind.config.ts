import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-900": "#000000",
        "dark-800": "#0a0a0a",
        "dark-700": "#141414",
        "dark-600": "#1e1e1e",
        "dark-500": "#333232",
        "text-100": "#ffffff",
        "text-200": "#ebebeb",
        "text-300": "#d7d7d7",
        "text-400": "#c3c3c3",
        "text-500": "#c4c2c2",
      },
      fontWeight: {
        l: "400",
        r: "500",
        mb: "600",
        sb: "700",
        b: "800",
      },
      fontSize: {
        "4xl": "180px",
        "3xl": "100px",
        "2xl": "70px",
        xl: "50px",
        "2lg": "40px",
        lg: "35px",
        m: "30px",
        rg: "28px",
        sm: "25px",
        xs: "23px",
        "2xs": "21px",
        "3xs": "18px",
        "4xs": "16px",
      },
    },
  },
  plugins: [],
};
export default config;
