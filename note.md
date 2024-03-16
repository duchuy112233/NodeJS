NodeJS & Restful Web Service – WEB503 – HOADV – FPOLY
Khởi tạo dự án: npm init -y
Cài đặt Express: npm i express
Cài đặt nodemon: npm i -D nodemon
```
Thêm “type”: “module” , trong package.json như file dưới đây để chuyển từ require sang import module
{
  "name": "hoadv_nodejs_sp24",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "start": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "ejs": "^3.1.9",
    "express": "^4.18.3",
    "mongoose": "^8.2.1",
    "multer": "^1.4.5-lts.1"
  }
}

Thêm scripts package.json: “start”: “nodemon server.js” để chạy npm start
Create file server.js
```
import express from "express";
import routes from "./routes/index.js";
import connectMongoDB from "./config/dbconfig.js";
const app = express();
const port = 3000;
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
connectMongoDB("mongodb://127.0.0.1:27017/db_nodejs");
routes(app);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

```
Create file routes/index.js
```
import booksRouter from "./books.js";

export default function routes(app) {
  app.get("/", (req, res) => {
    res.send("Home");
  });
  app.use("/books", booksRouter);
}
```
Create file routes/books.js
```
import express from "express";
const booksRouter = express.Router();
import BooksController from "../controllers/books.js";

const booksController = new BooksController();

booksRouter.get("/", booksController.getAllBooks);
booksRouter.post("/", booksController.createBook);
booksRouter.get("/:id", booksController.getBookDetail);
booksRouter.put("/:id", booksController.updateBook);
booksRouter.delete("/:id", booksController.deleteBook);

export default booksRouter;
```
Connect MongoDB
```
npm i mongoose
Create file: config/dbconfig.js
import connectMongoDB vào server.js


```
import mongoose from "mongoose";

export default async function connectMongoDB(dbUrl) {
  try {
    //mongodb://127.0.0.1:27017/db_name
    await mongoose.connect(dbUrl);
    console.log("Connect successfully!!!");
  } catch (error) {
    console.log("Connect failure!!!");
  }
}
```
Create file models/BookModel.js
Ref: https://mongoosejs.com/docs/schematypes.html
```
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    author: { type: String },
    image: { type: String },
    price: { type: Number },
    rate: { type: Number },
  },
  { timestamps: true, versionKey: false }
);

const Book = mongoose.model("Book", BookSchema);

export default Book;
```
Create file controllers/books.js
Ref: https://mongoosejs.com/docs/queries.html
```
import Book from "../models/BookModel.js";

class BooksController {
  // GET '/'
  async getAllBooks(req, res) {
    const books = await Book.find();
    res.status(200).json(books);
  }

  // GET '/:id'
  getBookDetail(req, res) {
    // lab 2 get
    res.send("Book Detail id: " + req.params.id);
  }

  // POST '/'
  createBook(req, res) {
    // Model.create({data})
    Book.create({
      title: "Book 2",
      description: "description 2",
      author: "author ",
      image: "image 2",
      price: 1,
      rate: 2,
    });
    
    res.send("Create Books");
  }

  // PUT '/:id'
  updateBook(req, res) {
    res.send("Update Books");
  }

  // DELETE '/:id'
  deleteBook(req, res) {
    res.send("Delete Books");
  }
}

export default BooksController;