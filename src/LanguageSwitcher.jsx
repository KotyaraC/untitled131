import React, { useState } from 'react';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
    const [language, setLanguage] = useState('uk');

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'uk' ? 'en' : 'uk'));
    };

    return (
        <div className="language-switcher-container">
            <h2>{language === 'uk' ? 'Виберіть мову' : 'Select Language'}</h2>
            <button onClick={toggleLanguage} className="language-button">
                {language === 'uk' ? 'Англійська' : 'Українська'}
            </button>
            <p className="greeting">
                {language === 'uk' ? 'Ну на це раз остаточно, 20% знижки на рекламу!' : 'Hello, Many!'}
            </p>
        </div>
    );
};

export default LanguageSwitcher;
