import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AddComponent() {
  const [products, setProducts] = useState([]);
  const [starFilled, setStarFilled] = useState(false);
  const toggleStar = (id) => {
    setStarFilled(!starFilled);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    let ask = window.confirm("Are You sure do you want to Log Out?");
    if (ask) {
      window.localStorage.removeItem("apptoken");
      alert("Logged Out Successfully");
      navigate("/");
    }
  };
  const fetchProducts = async () => {
    try {
      var Data = await axios.get("http://localhost:3001/products", {
        headers: { Authorization: window.localStorage.getItem("apptoken") },
      });
      setProducts(Data.data);
    } catch (error) {
      console.error(error);
      alert("Unauthorised access, Please logIn");
      navigate("/");
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const HandleDelete = async (id) => {
    try {
      let ask = window.confirm("Are You sure to Delete this?");
      if (ask) {
        await axios.delete(`http://localhost:3001/products/${id}`, {
          headers: { Authorization: window.localStorage.getItem("apptoken") },
        });
        alert("Deleted");
        fetchProducts();
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };
  return (
    <div className="container tex-center">
      <div className="text-secondary-emphasis mt-3 fs-4">
        <div className="row">
          <div className="col-8">
            <h4 className="text-muted">Products</h4>
          </div>
          <div className="col-4 ">
            <div className="form-control">
              <span>
                <i class="fa fa-search" aria-hidden="true"></i>
              </span>
              <span className="ms-1">
                <input
                  type="text"
                  className=" mt-1"
                  name="search"
                  id="search"
                  placeholder="Search...."
                />
              </span>
            </div>
          </div>
        </div>
        <div className="row align-items-end mt-2">
          <div className="col-5">
            <Link to={"/home"}>
              <button className="btn btn-success"> NEW</button>
            </Link>
          </div>
          <div className="col-5 row">
            <div className=" col-3 filterBy">
              <span>
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-filled/50/filter--v1.png"
                  alt="filter--v1"
                />
              </span>
              <span className="fs-6 text-dark">Filters</span>
            </div>
            <div className="col-3 groupBy">
              <span>
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/sf-regular-filled/48/layers.png"
                  alt="layers"
                />
              </span>
              <span className="fs-6 text-dark">Groupby</span>
            </div>
            <div className="col-4 favourites">
              <span>
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-glyphs/30/star--v1.png"
                  alt="star--v1"
                />
              </span>
              <span className="fs-6 text-dark">Favourites</span>
            </div>
            <div className="col-2 pagination">
              <button className="btn">
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-glyphs/30/less-than.png"
                  alt="less-than"
                />
              </button>
              <button className="btn">
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-glyphs/50/more-than.png"
                  alt="more-than"
                />
              </button>
            </div>
          </div>
          <div className="col-2">
            <button
              className="btn btn-danger ms-5"
              onClick={() => {
                handleLogout();
              }}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="row g-0">
        {products.map((product) => {
          const { available_units, cost, product_name, id } = product;
          return (
            <div
              className="d-flex flex-row card m-3"
              style={{ maxWidth: "15rem" }}
            >
              <div className="col-3">
                <i className="fa fa-solid fa-image fa-lg img-fluid ms-1"></i>
              </div>
              <div className="col-9">
                <div className="card-header text-success fw-bolder">
                  <div className="row">
                    <span className="col-6 d-flex justify-content-start align-items-start">
                      {product_name}
                    </span>

                    <span
                      className={`star col-3 mt-0 ${
                        starFilled ? "star-filled" : ""
                      }`}
                      onClick={() => {
                        toggleStar(id);
                      }}
                    >
                      &#9734;
                    </span>
                    <span className="col-1  align-items-end">
                      <button
                        onClick={() => {
                          HandleDelete(id);
                        }}
                        className=" btn btn-sm btn-danger "
                      >
                        X
                      </button>
                    </span>
                  </div>
                </div>

                <div className="card-body">
                  <p className="card-text">Availabe: {available_units} units</p>
                  <p>
                    Cost: <i class="fa fa-inr"></i>
                    {cost}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AddComponent;
