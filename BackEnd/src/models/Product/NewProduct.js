const { Schema, model } = require("mongoose");

const NewProductSchema = new Schema(
  {
    src: { type: String },
    name: { type: String, index: true },
    price: { type: Number, index: true },
  },
  { timestamps: true }
);

NewProductSchema.index({ createdAt: 1 });
// NewProductSchema.index({ title: "text", content: "text" });
// NewProductSchema.index({ test: "test", content: "test" });

const NewProduct = model("newproduct", NewProductSchema);

module.exports = { NewProduct };
