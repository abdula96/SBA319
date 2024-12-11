// routes/userRoutes.js
const express = require("express");
const User = require("../models/User");
const router = express.Router();

// GET all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// CREATE a new user
router.post("/", async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const newUser = new User({ name, email, age });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).send("Invalid input");
  }
});

// GET user by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.json(user);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// UPDATE user by ID
// In routes/userRoutes.js

router.patch("/:id", async (req, res) => {
  const { name, email, age } = req.body; // Fields to update

  try {
    // Attempt to find and update the user
    const user = await User.findByIdAndUpdate(
      req.params.id, // The user ID in the URL
      { name, email, age }, // Fields to update
      { new: true, runValidators: true } // Return the updated user and validate the fields
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user); // Respond with the updated user
  } catch (err) {
    console.error("Error updating user:", err); // Log the exact error
    if (err.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: "Validation failed", errors: err.errors });
    }
    res.status(400).json({ message: "Invalid request data" }); // Handle bad requests
  }
});

// DELETE user by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).send("User not found");
    }
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
