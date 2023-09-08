const { Auth } = require("../models/Auth");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.get("Authorization");

    const authToken = jwt.verify(token, "JWT_SECRET_KEY");
    const { _id } = authToken;

    const user = await Auth.findOne({ _id });
    if (!user) return next();

    req.user = user;

    next();
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

module.exports = { authMiddleware };
