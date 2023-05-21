const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
  name: { type: String, required: true, unique },
  password: { type: Number, required: true },
  pwc: { type: Number, required: true },
});
