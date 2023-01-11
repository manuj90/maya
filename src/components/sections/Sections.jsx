import React from "react";
import Button from "../button/Button";

const Sections = () => {
  return (
    <div className="md:container m-auto w-10/12 my-16 space-y-6">
      <div className="flex justify-end bg-fance ">
        <div className=" p-10 md:p-20 gap-5 flex flex-col items-center w-full md:w-5/12 text-white backdrop-blur-xl bg-opacity-60 bg-red-maya">
          <h2 className="uppercase text-3xl font-bold">nosotros</h2>
          <p className="text-sm font-light text-center">
            Conocenos, te invitamos a que entres en esta familia que es maya
            metalúrgica.
          </p>

          <Button url="/about" bg="white" text="red-maya">
            conocé mas
          </Button>
        </div>
      </div>

      <div className="flex justify-start  bg-bars bg-center bg-cover">
        <div className="p-10 md:p-20 gap-5 flex flex-col items-center w-full md:w-5/12 text-white backdrop-blur-xl bg-opacity-60 bg-red-maya">
          <h2 className="uppercase text-3xl font-bold">productos</h2>
          <p className="text-sm font-light text-center">
            Contamos con una amplia variedad de hierros, tubos y varillas, para
            tu obra o proyecto.
          </p>

          <Button url="/products" bg="white" text="red-maya">
            conocé mas
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sections;
