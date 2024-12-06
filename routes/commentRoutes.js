const express = require("express");
const Comment = require("../models/Comment");
const router = express.Router();

// GET all comments for a specific recipe
router.get("/recipe/:recipeId", async (req, res) => {
  try {
    const comments = await Comment.find({ recipe: req.params.recipeId });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new comment
router.post("/", async (req, res) => {
  const { recipe, text } = req.body;
  try {
    const comment = new Comment({ recipe, text });
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PATCH a comment
router.patch("/:id", async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedComment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE a comment
router.delete("/:id", async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.json({ message: "Comment deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
