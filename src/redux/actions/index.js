import { ADD_TODO, DELETE_TODO } from './types';

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const deleteTodo = (todoIndex) => {
  return {
    type: DELETE_TODO,
    payload: todoIndex,
  };
};
