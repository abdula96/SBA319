const express = require("express");
const Ingredient = require("../models/Ingredient");
const router = express.Router();

// GET all ingredients
router.get("/", async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.json(ingredients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new ingredient
router.post("/", async (req, res) => {
  const { name, type, description } = req.body;
  try {
    const ingredient = new Ingredient({ name, type, description });
    await ingredient.save();
    res.status(201).json(ingredient);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PATCH an ingredient
router.patch("/:id", async (req, res) => {
  try {
    const updatedIngredient = await Ingredient.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedIngredient);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE an ingredient
router.delete("/:id", async (req, res) => {
  try {
    await Ingredient.findByIdAndDelete(req.params.id);
    res.json({ message: "Ingredient deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
