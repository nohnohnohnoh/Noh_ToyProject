const { Schema, model, Types } = require("mongoose");

const CartSchema = new Schema(
  {
    user: {
      _id: { type: Types.ObjectId, required: true },
    },
    product_id: { type: Types.ObjectId, required: true },
    src: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, reuired: true },
    select: { type: Boolean, default: false, required: true },
  },
  { timestamps: true }
);

const Cart = model("cart", CartSchema);

module.exports = { Cart };
