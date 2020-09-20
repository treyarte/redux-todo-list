import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './actionTypes';

const defaultTodos = JSON.parse(window.localStorage.getItem('todos')) || [];
const INITIAL_STATE = { todos: defaultTodos };
const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      window.localStorage.setItem(
        'todos',
        JSON.stringify([...state.todos, { ...action.todo }])
      );
      return { ...state, todos: [...state.todos, { ...action.todo }] };

    case REMOVE_TODO:
      window.localStorage.setItem(
        'todos',
        JSON.stringify(state.todos.filter((todo) => todo.id !== action.id))
      );
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };

    case TOGGLE_TODO:
      const todo = action.todo;
      todo.complete = !todo.complete;
      const new_todos = state.todos.filter((t) => t.id !== todo.id);
      window.localStorage.setItem(
        'todos',
        JSON.stringify([...new_todos, { ...todo }])
      );
      return { ...state, todos: [...new_todos, { ...todo }] };

    default:
      return state;
  }
};

export default rootReducer;
