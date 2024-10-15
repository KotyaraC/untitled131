import React, { useState } from 'react';
import './ExpenseCalculator.css';

const ExpenseCalculator = () => {
    const [expenses, setExpenses] = useState([]);
    const [expenseInput, setExpenseInput] = useState('');

    const handleAddExpense = () => {
        if (expenseInput.trim() !== '') {
            setExpenses((prevExpenses) => [...prevExpenses, parseFloat(expenseInput)]);
            setExpenseInput('');
        }
    };

    const totalExpenses = expenses.reduce((total, expense) => total + expense, 0);

    return (
        <div className="expense-calculator">
            <h2>Калькулятор Витрат</h2>
            <input
                type="number"
                value={expenseInput}
                onChange={(e) => setExpenseInput(e.target.value)}
                placeholder="Введіть витрату"
                className="expense-input"
            />
            <button onClick={handleAddExpense} className="add-button">Додати Витрату</button>
            <h3>Загальна сума витрат: {totalExpenses.toFixed(2)} грн</h3>
            <ul className="expense-list">
                {expenses.map((expense, index) => (
                    <li key={index} className="expense-item">{expense.toFixed(2)} грн</li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseCalculator;
