/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontSize:{
      "sm" : ["14px", "19px"]
    },
    extend: {
      colors: {
        "custom-black" : "#141414",
        "custom-dark-grey": "#1f1f1f",
        "custom-grey": "#333333",
        "custom-green" :"#c5f82a"
      },  
      fontSize:{
        "xxl": ["22px", "25px"]
      },
      screens:{
        "xs" : {"min":"0px", "max": "300px"}
      }
    },
  },
  plugins: [],
}

