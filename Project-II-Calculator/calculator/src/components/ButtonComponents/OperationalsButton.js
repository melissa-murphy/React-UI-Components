import React from "react";
import "./Buttons.scss";

const mathOperationals = ["/", "*", "+", "-", "="];

const OperationalsButton = () => {
  return (
    <div className="operational-button-container">
      {mathOperationals.map(symbol => {
        return <button className="square-button" key={symbol}>{symbol}</button>;
      })}
    </div>
  );
};

export default OperationalsButton;
