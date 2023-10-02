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
            primary: {
              DEFAULT: '#e10600',
            },
            secondary: {
              DEFAULT: '#15151e',
            },
          },
        },
        dark: {
          colors: {
            primary: {
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
