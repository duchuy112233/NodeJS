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

  // post /book
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

  // get /book/:id
  getBookDetail(req, res) {
    res.send("Books detail");
  }
  // put /book/:id
  updateBook(req, res) {
    res.send("update Books");
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
