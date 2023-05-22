// @ts-check
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './node_modules/@ws/ui/components/**/*.{js,jsx,ts,tsx}'
  ],
  presets: [require('@ws/ui/tailwind/config.js')]
}
