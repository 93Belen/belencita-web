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
      'rainbow': 'linear-gradient(90deg, #FAF8CB, #FDE4CE, #FFCFD2, #F1C0E8, #CEBAF0, #A4C4F3, #90DBF4, #97F5E1, #B9FBC0)',
      'whitetoblue': 'linear-gradient(180deg, #F9F8F9, #D0F4DD, #8EECF5, #A4C4F3)'
    },
    fontSize: {
      'xs': '14px',
      'sm': '20px',
      'md': '24px',
      'lg': '28px',
      'xl': '50px',
      '2xl': '70px',
      '3xl': '200px'
    },
    // screens: {
    //   sm: '640px',
    //   md: '768px',
    //   lg: '1024px',
    //   xl: '1280px',
    // },
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'marquee': 'marquee 50s linear infinite',
        'marquee2': 'marquee2 50s linear infinite',
        'backgroundmove': 'backgroundmove 0.5s linear infinite',
        'appear': 'appear 1s linear'

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
        appear: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        backgroundmove: {
          '0%': { backgroundImage: 'linear-gradient(90deg, #B9FBC0 #FAF8CB, #FDE4CE, #FFCFD2, #F1C0E8, #CEBAF0, #A4C4F3, #90DBF4, #97F5E1)' },
          '20%': { backgroundImage: 'linear-gradient(90deg, #97F5E1, #B9FBC0, #FAF8CB, #FDE4CE, #FFCFD2, #F1C0E8, #CEBAF0, #A4C4F3, #90DBF4)' },
          '40%': { backgroundImage: 'linear-gradient(90deg, #90DBF4, #97F5E1, #B9FBC0, #FAF8CB, #FDE4CE, #FFCFD2, #F1C0E8, #CEBAF0, #A4C4F3)' },
          '60%': { backgroundImage: 'linear-gradient(90deg, #A4C4F3, #90DBF4, #97F5E1, #B9FBC0, #FAF8CB, #FDE4CE, #FFCFD2, #F1C0E8, #CEBAF0)' },
          '80%': { backgroundImage: 'linear-gradient(90deg, #CEBAF0, #A4C4F3, #90DBF4, #97F5E1, #B9FBC0 #FAF8CB, #FDE4CE, #FFCFD2, #F1C0E8)' },
          '100%': { backgroundImage: 'linear-gradient(90deg, #F1C0E8, #CEBAF0, #A4C4F3, #90DBF4, #97F5E1, #B9FBC0, #FAF8CB, #FDE4CE, #FFCFD2)' },
        }
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