import React from "react";

function ServicesGrid() {
  return (
    <div className="flex flex-col flex-wrap md:flex-row gap-10 justify-center p-10 w-9/12 m-auto">
      <div className="group w-56 h-52 border border-red-500 p-8 text-center uppercase font-extrabold tracking-wide flex justify-center items-center hover:scale-110 transition duration-200">
        <p className="">Torneria y mecánica industrial</p>
      </div>
      <div className="group w-56 h-52 border border-red-500 p-8 text-center uppercase font-extrabold tracking-wide flex justify-center items-center transition duration-200">
        <p>fabricación de piezas a medida</p>
      </div>
      <div className="group w-56 h-52 border border-red-500 p-8 text-center uppercase font-extrabold tracking-wide flex justify-center items-center transition duration-200">
        <p>reparación de máquinas agricolas / forestales / industriales</p>
      </div>
      <div className="group w-56 h-52 border border-red-500 p-8 text-center uppercase font-extrabold tracking-wide flex justify-center items-center transition duration-200">
        <p>corte y plegado de chapa</p>
      </div>
      <div className="group w-56 h-52 border border-red-500 p-8 text-center uppercase font-extrabold tracking-wide flex justify-center items-center transition duration-200">
        <p>mesa de corte plasma c.n.c</p>
      </div>
      <div className="group w-56 h-52 border border-red-500 p-8 text-center uppercase font-extrabold tracking-wide flex justify-center items-center transition duration-200">
        {" "}
        <p>cilindrado</p>{" "}
      </div>
      <div className="group w-56 h-52 border border-red-500 p-8 text-center uppercase font-extrabold tracking-wide flex justify-center items-center transition duration-200">
        <p>cortes a serrucho (aceros)</p>
      </div>
      <div className="group w-56 h-52 border border-red-500 p-8 text-center uppercase font-extrabold tracking-wide flex justify-center items-center transition duration-200">
        <p>venta de materiales metalúrgicos</p>
      </div>
    </div>
  );
}

export default ServicesGrid;
