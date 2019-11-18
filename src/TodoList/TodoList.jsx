import React, { useState, useCallback, useEffect, memo } from 'react';
import Todos from './Todos';
import TodoInput from './TodoInput';
import './style.scss';

const LS_TODOS = '_todoList';

const TodoList = memo(() => {
  const [todos, setTodos] = useState([]);

  const addTodoItem = useCallback((todo) => {
    return setTodos(preTodos => [...preTodos, todo]);
  }, []);

  const removeTodo = useCallback((id) => {
    return setTodos(preTodos => preTodos.filter(todo => todo.id !== id));
  }, []);

  const toggleTodo = useCallback((id) => {
    return setTodos(preTodos =>
      preTodos.map(todo =>
        todo.id === id
        ? {...todo, complete: true}
        : todo
      )
    );
  }, [])

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem(LS_TODOS)) || [];
    setTodos(todoList);
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_TODOS, JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo-list-container">
      <TodoInput onAdd={addTodoItem}/>
      <Todos
        dataSource={todos}
        onRemove={removeTodo}
        onToggle={toggleTodo}
      />
    </div>
  );
});

export default TodoList;