import React from 'react';

const RecipeResult = ({ selectedRecipe }) => {

    const recipe = selectedRecipe;

    console.log('Selected Recipe: ', recipe.recipe.label);

    return (
        <div>

            <h1>{recipe.recipe.label}</h1>
        </div>
    )
}
export default RecipeResult;