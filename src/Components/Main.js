import React from "react";
import ProductInfo from "../ProductInfo";

import Inventory from "./Inventory";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="row container">
        <div className="col-10 d-flex justify-content-start ">
          <div className="title">
            <h6 className="mt-2">Product Name</h6>
            <div>
              <i className="fa  fa-2x fa-star"></i>
              <span className="fs-2 text-muted"> e.g. Cheese Burger</span>
              <br />
              <div className="row mt-2">
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

            <div className=" row mt-1 SwitchTab p-1 ">
              <Link to={"/"} className="col-7 ">
                <button>General Information</button>
              </Link>
              <Link to={"/inventory"} className="col-5 ">
                <button>Inventory</button>
              </Link>
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
    </>
  );
}

export default Main;
