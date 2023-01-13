import React from "react";
import tools from "../../assets/services/tools.webp";
import worker from "../../assets/services/worker.webp";
import warehouse from "../../assets/services/warehouse.webp";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="md:container m-auto space-y-16 w-5/12">
      <ul className="flex flex-col md:flex-row gap-2 items-center justify-center uppercase text-center text-black font-bold ">
        <li className="w-64 md:w-72 h-28 flex items-center justify-center font-bold text-3xl bg-frame1 bg-cover hover:scale-105 transition-all ease-in-out duration-200">
          <Link to="/products">presupuesto</Link>
        </li>
        <li className=" w-64 md:w-72 h-28 flex items-center justify-center font-bold text-3xl bg-frame2 bg-cover hover:scale-105 transition-all ease-in-out duration-200">
          <Link to="/services">Servicios</Link>
        </li>
        <li className=" w-64 md:w-72 h-28 flex items-center justify-center font-bold text-3xl bg-frame3 bg-cover hover:scale-105 transition-all ease-in-out duration-200">
          <Link to="contact">Encontranos</Link>
        </li>
      </ul>

      <ul className="flex flex-col md:flex-row items-center justify-center uppercase gap-10 md:gap-32 text-red-maya font-bold text-xs">
        <li className="flex flex-col items-center">
          <img src={warehouse} alt="" className="h-16 w-16" />
          <p className="text-center mt-3">
            Stock <br /> permanente
          </p>
        </li>
        <li className="flex flex-col items-center">
          <img src={worker} alt="" className="h-16 w-16" />
          <p className="text-center mt-3">
            atención <br /> personalizada
          </p>
        </li>
        <li className="flex flex-col items-center">
          <img src={tools} alt="" className="h-16 w-16" />
          <p className="text-center mt-3">
            maquinaria <br /> moderna
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Services;
