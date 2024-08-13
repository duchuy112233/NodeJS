import User from "../models/UserModel.js";

class AuthController {
  async register(req, res) {
    try {
      const { username, email, password } = req.body;
      // check email
      const emailExist = await User.findOne({ email });
      if (emailExist) {
        return res.status(400).json({ message: "Email da duoc dang ky" });
      }
      //ma hoa password
      const hashPassword = await bcryptjs.hash(password, 10);
      // update db
      const user = await User.create({
        email,
        username,
      
        password: hashPassword,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }

  login(req, res) {
    res.send("đăng nhập");
  }
}

export default AuthController;
