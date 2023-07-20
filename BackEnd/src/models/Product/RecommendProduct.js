const { Schema, model } = require("mongoose");

const RecommendProductSchema = new Schema(
  {
    src: { type: String, required: true },
    name: { type: String, index: true, required: true },
    price: { type: Number, index: true, required: true },
  },
  { timestamps: true }
);

RecommendProductSchema.index({ name: "text" });

const RecommendProduct = model("recommendproduct", RecommendProductSchema);

module.exports = { RecommendProduct };
