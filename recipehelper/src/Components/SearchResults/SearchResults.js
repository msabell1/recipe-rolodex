import { Routes, Route, Link, Navigate } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import apiData from '../../api';

const SearchResults = (props) => {

    const [queryresults, setQueryResults] = useState([]);
    const [recipeList, setRecipeList] = useState([]);
    const [searchValue, setSearchValue] = useState(null);


    const fetchAllRecipes = async (queryValue) => {
        fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${queryValue}&app_id=${apiData.id}&app_key=${apiData.key}`)
            .then(response => response.json())
            .then(res => {
                console.log(res);
                setQueryResults(res.hits);
            })
            .catch(err => console.error(err))
    }

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();

        setRecipeList([]);
        console.log(searchValue);
        const queryValue = searchValue.replace(/\s/g, '%')

        setSearchValue('');

        fetchAllRecipes(queryValue);

        let recipeListItems = queryresults.map((recipe) => {
            return (<li key={recipe.recipe.uri.split('#')[1]}>
                {recipe.recipe.label}
                <img src={recipe.recipe.image} />
                <ul>
                    {recipe.recipe.ingredientLines.map((ingredient, ingredientIndex) => {
                        return <li key={ingredientIndex}>{ingredient}</li>
                    })}
                </ul>
            </li>)
        })

        setRecipeList(recipeListItems);
    }

    return (
        <>
            <h1>Explore the web and search for new recipes</h1>
            <form onSubmit={handleSearchSubmit}>
                <input type="text" placeholder="Recipe Name" onChange={handleSearchChange} />
                <input type="submit" value="Search" />
            </form>
            <ul>
                {recipeList}
            </ul>
        </>
    )

}
export default SearchResults;