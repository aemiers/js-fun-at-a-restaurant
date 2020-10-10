function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length <= 2)
  deliveryOrders.push(order);
}

function refundOrder () {

}

module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}
