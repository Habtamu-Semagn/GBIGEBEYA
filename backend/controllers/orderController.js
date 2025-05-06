// getAllOrders,
// getOrderById,
// createOrder,
// updateOrder,
// deleteOrder,

// getOrderItems,
// getOrderItemById,
// addOrderItem,
// updateOrderItem,
// deleteOrderItem,
// deleteAllOrderItems,

// Orders logic
const orderModel = require("../models/orderModel");
const getAllOrders = async (req, res, next) => {
  try {
    const orders = await orderModel.getAllOrders();
    if (orders.length > 0) {
      res.status(200).json(orders);
    } else {
      res.status(404).json({ message: "No orders found" });
    }
  } catch (error) {
    next(error);
  }
};
const getOrderById = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const order = await orderModel.getOrderById(orderId);
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    next(error);
  }
};
const createOrder = async (req, res, next) => {
  try {
    const { userId, status, createdAt } = req.body;
    const orderId = await orderModel.createOrder(userId, status, createdAt);
    const order = await orderModel.getOrderById(orderId);
    if (order) {
      res.status(201).json({
        id: order.orderId,
        userId: order.userId,
        status: order.status,
        createdAt: order.createdAt,
      });
    } else {
      res.status(400).json({ message: "Failed to create order" });
    }
  } catch (error) {
    next(error);
  }
};
const updateOrder = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const { userId, status, createdAt } = req.body;
    const updated = await orderModel.updateOrder(
      orderId,
      userId,
      status,
      createdAt
    );
    if (updated) {
      res.status(200).json({ message: "Order updated successfully" });
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    next(error);
  }
};
const deleteOrder = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const deleted = await orderModel.deleteOrder(orderId);
    if (deleted) {
      res.status(200).json({ message: "Order deleted successfully" });
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    next(error);
  }
};

// Order items logic
const getOrderItems = async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const orderItems = await orderModel.getOrderItems(orderId);
    if (orderItems.length > 0) {
      res.status(200).json(orderItems);
    } else {
      res.status(404).json({ message: "No order items found" });
    }
  } catch (error) {
    next(error);
  }
};
const getOrderItemById = async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const orderItemId = req.params.orderItemId;
    const orderItem = await orderModel.getOrderItemById(orderId, orderItemId);
    if (orderItem) {
      res.status(200).json(orderItem);
    } else {
      res.status(404).json({ message: "Order item not found" });
    }
  } catch (error) {
    next(error);
  }
};
const addOrderItem = async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const { productId, quantity, priceAtPurchase } = req.body;
    const orderItemId = await orderModel.addOrderItem(
      orderId,
      productId,
      quantity,
      priceAtPurchase
    );
    const orderItem = await orderModel.getOrderItemById(orderId, orderItemId);
    if (orderItem) {
      res.status(201).json({
        id: orderItem.orderItemId,
        productId: orderItem.productId,
        quantity: orderItem.quantity,
        priceAtPurchase: orderItem.priceAtPurchase,
      });
    } else {
      res.status(400).json({ message: "Failed to add order item" });
    }
  } catch (error) {
    next(error);
  }
};
const updateOrderItem = async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const orderItemId = req.params.orderItemId;
    const { productId, quantity, priceAtPurchase } = req.body;
    const updated = await orderModel.updateOrderItem(
      orderId,
      orderItemId,
      productId,
      quantity,
      priceAtPurchase
    );
    if (updated) {
      res.status(200).json({ message: "Order item updated successfully" });
    } else {
      res.status(404).json({ message: "Order item not found" });
    }
  } catch (error) {
    next(error);
  }
};
const deleteOrderItem = async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const orderItemId = req.params.orderItemId;
    const deleted = await orderModel.deleteOrderItem(orderId, orderItemId);
    if (deleted) {
      res.status(200).json({ message: "Order item deleted successfully" });
    } else {
      res.status(404).json({ message: "Order item not found" });
    }
  } catch (error) {
    next(error);
  }
};
const deleteAllOrderItems = async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const deleted = await orderModel.deleteAllOrderItems(orderId);
    if (deleted) {
      res.status(200).json({ message: "All order items deleted successfully" });
    } else {
      res.status(404).json({ message: "No order items found" });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
  getOrderItems,
  getOrderItemById,
  addOrderItem,
  updateOrderItem,
  deleteOrderItem,
  deleteAllOrderItems,
};
