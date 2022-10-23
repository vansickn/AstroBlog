/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      spacing: {
      950: '950px',
      800: '800px',
    },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
