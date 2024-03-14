// Model cho Product
const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    quantity: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  },
  { timestamps: true, versionKey: false }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
