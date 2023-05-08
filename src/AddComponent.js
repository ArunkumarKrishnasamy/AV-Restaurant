import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AddComponent() {
  const [products, setProducts] = useState([]);
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
    <div className="container">
      <div className="text-secondary-emphasis mt-3 fs-4">
        <h1>Products</h1>
        <div className="row">
          <div className="col d-flex justify-content-start">
            <Link to={"/home"}>
              <button className="btn btn-success mt-2"> New</button>
            </Link>
          </div>
          <div className="col d-flex justify-content-end">
            <button
              className="btn btn-danger mt-2"
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
                  <div className="">
                    <span className="d-flex justify-content-start align-items-start">
                      {product_name}
                    </span>
                    <span className="d-flex justify-content-end align-items-end">
                      <button
                        onClick={() => {
                          HandleDelete(id);
                        }}
                        className=" btn btn-sm btn-danger"
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
