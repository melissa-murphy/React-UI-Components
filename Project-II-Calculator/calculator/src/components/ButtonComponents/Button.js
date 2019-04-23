import React from "react";
import "./Buttons.scss";

const Button = props => {
  return (
    <div>
      <button>{props.data}</button>
    </div>
  );
};

export default Button;
