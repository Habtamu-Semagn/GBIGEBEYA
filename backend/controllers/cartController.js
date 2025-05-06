// addToCart,
// getCartItems,
// updateCartItem,
// removeCartItem,
// clearCart,
const cartModel = require("../models/cartModel");
const addToCart = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const { productId, quantity } = req.body;
    const cardItemId = await cartModel.addToCart(userId, productId, quantity);
    const cartItem = await cartModel.getCartItemById(userId, cardItemId);
    if (cartItem) {
      res.status(201).json({
        id: cartItem.cartItemId,
        productId: cartItem.productId,
        quantity: cartItem.quantity,
      });
    } else {
      res.status(400).json({ message: "Failed to add item to cart" });
    }
  } catch (error) {
    next(error);
  }
};
const getCartItems = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const cartItems = await cartModel.getCartItems(userId);
    if (cartItems.length > 0) {
      res.status(200).json(cartItems);
    } else {
      res.status(404).json({ message: "No items found in the cart" });
    }
  } catch (error) {
    next(error);
  }
};
const updateCartItem = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const cartItemId = req.params.cartItemId;
    const { quantity } = req.body;
    const updated = await cartModel.updateCartItem(
      userId,
      cartItemId,
      quantity
    );
    if (updated) {
      res.status(200).json({ message: "Cart item updated successfully" });
    } else {
      res.status(404).json({ message: "Cart item not found" });
    }
  } catch (error) {
    next(error);
  }
};
const removeCartItem = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const cartItemId = req.params.cartItemId;
    const removed = await cartModel.removeCartItem(userId, cartItemId);
    if (removed) {
      res.status(200).json({ message: "Cart item removed successfully" });
    } else {
      res.status(404).json({ message: "Cart item not found" });
    }
  } catch (error) {
    next(error);
  }
};
const clearCart = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const cleared = await cartModel.clearCart(userId);
    if (cleared) {
      res.status(200).json({ message: "Cart cleared successfully" });
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = {
  addToCart,
  getCartItems,
  updateCartItem,
  removeCartItem,
  clearCart,
};
