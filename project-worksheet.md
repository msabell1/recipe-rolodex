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

- [Edamam](https://www.edamam.com/)

Search for a recipe with rice: https://api.edamam.com/api/recipes/v2?type=public&q=rice&app_id=688be783&app_key=f06a294739a9074d422a54857a3a69d4
```
{
"from": 1,
"to": 20,
"count": 10000,
"_links": {
"next": {}
},
"hits": [
{
"recipe": {
"uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b1957a6a4025b25f6da6aef1fad452d4",
"label": "Essentials: Rice",
"image": "https://edamam-product-images.s3.amazonaws.com/web-img/b71/b716942f16e3e9490829f7da8dba509e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDHDXV4ruSHzN%2FoLqpvqBAKtq1rXeoNR7ND%2BbUijqDrwwIhALTKWIK08rGcMxvm2%2BYziv%2FcVaK15bu21iIfOjsbas1ZKtsECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2Igx6sdxy1Z0S3ccEeG0qrwQwJTbZk8iZVzjg0ZhICtvVkz%2BAiQ1M4uRXdtnlTBvgb8%2F4ztf2WOF7PvbTJXVDSWw2HlTEOe4dvnLkYwKU%2FVLo1CU9YUENMUsWPi4vwCZT0gZII57%2Fp0ASkH%2Fo630qOEKuJzvinAuvv%2BSzQL0EhItfQA1i7d%2B8cdM%2BQXokBvtAwDlFJq2h4UHvC3%2F1Po5xsM6f4qiyCCyHZEU4r9tt3zPnyKTbJkEJD1QxlaDuyP8joQCGCbOHyli39ZI1KcozRCsuCATxnmuN1ysVIW2Go9WzaiRemnwGw3l%2FH2NBEfxrbexF41oIJETfrjfkyozSFndEvpbfu%2BFdf1NKpFfAKi1eAnh3d%2BLhQ8oGqWng6Adao0RQnfZmdqrEDJFt%2BSxKbjIt0t71cZED4Zk9tsvkalnlkpPvM7HpFR7QfitxS0edsWPy5RPNv2J8PfJd6fAf8cjd9saZpTqBiDmJxut65jPKZL7q%2BdjzRgT6yOU8sZqar%2Fp07InuBwITQj0cRAq1gmis%2B9m6YYmAxdVhsFMU8Y9GYkaHWw3WbDVienXtGdG2R9sxbGVIVbfMwRZIpH4ejpinZfSk0lgnDXo4KHziwP%2FlSvs5o6LkfMg0Nsa%2FebQKzgKelRGCJl8JM2ut9JFpBR8NKJjibJxHiCuxh3AkAy3Pn3Bm0CVNNyzy%2B1yCJbHssZcAIJCXyIqHrrpHuC4B4Od%2F7LaqTMEJ3okYxeg31zQ1G6R599yjPApGRfYeV2YaMLGTkJQGOqgBY%2FSURaPpRc3PX3%2F0FGW9F47gwSoo5mMd%2F8v9GzuUDq6IO1Wt0gQGeSre96ND82KAmgrMcNJ30t%2BbjHNqMxppjflErmYjgFyQP%2BL%2BPsh5c16zVgXGiUc7fG8wtmfjUVzIHAhKOFRzmHdFeteR2gPenP3doUhjYgGR29SeUDx5kDVCwfpEAjrEUl0sFRxnqeZ3pwsmkfgCcjt84w6uxn3J2d1LhINMytVy&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220517T215124Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFH4LJ7726%2F20220517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5270c8116d670bc1d61b5f0bd6a21be0388ee0de723c3350f54f1b914914b36d",
"images": {},
"source": "Serious Eats",
"url": "http://www.seriouseats.com/recipes/2008/04/essentials-how-to-cook-rice.html",
"shareAs": "http://www.edamam.com/recipe/essentials-rice-b1957a6a4025b25f6da6aef1fad452d4/rice",
"yield": 4,
"dietLabels": [
"Low-Fat",
"Low-Sodium"
],
"healthLabels": [],
"cautions": [],
"ingredientLines": [
"1 cup long-grain white rice",
"1 3/4 cup water",
"Pinch of salt",
"Glug of olive oil"
],
"ingredients": [
{
"text": "1 cup long-grain white rice",
"quantity": 1,
"measure": "cup",
"food": "rice",
"weight": 195,
"foodCategory": "grains",
"foodId": "food_bpumdjzb5rtqaeabb0kbgbcgr4t9",
"image": "https://www.edamam.com/food-img/0fc/0fc9fa8a3e0276198d75b2e259068f8a.jpg"
},
{
"text": "1 3/4 cup water",
"quantity": 1.75,
"measure": "cup",
"food": "water",
"weight": 414.75,
"foodCategory": "water",
"foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
"image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
},
.
.
.

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

#### React Architecture
- [Architechture](https://i.imgur.com/vk8Vgo8.jpg)

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
