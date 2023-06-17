const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const { authRouter } = require("./src/routes/AuthRoute");
const { productRouter } = require("./src/routes/ProductRoute");
const PORT = process.env.PORT || 8080;

const server = async () => {
  try {
    const app = express();
    dotenv.config();
    mongoose.connect(process.env.MONGOURI);
    app.use(express.json());
    app.use(cors());
    app.use("/auth", authRouter);
    app.use("/product", productRouter);
    app.listen(PORT, () => {
      console.log(`${PORT}번에서 server 실행.`);
    });
  } catch (error) {
    console.log({ error });
  }
};

server();
