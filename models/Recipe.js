const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  cookingTime: { type: Number, required: true },
  ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredient" }],
});

module.exports = mongoose.model("Recipe", RecipeSchema);
