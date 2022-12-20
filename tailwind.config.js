/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
      screens:{
  
        xs:"375px",
        sm:"640px",
        md:"768px",
        lg:"1024px",
        xl:"1140px",
        "2xl": "1140px",
      
      },
     },
      colors:{
        primary: "#0A2728",
        link:"#FDFFFC",
        hover:"#12B7D6",
        danger:"#ff0000"
      },
      fontFamily:{
        caveot:['Prompt'   ],
        sans:["Open Sans", "sans-serif"],
        josephin:[ 'Josefin Sans', "sans-serif"]
       

      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}