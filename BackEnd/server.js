const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { authRouter } = require("./src/routes/AuthRoute");
const PORT = process.env.PORT || 8000;

const server = async () => {
  try {
    const app = express();
    dotenv.config();
    app.use(express.json());

    mongoose.connect(process.env.MONGOURI);

    app.use("/auth", authRouter);

    app.listen(PORT, () => {
      console.log(`${PORT}번에서 server 실행.`);
    });
  } catch (error) {
    console.log({ error });
  }
};

server();
