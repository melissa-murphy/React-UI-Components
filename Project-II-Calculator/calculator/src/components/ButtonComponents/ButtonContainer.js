import React from "react";
import ActionButtonContainer from "./ActionButtonContainer";
import NumberButtonContainer from "./NumberButtonContainer";
import OperationalsContainer from "./OperationalsContainer";

import "./Buttons.scss";

const ButtonContainer = () => {
  return (
    <div>
      <ActionButtonContainer />
      <NumberButtonContainer />
      <OperationalsContainer />
    </div>
  );
};

export default ButtonContainer;
