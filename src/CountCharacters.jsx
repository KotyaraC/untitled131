import React, { useState } from 'react';
import './CountCharacters.css';

const CountCharacters = () => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className="count-characters-container">
            <h2 className="count-characters-title">Підрахунок Символів у Тексті</h2>
            <textarea
                value={text}
                onChange={handleChange}
                placeholder="Введіть текст тут..."
                className="text-area"
            />
            <div className="character-count">
                Кількість символів: <span className="count">{text.length} ПРОБІЛ ТАКОЖ СИМВОЛ!!!</span>
            </div>
        </div>
    );
};

export default CountCharacters;
