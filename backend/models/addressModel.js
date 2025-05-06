// getAllAddresses,
//   getAddressById,
//   createAddress,
//   updateAddress,
//   deleteAddress,
const db = require("../config/db.js");
const getAllAddresses = async () => {
  const [addresses] = await db.promise().query("SELECT * FROM addresses");
  return addresses;
};
const getAddressById = async (userId, addressId) => {
  const address = await db
    .promise()
    .query("SELECT * FROM addresses WHERE user_id = ? AND address_id = ?", [
      userId,
      addressId,
    ]);
  return address;
};
const createAddress = async (userId, block, dorm_no) => {
  const [result] = await db
    .promise()
    .query("INSERT INTO addresses (user_id, block, dorm_no) VALUES (?, ?, ?)", [
      userId,
      block,
      dorm_no,
    ]);
  return result.insertId;
};
const updateAddress = async (userId, addressId, block, dorm_no) => {
  const [result] = await db
    .promise()
    .query(
      "UPDATE addresses SET block = ?, dorm_no = ? WHERE user_id = ? AND address_id = ?",
      [block, dorm_no, userId, addressId]
    );
  return result.affectedRows > 0;
};
const deleteAddress = async (userId, addressId) => {
  const [result] = await db
    .promise()
    .query("DELETE FROM addresses WHERE user_id = ? AND address_id = ?", [
      userId,
      addressId,
    ]);
  return result.affectedRows > 0;
};
