import React, { useState } from 'react';
import './ThemeSwitcher.css';

const ThemeSwitcher = ({ initialTheme }) => {
    const [theme, setTheme] = useState(initialTheme || 'light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className={`app-container ${theme}`}>
            <h1>Current Theme: {theme === 'light' ? 'Light' : 'Dark'}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default ThemeSwitcher;
