const userModel = require("../models/userModel"); // Assuming you have a user model defined
// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    // Check if the user already exists
    const existingUser = await userModel.getUserByEmail(email);
    console.log(existingUser);
    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    // Create a new user
    const insertId = await userModel.createUser(username, email, password);
    const newUser = await userModel.getUserById(insertId); // Assuming you have a method to get user by ID
    if (newUser) {
      res.status(201).json({
        message: "User registered successfully",
        _id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    next(error);
  }
};
// @desc    Authenticate user
// @route   POST /api/users/login
// @access  Public
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await userModel.getUserByEmail(email); // Assuming you have a method to get user by email

    if (user && user.password === password) {
      res.json({
        _id: user.id,
        username: user.username,
        email: user.email,
      });
    } else {
      res.status(401);
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    next(error); // Pass the error to Express's error-handling middleware
  }
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Public
const getUserProfile = async (req, res, next) => {
  try {
    const userId = req.query.id; // Assuming the user ID is passed as a query parameter

    // Get the user by ID
    const user = await userModel.getUserById(userId); // Assuming you have a method to get user by ID

    if (user) {
      res.json(user);
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    next(error); // Pass the error to Express's error-handling middleware
  }
};
const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await userModel.deleteUser(userId); // Assuming you have a method to delete user by ID
    if (user) {
      res.status(204).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    next(error); // Pass the error to Express's error-handling middleware
  }
};
const getAllUsers = async (req, res, next) => {
  try {
    const users = await userModel.getAllUsers();
    if (users) {
      res.status(200).json(users);
    } else {
      res.status(404).json({ message: "No users found" });
    }
  } catch (error) {
    next(error); // Pass the error to Express's error-handling middleware
  }
};
const deleteAllUsers = async (req, res, next) => {
  try {
    const deletedCount = await userModel.deleteAllUsers();
    if (deletedCount) {
      res.status(200).json({
        message: `All users deleted successfully. Total: ${deletedCount}`,
      });
    } else {
      res.status(404).json({ message: "No users found" });
    }
  } catch (error) {
    next(error); // Pass the error to Express's error-handling middleware
  }
};
module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
  deleteUser,
  getAllUsers,
  deleteAllUsers,
};
