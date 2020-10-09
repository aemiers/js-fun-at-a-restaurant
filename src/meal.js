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

/*
function addIngredients (ingredients) {
  var ingredients = [ingredients]
  if (ingredients)
}
*/

module.exports = {
  nameMenuItem,
  createMenuItem,
  //addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}
