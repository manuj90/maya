import React from "react";
import Header from "../../components/header/Header";
import Maintenance from "../../components/maintenance/Maintenance";

function News() {
  return (
    <>
      <Header section="bg-newsHeaderMob md:bg-newsHeaderTab lg:bg-newsHeader">
        Novedades
      </Header>
      <Maintenance />
    </>
  );
}

export default News;
