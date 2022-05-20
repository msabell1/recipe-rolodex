import React from 'react';
import Table from 'react-bootstrap/Table'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Accordion from 'react-bootstrap/Accordion'

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
                <OverlayTrigger trigger="click" placement="right" rootClose overlay={handleIngredientClick(ingredient)}>
                    <td >{ingredient.food}</td>
                </OverlayTrigger>
                <td>{ingredient.quantity}</td>
                <td>{ingredient.measure === "<unit>" ? 'each' : ingredient.measure}</td>
                <td>{Math.floor(ingredient.weight)}</td>
                <td>gram</td>
            </tr>
        )
    }

    // const createIngredientNutritionList =(recipe) => {
    //     return(
    //         0


    //     )
    // }


    return (
        <div className="recipe-result-grid">
            {/* This is just for proof of concept */}
            <h2>{recipe.recipe.label}</h2>
            <img src={recipe.recipe.images.SMALL.url} />
            <h3>Cuisine: {recipe.recipe.cuisineType}</h3>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Ingredients</Accordion.Header>
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
                    <Accordion.Header>Nutritional Facts</Accordion.Header>
                    <Accordion.Body>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Ingredient</th>
                                    <th>Qty</th>
                                    <th>Unit</th>
                                    <th>Weight</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Insert Nutritional Facts */}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>




        </div>
    )
}
export default RecipeResult;