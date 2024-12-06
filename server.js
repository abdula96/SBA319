// Import required modules
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // To use environment variables

// Import route files
const recipeRoutes = require("./routes/recipeRoutes");
const ingredientRoutes = require("./routes/ingredientRoutes");
const commentRoutes = require("./routes/commentRoutes");

// Initialize Express app
const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route integration
// All recipe-related routes will start with '/api/recipes'
app.use("/api/recipes", recipeRoutes);

// All ingredient-related routes will start with '/api/ingredients'
app.use("/api/ingredients", ingredientRoutes);

// All comment-related routes will start with '/api/comments'
app.use("/api/comments", commentRoutes);

// Ensure that the MONGO_URI is loaded correctly from .env
if (!process.env.MONGO_URI) {
  console.error("MongoDB URI is missing from the .env file!");
  process.exit(1); // Exit if the MONGO_URI is not found
}

// Connect to MongoDB using Mongoose
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => {
    console.error(`Database connection error: ${err.message}`);
    process.exit(1); // Exit the process if there's a DB connection error
  });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
