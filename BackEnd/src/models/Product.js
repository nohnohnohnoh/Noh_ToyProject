const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    src: { type: String },
    name: { type: String },
    price: { type: String },
  },

  { timestamps: true }
);

const Product = model("product", ProductSchema);

module.exports = { Product };
