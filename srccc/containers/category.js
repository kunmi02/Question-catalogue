import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Category from '../components/categoryList/category';
import {
  fetchCategories, setCategory, fetchMealTypes,
} from '../actions';
import CategoryFilter from '../components/categoryFilter/categoryFilter';

const CategoryList = ({
  categories, fetchCategories, setCategory, error, fetchMealTypes,
}) => {
  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, [categories]);

  const handleCategoryChange = (category) => {
    fetchMealTypes(category);
    setCategory(category);
  };

  const CategoryList = categories.length === 0 ? (
    <span>Loading meal categories...</span>
  ) : (
    categories.map((category) => (
      <Category
        name={category}
        handleSubmit={handleCategoryChange}
        key={uuidv4()}
      />
    ))
  );

  return (
    <main>
      <h1>List of available meal categories</h1>
      <div>
        <CategoryFilter />
      </div>
      <div>
        {CategoryList}
        <p>{ error ? 'Problem with API call. Please try again.' : ''}</p>
      </div>
    </main>
  );
};

CategoryList.defaultProps = {
  error: '',
};

CategoryList.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(Object).isRequired,
  fetchMealTypes: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  error: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => {
    dispatch(fetchCategories());
  },
  fetchMealTypes: (meal) => {
    dispatch(fetchMealTypes(meal));
  },
  setCategory: (category) => {
    dispatch(setCategory(category));
  },
});

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  // meals: state.meals.meals,
  // difficulty: state.categories.difficulty,
  error: state.categories.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
