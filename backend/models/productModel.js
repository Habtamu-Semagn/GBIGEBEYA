// getAllProducts,
// getProductById,
// createProduct,
// updateProduct,
// deleteProduct,
const db = require("../config/db.js");
const getAllProduct = async () => {
  const [products] = await db.promise().query("SELECT * FROM products");
  return products; // Return the first element of the array which contains the rows
};
const getProductById = async (productId) => {
  const [product] = await db
    .promise()
    .query("SELECT * FROM products WHERE product_id = ?", productId);
  return product[0];
};
const createProduct = async (
  name,
  description,
  price,
  stock_quantity,
  category,
  product_image,
  updated_at,
  seller_id
) => {
  const [result] = await db
    .promise()
    .query(
      "INSERT INTO products (name, description, price, stock_quantity, category, product_image, updated_at, seller_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        name,
        description,
        price,
        stock_quantity,
        category,
        product_image,
        updated_at,
        seller_id,
      ]
    );
  return result.insertId;
};
const updateProduct = async (
  productId,
  name,
  description,
  price,
  stock_quantity,
  category,
  product_image,
  updated_at,
  seller_id
) => {
  const [result] = await db
    .promise()
    .query(
      "UPDATE products SET name = ?, description = ?, price = ?, stock_quantity = ?, category = ?, product_image = ?, updated_at = ?, seller_id = ? WHERE product_id = ?",
      [
        name,
        description,
        price,
        stock_quantity,
        category,
        product_image,
        updated_at,
        seller_id,
        productId,
      ]
    );
  return result.affectedRows > 0;
};
const deleteProduct = async (productId) => {
  const [result] = await db
    .promise()
    .query("DELETE FROM products WHERE product_id = ?", productId);
  return result.affectedRows > 0;
};
module.exports = {
  getAllProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
