import React, { useState } from 'react';
import './Tabs.css';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { title: 'Всього', content: 'РЕКЛАМА!' },
        { title: '20 грн', content: 'ТУТ' },
        { title: 'за рекламу', content: 'МОГЛА БУТИ' },
    ];

    return (
        <div className="tabs-container">
            <div className="tabs">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`tab-button ${activeTab === index ? 'active' : ''}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

export default Tabs;
