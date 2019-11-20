import React, { useState, useCallback, useEffect, memo } from 'react';
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

  const dispatch = useCallback((action) => {
    const state = {
      todos,
      increment
    };

    const setters = {
      todos: setTodos,
      increment: setIncrement
    };

    const newState = reducer(state, action);

    for (let key in newState) {
      setters[key](newState[key]);
    }
  }, [todos, increment]);

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