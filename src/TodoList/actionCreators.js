import { 
  TODO_ADD, 
  TODO_SET, 
  TODO_REMOVE, 
  TODO_TOGGLE
} from './actionType';

export const setTodosList = (payload) => ({
  type: TODO_SET,
  payload
});

export const addTodoItem = (payload) => ({
  type: TODO_ADD,
  payload
});

export const removeTodoItem = (payload) => ({
  type: TODO_REMOVE,
  payload
});

export const toggleTodoStatus = (payload) => ({
  type: TODO_TOGGLE,
  payload
});
