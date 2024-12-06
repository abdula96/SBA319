const mongoose = require("mongoose");

const IngredientSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  type: {
    type: String,
    enum: ["vegetable", "meat", "spice", "other"],
    required: true,
  },
  description: { type: String },
});

module.exports = mongoose.model("Ingredient", IngredientSchema);
