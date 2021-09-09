import { CHANGE_FILTER } from '../actions/types';

const filterReducer = (state = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      // eslint-disable-next-line
      // console.log(action);
      // eslint-disable-next-line
      // console.log('*********')
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
