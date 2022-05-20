import React from 'react';
import Table from 'react-bootstrap/Table'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import './RecipeResult.css'


const RecipeResult = ({ selectedRecipe, handleAddToRecipeCardList }) => {

    const recipe = selectedRecipe;

    const handleIngredientClick = (ingredient) => {
        return (
            <Popover className="popover-basic">
                <Popover.Header as="h3">{ingredient.food}</Popover.Header>
                <Popover.Body>
                    <img src={ingredient.image} />
                </Popover.Body>
            </Popover>
        )
    }

    const createIngredientList = (ingredient, index) => {
        return (
            <tr key={index}>
                <OverlayTrigger
                    trigger="click" placement="right"
                    rootClose overlay={handleIngredientClick(ingredient)}
                >
                    <td >{ingredient.food}</td>
                </OverlayTrigger>
                <td>{ingredient.quantity}</td>
                <td>{ingredient.measure === "<unit>" ? 'each' : ingredient.measure}</td>
                <td>{Math.floor(ingredient.weight)}</td>
                <td>gram</td>
            </tr>
        )
    }

    const createIngredientNutritionList = (nutritionalFact, index) => {
        return (
            <tr key={index}>
                <td>{recipe.recipe.totalNutrients[nutritionalFact].label}</td>
                <td>{(recipe.recipe.totalNutrients[nutritionalFact].quantity).toFixed(2)}</td>
                <td>{recipe.recipe.totalNutrients[nutritionalFact].unit}</td>
            </tr>
        )
    }

    return (
        <div>
            <header className="recipe-header">
                <img src={recipe.recipe.images.SMALL.url} />
                <div className="recipe-descriptions">
                    <h2>{recipe.recipe.label}</h2>
                    <h3>Cuisine: {recipe.recipe.cuisineType}</h3>
                    <h3>Recipe source: <a href={recipe.recipe.url} target='_blank'>{recipe.recipe.source}</a></h3>
                </div>
            </header>
            <Button variant="primary" onClick={() => handleAddToRecipeCardList(recipe)}>
                Save To Recipe Cards
            </Button>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h3>Ingredients</h3></Accordion.Header>
                    <Accordion.Body>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Ingredient</th>
                                    <th>Qty</th>
                                    <th>Unit</th>
                                    <th>Weight</th>
                                    <th>Unit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recipe.recipe.ingredients.map(createIngredientList)}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h3>Nutritional Facts</h3></Accordion.Header>
                    <Accordion.Body>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Nutrient</th>
                                    <th>Qty</th>
                                    <th>Unit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(recipe.recipe.totalNutrients).map(createIngredientNutritionList)}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
export default RecipeResult;