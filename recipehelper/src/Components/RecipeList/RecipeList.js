import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import './RecipeList.css';

const RecipeList = ({ fetchResults, handleSelectedRecipe }) => {

    let recipeListItems = fetchResults.map((recipe) => {
        const recipeId = recipe.recipe.uri;

        console.log('recipeId: ', recipeId);
        console.log('recipe: ', recipe);

        return (
            <Card tyle={{ width: '18rem' }} key={recipeId}>
                <Card.Img src={recipe.recipe.image} alt={recipe.recipe.label} />
                <Card.Body>
                    <Card.Title>{recipe.recipe.label}</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Recipe source:<a href={recipe.recipe.url}>{recipe.recipe.source}</a>
                    </Card.Text>
                </Card.Body>
                <Link to={'/recipe/'} onClick={() => { handleSelectedRecipe(recipeId) }}>
                    Check it out!
                </Link>
            </Card>
        )
    })

    return (
        <CardGroup>
            {recipeListItems}
        </ CardGroup>
    )

}

export default RecipeList;