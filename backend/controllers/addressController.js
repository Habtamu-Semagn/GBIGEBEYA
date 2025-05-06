// getAllAddresses,
//   getAddressById,
//   createAddress,
//   updateAddress,
//   deleteAddress,
const addressModel = require("../models/addressModel");
const getAllAddresses = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const addresses = await addressModel.getAllAddresses(userId);
    if (addresses.length > 0) {
      res.status(200).json(addresses);
    } else {
      res.status(404).json({ message: "No addresses found" });
    }
  } catch (error) {
    next(error);
  }
};
const getAddressById = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const addressId = req.params.addressId;
    const address = await addressModel.getAddressById(userId, addressId);
    if (address) {
      res.status(200).json(address);
    } else {
      res.status(404).json({ message: "Address not found" });
    }
  } catch (error) {
    next(error);
  }
};
const createAddress = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const { block, dorm_no } = req.body;
    const addressId = await addressModel.createAddress(userId, block, dorm_no);
    const address = await addressModel.getAddressById(userId, addressId);
    if (address) {
      res.status(201).json({
        id: address.addressId,
        block: address.block,
        dorm_no: address.dorm_no,
      });
    } else {
      res.status(400).json({ message: "Failed to create address" });
    }
  } catch (error) {
    next(error);
  }
};
const updateAddress = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const addressId = req.params.addressId;
    const { block, dorm_no } = req.body;
    const updated = await addressModel.updateAddress(
      userId,
      addressId,
      block,
      dorm_no
    );
    if (updated) {
      res.status(200).json({ message: "Address updated successfully" });
    } else {
      res.status(404).json({ message: "Address not found" });
    }
  } catch (error) {
    next(error);
  }
};
const deleteAddress = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const addressId = req.params.addressId;
    const deleted = await addressModel.deleteAddress(userId, addressId);
    if (deleted) {
      res.status(200).json({ message: "Address deleted successfully" });
    } else {
      res.status(404).json({ message: "Address not found" });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllAddresses,
  getAddressById,
  createAddress,
  updateAddress,
  deleteAddress,
};
