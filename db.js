// db.js
const mongoose = require("mongoose");

// Set mongoose to use the new connection method (to prevent deprecation warnings)
mongoose.set("strictQuery", false);

// Connect to MongoDB database
mongoose
  .connect("mongodb://localhost:27017/SBA319", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
