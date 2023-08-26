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
        "dark-700": "#0F0F0F",
        "dark-600": "#252525",
        "dark-500": "#2d2d2d",
        "text-100": "rgb(255,255,255)",
        "text-200": "rgb(245, 245, 245)",
        "text-300": "rgb(235, 235, 235)",
        "text-400": "rgb(225, 225, 225)",
        "text-500": "rgb(215, 215, 215)",
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
        lg: "30px",
        m: "28px",
        rg: "25px",
        sm: "23px",
        xs: "21px",
        "2xs": "18px",
        "3xs": "16px",
        "4xs": "14px",
      },
      screens: {
        lg: "1600px",
        md: "1200px",
        rg: "700px",
        sm:'600px',
        xs:'400px'
      },
    },
  },
  plugins: [],
};
export default config;
