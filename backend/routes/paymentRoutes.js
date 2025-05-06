const express = require("express");
const paymentController = require("../controllers/paymentController");

const router = express.Router();

// Route to process a payment
router.post("/process", paymentController.processPayment);

// Route to get payment status
router.get("/status/:paymentId", paymentController.getPaymentStatus);

// Route to get all payments for a specific order
router.get("/order/:orderId", paymentController.getPaymentsByOrderId);

// Route to update the status of a payment (e.g., mark as "Paid" or "Failed")
router.put("/status/:paymentId", paymentController.updatePaymentStatus);

// Route to delete a specific payment
router.delete("/:paymentId", paymentController.deletePayment);

module.exports = router;
