// routes/commentRoutes.js
const express = require("express");
const Comment = require("../models/Comment");
const router = express.Router();

// GET all comments for a post
router.get("/:postId", async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId }).populate(
      "user"
    );
    res.json(comments);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// CREATE a new comment
router.post("/", async (req, res) => {
  const { content, user, post } = req.body;
  try {
    const newComment = new Comment({ content, user, post });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).send("Invalid input");
  }
});

// GET comment by ID
router.get("/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id).populate("user");
    if (!comment) {
      return res.status(404).send("Comment not found");
    }
    res.json(comment);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// UPDATE comment by ID
router.patch("/:id", async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedComment) {
      return res.status(404).send("Comment not found");
    }
    res.json(updatedComment);
  } catch (err) {
    res.status(400).send("Invalid input");
  }
});

// DELETE comment by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);
    if (!deletedComment) {
      return res.status(404).send("Comment not found");
    }
    res.json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
