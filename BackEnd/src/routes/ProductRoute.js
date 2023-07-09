const { Router } = require("express");
const mongoose = require("mongoose");
const { NewProduct } = require("../models/Product/NewProduct");
const { RecommendProduct } = require("../models/Product/RecommendProduct");

const productRouter = Router();

productRouter.get("/main", async (req, res) => {
  try {
    const { lastid } = req.query;
    const conditionQuery = lastid ? { _id: { $gt: lastid } } : {};
    const [newProducts, count] = await Promise.all([
      await NewProduct.find(conditionQuery).sort({ _id: 1 }).limit(8),
      await NewProduct.count(),
    ]);
    return res.json({
      newProducts,
      totalPage: Math.ceil(count / 8),
    });
  } catch (e) {
    return res.status(500).json({ err: e.message });
  }
});

productRouter.get("/search", async (req, res) => {
  try {
    const { search, page = 1, limit = 4 } = req.query;

    const [
      searchProudctFirst,
      searchProductSecond,
      totalProductOne,
      totalProductTwo,
    ] = await Promise.all([
      await RecommendProduct.find({ $text: { $search: search } })
        .sort({
          _id: 1,
        })
        .limit(limit)
        .skip((page - 1) * limit),
      await NewProduct.find({ $text: { $search: search } })
        .sort({
          _id: 1,
        })
        .limit(limit)
        .skip((page - 1) * limit),
      await RecommendProduct.count({ $text: { $search: search } }),
      await NewProduct.count({ $text: { $search: search } }),
    ]);

    const searchProduct = [...searchProudctFirst, ...searchProductSecond];
    const totalProduct = totalProductOne + totalProductTwo;

    return res.json({
      searchProduct,
      totalProduct,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

productRouter.get("/recommend", async (req, res) => {
  try {
    const { page = 1, limit = 8, sort } = req.query;
    if (sort === "높은가격") {
      const [recommendProducts, count] = await Promise.all([
        await RecommendProduct.find({})
          .sort({ price: -1 })
          .limit(limit)
          .skip((page - 1) * limit),
        await RecommendProduct.count(),
      ]);
      return res.json({
        recommendProducts,
        count,
      });
    }
    if (sort === "낮은가격") {
      const [recommendProducts, count] = await Promise.all([
        await RecommendProduct.find({})
          .sort({ price: 1 })
          .limit(limit)
          .skip((page - 1) * limit),
        await RecommendProduct.count(),
      ]);
      return res.json({
        recommendProducts,
        count,
      });
    }
    if (sort === "상품명") {
      const [recommendProducts, count] = await Promise.all([
        await RecommendProduct.find({})
          .sort({ name: 1 })
          .limit(limit)
          .skip((page - 1) * limit),
        await RecommendProduct.count(),
      ]);
      return res.json({
        recommendProducts,
        count,
      });
    }
    if (sort === "null" || sort === "신상품") {
      const [recommendProducts, count] = await Promise.all([
        await RecommendProduct.find({})
          .sort({ _id: 1 })
          .limit(limit)
          .skip((page - 1) * limit),
        await RecommendProduct.count(),
      ]);
      return res.json({
        recommendProducts,
        count,
      });
    }
  } catch (e) {
    return res.status(500).json({ err: e.message });
  }
});

productRouter.get("/new", async (req, res) => {
  try {
    const { page = 1, limit = 16, sort } = req.query;

    if (sort === "높은가격") {
      const [newProducts, count] = await Promise.all([
        await NewProduct.find({})
          .sort({ price: -1 })
          .limit(limit)
          .skip((page - 1) * 16),
        await NewProduct.count(),
      ]);
      return res.json({
        newProducts,
        count,
        totalPages: Math.ceil(count / limit),
      });
    }
    if (sort === "낮은가격") {
      const [newProducts, count] = await Promise.all([
        await NewProduct.find({})
          .sort({ price: 1 })
          .limit(limit)
          .skip((page - 1) * 16),
        await NewProduct.count(),
      ]);
      return res.json({
        newProducts,
        count,
        totalPages: Math.ceil(count / limit),
      });
    }
    if (sort === "상품명") {
      const [newProducts, count] = await Promise.all([
        await NewProduct.find({})
          .sort({ name: 1 })
          .limit(limit)
          .skip((page - 1) * 16),
        await NewProduct.count(),
      ]);
      return res.json({
        newProducts,
        count,
        totalPages: Math.ceil(count / limit),
      });
    }
    if (!sort || sort === "신상품") {
      const [newProducts, count] = await Promise.all([
        await NewProduct.find({})
          .sort({ _id: 1 })
          .limit(limit)
          .skip((page - 1) * 16),
        await NewProduct.count(),
      ]);
      return res.json({
        newProducts,
        count,
        totalPages: Math.ceil(count / limit),
      });
    }
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
