/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        twingreen: {
          50: '#eeff15',
          100: '#e8ff15',
          200: '#dfff14',
          300: '#d5ff14',
          400: '#c9ff13',
          500: '#bcff12',
          600: '#afff11',
          700: '#a0ff10',
          800: '#90ff0f',
        },
        twinpurple: {
          50: '#f5f5ff',
          100: '#ebebff',
          200: '#d0d0ff',
          300: '#b4b4ff',
          400: '#7d7dff',
          500: '#2c2747',
        },
      },
      backgroundImage: {
        kiosk:
          "url('https://4.imimg.com/data4/GV/XI/MY-2783894/fashion-kiosk-500x500.jpg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('flowbite/plugin'),
  ],
};
