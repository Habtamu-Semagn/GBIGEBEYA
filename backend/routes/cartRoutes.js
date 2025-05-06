const express = require("express");

const router = express.Router();
const {
  addToCart,
  getCartItems,
  updateCartItem,
  removeCartItem,
  clearCart,
} = require("../controllers/cartController");

// Route to add an item to the cart
router.post("/add", addToCart);

// Route to get all items in the cart
router.get("/", getCartItems);

// Route to update a specific cart item
router.put("/update/:itemId", updateCartItem);

// Route to remove a specific item from the cart
router.delete("/remove/:itemId", removeCartItem);

// Route to clear the entire cart
router.delete("/clear", clearCart);

module.exports = router;
