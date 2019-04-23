import React from "react";
import "./Buttons.scss";

const mathOperationals = ["/", "*", "+", "-", "="];

const OperationalsButton = () => {
  return (
    <div className="operational-button">
      {mathOperationals.map(symbol => {
        return <div>{symbol}</div>;
      })}
    </div>
  );
};

export default OperationalsButton;
