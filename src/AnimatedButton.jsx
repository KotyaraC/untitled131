import React, { useState } from 'react';
import './AnimatedButton.css';

const AnimatedButton = () => {
    const [isPressed, setIsPressed] = useState(false);

    const handleMouseDown = () => {
        setIsPressed(true);
    };

    const handleMouseUp = () => {
        setIsPressed(false);
    };

    return (
        <div className="button-container">
            <button
                className={`animated-button ${isPressed ? 'pressed' : ''}`}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                Натисни Мене
            </button>
        </div>
    );
};

export default AnimatedButton;
