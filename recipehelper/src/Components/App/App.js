import { Routes, Route, Link } from 'react-router-dom';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import React, { useState, useEffect } from 'react';
import './App.css';
import LandingPage from '../LandingPage/LandingPage.js';
import SearchResults from '../SearchResults/SearchResults.js';
import RecipeBook from '../RecipeBook/RecipeBook.js';
// import RecipeResult from '../RecipeResult/RecipeResult';

function App() {

  const [myRecipes, setMyRecipes] = useState([]);

  // handleAddToRecipeBook 

  // handleRemoveFromRecipeBook totorial #13


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
      <div>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/search/' element={
            <SearchResults />}
          />
          <Route path='/recipebook/' element={<RecipeBook />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
