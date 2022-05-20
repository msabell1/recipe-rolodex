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
                    handleAddToRecipeCardList={handleAddToRecipeCardList}
                />

            </div>
        </>
    )

}
export default SearchResults;