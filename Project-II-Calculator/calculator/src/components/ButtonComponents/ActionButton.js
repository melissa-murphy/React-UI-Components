import React from 'react';
import './Buttons.scss';

// need function to clear all and replace with '0'

const ActionButton = () => {
    return (
        <div>
            <button className="action-button">Clear</button>
            <button className="action-button">0</button>
        </div>
    )
};

export default ActionButton;
