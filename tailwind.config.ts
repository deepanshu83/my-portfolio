import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#07122a',
        panel: '#0c1a2e',
        border: '#233145',
        primary: {
          DEFAULT: '#2563eb',
          600: '#2563eb',
          500: '#3b82f6',
        },
        accent: '#7c3aed',
        muted: '#94a3b8',
      },
      boxShadow: {
        soft: '0 18px 40px rgba(3, 6, 17, 0.45)',
        card: '0 6px 18px rgba(2,6,23,0.6)',
      },
    },
  },
  plugins: [],
};

export default config;
