const express = require("express");
const universityController = require("../controllers/universityController");

const router = express.Router();

// Route to get all universities
router.get("/", universityController.getAllUniversities);

// Route to get a single university by ID
router.get("/:id", universityController.getUniversityById);

// Route to create a new university
router.post("/", universityController.createUniversity);

// Route to update a university by ID
router.put("/:id", universityController.updateUniversity);

// Route to delete a university by ID
router.delete("/:id", universityController.deleteUniversity);

module.exports = router;
