import React, { useState } from 'react';
import './HiddenText.css';

function HiddenText() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="hidden-text-container">
            <button onClick={toggleVisibility} className="toggle-button">
                {isVisible ? 'Сховати текст' : 'Показати текст'}
            </button>
            {isVisible && (
                <p className="text">
                    Тут могла бути ваша реклама, але ви за неї не заплатили!
                </p>
            )}
        </div>
    );
}

export default HiddenText;
