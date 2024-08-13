
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AuthSchema = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    pass: { type: Number, require: true },
  },
  { timestamps: true, versionKey: false }
);

const User = mongoose.model("User", AuthSchema);

export default User;
