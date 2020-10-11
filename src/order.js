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




function listItems(deliveryOrders) {
  var items = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    items.push(deliveryOrders[i].item)
  }
  return items.join(", ")
}




function searchOrder(deliveryOrders, itemName) {
  for (var i = 0; i < deliveryOrders.length; i++) {
   if (deliveryOrders[i].item === itemName) {
     return true
   }
 }
 return false
}


// function searchOrder(deliveryOrders, item) {
// for (var i = 0; i < deliveryOrders.length; i++) {
// if (deliveryOrders.includes(item)){
//         return true} else {
//           return false
//         }


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
