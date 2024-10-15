import React, { useState } from 'react';
import './TextInput.css';  // Імпортуємо стилі

function TextInput() {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className="text-input-container">
            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Введіть текст..."
                className="text-input"
            />
            <p className="text-display">Введений текст: <span>{text}</span></p>
        </div>
    );
}

export default TextInput;
