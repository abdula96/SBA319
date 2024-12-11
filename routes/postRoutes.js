// routes/postRoutes.js
const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

// GET all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("user");
    res.json(posts);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// CREATE a new post
router.post("/", async (req, res) => {
  const { title, content, user } = req.body;
  try {
    const newPost = new Post({ title, content, user });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).send("Invalid input");
  }
});

// GET post by ID
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("user");
    if (!post) {
      return res.status(404).send("Post not found");
    }
    res.json(post);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// UPDATE post by ID
router.patch("/:id", async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedPost) {
      return res.status(404).send("Post not found");
    }
    res.json(updatedPost);
  } catch (err) {
    res.status(400).send("Invalid input");
  }
});

// DELETE post by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).send("Post not found");
    }
    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
