import RecipeList from '../RecipeList/RecipeList';

const SearchResults = ({
    handleSelectedRecipe,
    handleSearchSubmit,
    fetchResults,
    handleSearchChange,
    searchValue,
    handleAddToRecipeCardList,
}) => {
    return (
        <>
            <header>
                <h1>Search Recipes by Ingredient</h1>
            </header>
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
                    handleAddToRecipeCardList={handleAddToRecipeCardList}
                />

            </div>
        </>
    )

}
export default SearchResults;