import User from "../model/Auth.js";

class Authcontroler {
  async dangky(res, req) {
    try {
      const user = await User.create(req.body);

      res.status(200).json({
        message: "done",
        data: user,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async login(res, req) {}
}


export default Authcontroler