import React from "react";
import ReactDOM from "react-dom";

const name = "Angela";
const currentDate = new Date();
const year = currentDate.getMonth();
ReactDOM.render(
  <div>
    <p>Created By {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
