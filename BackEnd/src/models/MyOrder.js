const { Schema, model, Types } = require("mongoose");

const MyOrderSchema = new Schema(
  {
    user: {
      _id: { type: Types.ObjectId, required: true },
    },
    src: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, reuired: true },
  },
  { timestamps: true }
);

const MyOrder = model("myorder", MyOrderSchema);

module.exports = { MyOrder };
