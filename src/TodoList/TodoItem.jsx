import React from 'react';

const TodoListItem = (props) => {
  const {
    todo: {
      id,
      text,
      complete
    },
    onRemove,
    onToggle
  } = props;

  const handleCheckboxChange = () => {
    onToggle(id);
  };

  const handleRemoveTodo = () => {
    onRemove(id);
  };

  return (
    <li className="todo-list-todo-item">
      <input
        type="checkbox"
        checked={complete}
        onChange={handleCheckboxChange}
      />
      <label className={complete ? 'todo-list-todo-item-complete' : ''}>
        {text}
      </label>
      <button onClick={handleRemoveTodo}>&#215;</button>
    </li>
  );
};

export default TodoListItem;