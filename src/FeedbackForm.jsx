import React, { useState } from 'react';
import './FeedbackForm.css'; // Імпортуємо стилі

const FeedbackForm = () => {
    const [comment, setComment] = useState('');

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`Ваш коментар: ${comment}`);
        setComment(''); 
    };

    return (
        <div className="feedback-form-container">
            <h2>Форма Зворотного Зв'язку</h2>
            <form onSubmit={handleSubmit}>
        <textarea
            className="comment-input"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Ваш коментар..."
            required
        />
                <button type="submit" className="submit-button">Відправити</button>
            </form>
        </div>
    );
};

export default FeedbackForm;
