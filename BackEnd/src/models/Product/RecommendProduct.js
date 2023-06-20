const { Schema, model } = require("mongoose");

const RecommendProductSchema = new Schema(
  {
    src: { type: String },
    name: { type: String },
    price: { type: Number },
  },
  { timestamps: true }
);

const RecommendProduct = model("recommendproduct", RecommendProductSchema);

module.exports = { RecommendProduct };
