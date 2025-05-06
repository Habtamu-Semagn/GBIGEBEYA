const db = require("../config/db.js");

const getUniversityById = async (universityId) => {
  const [university] = await db
    .promise()
    .query("SELECT * FROM universities WHERE university_id = ?", [
      universityId,
    ]);
  return university[0];
};
const getAllUniversities = async () => {
  const [universities] = await db.promise().query("SELECT * FROM universities");
  return universities;
};
const createUniversity = async (name, campus, user_id) => {
  const [result] = await db
    .promise()
    .query(
      "INSERT INTO universities (university_name, campus, user_id) VALUES (?, ?, ?)",
      [name, campus, user_id]
    );
  return result.insertId; // Return the ID of the newly created university
};
const updateUniversity = async (id, name, campus) => {
  const [result] = await db
    .promise()
    .query(
      "UPDATE universities SET university_name = ?, campus = ? WHERE university_id = ?",
      [name, campus, id]
    );
  return result.affectedRows > 0; // Return true if the university was updated successfully
};
const deleteUniversity = async (id) => {
  const [result] = await db
    .promise()
    .query("DELETE FROM universities WHERE university_id = ?", id);
  return result.affectedRows > 0; // Return true if the university was deleted successfully
};
module.exports = {
  getUniversityById,
  getAllUniversities,
  createUniversity,
  updateUniversity,
  deleteUniversity,
};
