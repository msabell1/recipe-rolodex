import { Routes, Route, Link } from 'react-router-dom';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import React, { useState, useEffect } from 'react';
import './App.css';
import LandingPage from '../LandingPage/LandingPage.js';
import SearchResults from '../SearchResults/SearchResults.js';
import RecipeBook from '../RecipeBook/RecipeBook.js';
import Navbar from '../NavBar/NavBar';
import SideBar from '../NavBar/SideBar';
import RecipeResult from '../RecipeResult/RecipeResult';
import apiData from '../../api';

function App() {

  const [myRecipes, setMyRecipes] = useState([]);

  const [navbarOpen, setNavbarOpen] = useState(false)


  // handleAddToRecipeBook 

  // handleRemoveFromRecipeBook totorial #13


  // functions for NavBar and SideBar Components
  const handleToggle = () => {
    setNavbarOpen(navBarState => !navBarState)
  }

  const closeMenu = () => {
    setNavbarOpen(false);
  }

  // States and functions for SearchResults and RecipeList Components
  const [fetchResults, setFetchResults] = useState([]);
  const [queryValue, setQueryValue] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState([]);

  const handleSelectedRecipe = (id) => {
    setSelectedRecipe(fetchResults.filter(recipe => recipe.id !== id));
  }

  const fetchAllRecipes = () => {
    console.log(queryValue === null ? 'queryValue is empty' : `queryValue: ${queryValue}`);
    if (queryValue === null) return 0;

    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${queryValue}&app_id=${apiData.id}&app_key=${apiData.key}&random=true`)
      .then(response => response.json())
      .then(res => {
        console.log(res);
        setFetchResults(res.hits);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    console.log(`useEffect ran`)
    fetchAllRecipes();
  }, [queryValue])

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  }

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    setQueryValue(searchValue.replace(/\s/g, '%'));
    setSearchValue('');
  }


  return (
    <div className="App">
      <div>
        <Navbar handleToggle={handleToggle} closeMenu={closeMenu} />
        <SideBar closeMenu={closeMenu} navbarOpen={navbarOpen} />
        <div>
          <Routes>
            <Route path='/'
              element={<LandingPage />}
            />
            <Route path='/search/'
              element={
                <SearchResults
                  fetchResults={fetchResults}
                  searchValue={searchValue}
                  handleSearchSubmit={handleSearchSubmit}
                  handleSearchChange={handleSearchChange}
                  handleSelectedRecipe={handleSelectedRecipe}
                />}
            />
            <Route path='/recipebook/'
              element={<RecipeBook />}
            />
            <Route path='/recipe/'
              element={
                <RecipeResult
                  selectedRecipe={selectedRecipe}
                />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
