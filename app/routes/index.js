import booksRouter from "./books.js";
import blogsRouter from "./blogs.js";


export default function routes(app) {
  app.get("/", (req, res) => {
    res.send("Home");
  });
  app.use("/books", booksRouter);
  app.use("/blogs", blogsRouter); 
  
}
