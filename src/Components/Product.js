import React from "react";
import Dashboard from "./Dashboard";
import Main from "./Main";

function Product() {
  return (
    <div className=" container-fluid border border-secondary-subtle">
      <div className="border border-bottom">
        <div className="m-2">
          <Dashboard />
        </div>
      </div>
      <div className="m-2">
        <Main />
      </div>
    </div>
  );
}

export default Product;
