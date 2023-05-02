import React from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import Product from "./Product";

function Inventory() {
  return (
    <>
      <Product />
      <div className="container row m-3">
        <div className="col-6 ">
          <div className="fw-bolder operation-heading ">OPERATIONS</div>
          <div className="row fw-semibold m-3">
            <div className="col-3">Routes</div>
            <div className="col-6">
              <i
                class="fa fa-solid fa-arrow-right"
                style={{ color: "#0f62f0" }}
              ></i>
              <span className="ms-2">View Diagram</span>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="fw-bolder operation-heading">LOGISTICS</div>
          <div className="row mt-3">
            <label for="person_responsible" className="col-4 fw-semibold">
              Responsible
            </label>
            <div
              id="person_responsible"
              name="person_responsible"
              className="col-3"
            >
              Arun
            </div>
          </div>
          <div className="row mt-1">
            <label for="weight" className="col-4 fw-semibold">
              Weight
            </label>
            <div id="weight" name="weight" className="col-3">
              0.00
            </div>
            <div className="col-3">Kg</div>
          </div>
          <div className="row mt-1">
            <label for="volume" className="col-4 fw-semibold">
              Volume
            </label>
            <div id="volume" name="volume" className="col-3">
              0.00
            </div>
            <div className="col-3">
              m<sup>3</sup>
            </div>
          </div>
          <div className="row mt-1">
            <label for="leadtime" className="col-4 fw-semibold">
              Customer Lead Time
            </label>
            <div id="leadtime" name="leadtime" className="col-3">
              0.00
            </div>
            <div className="col-3">days</div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 mt-1">
            <h6>
              <u>DESCRIPTION FOR RECEIPTS</u>
            </h6>
            <textarea
              rows={"2"}
              cols={"60"}
              placeholder="This note is added to receipt orders (e.g. where to store the product in the warehouse)."
            ></textarea>
          </div>
          <div className="col-6 mt-1">
            <h6>
              <u>DESCRIPTION FOR DELIVERY ADDRESS</u>
            </h6>
            <textarea
              rows={"2"}
              cols={"60"}
              placeholder="This note is added to delivery orders."
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inventory;
