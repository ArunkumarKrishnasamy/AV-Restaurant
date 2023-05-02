import React from "react";

import Product from "./Product";
import ProductInfo from "../ProductInfo";

function Home() {
  return (
    <div className="container content">
      <Product />
      <ProductInfo />
    </div>
  );
}

export default Home;
