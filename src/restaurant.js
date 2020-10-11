
function createRestaurant(name) {
  return restaurant =
  {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
}

// function addMenuItem(name, lunchItem) {
//   restaurant.menus.lunch.push(lunchItem)
// }


// function addMenuItem(name, item) {
//   if (item.type === "lunch") {
//     restaurant.menus.lunch.push(item)
//       } else {
//         restaurant.menus.breakfast.push(item)
//   }
// }

// function addMenuItem(name, item) {
//   if (item.type === "lunch") {
//     restaurant.menus.lunch.push(item)
//       } else {
//         restaurant.menus.breakfast.push(item)
//   }
// }
// function addMenuItem(name, item) {
//   if (!name.includes(item)) {
//     name.menus.type.push(item)
//       } else {
//         restaurant.menus.type.push(item)
//   }
// }

function addMenuItem(name, item) {
  if (!name.menu.menutype.items.includes(item)) {
    name.menus.type.push(item)
      } else {
        restaurant.menus.type.push(item)
  }
}

// lunchItem.type === restaurant.menus
// function addMenuItem(name, menuItem) {
//   restaurant.menus.push(menuItem) {
//     if (!restaurant.includes(menuItem)) {
//       ingredients.push(menuItem)}
//     }
// }

// function addMenuItem(name, menuItem) {
//     if (!restaurant.includes(menuItem)) {
//       ingredients.push(menuItem)}
//     restaurant.type.push(menuItem)
//
// }



// function removeMenuItem(item, type) {
//   for (var i = 0; i < restaurant.length; i++) {
//     if (
// slice
//       restaurant.menus.pop
// }
// }
//
//   return `No one is eating our ${item} - it has been removed from the ${type} menu!
//
//   {else} return `Sorry, we don't sell ${item}, try adding a new recipe!`

module.exports = {
  createRestaurant,
  addMenuItem,
  //removeMenuItem
}
