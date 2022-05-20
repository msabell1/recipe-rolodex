import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import apiData from '../../api';
import LandingPage from '../LandingPage/LandingPage.js';
import SearchResults from '../SearchResults/SearchResults.js';
import MyRecipeCards from '../MyRecipeCards/MyRecipeCards.js';
import Navbar from '../NavBar/NavBar';
import SideBar from '../NavBar/SideBar';
import RecipeResult from '../RecipeResult/RecipeResult';

function App() {

  const [myRecipes, setMyRecipes] = useState([]);
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [fetchResults, setFetchResults] = useState([]);
  const [queryValue, setQueryValue] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState({});

  const handleAddToRecipeCardList = (recipe) => {
    setMyRecipes([...myRecipes, recipe]);
  }

  const handleRemoveFromRecipeCardList = (recipe) => {
    const filteredRecipeList = myRecipes.filter((myRecipe) => {
      return myRecipe.recipe.label !== recipe.recipe.label
    })
    setMyRecipes(filteredRecipeList);
  }

  // functions for NavBar and SideBar Components
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeMenu = () => {
    setNavbarOpen(false);
  }

  // States and functions for SearchResults and RecipeList Components

  const fetchAllRecipes = () => {
    if (queryValue === null) return 0;
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${queryValue}&app_id=${apiData.id}&app_key=${apiData.key}&random=true`)
      .then(response => response.json())
      .then(res => {
        setFetchResults(res.hits);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchAllRecipes();
  }, [queryValue])

  const handleSelectedRecipe = (id) => {
    setSelectedRecipe(fetchResults.filter((recipe) => {
      return recipe.recipe.uri === id
    })[0]);
    setQueryValue(null);
  }

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  }

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    setQueryValue(searchValue.replace(/\s/g, '%'));
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
            <Route path='/recipe/'
              element={
                <RecipeResult
                  selectedRecipe={selectedRecipe}
                  handleAddToRecipeCardList={handleAddToRecipeCardList}
                />}
            />
            <Route path='/recipebook/'
              element={
                <MyRecipeCards
                  myRecipes={myRecipes}
                  handleSelectedRecipe={handleSelectedRecipe}
                  handleAddToRecipeCardList={handleAddToRecipeCardList}
                  handleRemoveFromRecipeCardList={handleRemoveFromRecipeCardList}
                />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
