import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CarsSchema = new Schema(
  {
    title: { type: String, required: true },
    rate: { type: Number, min: 1, max: 10, default: 5 },
    description: { type: String, required: true },
    year: { type: Number, required: true },
    active: { type: Boolean, default: true },
  },
  { timestamps: true, versionKey: false }
  // thời gian createAt , UpdateAt
  // loại bỏ __v mặc định
);

const Cars = mongoose.model("Cars", CarsSchema);

export default Cars;
