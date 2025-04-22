import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0056b3',
        'primary-dark': '#004494',
        'primary-light': '#a3c4e7',
      },
    },
  },
  plugins: [],
};

export default config; 