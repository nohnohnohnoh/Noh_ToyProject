const { Router } = require("express");
const { hash, compare } = require("bcryptjs");
const { Auth } = require("../models/Auth");
const jwt = require("jsonwebtoken");

const authRouter = Router();

const createToken = (userId) => {
  const token = jwt.sign({ _id: userId.toString() }, process.env.SECRET_KEY);
  return token;
};

authRouter.post("/create", async (req, res) => {
  try {
    const { id, passWord, pwc, nickName } = req.body;
    const [isVaildId, isVaildNickName, hashPassWord] = await Promise.all([
      Auth.findOne({ id }),
      Auth.findOne({ nickName }),
      hash(req.body.passWord, 10),
    ]);
    if (isVaildId?.id === id) throw new Error("이미 존재하는 ID입니다.");
    if (!id.includes("@") || !id.includes("."))
      throw new Error("올바른 이메일 형식이 아닙니다.");
    if (passWord.length < 8)
      throw new Error("비밀번호는 8자 이상이어야 합니다.");
    if (passWord !== pwc) throw new Error("비밀번호가 다릅니다.");
    if (isVaildNickName?.nickName === nickName)
      throw new Error("이미 존재하는 닉네임입니다.");
    const create = new Auth({ id, passWord: hashPassWord, pwc, nickName });
    await create.save();
    res.json({ message: "회원가입이 정상적으로 이루어졌습니다." });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { id, passWord } = req.body;
    const isVaildId = await Auth.findOne({ id });
    const isVaildPassWord = await compare(passWord, isVaildId.passWord);
    if (!isVaildPassWord) throw new Error("입력하신 정보가 올바르지 않습니다.");
    const token = createToken(isVaildId._id);
    res.json({
      message: "로그인이 정상적으로 이루어졌습니다.",
      data: {
        token,
        id: isVaildId.id,
        nickName: isVaildId.nickName,
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = { authRouter };
