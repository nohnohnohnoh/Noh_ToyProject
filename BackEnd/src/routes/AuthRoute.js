const { Router } = require("express");

const authRouter = Router();

authRouter.post("/", (req, res) => {
  const { id, password } = req.body;
});

module.exports = { authRouter };
