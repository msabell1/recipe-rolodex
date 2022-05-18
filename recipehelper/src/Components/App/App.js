import { Routes, Route, Link } from 'react-router-dom';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import React, { useState, useEffect } from 'react';
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import SearchResults from '../SearchResults/SearchResults';
import RecipeBook from '../RecipeBook/RecipeBook';
import RecipeResult from '../RecipeResult/RecipeResult';

function App() {

  return (
    <div className="App">
      <nav>
        <h1>
          <Link to='/'>
            Recipe Helper
          </Link>
        </h1>
        <ul className="navBar">
          <li>
            <Link to="/search/">
              Search Recipes
            </Link>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li>
            <Link to="/recipebook/">
              My Recipe Book
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mainContainer">
        <Routes>
          <Route path='/' component={<LandingPage />} />
          <Route path='/search/' component={<SearchResults />} />
          <Route path='/recipebook/' render={() => <RecipeBook />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
