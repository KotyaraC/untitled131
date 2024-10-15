import React, { useState } from 'react';
import './RegistrationForm.css'; 

function RegistrationForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Ім'я: ${name}, Email: ${email}`);
    };

    return (
        <div className="form-container">
            <h1>Форма Реєстрації</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                    placeholder="Ваше ім'я"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                    placeholder="Електронна пошта"
                    required
                />
                <button type="submit" className="submit-button">Зареєструватися</button>
            </form>
        </div>
    );
}

export default RegistrationForm;
