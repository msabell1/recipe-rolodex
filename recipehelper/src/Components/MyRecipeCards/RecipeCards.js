import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'

const RecipeCards = ({
    myRecipes,
    handleSelectedRecipe,
    handleRemoveFromRecipeCardList
}) => {

    let recipeListItems = myRecipes.map((recipe) => {
        const uri = recipe.recipe.uri;
        const recipeId = `my_card_${recipe.recipe.uri}`;

        return (
            <Card tyle={{ width: '18rem' }} key={recipeId}>
                <Card.Img src={recipe.recipe.image} alt={recipe.recipe.label} />
                <Card.Body>
                    <Card.Title>{recipe.recipe.label}</Card.Title>
                    <Card.Text>Recipe source:<a href={recipe.recipe.url} target='_blank'>{recipe.recipe.source}</a>
                    </Card.Text>
                </Card.Body>
                <Link to={'/recipe/'} onClick={() => { handleSelectedRecipe(uri) }}>
                    Check out recipe!
                </Link>
                <input type="button" onClick={() => { handleRemoveFromRecipeCardList(recipe) }} value='Remove from cards' />

            </Card>
        )
    })

    return (
        <CardGroup>
            {recipeListItems}
        </ CardGroup>
    )

}

export default RecipeCards;