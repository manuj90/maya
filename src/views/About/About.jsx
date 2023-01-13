import React from "react";
import Carousel from "../../components/carousel/Carousel";
import Header from "../../components/header/Header";
import Values from "../../components/values/Values";

const About = () => {
  return (
    <div className="">
      <Header section="bg-aboutHeaderMob md:bg-aboutHeaderTab lg:bg-aboutHeader">Nosotros</Header>
      <Carousel />
      <Values />
    </div>
  );
};

export default About;
