import React, { useState } from 'react';
import './ContactList.css';

const ContactList = () => {
    const [contacts, setContacts] = useState([
        { id: 1, name: 'Устінов Олексій', email: '12 балів на базу' },
        { id: 2, name: 'Ряжко Денис', email: 'denys@example.com' },
        { id: 3, name: 'Не Ряжко Денис', email: 'notdenys@example.com' },
    ]);

    const [editingContact, setEditingContact] = useState(null);
    const [updatedName, setUpdatedName] = useState('');
    const [updatedEmail, setUpdatedEmail] = useState('');

    const handleEditClick = (contact) => {
        setEditingContact(contact.id);
        setUpdatedName(contact.name);
        setUpdatedEmail(contact.email);
    };

    const handleUpdateContact = (id) => {
        setContacts(contacts.map(contact =>
            contact.id === id
                ? { ...contact, name: updatedName, email: updatedEmail }
                : contact
        ));
        setEditingContact(null);
    };

    return (
        <div className="contact-list-container">
            <h2 className="contact-list-title">Список Контактів</h2>
            <ul className="contact-list">
                {contacts.map(contact => (
                    <li key={contact.id} className="contact-item">
                        {editingContact === contact.id ? (
                            <div className="edit-form">
                                <input
                                    type="text"
                                    value={updatedName}
                                    onChange={(e) => setUpdatedName(e.target.value)}
                                    className="contact-input"
                                />
                                <input
                                    type="email"
                                    value={updatedEmail}
                                    onChange={(e) => setUpdatedEmail(e.target.value)}
                                    className="contact-input"
                                />
                                <button
                                    onClick={() => handleUpdateContact(contact.id)}
                                    className="update-button"
                                >
                                    Оновити
                                </button>
                            </div>
                        ) : (
                            <div className="contact-details">
                                <span className="contact-name">{contact.name}</span> -
                                <span className="contact-email">{contact.email}</span>
                                <button
                                    onClick={() => handleEditClick(contact)}
                                    className="edit-button"
                                >
                                    Редагувати
                                </button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;
