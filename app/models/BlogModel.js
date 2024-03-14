import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Model cho Blog
const BlogSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    tags: [String],
  },
  { timestamps: true, versionKey: false }
);

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;
