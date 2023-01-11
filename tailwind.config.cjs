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
        about: "url('assets/sections/about.webp')",
        separator: "url('assets/separator/separator.png')",
        frame1: "url('assets/services/Frame-1.webp')",
        frame2: "url('assets/services/Frame-2.webp')",
        frame3: "url('assets/services/Frame-3.webp')",
        fance: "url('assets/sections/fance.webp')",
        bars: "url('assets/sections/bars.webp')",
      },
      fontFamily: {
        libre: ["Libre Baskerville", "serif"],
      },
    },
  },
  plugins: [],
};
