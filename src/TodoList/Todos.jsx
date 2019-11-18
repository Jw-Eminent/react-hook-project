import React from 'react';
import TodoListItem from './TodoItem';

const Todos = (props) => {
  const { dataSource, removeTodo, toggleTodo } = props;
  return (
    <ul className="todo-list-todos">
      {
        dataSource.map(data => (
          <TodoListItem
            key={data.id}
            todo={data}
            onRemove={removeTodo}
            onToggle={toggleTodo}
          />
        ))
      }
    </ul>
  );
};

export default Todos;