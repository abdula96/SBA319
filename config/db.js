// config/db.js
require("dotenv").config(); // Loads environment variables from the .env file
const mongoose = require("mongoose");

mongoose.set("strictQuery", false); // To suppress mongoose deprecation warning

const dbURI = process.env.MONGO_URI; // Use MONGO_URI from .env

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 50000, // Timeout increased to 50 seconds
    });
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit process with failure
  }
};

// Export connectDB function
module.exports = connectDB;
