const { Schema, model } = require("mongoose");

const NewProductSchema = new Schema(
  {
    src: { type: String },
    name: { type: String },
    price: { type: Number },
  },
  { timestamps: true }
);

NewProductSchema.index({ name: "text" });

const NewProduct = model("newproduct", NewProductSchema);

module.exports = { NewProduct };
