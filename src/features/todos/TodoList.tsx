import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../app/store';
import { addTodo, toggleTodo, removeTodo, type Todo } from './todoSlice';
import { v4 as uuidv4 } from 'uuid';
import "../../styles/TodoList.scss";



export const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const [input, setInput] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newTodo: Todo = {
      id: uuidv4(),
      text: input.trim(),
      completed: false,
    };

    dispatch(addTodo(newTodo));
    setInput('');
  };

  return (
    <div className="todo-list">
      <form onSubmit={handleAdd} className="todo-form">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Aggiungi cose da fare..."
          className="todo-input"
        />
        <button type="submit" className="todo-add-button">Aggiungi</button>
      </form>

      <ul className="todo-items">
        {todos.map(todo => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
          >
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              className="todo-text"
            >
              🌸 {todo.text}
            </span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="todo-remove-button"
              aria-label={`Rimuovi task: ${todo.text}`}
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
