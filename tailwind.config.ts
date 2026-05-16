import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#0b1220',
        panel: '#111827',
        border: '#2e3a50',
      },
      boxShadow: {
        soft: '0 18px 40px rgba(8, 11, 20, 0.2)',
      },
    },
  },
  plugins: [],
};

export default config;
