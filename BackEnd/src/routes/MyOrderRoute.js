const { Router } = require("express");
const { MyOrder } = require("../models/MyOrder");
const { Auth } = require("../models/Auth");
const { authMiddleware } = require("../middleware/AuthMiddleware");

const myorderRouter = Router();

myorderRouter.post("/", async (req, res) => {
  try {
    if (!req.user) throw new Error("권환이 없습니다.");
    const { src, name, price, quantity } = req.body;
    const myOrder = await new MyOrder({
      user: {
        _id: req.user._id,
      },
      src,
      name,
      price,
      quantity,
    }).save();
    return res.json({ myOrder });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

myorderRouter.get("/", async (req, res) => {
  try {
    const { _id } = req.user;
    if (!req.user) throw new Error("권환이 없습니다.");
    const myOrders = await MyOrder.find({ "user._id": _id });
    if (!myOrders) throw new Error("유효하지 않은 유저");
    return res.json({ myOrders });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

module.exports = { myorderRouter };
