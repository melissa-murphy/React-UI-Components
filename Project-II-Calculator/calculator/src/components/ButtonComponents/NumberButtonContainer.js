import React from "react";
import NumberButton from "./NumberButton";
import OperationalsButton from "./OperationalsButton";

import "./Buttons.scss";

const NumberButtonContainer = () => {
  return (
    <div className="number-button-container">
      <NumberButton />
      <OperationalsButton />
    </div>
  );
};

export default NumberButtonContainer;