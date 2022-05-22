const BookModel = require("../models/Book.model");
const LibraryModel = require("../models/Library.model");

class BookController {
  static createBook = async (req, res) => {
    try {
      console.log(req.body, "req.body");
      const { name, library, author, quantity, remainingBook } = req.body;
      const doc = new BookModel({
        name: name,
        library: library,
        author: author,
        quantity: quantity,
        remainingBook: remainingBook,
      });
      const result = await doc.save();
      console.log(result, "save success");
      res.redirect("/book");
    } catch (error) {
      console.log(error);
    }
  };

  static getAllBook = async (req, res) => {
    try {
      const libraryData = await LibraryModel.find();
      await BookModel.find()
        .populate("library")
        .then((book) => {
          res.render("listBook", { data: book, libraryData: libraryData });
          // console.log(book);
        });
    } catch (error) {
      console.log(error);
    }
  };

  static editBook = async (req, res) => {
    try {
      const libraryData = await LibraryModel.find();
      const result = await BookModel.findById(req.params.id)
        .populate("library")
        .then((book) => {
          res.render("editBook", { data: book, libraryData: libraryData });
        });
    } catch (error) {
      console.log(error);
    }
  };

  static updateBookById = async (req, res) => {
    try {
      const result = await BookModel.findByIdAndUpdate(req.params.id, req.body);
      console.log(result);
      res.redirect("/book");
    } catch (error) {
      console.log(error);
    }
  };

  static deleteBookById = async (req, res) => {
    try {
      const result = await BookModel.findByIdAndDelete(req.params.id);
res.redirect("/book");
    } catch (error) {
  console.log(error);      
    }
  };  
}

module.exports = BookController;
