import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    fulllname: { type: string, require: true },
    email: { type: string, unique: true, require: true },
    password: { type: string, require: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const userModel = mongoose.model("user", UserSchema);
export default userModel;
