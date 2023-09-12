const { mongoose } = require("mongoose");
const { Router } = require("express");
const { WishList } = require("../models/WishList");

const wishListRouter = Router();

wishListRouter.post("/", async (req, res) => {
  try {
    if (!req.user) throw new Error("권환이 없습니다.");

    const { src, name, price, _id } = req.body;

    const findProductWishList = await WishList.find({
      $and: [{ "user._id": req.user._id }, { product_id: _id }],
    });

    if (findProductWishList.length !== 0)
      throw new Error("이미 WishList에 등록된 상품입니다.");

    if (findProductWishList.length === 0) {
      const wishList = new WishList({
        user: {
          _id: req.user._id,
        },
        product_id: _id,
        src,
        name,
        price,
      });
      await wishList.save();
    }

    return res.json({ message: "나의 위시리스트에 등록하였습니다." });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

wishListRouter.get("/", async (req, res) => {
  try {
    const { _id } = req.user;
    const { page = 1, limit = 4, wishListId } = req.query;

    if (wishListId) {
      if (!mongoose.isValidObjectId(wishListId))
        throw new Error("유효하지 않은 Id 입니다.");
      const wishList = await WishList.findOne({ _id: wishListId });
      return res.json({ wishList });
    }

    if (!req.user) throw new Error("권환이 없습니다.");
    const [wishList, count] = await Promise.all([
      WishList.find({ "user._id": _id })
        .sort({
          createdAt: -1,
        })
        .limit(limit)
        .skip((page - 1) * limit),
      await WishList.count(),
    ]);

    if (!wishList) throw new Error("유효하지 않은 유저");

    return res.json({ wishList, totalPages: Math.ceil(count / limit) });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

wishListRouter.delete("/", async (req, res) => {
  try {
    const { type, id } = req.body;
    if (type === "전체삭제") {
      const wishList = await WishList.deleteMany({});
      return res.json({ wishList });
    }

    if (type === "선택삭제") {
      const wishList = await WishList.deleteMany({ select: true });
      return res.json({ wishList });
    }

    if (!mongoose.isValidObjectId(id))
      return res.status(400).send("유효하지 않은 아이디");

    const wishList = await WishList.findOneAndDelete({ _id: id });
    return res.json({ wishList });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

wishListRouter.patch("/", async (req, res) => {
  try {
    const { _id, select } = req.body;

    if (!mongoose.isValidObjectId(_id)) throw new Error("유효하지 않은 아이디");
    if (typeof select !== "boolean") throw new Error("불리언타입이 아닙니다.");

    const [wishListRouter, wishList] = await Promise.all([
      await WishList.findByIdAndUpdate({ _id }, { select }, { new: true }),
      await WishList.find({ "user._id": req.user._id }).sort({ createdAt: -1 }),
    ]);

    return res.json({ wishList });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

module.exports = { wishListRouter };
