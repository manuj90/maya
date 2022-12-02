import React from "react";

const Carousel = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 justify-between m-auto md:container mt-10 w-9/12 md:w-10/12 items-center">
      <div>
        <p className="text-center md:text-left text-slate-600 font-light">
          Metalúrgica Maya fue fundada en 1969 por nuestro padre, Alfonso Maya,
          en Concordia (Entre Ríos). Con el objetivo de crear una industria
          sólida, comenzó con los cimientos de lo que hoy es nuestro espacio de
          trabajo, nuestra empresa. A lo largo de los años este se fue
          ampliando, dándonos así también la posibilidad de ampliar nuestros
          servicios y nuestra planta de trabajadores.
          <br />
          <br />
          En el año 1995 decidimos, junto con el apoyo de nuestra familia,
          ampliar y desarrollar el área de Materiales, a cargo de Alicia Maya,
          este sector se encarga de la comercialización y logística de los
          mismos. Trabajando en conjunto con Roberto Maya (hijo), encargado del
          área de Metalúrgica, ambas áreas trabajan codo a codo para que podamos
          ser líderes en la región y ofrecer un servicio integral.
          <br />
          <br />
          Nos enorgullece poder seguir con el legado de nuestro padre, con sus
          valores y convicciones a lo largo de estos años. Nada de esto sería
          posible sin el apoyo incondicional de nuestra madre Higinia, el pilar
          fundamental de "Maya Metalúrgica y Materiales", por este motivo es que
          nos gusta referirnos a nosotros como una familia, cada empleado y
          miembro es considerado un hermano, y era algo que nuestro padre
          siempre quiso que así fuera.
        </p>
      </div>
      <div className="order-first md:order-last">
        <picture>
          <source
            srcSet="https://upload.wikimedia.org/wikipedia/commons/a/a3/Cosplay_of_Pikachu%2C_Fanime_2015_%2818125488996%29.jpg"
            type="image/webp"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Cosplay_of_Pikachu%2C_Fanime_2015_%2818125488996%29.jpg"
            alt="pikachu"
            className="max-w-[25rem]"
          />
        </picture>
      </div>
    </div>
  );
};

export default Carousel;
