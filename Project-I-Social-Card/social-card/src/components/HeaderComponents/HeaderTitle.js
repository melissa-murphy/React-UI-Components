import React from 'react';

import './Header.scss';

const HeaderTitle = () => {
  return (
    <div className="header-title">
      <div className="header-data">
        <p>Lambda School</p>
        <p>@LambdaSchool</p>
        <p>**timestamp here**</p>
      </div>
      <p>
        Let's learn React by building simple interfaces with components. Don't
        try to overthink it, just keep it simple and have fun.Once you feel
        comfortable usign components you are well on your way to mastering
        React!
      </p>
    </div>
  );
};

export default HeaderTitle;
