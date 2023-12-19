/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mob': {"max": "767px"},
      'md': '768px',
    },
    extend: {
      colors: {
        dark: "#0C0C0C",
        brown: "#CEA07E",
        white: "#F7F7F7"
      },
      fontFamily: {
        playfair: ["nPlayfair Display", "serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      fontSize: {
        "mob-mammoth": "calc(8000vw / 1000)",
        mammoth: "calc(5000vw/1000)"
      },
      width: {
        col1: "calc(((100vw - 60px) - 11*20px) / 12 )",
        col2: "calc(2*(((100vw - 60px) - 10*20px) / 12 ))",
        col3: "calc(3*(((100vw - 60px) - 9*20px) / 12 ))",
        col4: "calc(4*(((100vw - 60px) - 8*20px) / 12 ))",
        col5: "calc(5*(((100vw - 60px) - 7*20px) / 12 ))",
        col6: "calc(6*(((100vw - 60px) - 6*20px) / 12 ))",
        col7: "calc(7*(((100vw - 60px) - 5*20px) / 12 ))",
        col8: "calc(8*(((100vw - 60px) - 4*20px) / 12 ))",
        col9: "calc(9*(((100vw - 60px) - 3*20px) / 12 ))",
        col10: "calc(10*(((100vw - 60px) - 2*20px) / 12 ))",
        col11: "calc(11*(((100vw - 60px) - 1*20px) / 12 ))",
        col12: "calc(100vw - 60px)",
      },
      margin: {
        psh1: "calc((100vw - 60px - 11*20px) / 12 + 20px)",
        psh2: "calc(2 * ((100vw - 60px - 11*20px) / 12 + 20px))",
        psh3: "calc(3 * ((100vw - 60px - 11*20px) / 12 + 20px))",
        psh4: "calc(4 * ((100vw - 60px - 11*20px) / 12 + 20px))",
        psh5: "calc(5 * ((100vw - 60px - 11*20px) / 12 + 20px))",
        psh6: "calc(6 * ((100vw - 60px - 11*20px) / 12 + 20px))",
        psh7: "calc(7 * ((100vw - 60px - 11*20px) / 12 + 20px))",
        psh8: "calc(8 * ((100vw - 60px - 11*20px) / 12 + 20px))",
        psh9: "calc(9 * ((100vw - 60px - 11*20px) / 12 + 20px))",
        psh10: "calc(10 * ((100vw - 60px - 11*20px) / 12 + 20px))",
        psh12: "calc(11 * ((100vw - 60px - 11*20px) / 12 + 20px))",
      }
    },
  },
  plugins: [],
}