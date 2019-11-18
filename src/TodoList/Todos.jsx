import React from 'react';
import TodoListItem from './TodoItem';

const Todos = (props) => {
  const { dataSource, onRemove, onToggle } = props;
  return (
    <ul className="todo-list-todos">
      {
        dataSource.map(data => (
          <TodoListItem
            key={data.id}
            todo={data}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))
      }
    </ul>
  );
};

export default Todos;