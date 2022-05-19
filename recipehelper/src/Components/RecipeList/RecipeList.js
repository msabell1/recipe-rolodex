import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button';
import './RecipeList.css';

const RecipeList = ({ fetchResults }) => {

    let recipeListItems = fetchResults.map((recipe) => {
        console.log(recipe)
        return (
            <Card className="card bg-dark text-white" key={recipe.recipe.uri.split('#')[1]}>
                <Card.Img src={recipe.recipe.image} alt={recipe.recipe.label} />
                <Card.ImgOverlay>
                    <Card.Title>{recipe.recipe.label}</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Recipe source:<a href={recipe.recipe.url}>{recipe.recipe.source}</a>
                    </Card.Text>
                </Card.ImgOverlay>
                <Button variant="primary">Check it out!</Button>
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