export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_MEAL = 'FETCH_MEAL';
// export const FILTER_DIFFICULTY = 'FILTER_DIFFICULTY';
export const SET_ERROR = 'SET_ERROR';
export const SET_CATEGORY = 'SET_CATEGORY';
export const CHANGE_FILTER = 'CHANGE FILTER';
export const categoryType = ['easy', 'medium', 'hard'];
export const initialState = {
  categories: [],
  category: '',
  error: '',
};
