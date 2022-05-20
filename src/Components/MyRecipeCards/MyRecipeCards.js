import RecipeCards from './RecipeCards'

const MyRecipeCards = ({
    myRecipes,
    handleSelectedRecipe,
    handleRemoveFromRecipeCardList
}) => {
    const headerMessage = myRecipes.length > 0 ?
        `You have ${myRecipes.length} recipes in your rolodex` :
        'Your recipe rolodex is currently empty...';

    return (
        <>
            <header>
                <h1>{headerMessage}</h1>
            </header>
            <RecipeCards
                myRecipes={myRecipes}
                handleSelectedRecipe={handleSelectedRecipe}
                handleRemoveFromRecipeCardList={handleRemoveFromRecipeCardList}
            />
        </>

    )
}
export default MyRecipeCards;