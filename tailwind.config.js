/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#82a1a3',  // verdes
          200: '#98c4aa',  
          300: '#42635f',  
          default: '#1f3a35', 
        },
        secondary: {
          100: '#b3c7e7',  // Azules
          200: '#6883ba',  
          300: '#2d2f6b',  
        },
        tertiary: {
          100: '#eed68e',  // Dorado claro
          200: '#e1be39',  // Dorado
        },
        gray: {
          10: '#F9F9F9',
          100: '#f7fafc',
          400: '#77797e',
          900: '#1a202c',
        },
        cream: {
          300:'#ebebe8',
          default: '#fdfaf7',  //Fondo 

        },
        purple: {
          default: '#b29db2'
        }
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        cookie: ['Cookie', 'cursive'],
      },
    },
  },
  plugins: [],
}