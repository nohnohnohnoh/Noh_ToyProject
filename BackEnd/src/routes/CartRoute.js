const { mongoose } = require("mongoose");
const { Router } = require("express");
const { WishList } = require("../models/WishList");
const { Cart } = require("../models/Cart");

const cartRouter = Router();

cartRouter.post("/", async (req, res) => {
  try {
    if (!req.user) throw new Error("권환이 없습니다.");

    const { _id, src, name, price, quantity } = req.body;

    if (quantity === 0)
      throw new Error("1개 이상이어야 장바구니에 등록이 가능합니다.");

    const cart = new Cart({
      user: {
        _id: req.user._id,
      },
      product_id: _id,
      src,
      name,
      price,
      quantity,
    });

    const [deleteWishList, saveWishList, wishList] = await Promise.all([
      await WishList.deleteOne({ product_id: _id }),
      await cart.save(),
      await WishList.find({ "user._id": req.user._id }).sort({
        createdAt: -1,
      }),
    ]);

    return res.json({ wishList, message: "장바구니에 등록하였습니다." });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

cartRouter.get("/", async (req, res) => {
  try {
    const { _id } = req.user;

    if (!req.user) throw new Error("권환이 없습니다.");

    const cart = await Cart.find({ "user._id": _id }).sort({ createdAt: -1 });

    if (!cart) throw new Error("유효하지 않은 유저");

    return res.json({ cart });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

cartRouter.delete("/", async (req, res) => {
  try {
    const { type } = req.query;
    const { _id } = req.body;

    if (type === "선택삭제") {
      const cart = await Cart.deleteMany({ select: true });
      return res.json({ cart });
    }

    if (!mongoose.isValidObjectId(_id))
      return res.status(400).send("유효하지 않은 아이디");

    const cart = await Cart.findOneAndDelete({ _id });

    return res.json({ cart });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

cartRouter.patch("/quantity", async (req, res) => {
  try {
    const { _id, quantity } = req.body;

    if (!mongoose.isValidObjectId(_id)) throw new Error("유효하지 않은 아이디");

    if (typeof quantity !== "number") throw new Error("숫자 타입이 아닙니다.");

    if (quantity === 0) throw new Error("수량은 0개 이상입니다.");

    const cartQuantity = await Cart.findByIdAndUpdate(
      { _id },
      { quantity },
      { new: true }
    );

    return res.json({ cartQuantity });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

cartRouter.patch("/select", async (req, res) => {
  try {
    const { type } = req.query;
    const { _id, select } = req.body;

    if (type === "전체선택") {
      const [cartRouter, cart] = await Promise.all([
        await Cart.updateMany({}, { select: true }),
        await Cart.find({ "user._id": req.user._id }).sort({ createdAt: -1 }),
      ]);
      return res.json({ cart, message: "모든 select 변경 완료." });
    }

    if (!mongoose.isValidObjectId(_id)) throw new Error("유효하지 않은 아이디");
    if (typeof select !== "boolean") throw new Error("불리언 타입이 아닙니다.");

    const [cartRouter, cart] = await Promise.all([
      await Cart.findByIdAndUpdate({ _id }, { select }, { new: true }),
      await Cart.find({ "user._id": req.user._id }).sort({ createdAt: -1 }),
    ]);

    return res.json({ cart, message: "select 변경 완료." });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

module.exports = { cartRouter };
