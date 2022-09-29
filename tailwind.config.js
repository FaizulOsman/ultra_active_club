/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#1d4ed8",

          "secondary": "#ff5e19",

          "accent": "#1a173e",

          "neutral": "#0a0826",

          "base-100": "#1a173e",

          "info": "#88CDE2",

          "success": "#0F573D",

          "warning": "#F2AB50",

          "error": "#F0350F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
