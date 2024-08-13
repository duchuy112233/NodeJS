import booksRouter from "./books.js";
import blogsRouter from "./blogs.js";
import productRouter from "./product.js";
import categoryRouter from "./category.js";

export default function routes(app) {
  app.get("/", (req, res) => {
    res.send("Home");
  });
  app.use("/books", booksRouter);

  app.use("/blogs", blogsRouter);
  app.use("/product", productRouter);
  app.use("/category", categoryRouter);
}