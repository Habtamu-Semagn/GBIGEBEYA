// getAllProducts,
// getProductById,
// createProduct,
// updateProduct,
// deleteProduct,
const productModel = require("../models/productModel");

const getAllProducts = async (req, res, next) => {
  try {
    const products = await productModel.getAllProducts();
    if (products) {
      res.status(200).json(products);
    } else {
      res.status(404).json({ message: "No products found" });
    }
  } catch (error) {
    next(error);
  }
};
const getProductById = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await productModel.getProductById(productId);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    next(error);
  }
};
const createProduct = async (req, res, next) => {
  try {
    const {
      name,
      description,
      price,
      stock_quantity,
      category,
      product_image,
      updated_at,
      seller_id,
    } = req.body;
    const productId = await productModel.createProduct(
      name,
      description,
      price,
      stock_quantity,
      category,
      product_image,
      updated_at,
      seller_id
    );
    const product = await productModel.getProductById(productId);
    if (product) {
      res.status(201).json({
        id: product.productId,
        name: product.name,
        description: product.description,
        price: product.price,
        stock_quantity: product.stock_quantity,
        category: product.category,
        product_image: product.product_image,
        updated_at: product.updated_at,
        seller_id: product.seller_id,
      });
    } else {
      res.status(400).json({ message: "Failed to create product" });
    }
  } catch (error) {
    next(error);
  }
};
const updateProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const {
      name,
      description,
      price,
      stock_quantity,
      category,
      product_image,
      updated_at,
      seller_id,
    } = req.body;
    const updated = await productModel.updateProduct(
      productId,
      name,
      description,
      price,
      stock_quantity,
      category,
      product_image,
      updated_at,
      seller_id
    );
    if (updated) {
      res.status(200).json({ message: "Product updated successfully" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    next(error);
  }
};
const deleteProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const deleted = await productModel.deleteProduct(productId);
    if (deleted) {
      res.status(204).json({ message: "Product deleted successfully" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    next(error);
  }
};
const updateProductPartially = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const updatedFields = req.body; // Assuming you want to update only the fields provided in the request body
    const updated = await productModel.updateProductPartially(
      productId,
      updatedFields
    );
    if (updated) {
      res.status(200).json({ message: "Product updated successfully" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  updateProductPartially,
};
