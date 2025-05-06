const express = require("express");
// const { protect, admin } = require("../middlewares/authMiddleware");
const userController = require("../controllers/userController");

const router = express.Router();

// updateUserProfile,
// getAllUsers,
// deleteUser,

// Public routes
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);

// Protected routes
// router.get("/profile", protect, getUserProfile);
// router.put("/profile", protect, updateUserProfile);
router.get("/profile", userController.getUserProfile);
// --- router.put("/profile", updateUserProfile);

// Admin routes
// router.get("/", protect, admin, getAllUsers);
// router.delete("/:id", protect, admin, deleteUser);

router.get("/", userController.getAllUsers);
router.delete("/:id", userController.deleteUser);

router.delete("/", userController.deleteAllUsers);
module.exports = router;
