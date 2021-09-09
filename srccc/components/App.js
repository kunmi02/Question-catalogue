import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './nav/navbar';
import CategoryList from '../containers/category';
import MealDetails from '../containers/meal';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        {/* <h1> Hello React Capstone Testing components</h1> */}
        {/* <CategoryFilter /> */}
        <Switch>
          <Route exact path="/" component={CategoryList} />
          {/* <CategoryList /> */}
          <Route path="/categories/:category_name" component={MealDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
