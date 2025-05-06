const db = require("../config/db");

const createPayment = async (orderId, paymentMethod, transactionId, amount) => {
  const [result] = await db
    .promise()
    .query(
      "INSERT INTO payments(order_id, payment_method, transaction_id, amount) VALUES (?, ?, ?, ?)",
      [orderId, paymentMethod, transactionId, amount]
    );
  return result.insertId;
};

const getPaymentById = async (paymentId) => {
  const [result] = await db
    .promise()
    .query("SELECT * FROM payments WHERE payment_id = ?", [paymentId]);
  return result[0];
};

const getPaymentsByOrderId = async (orderId) => {
  const [result] = await db
    .promise()
    .query("SELECT * FROM payments WHERE order_id = ?", [orderId]);
  return result;
};

const updatePaymentStatus = async (paymentId, status) => {
  const [result] = await db
    .promise()
    .query("UPDATE payments SET status = ? WHERE payment_id = ?", [
      status,
      paymentId,
    ]);
  return result.affectedRows > 0;
};

const deletePaymentById = async (paymentId) => {
  const [result] = await db
    .promise()
    .query("DELETE FROM payments WHERE payment_id = ?", [paymentId]);
  return result.affectedRows > 0;
};

module.exports = {
  createPayment,
  getPaymentById,
  getPaymentsByOrderId,
  updatePaymentStatus,
  deletePaymentById,
};
