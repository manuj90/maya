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
        hero: "url('assets/hero/hero.webp')",
        heroTab: "url('assets/hero/heroTab.webp')",
        heroMob: "url('assets/hero/heroMob.webp')",

        aboutHeader: "url('assets/headers/aboutHeader.webp')",
        aboutHeaderTab: "url('assets/headers/aboutHeaderTab.webp')",
        aboutHeaderMob: "url('assets/headers/aboutHeaderMob.webp')",

        productsHeader: "url('assets/headers/productsHeader.webp')",
        productsHeaderTab: "url('assets/headers/productsHeaderTab.webp')",
        productsHeaderMob: "url('assets/headers/productsHeaderMob.webp')",

        servicesHeader: "url('assets/headers/servicesHeader.webp')",
        servicesHeaderTab: "url('assets/headers/servicesHeaderTab.webp')",
        servicesHeaderMob: "url('assets/headers/servicesHeaderMob.webp')",

        newsHeader: "url('assets/headers/newsHeader.webp')",
        newsHeaderTab: "url('assets/headers/newsHeaderTab.webp')",
        newsHeaderMob: "url('assets/headers/newsHeaderMob.webp')",

        bg1: "url('assets/bgElements/bg1.webp')",
        bg2: "url('assets/bgElements/bg2.webp')",
        bg3: "url('assets/bgElements/bg3.webp')",

        contact: "url('assets/bgElements/contact.webp')",

        about: "url('assets/sections/about.webp')",
        separator: "url('assets/separator/separator.webp')",
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
