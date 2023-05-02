import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AddComponent() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      var Data = await axios.get("http://localhost:3001/products");
      setProducts(Data.data);
      console.log(Data.data);
    } catch (error) {
      console.error(error);
      alert("Error in getting products");
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="container">
      <div className="text-secondary-emphasis mt-3 fs-4"> Products</div>
      <Link to={"/home"}>
        <button className="btn btn-success mt-2"> New</button>
      </Link>
      <hr></hr>
      <div className="row g-0">
        {products.map((product) => {
          const { available_units, cost, product_name } = product;
          return (
            <div
              className="d-flex flex-row card m-3"
              style={{ maxWidth: "15rem" }}
            >
              <div className="col-3">
                {/* <img src="..." className="img-fluid rounded-start"></img> */}
                <i className="fa fa-solid fa-image fa-lg img-fluid ms-1"></i>
              </div>
              <div className="col-9">
                <div className="card-header text-success fw-bolder">
                  {product_name}
                </div>
                <div className="card-body">
                  <p className="card-text">Availabe: {available_units} units</p>
                  <p>
                    {" "}
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
