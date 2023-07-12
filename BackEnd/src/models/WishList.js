const { Schema, model, Types } = require("mongoose");

const WishListSchema = new Schema(
  {
    user: {
      _id: { type: Types.ObjectId, required: true },
    },
    product_id: { type: Types.ObjectId, required: true },
    src: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    select: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const WishList = model("wishlist", WishListSchema);

module.exports = { WishList };
