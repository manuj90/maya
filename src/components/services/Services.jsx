import React from "react";
import tools from "../../assets/services/tools.webp";
import worker from "../../assets/services/worker.webp";
import warehouse from "../../assets/services/warehouse.webp";

const Services = () => {
  return (
    <div className="md:container m-auto space-y-16 w-5/12">
      <ul className="flex flex-col md:flex-row gap-2 items-center justify-center uppercase text-center text-white font-bold ">
        <li className="w-64 md:w-72 h-28 flex items-center justify-center font-bold text-lg bg-[url('https://images.pexels.com/photos/1381938/pexels-photo-1381938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-right-bottom grayscale">
          presupuesto
        </li>
        <li className=" w-64 md:w-72 h-28 flex items-center justify-center font-bold text-lg bg-[url('https://images.pexels.com/photos/5294/pattern-abstract-honeycomb-metal.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-right-bottom grayscale">
          servicios
        </li>
        <li className=" w-64 md:w-72 h-28 flex items-center justify-center font-bold text-lg bg-[url('https://images.pexels.com/photos/10420338/pexels-photo-10420338.jpeg')] bg-right-bottom grayscale">
          encontranos
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
