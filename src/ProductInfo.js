import React from "react";

function ProductInfo() {
  return (
    <div className="row">
      <div className="col-6">
        <div className="row">
          <div className="col-4">
            <h6>Product Type :</h6>
          </div>
          <div className="col-8">
            <span> Storable Product</span>
            <br />
            <p className="fst-italic text-muted mt-3">
              Storable products are physical items for which you manage the
              inventory level.
            </p>
          </div>
        </div>
      </div>
      <div className="col-6">ProductInfo</div>
    </div>
  );
}

export default ProductInfo;
