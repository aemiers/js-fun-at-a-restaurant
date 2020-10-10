function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length <= 2)
  deliveryOrders.push(order);
}

function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNumber) {
      deliveryOrders.splice(i, 1)}
  }
  return deliveryOrders
}

// function listItems(deliveryOrders) {
//   for (var i = 0; i < deliveryOrders.length; i++) {
//     deliveryOrders[i].item = items
//
//   return items
// }

// function listItems(deliveryOrders) {
//   for (var i = 0; i < deliveryOrders.length; i++) {
//
//     deliveryOrders.slice(0, i}
//
//   return items
// }

function listItems(deliveryOrders) {
  var items = deliveryOrders.forEach(function(obj)){
    a.push(obj.item);
  }
  return items
}

// function searchOrder(deliveryOrders, item) {
//   for (var i = 0; i < deliveryOrders.length; i++) {
//     if(deliverOrders[i].item !== item) {
//       return false} else {return true}
//     }
// }

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
