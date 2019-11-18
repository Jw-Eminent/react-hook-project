import React, { useRef, useEffect } from 'react';

let dataID = Date.now();

const TodoInput = (props) => {
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

    addTodo({
      id: ++dataID,
      text: newText,
      complete: false
    });
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
};

export default TodoInput;