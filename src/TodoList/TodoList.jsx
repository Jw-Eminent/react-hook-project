import React, { useState, useCallback, useEffect, memo } from 'react';
import Todos from './Todos';
import TodoInput from './TodoInput';
import { 
  TODO_ADD, 
  TODO_SET, 
  TODO_REMOVE, 
  TODO_TOGGLE
} from './actionType';
import { setTodosList, addTodoItem, removeTodoItem, toggleTodoStatus } from './actionCreators';
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

  const dispatch = useCallback((action) => {
    switch(action.type) {
      case TODO_SET:
        setTodos(action.payload);
        break;
      case TODO_ADD: 
        setTodos(preTodos => [...preTodos, action.payload]);
        break;
      case TODO_REMOVE:
        setTodos(preTodos => preTodos.filter(todo => todo.id !== action.payload));
        break;
      case TODO_TOGGLE:
        setTodos(preTodos =>
          preTodos.map(todo =>
            todo.id === action.payload
            ? {...todo, complete: !todo.complete}
            : todo
          )
        );
        break;
      default:
        break;
    }
  }, []);
  
  // const addTodoItem = useCallback((todo) => {
  //   return setTodos(preTodos => [...preTodos, todo]);
  // }, []);

  // const removeTodo = useCallback((id) => {
  //   return setTodos(preTodos => preTodos.filter(todo => todo.id !== id));
  // }, []);

  // const toggleTodo = useCallback((id) => {
  //   return setTodos(preTodos =>
  //     preTodos.map(todo =>
  //       todo.id === id
  //       ? {...todo, complete: !todo.complete}
  //       : todo
  //     )
  //   );
  // }, [])

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem(LS_TODOS)) || [];
    dispatch(setTodosList(todoList));
  }, [dispatch]);

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