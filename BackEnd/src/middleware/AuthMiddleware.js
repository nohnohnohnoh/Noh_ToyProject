const mongoose = require("mongoose");
const { Auth } = require("../models/Auth");

const authMiddleware = async (req, res, next) => {
  const { sessionId } = req.headers;
  if (!sessionId || !mongoose.isValidObjectId(sessionId)) return next();
  await Auth.findOne({ "sessionId._id": sessionId });
  return next();
};

module.exports = { authMiddleware };
