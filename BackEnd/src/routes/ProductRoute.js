const { Router } = require("express");
const { NewProduct } = require("../models/Product/NewProduct");
const { RecommendProduct } = require("../models/Product/RecommendProduct");

const productRouter = Router();

productRouter.get("/new", async (req, res) => {
  try {
    const newProducts = await NewProduct.find({});
    return res.json({ newProducts });
  } catch (e) {
    return res.status(500).json({ err: err.message });
  }
});

productRouter.get("/recommend", async (req, res) => {
  try {
    const recommendProducts = await RecommendProduct.find({});
    return res.json({ recommendProducts });
  } catch (e) {
    return res.status(500).json({ err: err.message });
  }
});

productRouter.get("/new/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    if (!mongoose.isValidObjectId(productId))
      throw new Error("유효하지 않는 Id 입니다.");
    const product = await NewProduct.findOne({ _id: productId });
    res.json({ product });
  } catch (e) {
    res.status.json({ message: e.message });
  }
});

productRouter.get("/recommend/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    if (!mongoose.isValidObjectId(productId))
      throw new Error("유효하지 않는 Id 입니다.");
    const product = await RecommendProduct.findOne({ _id: productId });
    res.json({ product });
  } catch (e) {
    res.status.json({ message: e.message });
  }
});

productRouter.get("");
module.exports = { productRouter };
