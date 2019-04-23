import React from 'react';
import CardBanner from './CardBanner';

import './Card.scss';

const CardContent = () => {
  return (
    <div className="card-content">
      <CardBanner />
      <div className="card-text">
        <h4>Get Started With React</h4>
        <p>
          React makes it painless to create interactive UIs. Design simple views
          for each state in your application
        </p>
      </div>
    </div>
  );
};

export default CardContent;
