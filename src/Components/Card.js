import React from "react";

function Card({ obj }) {
  return (
    <div className="col">
      <div
        className="card shadow d-flex justify-content-center align-items-center"
        style={{ height: "50px" }}
      >
        <div className="row no-gutters h-50">
          <div className="col-4">
            <i className={obj.icon}></i>
          </div>
          <div className="col-7">
            <span>{obj.value}</span> <br />
          </div>
        </div>
        <span className="wrap">{obj.name}</span>
      </div>
    </div>
  );
}

export default Card;
