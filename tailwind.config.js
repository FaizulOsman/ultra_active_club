/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#047793",

          "secondary": "#e6ed65",

          "accent": "#7abaf9",

          "neutral": "#161C23",

          "base-100": "#2C2F58",

          "info": "#8AA0EF",

          "success": "#76EFBF",

          "warning": "#F5B129",

          "error": "#E72340",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
