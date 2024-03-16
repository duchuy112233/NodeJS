class BooksController {
  // get /book
  getAllBooks(req, res) {
    res.send("All Books");
  }
  // post /book
  createBook(req, res) {
    res.send("create Books");
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
  deleteBooks(req, res) {
    res.send("delete Books");
  }
}

export default BooksController;
