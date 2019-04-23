import React from "react";
import ActionButton from "./ActionButton";
import NumberButton from "./NumberButton";
import MathButton from "./MathButton";

import "./Buttons.scss";

const ButtonContainer = () => {
  return (
    <div>
      <ActionButton />
      <NumberButton />
      <MathButton />
    </div>
  );
};

export default ButtonContainer;
