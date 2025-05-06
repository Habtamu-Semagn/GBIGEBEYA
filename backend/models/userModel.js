const db = require("../config/db");

const createUser = async (username, email, password) => {
  const [result] = await db
    .promise()
    .query(
      "INSERT INTO users (username, email, user_password) VALUES (?,?,?)",
      [username, email, password]
    );
  return result.insertId; // Return the ID of the newly created user
};
const getUserByEmail = async (email) => {
  const [user] = await db
    .promise()
    .query("SELECT * FROM users WHERE email = ?", [email]);
  return user[0];
};
const getUserById = async (userId) => {
  const [user] = await db
    .promise()
    .query("SELECT * FROM users WHERE id = ?", userId);
  return user[0];
};

const getAllUsers = async () => {
  const [users] = await db.promise().query("SELECT * FROM users");
  return users;
};

const updateUser = async (id, username, email, password) => {
  const [result] = await db
    .promise()
    .query(
      "UPDATE users SET username = ?, email = ?, user_password = ? WHERE id = ?",
      [username, email, password, id]
    );
  return result.affectedRows > 0; // Return true if the user was updated successfully
};

const deleteUser = async (id) => {
  const [result] = await db
    .promise()
    .query("DELETE FROM users WHERE id = ?", id);
  return result.affectedRows > 0;
};
const deleteAllUsers = async () => {
  const [result] = await db.promise().query("DELETE FROM users");
  console.log(result);
  return result.affectedRows; // Return true if the user was deleted successfully
};
module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
  getUserByEmail,
  deleteAllUsers,
};
