import {
  TODO_ADD, 
  TODO_SET, 
  TODO_TOGGLE, 
  TODO_REMOVE
} from './actionType';

const reducers = {
  todos: (state, action) => {
    const { type, payload } = action;
    switch(type) {
      case TODO_SET:
        return payload;
      case TODO_ADD:
        return [...state, payload];
      case TODO_TOGGLE:
        return state.map(todo =>
          todo.id === action.payload
          ? {...todo, complete: !todo.complete}
          : todo
        )
      case TODO_REMOVE:
        return state => state.filter(todo => todo.id !== action.payload)
      default:
        return state;
    }
  },
  increment: (state, action) => {
    const { type } = action;
    switch(type) {
      case TODO_SET:
      case TODO_ADD:
        return state + 1
      default:
        return state;
    }
  }
};

function combineReducers(reducers) {
  return function reducer(state, action) {
    const newState = {};
    for (let key in reducers) {
      newState[key] = reducers[key](state[key], action);
    }
    return {
      ...state,
      ...newState
    };
  }
}

export default combineReducers(reducers);
