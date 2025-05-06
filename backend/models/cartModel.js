// addToCart,
// getCartItems,
// updateCartItem,
// removeCartItem,
// clearCart,
const db = require("../config/db.js");
const addToCart = async (userId, productId, quantity) => {
  const [result] = await db
    .promise()
    .query(
      "INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)",
      [userId, productId, quantity]
    );
  return result.insertId;
};
const getCartItems = async (userId) => {
  const [cartItems] = await db
    .promise()
    .query("SELECT * FROM cart WHERE user_id = ?", [userId]);
  return cartItems;
};
const updateCartItem = async (userId, cartItemId, quantity) => {
  const [result] = await db
    .promise()
    .query(
      "UPDATE cart SET quantity = ? WHERE user_id = ? AND cart_item_id = ?",
      [quantity, userId, cartItemId]
    );
  return result.affectedRows > 0;
};
const removeCartItem = async (userId, cartItemId) => {
  const [result] = await db
    .promise()
    .query("DELETE FROM cart WHERE user_id = ? AND cart_item_id = ?", [
      userId,
      cartItemId,
    ]);
  return result.affectedRows > 0;
};
const clearCart = async (userId) => {
  const [result] = await db
    .promise()
    .query("DELETE FROM cart WHERE user_id = ?", [userId]);
  return result.affectedRows > 0;
};
module.exports = {
  addToCart,
  getCartItems,
  updateCartItem,
  removeCartItem,
  clearCart,
};
