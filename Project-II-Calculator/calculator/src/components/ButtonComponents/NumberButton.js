import React from "react";
import Button from "./Button";
import "./Buttons.scss";

const calcNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const NumberButton = function CreateNumberButtons() {
  return (
    <div className="number-button">
      {calcNumbers.map(number => {
        return <button>{number}</button>;
      })}
    </div>
  );
}


export default NumberButton;
