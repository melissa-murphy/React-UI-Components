import React from "react";
import DisplayContainer from "./DisplayComponents/DisplayContainer";
import ButtonContainer from "./ButtonComponents/ButtonContainer";

import "../App.scss";
const CalculatorContainer = () => {
  return (
    <div className="calculator-container">
      <DisplayContainer />
      <ButtonContainer />
    </div>
  );
};

export default CalculatorContainer;
