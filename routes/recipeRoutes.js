const express = require("express");
const Recipe = require("../models/Recipe");
const router = express.Router();

// GET all recipes
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find().populate("ingredients");
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new recipe
router.post("/", async (req, res) => {
  const { name, description, cookingTime, ingredients } = req.body;
  try {
    const recipe = new Recipe({ name, description, cookingTime, ingredients });
    await recipe.save();
    res.status(201).json(recipe);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PATCH a recipe
router.patch("/:id", async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedRecipe);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE a recipe
router.delete("/:id", async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    res.json({ message: "Recipe deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
