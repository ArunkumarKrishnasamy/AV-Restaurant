import React, { useState } from "react";

import Product from "./Product";
import ProductInfo from "../ProductInfo";
import { useFormik } from "formik";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import Card from "./Card";

function Home() {
  const navigate = useNavigate();
  const [inventory, setInventory] = useState(false);
  const formik = useFormik({
    initialValues: {
      product_name: "",
      available_units: "10",
      cost: "1200",
      product_tags: "inventory",
    },
    validate: (values) => {
      const errors = {};
      if (!values.product_name) {
        errors.product_name = "Product Name can't be Empty";
      }
      if (!values.available_units) {
        errors.available_units = "Please Enter Available No. of Units";
      }
      if (!values.cost) {
        errors.cost = "Please Enter the Product Cost";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:3001/products", values, {
          headers: {
            Authorization: window.localStorage.getItem("apptoken"),
          },
        });
        alert("Product added");
        navigate("/products");
      } catch (error) {
        console.error(error);
        alert("Error in submitting");
      }
    },
  });
  let Array = [
    {
      icon: "fa fa-solid fa-list fa-xl",
      name: "Extra Prices",
      value: 0,
    },
    {
      icon: "fa fa-sharp fa-solid fa-cubes fa-xl",
      name: "On Hand",
      value: 0.0,
    },
    {
      icon: "fa fa-sharp fa-solid fa-cubes fa-xl",
      name: "Forecasted",
      value: 0.0,
    },
    { icon: "fa fa-solid fa-arrow-right fa-xl", name: "In", value: 0 },
    {
      icon: "fa fa-solid fa-rotate-right fa-xl",
      name: "Reordering...",
      value: 0,
    },
  ];
  return (
    <div className="container content">
      <div className=" container-fluid border border-secondary-subtle">
        <div className="border border-bottom">
          <div className="m-2">
            <div className="container  ">
              <div className="row d-flex justify-content-end  dashboard p-2">
                <div className="col-4 heading "></div>
                <div className="col-8  ">
                  <div className="row d-flex justify-content-end ">
                    {Array.map((obj) => {
                      return <Card obj={obj} key={obj.name} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form>
          <div className="m-2">
            <div className="row container">
              <div className="col-10 d-flex justify-content-start ">
                <div className="title">
                  <button
                    className="btn btn-success  mb-2"
                    onClick={formik.handleSubmit}
                  >
                    Add New Product
                  </button>
                  <h6 className="mt-2">Product Name</h6>
                  <div>
                    <i className="fa  fa-2x fa-star"></i>
                    <input
                      className="fs-2 text-muted border border-0"
                      placeholder="e.g. Cheese Burger"
                      type="text"
                      name="product_name"
                      id="product_name"
                      onChange={formik.handleChange}
                      value={formik.values.product_name}
                      onBlur={formik.handleBlur}
                    ></input>
                    {formik.errors.product_name ? (
                      <span className="ms-1 fw-semi-bold text-warning">
                        {formik.errors.product_name}
                      </span>
                    ) : null}

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
                    <Link to={"/home"} className="col-7 ">
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
          </div>
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
                    Storable products are physical items for which you manage
                    the inventory level.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 ">
              <div className="row">
                <label for="available_units" className="col-4 fw-semibold">
                  Available Units
                </label>
                <div className="col-8">
                  <input
                    id="available_units"
                    name="available_units"
                    type="number"
                    value={formik.values.available_units}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <br />
                  {formik.errors.available_units ? (
                    <span className="ms-1 fw-semi-bold text-warning">
                      {formik.errors.available_units}
                    </span>
                  ) : null}
                </div>
              </div>
              <div className="row mt-2">
                <label for="cost" className="col-4 fw-semibold  ">
                  Cost
                </label>

                <div className="col-8">
                  &#8377;{" "}
                  <input
                    id="cost"
                    name="cost"
                    type="number"
                    value={formik.values.cost}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <br />
                  {formik.errors.cost ? (
                    <span className="ms-1 fw-semi-bold text-warning">
                      {formik.errors.cost}
                    </span>
                  ) : null}
                </div>
              </div>
              <div className="row mt-2">
                <label for="productcategory" className="col-4 fw-semibold">
                  Product Category
                </label>
                <div
                  id="productcategory"
                  name="productcategory"
                  className="col-8"
                >
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
        </form>
      </div>
    </div>
  );
}

export default Home;
