import { Routes, Route, Link } from 'react-router-dom';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import React, { useState, useEffect } from 'react';
import { FaHotdog, FaHamburger } from "react-icons/fa"
import './App.css';
import LandingPage from '../LandingPage/LandingPage.js';
import SearchResults from '../SearchResults/SearchResults.js';
import RecipeBook from '../RecipeBook/RecipeBook.js';
import Navbar from '../NavBar/NavBar';
import SideBar from '../NavBar/SideBar';
// import RecipeResult from '../RecipeResult/RecipeResult';

function App() {

  const [myRecipes, setMyRecipes] = useState([]);

  const [navbarOpen, setNavbarOpen] = useState(false)

  // handleAddToRecipeBook 

  // handleRemoveFromRecipeBook totorial #13

  const handleToggle = () => {
    setNavbarOpen(navBarState => !navBarState)
  }

  const closeMenu = () => {
    setNavbarOpen(false);
  }

  return (
    <div className="App">
      <div>
        <div className="nav-container">
          <nav className="navBar">
            <h1>
              <Link to='/'>
                Recipe Helper
              </Link>
            </h1>
            <button onClick={handleToggle}>
              {navbarOpen ? (
                // <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
                <FaHotdog style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
              ) : (
                // <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                <FaHamburger style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
              )}
            </button>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
              <li>
                <Link
                  to="/search/"
                  activeClassName="active-link"
                  onClick={() => closeMenu()}
                >
                  Search Recipes
                </Link>
              </li>

              <li>
                <Link
                  to="/recipebook/"
                  activeClassName="active-link"
                  onClick={() => closeMenu()}
                >
                  My Recipe Book
                </Link>
              </li>
            </ul>
          </nav>
        </div>
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
    </div>
  );
}

export default App;
