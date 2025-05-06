// processPayment
// getPaymentStatus
// getPaymentsByOrderId
// updatePaymentStatus
// deletePayment
const paymentModel = require("../models/paymentModel");

const processPayment = async (req, res, next) => {
  try {
    const { orderId, paymentMethod, transactionId, amount } = req.body;
    const paymentId = await paymentModel.createPayment(
      orderId,
      paymentMethod,
      transactionId,
      amount
    );
    const payment = await paymentModel.getPaymentById(paymentId);
    if (payment) {
      res.status(201).json({
        id: payment.paymentId,
        orderId: payment.orderId,
        paymentMethod: payment.paymentMethod,
        transactionId: payment.transactionId,
        amount: payment.amount,
        status: payment.status,
        createdAt: payment.createdAt,
      });
    } else {
      res.status(400).json({ message: "Failed to process payment" });
    }
  } catch (error) {
    next(error);
  }
};

const getPaymentStatus = async (req, res, next) => {
  try {
    const paymentId = req.params.paymentId;
    const payment = await paymentModel.getPaymentById(paymentId);
    if (payment) {
      res.status(200).json({
        id: payment.paymentId,
        status: payment.status
      });
    } else {
      res.status(404).json({ message: "Payment not found" });
    }
  } catch (error) {
    next(error);
  }
};

const getPaymentsByOrderId = async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const payments = await paymentModel.getPaymentsByOrderId(orderId);
    if (payments && payments.length > 0) {
      res.status(200).json(payments);
    } else {
      res.status(404).json({ message: "No payments found for this order" });
    }
  } catch (error) {
    next(error);
  }
};

const updatePaymentStatus = async (req, res, next) => {
  try {
    const paymentId = req.params.paymentId;
    const { status } = req.body;
    const updated = await paymentModel.updatePaymentStatus(paymentId, status);
    if (updated) {
      res.status(200).json({ message: "Payment status updated successfully" });
    } else {
      res.status(404).json({ message: "Payment not found" });
    }
  } catch (error) {
    next(error);
  }
};

const deletePayment = async (req, res, next) => {
  try {
    const paymentId = req.params.paymentId;
    const deletedPayment = await paymentModel.deletePaymentById(paymentId);
    if (deletedPayment) {
      res.status(204).send("Payment deleted successfully!");
    } else {
      res.status(404).send("Payment not found");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  processPayment,
  getPaymentStatus,
  getPaymentsByOrderId,
  updatePaymentStatus,
  deletePayment
};