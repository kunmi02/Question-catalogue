import { FETCH_MEAL, initialState, SET_ERROR } from '../actions/types';

const mealsReducer = (state = initialState, action) => {
  if (action.type === FETCH_MEAL) {
    // console.log('===============');
    // console.log(state);
    // console.log('********');
    // console.log(action.payload);
    return {
      ...state,
      meals: action.payload,
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

export default mealsReducer;
