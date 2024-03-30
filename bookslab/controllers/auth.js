import User from "../models/UserModel";
import bcryptjs from "bcryptjs";
import { registerValidator, loginValidator } from "../validations/auth";
import jwt from "jsonwebtoken";

class AuthController {
  // POST auth/register
  async register(req, res) {
    try {
      //B1: validate: email, password, username
      const { email, username, password } = req.body;
      const { error } = registerValidator.validate(req.body);
      if (error) {
        const errors = error.details.map((err) => err.message);
        return res.status(400).json({
          message: errors,
        });
      }
      // 2: validate email
      const emailExist = await User.findOne({ email });
      if (emailExist) {
        return res.status(400).json({ message: "Email đã được đăng ký" });
      }
      // 3 ma hoa password
      const hashPassword = await bcryptjs.hash(password, 10);
      // update
      const user = await User.create({
        email,
        username,
        password: hashPassword,
      });
      // 4
      res.status(200).json({
        message: "Create Done",
        data: { ...user.toObject(), password: undefined },
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }

  async login(req, res) {
    const { email, password } = req.body;
    const { error } = loginValidator.validate(req.body);
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return res.status(404).json({
        message: "Tai khoan ko hop he",
      });
    }
    const checkPassword = await bcryptjs.compare(password, checkUser.password);
    if (!checkPassword) {
      return res.status(404).json({
        message: "Tài khoảng không hợp lệ",
      });
    }
    const token = jwt.sign({ id: checkUser._id }, "khoa-bi-mat", {
      expiresIn: "1d",
    });
    res.status(200).json({
      message: "Login thành công",
      user: { ...checkUser.toObject(), password: undefined },
      token,
    });
  }
}
export default AuthController;
