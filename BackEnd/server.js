const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const { authRouter } = require("./src/routes/AuthRoute");
const { productRouter } = require("./src/routes/ProductRoute");
const { myorderRouter } = require("./src/routes/MyOrderRoute");
const { wishListRouter } = require("./src/routes/WishListRoute");
const { cartRouter } = require("./src/routes/CartRoute");
const { authMiddleware } = require("./src/middleware/AuthMiddleware");
const PORT = process.env.PORT || 3000;

const server = async () => {
  try {
    const app = express();
    dotenv.config();
    mongoose.connect(process.env.MONGOURI);
    app.use(express.json());
    app.use(cors());
    app.use("/auth", authRouter);
    app.use("/product", productRouter);
    app.use(authMiddleware);
    app.use("/myorder", myorderRouter);
    app.use("/wishlist", wishListRouter);
    app.use("/cart", cartRouter);
    app.listen(PORT, () => {
      console.log(`${PORT}번에서 server 실행.`);
    });
  } catch (error) {
    console.log({ error });
  }
};

server();
