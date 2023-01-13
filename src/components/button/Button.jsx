import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ children, url, bg, text }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(url)
    navigate(url);
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-${bg} w-fit px-6 py-2 rounded-full font-semibold text-${text} uppercase text-sm md:hover:scale-105 md:hover:shadow-lg transition duration-500 ease-in-out`}>
      {children}
    </button>
  );
};

export default Button;
