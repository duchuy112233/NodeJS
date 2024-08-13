import User from "../models/UserModel";
import bcryptjs from "bcryptjs";
import { registerValidator, loginValidator } from "../validations/auth";
import jwt from "jsonwebtoken";

class AuthController {
  // POST auth/register
  async register(req, res) {
    try {
      const { error } = registerValidator.validate(req.body, {
        abortEarly: false,
      });
      if (error) {
        const errors = error.details.map((err) => err.message);
        return res.status(400).json({
          message: errors,
        });
      }

      const { username, email, password } = req.body;
      const checkEmail = await User.findOne({ email });
      if (checkEmail) {
        return res.status(400).json("Email da dc dang ky");
      }
      const hashPassword = await bcryptjs.hash(password, 10);
      const user = await User.create({
        username,
        email,
        password: hashPassword,
      });
      res.status(200).json({
        message: "Create user done",
        data: { ...user.toObject(), password: undefined },
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async login(req, res) {
    try {
      const { error } = loginValidator.validate(req.body, {
        abortEarly: false,
      });
      if (error) {
        const errors = error.details.map((err) => err.message);
        return res.status(400).json({
          message: errors,
        });
      }

      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json("Tai khoan khong hop le");
      }

      const checkPassword = await bcryptjs.compare(password, user.password);
      if (!checkPassword) {
        return res.status(400).json("Mat khau khong hop le");
      }

      const token = jwt.sign({ id: user._id }, "key", { expiresIn: "1d" });
      res.status(200).json({
        message: "Dang nhap thanh cong",
        data: { ...user.toObject(), password: undefined, token },
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default AuthController;
