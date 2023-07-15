const { Schema, model, Types } = require("mongoose");

const MyOrderSchema = new Schema(
  {
    user: {
      _id: { type: Types.ObjectId, required: true },
    },
    src: { type: String },
    name: { type: String },
    price: { type: Number },
    quantity: { type: Number },
  },
  { timestamps: true }
);

const MyOrder = model("myorder", MyOrderSchema);

module.exports = { MyOrder };
