import React from 'react';
import './Buttons.scss';

function buttonClick() {
  console.log(this.props.data);
}

const Button = props => {
  return (
    <div>
      <button onClick={buttonClick()}>{props.data}</button>
    </div>
  );
};

export default Button;
