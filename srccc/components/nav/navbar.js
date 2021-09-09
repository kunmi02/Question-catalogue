import React from 'react';
import './navbar.css';

const Nav = () => (
  <div className="navigation-wraper">
    <div className="navigation">
      <div className="left-content">
        <h2 className="brand-name">
          <i className="fa fa-cutlery" aria-hidden="true" />
          <span>
            {'    '}
          </span>
          Catalogue of Meal Recipes
        </h2>
        {/* <p className="ml">BOOKS</p>
        <p className="ml" id="categories-tab">
          CATEGORIES
        </p> */}
      </div>
      <div className="right-content">
        <div className="login-user">
          <i className="fa fa-user" />
        </div>
      </div>
    </div>
  </div>
);

export default Nav;
