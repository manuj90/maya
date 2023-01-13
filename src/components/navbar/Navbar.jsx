import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/maya.webp";

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [show, setShow] = useState(false);
  const [activeLink, setActiveLink] = useState()
  const location = useLocation()

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 719;

  const handleMenu = () => {
    isMobile ? setShow((show) => !show) : null;
    window.scrollTo(0, 0);
  };

  let url = window.location.pathname;

  const links = [
    { name: "inicio", link: "/" },
    { name: "nosotros", link: "/about" },
    { name: "productos", link: "/products" },
    { name: logo, link: "/" },
    { name: "servicios", link: "/services" },
    { name: "novedades", link: "/news" },
    { name: "contacto", link: "/contact" },
  ];

  return (
    <nav className="w-full sticky top-0 uppercase font-semibold text-slate-500 cursor-pointer z-50">
      <div className="flex py-1 md:py-4 bg-white md:justify-center md:h-12 ">
        <ul className="flex flex-col md:flex-row gap-4 lg:gap-10 px-10 justify-center items-center w-full md:items-start md:justify-center">
          {links.map((link, index) => {
            if (link.name !== logo) {
              return (
                <li
                  key={index}
                  className={`hover:text-slate-700 transition duration-400 ease-in-out ${
                    isMobile && show ? "visible" : isMobile ? "hidden" : "block"
                  } ${
                    activeLink === link.link
                      ? "underline decoration-red-maya decoration-4 underline-offset-2"
                      : null
                  }`}>
                  <Link to={link.link} onClick={handleMenu}>
                    {link.name}
                  </Link>
                </li>
              );
            } else {
              return (
                <li key={index} className="order-first md:order-none">
                  <div
                    className=" bg-white rounded-lg px-1 pb-1 cursor-default transition duration-200 ease-in-out flex flex-col items-center"
                    onClick={handleMenu}>
                    <Link to={isMobile ? null : link.link}>
                      <picture>
                        <source srcSet={link.name} type="image/webp" />
                        <img
                          src={link.name}
                          alt="Maya Logo"
                          className="h-10 w-10 md:h-14 md:w-14"
                        />
                      </picture>
                      {isMobile ? (
                        <p className="text-xs text-slate-500">Menu</p>
                      ) : null}
                    </Link>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
