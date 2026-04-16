/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        surface: '#131318',
        'surface-dim': '#0e0e13',
        'surface-low': '#1b1b20',
        'surface-container': '#1f1f25',
        'surface-high': '#2a292f',
        'surface-highest': '#35343a',
        'on-surface': '#e4e1e9',
        'on-surface-variant': '#ccc3d8',
        outline: '#958da1',
        'outline-variant': '#4a4455',
        primary: '#d2bbff',
        'primary-container': '#7c3aed',
        'on-primary-container': '#ede0ff',
        secondary: '#4cd7f6',
        'secondary-dim': '#acedff',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
