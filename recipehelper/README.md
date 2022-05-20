# Recipe Eolodex

---

#### Motivation

This site is designed to allow the user to quickly research ideas for either building a 
recipe or deciding what to eat for dinner. 

---

##### Build Status

- Still in the development
- Still to do:
  - Streamline functionality for adding to the saved recipes
  - CSS clean-up
  - Save the saved recipes into google sheets or a database
  - Allow User to log in in order to save more recipes: Pinterest-style
  - Search recipes within nutritional range
    - Create filters in the search
  - Develop an way to develop an average recipe of all recipes that come from a fetch

--- 

#### Current Features

- Search recipes by name
- Search recipes by ingredient
- Save recipes while using the site

---

#### Screenshots

- Landing Page - mobile
![Landing Page - mobile]('./screenshots/Landing\ page\ -mobile.png')

- Hamburger Manu 
![Hamburger Manu]('./screenshots/Hamburger\ menu\ -\ mobile.png')

- Search Page - mobile pre-search
![Search Page - mobile pre-search]('./screenshots/Search\ Page\ -\ pre-search.png')

- Search Page - mobile post-search
![Search Page - mobile post-search]('./screenshots/Search\ Page\ -\ mobile\ -\ post-search.png')

- Search Page - desktop post-search
![Search Page - desktop post-search]('./screenshots/Search\ Page\ -\ desktop\ -post-search.png')

- Individual Recipe - desktop
![Individual Recipe - desktop]('./screenshots/Individual\ Recipe\ -\ Desktop.png')

- Individual Recipe - ingredient acordian
![Individual Recipe - ingredient acordian]('./screenshots/Individual\ Recipe\ -\ Ingredient\ Accordian.png')

- Individual Recipe - ingredient popover
![Individual Recipe - ingredient popover]('./screenshots/Individual\ Recipe\ -\ Ingredient\ Accordian\ -\ popover\ image.png')

- Individual Recipe - nutrition acordian
![Individual Recipe - nutrition acordian]('./screenshots/Individual\ Recipe\ -\ Nutrition\ Accordian.png')

- Saved Recipes
![Saved Recipes]('./screenshots/Saved\ Recipes.png')

---

#### API
 
[EDAMAM] (https://developer.edamam.com/edamam-docs-recipe-api#/)


--- 

#### Tools

- Javascript
- React
- React-bootstrap

---

#### Code Snippet

```
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

```




