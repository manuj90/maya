import React from "react";
import Header from "../../components/header/Header";
import Maintenance from "../../components/maintenance/Maintenance";

function Products() {
  return (
    <>
      <Header section="bg-productsHeaderMob md:bg-productsHeaderTab lg:bg-productsHeader">Productos</Header>
      <Maintenance />
    </>
  );
}

export default Products;
