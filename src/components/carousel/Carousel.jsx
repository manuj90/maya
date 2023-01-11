import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

import first from "../../assets/carrousel/one.webp";
import second from "../../assets/carrousel/two.webp";
import third from "../../assets/carrousel/three.webp";


const Carousel = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 justify-between m-auto container mt-10 w-9/12 md:w-10/12 items-center">

      <div className="p-4">
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

      <div className="md:p-4 sepia">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          className="w-36 md:w-80"
          >
          <SwiperSlide>
            <picture>
              <source srcSet={first} />
              <img src={first} alt="First Photo" />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <picture>
              <source srcSet={second} />
              <img src={second} alt="First Photo" />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <picture>
              <source srcSet={third} />
              <img src={third} alt="First Photo" />
            </picture>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
