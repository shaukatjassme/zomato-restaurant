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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-okra-color': '#363636',
        'custom-button-color': '#ed1c24',
        'font-family-custom': 'Poppins, sans-serif',
        'footer-text-color': '#767676',
        'footer-background-color': '#0f0f0f',
        'location-text-color': '#ED1C24',
        'get-green-btn':'#28a745'
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.48em',
        
      },
      width: {
        '85': '85%',
        '90': '90%',
        '95': '95%',
        '100': '100%',  
      },
      spacing: {
        100: '100px',
        150: '150px',
      },
    },
  },
  plugins: [],
};
export default config;
