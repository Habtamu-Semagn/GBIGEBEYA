const universityModel = require("../models/universityModel");

const getAllUniversities = async (req, res, next) => {
  try {
    const universities = await universityModel.getAllUniversities();
    if (universities) {
      res.status(200).json(universities);
    } else {
      res.status(404).json({ message: "No universities found" });
    }
  } catch (error) {
    next(error);
  }
};
const getUniversityById = async (req, res, next) => {
  try {
    const universityId = req.params.id;
    const university = await universityModel.getUniversityById(universityId);
    if (university) {
      res.status(200).json(university);
    } else {
      res.status(404).json({ message: "University not found" });
    }
  } catch (error) {
    next(error);
  }
};
const createUniversity = async (req, res, next) => {
  try {
    const { name, campus, user_id } = req.body;
    const universityId = await universityModel.createUniversity(
      name,
      campus,
      user_id
    );
    const university = await universityModel.getUniversityById(universityId);
    if (university) {
      res.status(201).json({
        id: university.universityId,
        name: university.name,
        campus: university.campus,
        user_id: university.user_id,
      });
    } else {
      res.status(400).json({ message: "Failed to create university" });
    }
  } catch (error) {
    next(error);
  }
};
const updateUniversity = async (req, res, next) => {
  try {
    const universityId = req.params.id;
    const { name, campus } = req.body;
    const updated = await universityModel.updateUniversity(
      universityId,
      name,
      campus
    );
    if (updated) {
      res.status(200).json({ message: "University updated successfully" });
    } else {
      res.status(404).json({ message: "University not found" });
    }
  } catch (error) {
    next(error);
  }
};
const deleteUniversity = async (req, res, next) => {
  try {
    const universityId = req.params.id;
    const deleted = await universityModel.deleteUniversity(universityId);
    if (deleted) {
      res.status(200).json({ message: "University deleted successfully" });
    } else {
      res.status(404).json({ message: "University not found" });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllUniversities,
  getUniversityById,
  createUniversity,
  updateUniversity,
  deleteUniversity,
};
