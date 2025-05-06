// getAllOrders,
//   getOrderById,
//   createOrder,
//   updateOrder,
//   deleteOrder,
const db = require("../config/db");

// orders logic
const getAllOrders = async () => {
  const [orders] = await db.promise().query("SELECT * FROM orders");
  return orders;
};
const getOrderById = async (orderId) => {
  const [order] = await db
    .promise()
    .query("SELECT * FROM orders WHERE order_id = ?", [orderId]);
  return order[0];
};
const createOrder = async (userId, status, createdAt) => {
  const [result] = await db
    .promise()
    .query(
      "INSERT INTO orders (user_id, status, created_at) VALUES (?, ?, ?)",
      [userId, status, createdAt]
    );
  return result.insertId;
};
const updateOrder = async (orderId, userId, status, createdAt) => {
  const [result] = await db
    .promise()
    .query(
      "UPDATE orders SET user_id = ?, status = ?, created_at = ? WHERE order_id = ?",
      [userId, status, createdAt, orderId]
    );
  return result.affectedRows > 0;
};
const deleteOrder = async (orderId) => {
  const [result] = await db
    .promise()
    .query("DELETE FROM orders WHERE order_id = ?", [orderId]);
  return result.affectedRows > 0;
};

// getOrderItemById,
// addOrderItem,
// updateOrderItem,
// deleteOrderItem,
// deleteAllOrderItems,

// order items logic
const getOrderItems = async (orderId) => {
  const [orderItems] = await db
    .promise()
    .query("SELECT * FROM order_items WHERE order_id = ?", [orderId]);
  return orderItems;
};
const getOrderItemById = async (orderId, itemId) => {
  const [orderItem] = await db
    .promise()
    .query("SELECT * FROM order_items WHERE order_id = ? AND item_id = ?", [
      orderId,
      itemId,
    ]);
  return orderItem[0];
};
const addOrderItem = async (orderId, productId, quantity, priceAtPurchase) => {
  const [result] = await db
    .promise()
    .query(
      "INSERT INTO order_items (order_id, product_id, quantity, price_at_purchase) VALUES (?, ?, ?, ?)",
      [orderId, productId, quantity, priceAtPurchase]
    );
  return result.insertId;
};
const updateOrderItem = async (
  orderId,
  orderItemId,
  productId,
  quantity,
  priceAtPurchase
) => {
  const [result] = await db
    .promise()
    .query(
      "UPDATE order_items SET product_id = ?, quantity = ?, price_at_purchase = ? WHERE order_id = ? AND item_id = ?",
      [productId, quantity, priceAtPurchase, orderId, orderItemId]
    );
  return result.affectedRows > 0;
};
const deleteOrderItem = async (orderId, orderItemId) => {
  const [result] = await db
    .promise()
    .query("DELETE FROM order_items WHERE order_id = ? AND item_id = ?", [
      orderId,
      orderItemId,
    ]);
  return result.affectedRows > 0;
};
const deleteAllOrderItems = async (orderId) => {
  const [result] = await db
    .promise()
    .query("DELETE FROM order_items WHERE order_id = ?", [orderId]);
  return result.affectedRows > 0;
};
module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
  getOrderItemById,
  addOrderItem,
  updateOrderItem,
  deleteOrderItem,
  deleteAllOrderItems,
};
