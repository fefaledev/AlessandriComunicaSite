/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#482975',
            hover: '#3d2262'
          },
          secondary: '#895eb4',
          text: '#7b7396'
        },
        fontFamily: {
          sans: ['Poppins', 'system-ui', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };