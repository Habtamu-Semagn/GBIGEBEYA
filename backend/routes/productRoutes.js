const express = require("express");

const router = express.Router();
const productModel = require("../controllers/productController");

// Route to get all products
router.get("/", productModel.getAllProducts);

// Route to get a single product by ID
router.get("/:id", productModel.getProductById);

// Route to create a new product
router.post("/", productModel.createProduct);

// Route to update a product by ID
router.put("/:id", productModel.updateProduct);

// Route to partially update a product by ID
router.patch("/:id", productModel.updateProductPartially);

// Route to delete a product by ID
router.delete("/:id", productModel.deleteProduct);

module.exports = router;
