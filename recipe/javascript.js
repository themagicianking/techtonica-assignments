const tomatoSandwichIngredients = ["2 slices of sandwich bread", "1 tbs mayo", "1 slice of sharp cheddar", "1 large slice of beefsteak tomato", "5-7 fresh basil leaves", "salt to taste", "pepper to taste"];

function addIngredientsToList(ingredients) {
  ingredients.forEach((ingredient) => {
    let newListItem = document.createElement("li");
    // newListItem.textContent = "example text";
    document.querySelector("ul").appendChild(newListItem);
    
    let checkbox = document.createElement("input");
    
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "id";
    
    let label = document.createElement("label");
    
    label.htmlFor = "id";
    
    label.appendChild(
      document.createTextNode(ingredient)
    );
    
    newListItem.appendChild(checkbox);
    newListItem.appendChild(label);
  });
}

addIngredientsToList(tomatoSandwichIngredients);
