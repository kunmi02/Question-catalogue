import { combineReducers } from 'redux';
// import recipesReducer from './recipe';
import categoriesReducer from './categoryReducer';
import filterReducer from './filterReducer';
import mealsReducer from './mealReducer';

export default combineReducers({
  meals: mealsReducer, categories: categoriesReducer, filter: filterReducer,
});
