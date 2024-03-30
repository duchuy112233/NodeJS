import Book from "../models/BookModel";

class BooksController {
  // GET /books
  async getAllBooks(req, res) {
    try {
      const books = await Book.find();
      res.status(200).json({
        message: "Get All Books Done",
        data: books,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
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
      res.status(400).json({
        message: error.message,
      });
    }
  }
  // PUT /books/:id
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
  // DELETE /books/:id
  async deleteBook(req, res) {
    try {
      const book = await Book.findByIdAndDelete(req.params.id);
      if (!book) {
        return res.status(404).json({
          message: "Book Not Found",
        });
      }
      res.status(200).json({
        message: "Delete Book Done",
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
}
export default BooksController;
