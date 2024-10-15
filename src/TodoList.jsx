import React, { useState } from 'react';
import './TodoList.css'; // Імпортуємо стилі

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask(''); // Очищуємо поле вводу після додавання
        }
    };

    return (
        <div className="todo-container">
            <h1>Список Завдань</h1>
            <div className="input-section">
                <input
                    type="text"
                    value={newTask}
                    onChange={handleInputChange}
                    placeholder="Введіть нове завдання..."
                    className="task-input"
                />
                <button onClick={addTask} className="add-task-button">
                    Додати
                </button>
            </div>
            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li key={index} className="task-item">
                        {task}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
