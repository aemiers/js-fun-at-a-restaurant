function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`;
}

function createMenuItem(name, price, type) {
  var menuItem =
    {
      name: name,
      price: price,
      type: type,
    };
    return menuItem
}

function addIngredients(topping, ingredients) {
  var topping = topping;
    if (!ingredients.includes(topping))
      ingredients.push(topping)
}

function formatPrice(price) {
  var formattedPrice = "$" + price
  return  formattedPrice
}

function decreasePrice(price) {

  var decreasedPrice = price - (price * .10)
  return decreasedPrice
}

function createRecipe (title, ingredients, type) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type,
  }
  return recipe
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
