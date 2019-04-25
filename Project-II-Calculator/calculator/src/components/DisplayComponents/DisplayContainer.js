import React from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import "./Display.scss";

const DisplayContainer = () => {
  return (
    <div className="display-container">
      <CalculatorDisplay />
    </div>
  );
};

export default DisplayContainer;
