import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Model cho Blog
const CategorySchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true, versionKey: false }
);

const Category = mongoose.model("Category", CategorySchema);

export default Category;
