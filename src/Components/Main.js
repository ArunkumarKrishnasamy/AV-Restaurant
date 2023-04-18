import React from "react";
import ProductInfo from "../ProductInfo";

function Main() {
  return (
    <>
      <div className="row container">
        <div className="col-10 d-flex justify-content-start ">
          <div className="title">
            <h6 className="mt-3">Product Name</h6>
            <div>
              <i className="fa  fa-2x fa-star"></i>
              <span className="fs-2 text-muted"> e.g. Cheese Burger</span>
              <br />
              <div className="row mt-3">
                <span className="col-5">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Can be Sold"
                      id="Forsale"
                    />
                    <label className="form-check-label" for="Forsale">
                      Can be Sold
                    </label>
                  </div>
                </span>
                <span className="col-7">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Can be Purchased"
                      id="Forpurchase"
                    />
                    <label className="form-check-label" for="Forpurchase">
                      Can be Purchased
                    </label>
                  </div>
                </span>
              </div>
            </div>

            <div className=" row mt-3 SwitchTab p-1 ">
              <div className="col-7 ">General Information</div>
              <div style={{ borderLeft: "1px solid black" }} className="col-5 ">
                Inventory
              </div>
            </div>
          </div>
        </div>
        <div className="col-2  ">
          <div className="  profilepic   d-flex img-thumbnail justify-content-center rounded align-items-center">
            <i className="fa fa-2x fa-camera d-flex justify-content-center"></i>
          </div>
          <br />
        </div>
      </div>
      <hr></hr>
      <ProductInfo />
    </>
  );
}

export default Main;
