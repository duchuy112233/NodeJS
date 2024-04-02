import jwt from "jsonwebtoken";

import User from "../models/UserModel";

const checkPermission = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "No Authorizationn",
      });
    }
    // verify token
    const data = jwt.verify(token, process.env.SECRECT_KEY);
    if (!data) {
      return res.status(401).json({
        message: "No Authorization",
      });
    }
    // check user
    const user = await User.findById(data.id);
    if (!user) {
      return res.status(404).json({
        message: "Not Found",
      });
    }
    // user.role !== 'admin'
    // if(user.role !== 'admin'){
    //     return res.status(403).json({
    //         message:'Ban ko co quyen lam viec nay'
    //     })
    // }
    next();
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export { checkPermission };
