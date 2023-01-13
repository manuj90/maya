import React from "react";
import Button from "../button/Button";

const Solutions = () => {
  return (
    <div className="text-center mx-10 md:mx-24 flex flex-col gap-5 justify-center items-center py-10">
      <h1 className="text-3xl font-bold text-gray-600 tracking-wide uppercase">
        Soluciones integrales
      </h1>
      <div className="text-md text-gray-500">
        <p className="">
          Atención personalizada, personal capacitado y sólida respuesta de
          calidad y servicios.
        </p>
        <p>
          La mejor opción para el asesoramiento y adquisición de productos
          metalúrgicos.
        </p>
      </div>
      <Button url="/about" bg="red-maya" text="white">
        conocénos
      </Button>
    </div>
  );
};

export default Solutions;
