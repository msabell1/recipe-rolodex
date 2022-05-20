// import { Routes, Route, Link } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import RecipeList from '../RecipeList/RecipeList';

const SearchResults = ({ handleSelectedRecipe, handleSearchSubmit, fetchResults, handleSearchChange, searchValue }) => {
    return (
        <>
            <h1>Search for new recipes</h1>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    autoFocus="autofocus"
                    placeholder="Recipe Name"
                    value={searchValue}
                    onChange={handleSearchChange} />
                <input type="submit" value="Search" />
            </form>
            <div >
                <RecipeList
                    fetchResults={fetchResults}
                    handleSelectedRecipe={handleSelectedRecipe}
                />
            </div>
        </>
    )

}
export default SearchResults;