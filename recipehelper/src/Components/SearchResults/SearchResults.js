import { Routes, Route, Link, Navigate } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import apiData from '../../api';
import RecipeList from '../RecipeList/RecipeList';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const SearchResults = () => {

    const [searchValue, setSearchValue] = useState('');
    const [fetchResults, setFetchResults] = useState([]);
    const [queryValue, setQueryValue] = useState(null);


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
        <>
            <h1>Explore the web and search for new recipes</h1>
            <form onSubmit={handleSearchSubmit}>
                <input type="text" autoFocus="autofocus" placeholder="Recipe Name" value={searchValue} onChange={handleSearchChange} />
                <input type="submit" value="Search" />
            </form>
            <div >
                <RecipeList fetchResults={fetchResults} />
            </div>


        </>
    )

}
export default SearchResults;