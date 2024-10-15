import React, { useState } from 'react';
import './SumCalculator.css';

function SumCalculator() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    // Обчислюємо суму
    const sum = Number(number1) + Number(number2);

    return (
        <div className="calculator-container">
            <h1>Перерахунок Суми</h1>
            <input
                type="number"
                value={number1}
                onChange={(e) => setNumber1(e.target.value)}
                className="number-input"
                placeholder="Введіть перше число"
            />
            <input
                type="number"
                value={number2}
                onChange={(e) => setNumber2(e.target.value)}
                className="number-input"
                placeholder="Введіть друге число"
            />
            <h2>Сума: {sum}</h2>
        </div>
    );
}

export default SumCalculator;
