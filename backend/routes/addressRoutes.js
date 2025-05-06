const express = require("express");

const router = express.Router();
const {
  getAllAddresses,
  getAddressById,
  createAddress,
  updateAddress,
  deleteAddress,
} = require("../controllers/addressController");

// Route to get all addresses
router.get("/", getAllAddresses);

// Route to get a single address by ID
router.get("/:id", getAddressById);

// Route to create a new address
router.post("/", createAddress);

// Route to update an existing address
router.put("/:id", updateAddress);

// Route to delete an address
router.delete("/:id", deleteAddress);

module.exports = router;
