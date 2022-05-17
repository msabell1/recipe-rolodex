# Project Overview

## Project Links

- [msabell1946 project2](https://git.generalassemb.ly/msabell1946/project-2-react)
- [add your deployment link]()

## Project Description

Making a recipe site. The user will be able t search recipe's by name or ingredient. They will then be able to save the recipe for later use. They will also be able to look up information about ingredients in the recipes.

Example comparison site: 
- [Spmly Recipes](https://www.simplyrecipes.com/)
- [All Recipes](https://www.allrecipes.com/recipes/)

## API

- [Spoonacular](https://spoonacular.com/food-api)

Search for a recipe with tomato with only 1 return: https://api.spoonacular.com/recipes/findByIngredients?ingredients=tomato&number=1&apiKey=MYAPIKEY
```
[
{
"id": 645555,
"title": "Green Tomato Salad",
"image": "https://spoonacular.com/recipeImages/645555-312x231.jpg",
"imageType": "jpg",
"usedIngredientCount": 1,
"missedIngredientCount": 2,
"missedIngredients": [
{
"id": 10211111,
"amount": 1,
"unit": "teaspoon",
"unitLong": "teaspoon",
"unitShort": "tsp",
"aisle": "Ethnic Foods;Spices and Seasonings",
"name": "sumac",
"original": "1 teaspoon of sumac powder",
"originalName": "sumac powder",
"meta": [],
"image": "https://spoonacular.com/cdn/ingredients_100x100/dried-sumac.jpg"
},
{
"id": 2064,
"amount": 1,
"unit": "handful",
"unitLong": "handful",
"unitShort": "handful",
"aisle": "Produce;Spices and Seasonings",
"name": "mint leaves",
"original": "A handful of sage and mint leaves, finely chopped",
"originalName": "A of sage and mint leaves, finely chopped",
"meta": [
"finely chopped"
],
"extendedName": "fresh mint leaves",
"image": "https://spoonacular.com/cdn/ingredients_100x100/mint.jpg"
}
],
"usedIngredients": [
{
"id": 11527,
"amount": 1,
"unit": "large",
"unitLong": "large",
"unitShort": "large",
"aisle": "Produce",
"name": "green tomato",
"original": "1 large green tomato",
"originalName": "green tomato",
"meta": [
"green"
],
"image": "https://spoonacular.com/cdn/ingredients_100x100/green-tomato.png"
}
],
"unusedIngredients": [],
"likes": 1
}
]
```
- [Google Spreadsheet (Possibly)](https://developers.google.com/sheets/api)
Hoping to use this to save the users saved recie list. If possible, have the user log in with their Google account to they can save their list for later use.

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Full wireframe](https://i.imgur.com/z3wp1xr.jpg)
- [Langing and Search Page](https://i.imgur.com/7mYdnHL.jpg)
- [Recipe Page](https://i.imgur.com/nJlSRHk.jpg)
- [Ingredient Page](https://i.imgur.com/JDFBsf3.jpg)
- [My Recipes Page](https://i.imgur.com/GKYHbeo.jpg)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP
- Find and use external api 
- Render data on page 
- Set up all 5 pages with links to eachother

#### PostMVP

- Add Google Sheet API for long term recipe storage
- Add Google log in capability

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| HomPage | This will make the initial landing page and include React Router| 
| SearchPage | This will render the header include the nav | 
| RecipePage | This will render the header include the nav | 
| IngredientPage | This will render the header include the nav | 
| MyRecipesPage | This will render the header include the nav | 

### Priority list

| Component | Priority | Estimated Time  | Actual Time |
| :---: | :---: |  :---: | :---: | :---: |
| Adding Search Form | H | 1hrs |  |
| Creating each of the component pages | H | 3hrs|  |
| Setting up the search and api | H | 2hrs|  |
| Setting up the API connection to ingredient lookup | H | 3hrs|  |
| Setting up the API connection with recipe page | H | 3hrs|  |
| Building recipe saved data for the my recipe list | H | 3hrs|  |
| Total | H | 15hrs|  |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
