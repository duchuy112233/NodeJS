import bcryptjs from "bcryptjs";
import User from "../models/UserModel.js";

class AuthController {
  // POST auth/register
  async register(req, res) {
    try {
      const { username, email, password } = req.body;
      // check email co trong db chua User.findOne({email})
      const emailExisted = await User.findOne({ email });
      if (emailExisted) {
        return res.status(400).json({
          message: "Email da dc dang ky roi ban oi",
        });
      }
      // ma hoa password
      const hashPassword = await bcryptjs.hash(password, 10);
      const user = await User.create({
        username,
        email,
        password: hashPassword,
      });
      res.status(201).json({
        message: "Create User Done",
        data: { ...user.toObject(), password: undefined },
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  // POST auth/login
  login(req, res) {
    res.send("login");
  }
}

export default AuthController;