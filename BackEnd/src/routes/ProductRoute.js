const { Router } = require("express");
const { Product } = require("../models/Product");

const productRouter = Router();

productRouter.get("/new", async (req, res) => {
  try {
    const products = await Product.find({});
    return res.send({ products });
  } catch (e) {
    return res.status(500).json({ err: err.message });
  }
});

productRouter.get("/recommend", async (req, res) => {
  try {
    const products = await Product.find({});
    return res.json({ products });
  } catch (e) {
    return res.status(500).json({ err: err.message });
  }
});

productRouter.get("");
module.exports = { productRouter };

// userRouter.get("/", async (req, res) => {
//     try {
//       const users = await User.find({}); // find 배열이 반환 findOne 객체 반환
//       return res.send({ users });
//     } catch (error) {
//       return res.status(500).send({ err: err.message });
//     }
//   });

//   userRouter.get("/:userId", async (req, res) => {
//     try {
//       const { userId } = req.params;
//       if (!mongoose.isValidObjectId(userId))
//         return res.status(400).send("inValid");
//       const user = await User.findOne({ _id: userId });
//       res.send({ user });
//     } catch (err) {
//       console.log(err);
//       return res.status(500).send({ err: err.message });
//     }
//   });
