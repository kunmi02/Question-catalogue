import { FETCH_CATEGORIES, initialState, SET_ERROR } from '../actions/types';

const recipesReducer = (state = initialState, action) => {
  if (action.type === FETCH_CATEGORIES) {
    return {
      ...state,
      questions: action.payload,
    };
  }
  if (action.type === SET_ERROR) {
    return {
      ...state,
      error: action.payload,
    };
  }
  return state;
};

export default recipesReducer;
