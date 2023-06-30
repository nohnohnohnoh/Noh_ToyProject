const { Router } = require("express");
const mongoose = require("mongoose");
const { NewProduct } = require("../models/Product/NewProduct");
const { RecommendProduct } = require("../models/Product/RecommendProduct");

const productRouter = Router();

productRouter.get("/main", async (req, res) => {
  try {
    const { lastid } = req.query;
    const conditionQuery = lastid ? { _id: { $gt: lastid } } : {};
    const [newProducts, newProduct] = await Promise.all([
      await NewProduct.find(conditionQuery).sort({ _id: 1 }).limit(8),
      await NewProduct.find({}),
    ]);
    return res.json({ newProducts, newProduct });
  } catch (e) {
    return res.status(500).json({ err: e.message });
  }
});

productRouter.get("/new", async (req, res) => {
  try {
    const { page = 1, limit = 16 } = req.query;
    const [newProducts, count] = await Promise.all([
      await NewProduct.find({})
        .sort({ _id: 1 })
        .limit(limit)
        .skip((page - 1) * 16),
      await NewProduct.count(),
    ]);
    res.json({
      newProducts,
      count,
      totalPages: Math.ceil(count / limit),
    });
  } catch (e) {
    return res.status(500).json({ err: e.message });
  }
});

productRouter.get("/recommend", async (req, res) => {
  try {
    const { page } = req.query;
    const recommendProducts = await RecommendProduct.find({})
      .sort({ _id: 1 })
      .limit(16);
    return res.json({ recommendProducts });
  } catch (e) {
    return res.status(500).json({ err: e.message });
  }
});

productRouter.get("/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    if (!mongoose.isValidObjectId(productId))
      throw new Error("유효하지 않는 Id 입니다.");
    const [recommendProducts, newProducts] = await Promise.all([
      await RecommendProduct.findOne({ _id: productId }),
      await NewProduct.findOne({ _id: productId }),
    ]);
    if (recommendProducts) return res.json({ recommendProducts });
    if (newProducts) return res.json({ newProducts });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = { productRouter };
