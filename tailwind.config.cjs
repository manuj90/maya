/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "280px",
      md: "720px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "not-white": "#ebebeb",
        "red-maya": "#a40c18",
      },
      backgroundImage: {
        banner: "url('assets/hero/bannerHome.webp')",
        bannertab: "url('assets/hero/bannerTab.webp')",
        bannermob: "url('assets/hero/bannerMobile.webp')",
        bannerHeader: "url('assets/header/header.png')",
        separator: "url('assets/separator/separator.png')",
      },
      fontFamily: {
        libre: ["Libre Baskerville", "serif"],
      },
    },
  },
  plugins: [],
};
