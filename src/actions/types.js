export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const FILTER_DIFFICULTY = 'FILTER_DIFFICULTY';
export const SET_CATEGORY = 'SET_CATEGORY';
export const categoryType = ['Easy', 'Medium', 'Hard'];
export const initialState = {
  categories: [],
  questions: {},
  difficulty: '',
  category: '',
};
