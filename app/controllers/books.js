import Book from "../models/BooksModel.js";
class BooksController {
  // get /book

  async getAllBooks(req, res) {
    try {
      const books = await Book.find({});
      res.status(200).json({
        message: "Get OK",
        data: books,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }

  // POST /books
  async createBook(req, res) {
    console.log(req.body);
    try {
      const book = await Book.create(req.body);
      res.status(200).json({
        message: "Create Book Done",
        data: book,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // createBook(req, res) {
  //   // Model.create({data})
  //   Book.create({
  //     title: "Book 2345",
  //     description: "description 34",
  //     author: "author",
  //     image: "image 2",
  //     price: 1,
  //     rate: 2,
  //   });
  //   res.send("Create Books Done");
  // }
  //

  // GET /books/:id
  async getBookDetail(req, res) {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) {
        return res.status(404).json({
          message: " Book Not Found",
        });
      }
      res.status(200).json({
        message: "Get Book Detail Done",
        data: book,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // PUT /books/:id
  async updateBook(req, res) {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!book) {
        return res.status(404).json({
          message: " Book Not Found",
        });
      }
      res.status(200).json({
        message: "Update Book Done",
        data: book,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // delete /book/:id
  async deleteBooks(req, res) {
    try {
      const books = await Book.findByIdAndDelete(req.params.id);
      if (!books) {
        return res.status(404).json({
          message: "Da xoa roi",
        });
      }
      res.status(200).json({
        message: "Xoa xong roi",
        data: books,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
}

export default BooksController;
