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
      <div className="col-6 ">
        <div className="row">
          <label for="salesprice" className="col-4 fw-semibold">
            Sales price
          </label>
          <div id="salesprice" name="salesprice" className="col-8">
            &#8377; 1.00
          </div>
        </div>
        <div className="row mt-2">
          <label for="cost" className="col-4 fw-semibold  ">
            Cost
          </label>

          <div id="cost" name="cost" className="col-8">
            &#8377; 0.00
          </div>
        </div>
        <div className="row mt-2">
          <label for="productcategory" className="col-4 fw-semibold">
            Product Category
          </label>
          <div id="productcategory" name="productcategory" className="col-8">
            All
          </div>
        </div>
        <div className="row mt-2">
          <label for="internalreference" className="col-4 fw-semibold">
            Internal Reference
          </label>
        </div>
        <div className="row mt-2">
          <label for="barcode" className="col-4 fw-semibold">
            Barcode
          </label>
        </div>
        <div className="row mt-2">
          <label for="producttags" className="col-4 fw-semibold">
            Product Tags
          </label>
        </div>
      </div>
      <div>
        <h6> INTERNAL NOTES</h6>
        <hr></hr>
        <textarea
          rows="2"
          cols={"140"}
          id="TITLE"
          placeholder=" This note is only for internal purposes"
        ></textarea>
      </div>
    </div>
  );
}

export default ProductInfo;
