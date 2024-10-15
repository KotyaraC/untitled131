import React, { useState } from 'react';
import './ValueSlider.css'; 

function ValueSlider() {
    const [value, setValue] = useState(50);

    const handleSliderChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="slider-container">
            <h1>Вибране Значення: {value}</h1>
            <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={handleSliderChange}
                className="slider"
            />
            <div className="value-display">{value}</div>
        </div>
    );
}

export default ValueSlider;
