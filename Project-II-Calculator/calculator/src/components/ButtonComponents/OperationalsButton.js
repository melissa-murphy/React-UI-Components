import React from "react";
import "./Buttons.scss";

const mathOperationals = ["/", "X", "-", "+", "="];

const OperationalsButton = () => {
  return (
    <div className="operational-button-wrapper">
      {mathOperationals.map(symbol => {
        return (
          <button className="square-button" key={symbol}>
            {symbol}
          </button>
        );
      })}
    </div>
  );
};

export default OperationalsButton;
