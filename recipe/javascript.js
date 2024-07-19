// an array of all the ingredients to be added to the recipe
const tomatoSandwichIngredients = ["2 slices of sandwich bread", "1 tbs mayo", "1 slice of sharp cheddar", "1 large slice of beefsteak tomato", "5-7 fresh basil leaves", "salt to taste", "pepper to taste"];


// a function that adds ingredients to the page as list items
function addIngredientsToList(ingredients) {
  ingredients.forEach((ingredient) => {
    //creates list item for each ingredient and adds to the DOM
    let newListItem = document.createElement("li");
    document.getElementById("ingredient-list").appendChild(newListItem);
    
    // creates checkbox element
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // toggles strikethrough on and off when checkbox is clicked
    checkbox.addEventListener("click", addStrikeThrough)
    function addStrikeThrough() {
      this.parentNode.getElementsByTagName("label").item(0).classList.toggle("checked");
    };
    
    // adds ingredient string to each list item as a label
    let label = document.createElement("label");
    label.appendChild(
      document.createTextNode(ingredient)
    );
    
    // adds checkbox and label to list item
    newListItem.appendChild(checkbox);
    newListItem.appendChild(label);
    console.log("it's running");
  });
};

addIngredientsToList(tomatoSandwichIngredients);

