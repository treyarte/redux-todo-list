import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './actionTypes';

const add_todo = (activity, id) => ({
  type: ADD_TODO,
  todo: { id: id, activity, complete: false },
});

const toggle_todo = (todo) => ({ type: TOGGLE_TODO, todo });

const remove_todo = (id) => ({ type: REMOVE_TODO, id });

export { add_todo, toggle_todo, remove_todo };
