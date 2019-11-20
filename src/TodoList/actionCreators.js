import { 
  TODO_ADD, 
  TODO_SET, 
  TODO_REMOVE, 
  TODO_TOGGLE
} from './actionType';

let dataID = Date.now();

export const setTodosList = (payload) => ({
  type: TODO_SET,
  payload
});

export const addTodoItem = (text) => {
  return (dispatch, state) => {
    setTimeout(() => {
      const { todos } = state;
      if (!todos.find(todo => todo.text === text)) {
        dispatch({
          type: TODO_ADD,
          payload: {
            id: dataID++,
            text,
            complete: false
          }
        });
      }
    }, 3000);
  }
};

export const removeTodoItem = (payload) => ({
  type: TODO_REMOVE,
  payload
});

export const toggleTodoStatus = (payload) => ({
  type: TODO_TOGGLE,
  payload
});
