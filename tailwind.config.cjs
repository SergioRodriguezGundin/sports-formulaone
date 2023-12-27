// tailwind.config.cjs
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      prefix: 'sports-formulaone',
      themes: {
        light: {
          colors: {
            background: '#F0F0F0', // or DEFAULT
            foreground: '#11181C', // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: '#F0F0F0',
              DEFAULT: '#e10600',
            },
            // ... rest of the colors
            secondary: {
              DEFAULT: '#15151e',
            },
          },
        },
        dark: {
          colors: {
            background: '#11181C', // or DEFAULT
            foreground: '#ECEDEE', // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: '#FFFFFF',
              DEFAULT: '#e10600',
            },
            secondary: {
              DEFAULT: '#d0d0d2',
            },
          },
        },
      },
    }),
  ],
};
