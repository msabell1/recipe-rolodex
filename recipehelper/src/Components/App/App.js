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

  // handleAddToRecipeCardList 
  const handleAddToRecipeCardList = (recipe) => {
    setMyRecipes([...myRecipes, recipe]);
    console.log(myRecipes)
  }

  // handleRemoveFromRecipeBook 



  // functions for NavBar and SideBar Components
  const [navbarOpen, setNavbarOpen] = useState(false)

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
  const [selectedRecipe, setSelectedRecipe] = useState({});


  const handleSelectedRecipe = (id) => {
    setSelectedRecipe(fetchResults.filter((recipe) => {
      return recipe.recipe.uri === id
    })[0]);
    console.log('selectedRecipe: ', selectedRecipe);
    setFetchResults([]);
    setQueryValue(null);
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
        <div>
          <Navbar
            handleToggle={handleToggle}
            closeMenu={closeMenu}
            navbarOpen={navbarOpen}
          />
          <SideBar
            handleToggle={handleToggle}
            closeMenu={closeMenu}
            navbarOpen={navbarOpen}
          />
        </div>
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
              element={
                <RecipeBook
                  myRecipes={myRecipes}
                  handleSelectedRecipe={handleSelectedRecipe}
                  handleAddToRecipeCardList={handleAddToRecipeCardList}
                />}
            />
            <Route path='/recipe/'
              element={
                <RecipeResult
                  selectedRecipe={selectedRecipe}
                  handleAddToRecipeCardList={handleAddToRecipeCardList}
                />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
