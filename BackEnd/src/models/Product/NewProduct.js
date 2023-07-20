const { Schema, model } = require("mongoose");

const NewProductSchema = new Schema(
  {
    src: { type: String, required: true },
    name: { type: String, index: true, required: true },
    price: { type: Number, index: true, required: true },
  },
  { timestamps: true }
);

NewProductSchema.index({ name: "text" });

const NewProduct = model("newproduct", NewProductSchema);

module.exports = { NewProduct };
