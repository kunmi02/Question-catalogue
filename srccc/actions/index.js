// import axios from 'axios';
import {
  FETCH_CATEGORIES, SET_CATEGORY, SET_ERROR, CHANGE_FILTER, FETCH_MEAL,
} from './types';

// export const fetchMealTypes = (meal) => (dispatch) => {
//   const config = {
//     method: 'get',
//     url: `https://themealdb.com/api/json/v1/1/filter.php?c=${meal}`,
//     headers: { },
//   };
//   axios(config)
//     .then((response) => {
//       (JSON.stringify(response.data));
//       // eslint-disable-next-line
//       console.log(JSON.stringify(response.data))
//       response.json();
//     })
//     .then((meals) => dispatch({
//       type: FETCH_MEAL,
//       payload: meals,
//     }))
//     .catch((error) => dispatch({
//       type: SET_ERROR,
//       payload: error,
//     }));
// };

export const fetchCategories = () => (dispatch) => {
  fetch('https://themealdb.com/api/json/v1/1/categories.php')
    .then((response) => response.json())
    .then((categories) => dispatch({
      type: FETCH_CATEGORIES,
      payload: categories,
    }))
    .catch((error) => dispatch({
      type: SET_ERROR,
      payload: error,
    }));
};

export const fetchMealTypes = (meal) => (dispatch) => {
  fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${meal}`)
    .then((response) => {
      response.json();
    })
    .then(() => dispatch({
      type: FETCH_MEAL,
      payload: 'heheheheheh',
    }))
    .catch((error) => dispatch({
      type: SET_ERROR,
      payload: error,
    }));
};

export const setCategory = (category) => ({
  type: SET_CATEGORY,
  payload: category,
});

export const setError = (response) => ({
  type: SET_ERROR,
  payload: response,
});

export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  payload: filter,
});
