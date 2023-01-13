import React from "react";

function ServicesGrid() {
  return (
    <div className="flex flex-col flex-wrap md:flex-row gap-10 justify-center w-fit md:w-7/12 p-10 m-auto">
      <div className="group bg-bg1 bg-cover w-56 h-52 border border-red-500 p-8 text-red-100 text-center uppercase font-extrabold tracking-wide flex justify-center items-center hover:scale-105 transition duration-300 hover:shadow-lg rounded-xl">
        <p className="">Torneria y mecánica industrial</p>
      </div>
      <div className="group bg-bg2 bg-cover w-56 h-52 border border-red-500 p-8 text-red-100 text-center uppercase font-extrabold tracking-wide flex justify-center items-center hover:scale-105 transition duration-300 hover:shadow-lg rounded-xl">
        <p>fabricación de piezas a medida</p>
      </div>
      <div className="group bg-bg3 bg-cover w-56 h-52 border border-red-500 p-8 text-red-100 text-center uppercase font-extrabold tracking-wide flex justify-center items-center hover:scale-105 transition duration-300 hover:shadow-lg rounded-xl">
        <p>reparación de máquinas agricolas / forestales / industriales</p>
      </div>
      <div className="group bg-bg1 bg-cover w-56 h-52 border border-red-500 p-8 text-red-100 text-center uppercase font-extrabold tracking-wide flex justify-center items-center hover:scale-105 transition duration-300 hover:shadow-lg rounded-xl">
        <p>corte y plegado de chapa</p>
      </div>
      <div className="group bg-bg2 bg-cover w-56 h-52 border border-red-500 p-8 text-red-100 text-center uppercase font-extrabold tracking-wide flex justify-center items-center hover:scale-105 transition duration-300 hover:shadow-lg rounded-xl">
        <p>mesa de corte plasma c.n.c</p>
      </div>
      <div className="group bg-bg3 bg-cover w-56 h-52 border border-red-500 p-8 text-red-100 text-center uppercase font-extrabold tracking-wide flex justify-center items-center hover:scale-105 transition duration-300 hover:shadow-lg rounded-xl">
        {" "}
        <p>cilindrado</p>{" "}
      </div>
      <div className="group bg-bg1 bg-cover w-56 h-52 border border-red-500 p-8 text-red-100 text-center uppercase font-extrabold tracking-wide flex justify-center items-center hover:scale-105 transition duration-300 hover:shadow-lg rounded-xl">
        <p>cortes a serrucho (aceros)</p>
      </div>
      <div className="group bg-bg2 bg-cover w-56 h-52 border border-red-500 p-8 text-red-100 text-center uppercase font-extrabold tracking-wide flex justify-center items-center hover:scale-105 transition duration-300 hover:shadow-lg rounded-xl">
        <p>venta de materiales metalúrgicos</p>
      </div>
    </div>
  );
}

export default ServicesGrid;
