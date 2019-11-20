import React, { useRef, useEffect, memo } from 'react';

const TodoInput = memo((props) => {
  const { addTodo } = props;
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newText = inputRef.current.value.trim();

    if (newText.length === 0) {
      return;
    }

    addTodo(newText);
    inputRef.current.value = '';
  };

  return (
    <div className="todo-list-header">
      <h1 className="todo-list-header-title">TODOS</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          placeholder="What needs to be done?"
          className="todo-list-header-input"
        />
      </form>
    </div>
  );
});

export default TodoInput;