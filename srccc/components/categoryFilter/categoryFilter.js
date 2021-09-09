import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as action from '../../actions';
// import { categoryType } from '../../actions/types';
// import { categories } from '../containers/BooksForm';
import './categoryFilter.css';

const categories = [
  'Pasta',
  'SeaFood',
  'Beef',
  'Chicken',
  'Dessert',
  'Vegan',
  'Started',
];

const CategoryFilter = (props) => {
  const { category, changeFilter } = props;

  const filters = ['All', ...categories];

  const handleFilterChange = (event) => {
    changeFilter(event.target.value);
  };

  return (
    <div className="mt">
      <select
        name="categories"
        value={category}
        onChange={handleFilterChange}
        className="category-filter"
      >
        {filters.map((cate) => (
          <option key={cate} value={cate}>
            {cate}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  category: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  category: state.filterReducer,
});

export default connect(mapStateToProps, action)(CategoryFilter);
