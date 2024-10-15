import React, { useState } from 'react';
import './DatePicker.css';
const DatePicker = () => {
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    return (
        <div className="date-picker-container">
            <h2 className="date-picker-title">Виберіть Дату</h2>
            <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                className="date-input"
            />
            {selectedDate && (
                <p className="selected-date">
                    Вибрана дата: {new Date(selectedDate).toLocaleDateString('uk-UA')}
                </p>
            )}
        </div>
    );
};

export default DatePicker;
