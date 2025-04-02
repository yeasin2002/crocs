/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["*"],
   theme: {
      screens: {
         sm: "640px",
         md: "768px",
         lg: "960px",
         xl: "1200px",
         "2xl": "1440px",
      },

      container: {
         center: "true",
         padding: "15px",
      },
      extend: {
         fontFamily: {
            montserrat: '"Montserrat", sans-serif',
            PPMonumentExtended: '"PP Monument Extended"',
         },
      },
   },
   plugins: [],
};