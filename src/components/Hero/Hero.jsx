import React from "react";

const Hero = () => {
  return (
    <div className="bg-bannermob md:bg-bannertab lg:bg-banner bg-cover bg-center h-[35rem] text-white py-10 font-libre">
      <div className="uppercase flex flex-col justify-end h-full mx-2 md:container md:m-auto">
        <h1 className="text-7xl md:text-9xl font-bold tracking-wide">Maya</h1>
        <h2 className="text-sm md:text-2xl font-semibold tracking-wide md:tracking-wider">
          Metalúrgica y materiales
        </h2>
      </div>
    </div>
  );
};

export default Hero;
