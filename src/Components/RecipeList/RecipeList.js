import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import './RecipeList.css';

const RecipeList = ({
    fetchResults,
    handleSelectedRecipe
}) => {

    let recipeListItems = fetchResults.map((recipe) => {
        const recipeId = recipe.recipe.uri;

        return (
            <Card tyle={{ width: '18rem' }} key={recipeId}>
                <Card.Img src={recipe.recipe.image} alt={recipe.recipe.label} />
                <Card.Body>
                    <Card.Title>{recipe.recipe.label}</Card.Title>
                    <Card.Text>Recipe source:<a href={recipe.recipe.url} target='_blank'>{recipe.recipe.source}</a>
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