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
        hero: "url('assets/hero/hero.png')",
        heroTab: "url('assets/hero/heroTab.png')",
        heroMob: "url('assets/hero/heroMob.png')",

        aboutHeader: "url('assets/headers/aboutHeader.png')",
        aboutHeaderTab: "url('assets/headers/aboutHeaderTab.png')",
        aboutHeaderMob: "url('assets/headers/aboutHeaderMob.png')",

        productsHeader: "url('assets/headers/productsHeader.png')",
        productsHeaderTab: "url('assets/headers/productsHeaderTab.png')",
        productsHeaderMob: "url('assets/headers/productsHeaderMob.png')",

        servicesHeader: "url('assets/headers/servicesHeader.png')",
        servicesHeaderTab: "url('assets/headers/servicesHeaderTab.png')",
        servicesHeaderMob: "url('assets/headers/servicesHeaderMob.png')",

        newsHeader: "url('assets/headers/newsHeader.png')",
        newsHeaderTab: "url('assets/headers/newsHeaderTab.png')",
        newsHeaderMob: "url('assets/headers/newsHeaderMob.png')",

        bg1: "url('assets/bgElements/bg1.png')",
        bg2: "url('assets/bgElements/bg2.png')",
        bg3: "url('assets/bgElements/bg3.png')",

        contact: "url('assets/bgElements/contact.png')",

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
