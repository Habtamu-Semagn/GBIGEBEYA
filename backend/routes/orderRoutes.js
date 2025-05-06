const express = require("express");

const router = express.Router();
const orderController = require("../controllers/orderController");

router.get("/", orderController.getAllOrders);
router.get("/:id", orderController.getOrderById);
router.post("/", orderController.createOrder);
router.put("/:id", orderController.updateOrder);
router.delete("/:id", orderController.deleteOrder);
/*
 // Route to partially update an existing order
 router.patch("/:id", updateOrder);
*/
// orderItems routes
router.get("/:orderId/items", orderController.getOrderItems);
router.get("/:orderId/items/:itemId", orderController.getOrderItemById);
router.post("/:orderId/items", orderController.addOrderItem);
router.put("/:orderId/items/:itemId", orderController.updateOrderItem);
router.delete("/:orderId/items/:itemId", orderController.deleteOrderItem);
router.delete("/:orderId/items", orderController.deleteAllOrderItems);

module.exports = router;
