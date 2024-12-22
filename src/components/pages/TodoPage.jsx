import React, { useState } from 'react';
import TodoList from "../TodoList"; // Убедитесь, что этот путь правильный
import todoImage from '../../assets/pngwing.com.png';

function TodoPage() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const addTodo = (e) => {
        e.preventDefault();
        if (!newTodo) return;

        const newTodoItem = {
            id: Date.now(),
            title: newTodo,
            completed: false
        };
        setTodos([...todos, newTodoItem]);
        setNewTodo('');
    };

    const sortTodos = () => {
        const sortedTodos = [...todos].sort((a, b) => {
            return a.completed === b.completed ? 0 : a.completed ? 1 : -1;
        });
        setTodos(sortedTodos);
    };

    return (
        <div className="main">
            <h1>My To-Do List</h1>
            <img src={todoImage} alt="To-Do List" style={{ width: '100%', maxWidth: '200px', margin: '20px 0' }} />
            <form className="searchad" onSubmit={addTodo}>
                <input
                    type="text"
                    value={newTodo}
                    className="input"
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add new task..."
                />
                <button className="button_add" type="submit">Add</button>
            </form>
            <button className="button_sort" onClick={sortTodos}>Sort Tasks</button>
            <a href="/dnd" className="button_godnd">Go to DND</a>
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </div>
    );
}

export default TodoPage;