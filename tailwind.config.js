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
        proxima_nova: ["Proxima Nova", "sans-serif"],
      },
      backgroundImage: {
        hero__gradient:
          "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.50) 0%, #FFF 100%);",
        cta__gradient:
          "linear-gradient(86deg, #000 6.34%, rgba(0, 0, 0, 0.00) 51.19%)",
        cta__gradient__two:
          "linear-gradient(90deg, #656565 41.32%, rgba(101, 101, 101, 0.00) 47.67%)",
        text__gradient:
          "linear-gradient(89deg, #5434E9 4.39%, #7458F6 38.09%, #D260F4 71.8%, #FEF775 105.51%)",
        btn__gradient:
          "linear-gradient(102deg, #5434E9 6.87%, #D260F4 51.41%, #FEF775 114.21%)",
        white__gradient: "linear-gradient(#fff, #fff)",
        img__graient:
          "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)",
        shoe__color_1:
          "linear-gradient(-45deg, rgb(219, 214, 198) 50%, rgb(0, 0, 0) 50%)",
      },
      colors: {
        "taf-red": "#f00000",
        blue: "#00a2fe",
        "blush-pink": "#ebd0e1",
        brown: "#75594f",
        beige: "#caab8f",
        grey: "#bdbdbd",
        green: "#219653",
        yellow: "#f2c94c",
        purple: "#9b51e0",
        orange: "#f2994a",
        pink: "#ff8ed5",
        "theme-bg": "#eeeeee",
        "theme-grey": "#666666",
      },
      boxShadow: {
        input__shadow: "0px 1px 3px 0px rgba(0, 0, 0, .25)",
        card__shadow: "0px 6px 30px 5px #3436191f, 0px 8px 10px 0px #34364933",
        card__shadow__2:
          "0px 3px 4px 0px #3436191f, 0px 11px 15px 0px #34364933",
        card__shadow__2__hover:
          "0px 9px 46px 8px #3436191f, 0px 1px 5px #34364933",
        shoe__img__shadow: "inset 0 -2px 12px rgba(118,77,107,.05)",
      },
    },
  },
  plugins: [],
};
