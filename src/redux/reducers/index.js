import { ADD_TODO, DELETE_TODO } from '../actions/types';

export default (state = ['puppy', 'bunny', 'turtle'], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [action.payload, ...state];
    case DELETE_TODO:
      return state.filter((el) => state.indexOf(el) !== action.payload);
    default:
      return state;
  }
};
