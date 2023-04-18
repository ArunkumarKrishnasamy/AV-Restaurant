import React from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import Card from "./Card";

let Array = [
  {
    icon: "fa fa-solid fa-list fa-xl",
    name: "Extra Prices",
    value: 0,
  },
  { icon: "fa fa-sharp fa-solid fa-cubes fa-xl", name: "On Hand", value: 0.0 },
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
function Dashboard() {
  return (
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
  );
}

export default Dashboard;
