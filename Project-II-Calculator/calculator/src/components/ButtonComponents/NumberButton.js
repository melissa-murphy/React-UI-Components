import React from "react";
import "./Buttons.scss";

const calcNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const NumberButton = () => {
  return (
    <div className="number-button">
      {calcNumbers.map(number => {
        return <button className="square-button" key={number}>{number}</button>;
      })}
    </div>
  );
};

export default NumberButton;
