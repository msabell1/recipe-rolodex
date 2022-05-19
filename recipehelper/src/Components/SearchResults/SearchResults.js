import { Routes, Route, Link, Navigate } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import apiData from '../../api';

const SearchResults = () => {

    const [recipeList, setRecipeList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [fetchResults, setFetchResults] = useState([]);
    const [queryValue, setQueryValue] = useState(null);


    const fetchAllRecipes = () => {
        console.log(queryValue === null ? 'queryValue is empty' : `queryValue: ${queryValue}`);
        if (queryValue === null) return 0;

        fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${queryValue}&app_id=${apiData.id}&app_key=${apiData.key}`)
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

        // fetchAllRecipes();
        console.log('recipeList: ', recipeList);
        console.log('searchValue: ', searchValue);
        console.log('queryValue: ', queryValue);
        console.log('fetchResults: ', fetchResults);
        console.log('');

        // let recipeListItems = fetchResults.map((recipe) => {
        //     return (
        //         <li key={recipe.recipe.uri.split('#')[1]}>
        //             {recipe.recipe.label}
        //             <img src={recipe.recipe.image} />
        //             {/* <ul>
        //             {recipe.recipe.ingredientLines.map((ingredient, ingredientIndex) => {
        //                 return <li key={ingredientIndex}>{ingredient}</li>
        //             })}
        //         </ul> */}
        //         </li>)
        // })
        // setRecipeList(recipeListItems);
        setSearchValue('');

        // console.log('recipeList: ', recipeList);
        // console.log('searchValue: ', searchValue);
        // console.log('queryValue: ', queryValue);
        // console.log('fetchResults: ', fetchResults);
    }

    return (
        <>
            <h1>Explore the web and search for new recipes</h1>
            <form onSubmit={handleSearchSubmit}>
                <input type="text" placeholder="Recipe Name" value={searchValue} onChange={handleSearchChange} />
                <input type="submit" value="Search" />
            </form>
            <ul>
                {recipeList && recipeList}
            </ul>
        </>
    )

}
export default SearchResults;