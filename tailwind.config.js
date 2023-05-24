/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
      center: true,
    },
    extend: {
      fontSize : {
        xs: '0.8rem',
        sm: '0.9rem',
        base: '1rem',
        xl: '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
        '5xl': '5rem',
        '6xl': '6rem',
        '7xl': '7rem',
        '8xl': '8rem',
        '9xl': '9rem',
        '10xl': '10rem',
        '11xl': '11rem',
        '12xl': '12rem',
        '13xl': '13rem',
        '14xl': '14rem',
        '15xl': '15rem',
      },
      spacing:{
        '1': '1rem',
        '1.5': '1.5rem',
        '2': '2rem',
        '2.5': '2.5rem',
        '3': '3rem',
        '3.5': '3.5rem',
        '4': '4rem',
        '4.5': '4.5rem',
        '5': '5rem',
        '5.5': '5.5rem',
        '6': '6rem',
        '6.5': '6.5rem',
        '7': '7rem',
        '7.5': '7.5rem',
        '8': '8rem',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1000px', // 976
        xl: '1440px',
      },
      colors: {
          'softBlue': 'hsl(231, 69%, 60%)',
          'softRed' : 'hsl(0, 94%, 66%)',
          'grayBlue' : 'hsl(229, 8%, 60%)',
          'darkBlue' : 'hsl(229, 31%, 21%)'
      },
    },
  },
  plugins: [],
}
