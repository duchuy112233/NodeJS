import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Model cho Product
const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, default: 0 },
    desc: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    public: { type: Boolean, default: true },
  },
  { timestamps: true, versionKey: false }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
