/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'display': ['"Press Start 2P"'],
      'subtitle':['"Finger Paint"'],
      'body': ['"Montserrat"'],
      'alternates': ['"Montserrat Alternates"']
    },
    colors: {
      'darkpink': '#FF99C8',
      'pink': '#F1C0E8',
      'yellow': '#FCF6BD',
      'purple': '#CEBAF0',
      'green': '#D0F4DD',
      'orange': '#FDE3CE',
      'lightblue': '#8EECF5',
      'blue': '#A4C4F3',
      'transparent': 'transparent',
      'black': "#000000",
      'white': '#F9F8F9'
    },
    backgroundImage: {
      'rainbow': 'linear-gradient(90deg, #FAF8CB, #FDE4CE, #FFCFD2, #F1C0E8, #CEBAF0, #A4C4F3, #90DBF4, #97F5E1, #B9FBC0)'
    },
    fontSize: {
      'xs': '15px',
      'sm': '20px',
      'md': '24px',
      'lg': '28px',
      'xl': '50px',
      '2xl': '70px',
      '3xl': '200px'
    },
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'marquee': 'marquee 50s linear infinite',
        'marquee2': 'marquee2 50s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      // spacing: {
      //   '128': '32rem',
      //   '144': '36rem',
      // },
      // borderRadius: {
      //   '4xl': '2rem',
      // }
    },
  },
  plugins: [
    daisyui,
  ],
}