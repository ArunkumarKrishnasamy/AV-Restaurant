import React from "react";
import Dashboard from "./Dashboard";
import Main from "./Main";
import { useFormik } from "formik";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import Card from "./Card";

function Product() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      product_name: "",
      available_units: 10,
      cost: 1,
      product_tags: "inventory",
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
      <div className="m-2">
        <form>
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
        </form>
      </div>
    </div>
  );
}

export default Product;
