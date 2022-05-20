import RecipeList from '../RecipeList/RecipeList.js';

const RecipeBook = ({
    myRecipes,
    handleSelectedRecipe,
    handleAddToRecipeCardList
}) => {
    const headerMessage = myRecipes.length > 0 ?
        `You have ${myRecipes.length} recipes in your rolodex` :
        'Your recipe rolodex is currently empty...';

    return (
        <>
            <header>
                <h1>{headerMessage}</h1>
            </header>
            <RecipeList
                fetchResults={myRecipes}
                handleSelectedRecipe={handleSelectedRecipe}
                handleAddToRecipeCardList={handleAddToRecipeCardList}
            />
        </>

    )
}
export default RecipeBook;