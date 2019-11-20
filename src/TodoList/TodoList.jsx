import React, { useState, useEffect, memo } from 'react';
import Todos from './Todos';
import TodoInput from './TodoInput';
import reducer from './reducers';
import { 
  setTodosList, 
  addTodoItem, 
  removeTodoItem, 
  toggleTodoStatus 
} from './actionCreators';
import './style.scss';

const LS_TODOS = '_todoList';
const store = {
  todos: [],
  increment: 1
};

function bindActionCreators(actionCreators, dispatch) {
  const result = {};
  for (let key in actionCreators) {
    result[key] = function(...args) {
      const actionCreator = actionCreators[key];
      const action = actionCreator(...args);
      dispatch(action);
    }
  }

  return result;
}

const TodoList = memo(() => {
  const [todos, setTodos] = useState([]);
  const [increment, setIncrement] = useState(0);

  useEffect(() => {
    Object.assign(store, {
      todos,
      increment
    });
  }, [todos, increment]);

  const dispatch = (action) => {
    const setters = {
      todos: setTodos,
      increment: setIncrement
    };

    if ('function' === typeof action) {
      action(dispatch, store);
      return;
    }

    const newState = reducer(store, action);

    for (let key in newState) {
      setters[key](newState[key]);
    }
  };

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem(LS_TODOS)) || [];
    dispatch(setTodosList(todoList));
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_TODOS, JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo-list-container">
      <TodoInput 
        {
          ...bindActionCreators({addTodo: addTodoItem}, dispatch)
        }
      />
      <Todos
        dataSource={todos}
        {
          ...bindActionCreators({
            removeTodo: removeTodoItem,
            toggleTodo: toggleTodoStatus
          }, dispatch)
        }
      />
    </div>
  );
});

export default TodoList;