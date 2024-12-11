// data/populateData.js
const mongoose = require("mongoose");
const connectDB = require("../config/db"); // Import connectDB function
const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

// Connect to DB
connectDB(); // Call the connectDB function

const populateData = async () => {
  try {
    // Sample Users
    const user1 = new User({ name: "John Doe", email: "johndoe@example.com" });
    const user2 = new User({
      name: "Jane Smith",
      email: "janesmith@example.com",
    });
    await user1.save();
    await user2.save();

    // Sample Posts
    const post1 = new Post({
      title: "Post 1",
      content: "This is the first post.",
      user: user1._id,
    });
    const post2 = new Post({
      title: "Post 2",
      content: "This is the second post.",
      user: user2._id,
    });
    await post1.save();
    await post2.save();

    // Sample Comments
    const comment1 = new Comment({
      content: "Great post!",
      user: user2._id,
      post: post1._id,
    });
    const comment2 = new Comment({
      content: "Nice post!",
      user: user1._id,
      post: post2._id,
    });
    await comment1.save();
    await comment2.save();

    console.log("Data populated");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error populating data:", err);
  }
};

populateData();
