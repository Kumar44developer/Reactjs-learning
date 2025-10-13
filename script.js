import React from "react";
import ReactDOM from "react-dom";

const fName = "Angela";
const lName = "Yu";
const num = 7;

ReactDOM.render(
  <div>
    <h1>Hello {fName}!</h1>
    <p>Your lucky number is {3 + 4}</p>
      <p>Your Random Number is {Math.floor(Math.random() * 10)}</p>
    {/* genrating the random number  */}
    {/* see here we have to use the code like this itself */}
    {/* you can add any javascript expression inbetween this curly braces */}
    {/* see we are going learning the expressin here */}
    {/* see 9here we are learning the addition of the two elements */}
    <p>Hello {fName} {lName}!</p>
    
  </div>,
  document.getElementById("root")
);












