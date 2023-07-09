const { Schema, model } = require("mongoose");

const AuthSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    passWord: { type: String, required: true, trim: true },
    pwc: { type: String, required: true, trim: true },
    nickName: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const Auth = model("auth", AuthSchema);

module.exports = { Auth };
