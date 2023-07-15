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
  },
  { timestamps: true }
);

const Cart = model("cart", CartSchema);

module.exports = { Cart };
