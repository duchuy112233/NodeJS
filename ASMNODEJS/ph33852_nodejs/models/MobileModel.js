import mongoose from "mongoose";
const Schema = mongoose.Schema;

const MobilesSchema = new Schema(
  {
    title: { type: String, require: true },
    price: { type: Number, min: 0 },
    image: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const mobilesModel = mongoose.model("mobile", MobilesSchema);

export default mobilesModel;
