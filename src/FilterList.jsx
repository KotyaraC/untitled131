import React, { useState } from 'react';
import './FilterList.css';

const FilterList = () => {
    const [filterText, setFilterText] = useState(''); // Стан для тексту фільтра

    const items = [
        'Яблука',
        'Груші',
        'М4',
        'БМВ',
        'Телевізор',
        'Киві',
        'Вишні',
        'Тут могла бути ваша реклама!',
        'Манго',
    ];

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <div className="filter-container">
            <h1>Фільтр Списку</h1>
            <input
                type="text"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                className="filter-input"
                placeholder="Введіть текст для фільтрації"
            />
            <ul className="item-list">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                        <li key={index} className="item">
                            {item}
                        </li>
                    ))
                ) : (
                    <li className="item">Немає елементів для відображення</li>
                )}
            </ul>
        </div>
    );
};

export default FilterList;
