const BorrowBookModel = require("../models/BorrowBook.model");
const BookModel = require("../models/Book.model");

class BorrowBookController {
  static borrowBook = async (req, res) => {
    try {
      console.log(req.body, "req.body");
      const { studentName, studentId, bookName, quantity, borrowDate } =
        req.body;
      const doc = new BorrowBookModel({
        studentName: studentName,
        studentId: studentId,
        bookName: bookName,
        quantity: quantity,
        borrowDate: borrowDate,
      });
      const result = await doc.save();
      console.log(result, "save success");
      res.redirect("/borrow");
    } catch (error) {
      console.log(error);
    }
  };

  static getBorrowBookList = async (req, res) => {
    try {
      const bookData = await BookModel.find();
      await BorrowBookModel.find()
        .populate("bookName")
        .then((borrowBook) => {
          res.render("listBorrowBook", {
            borrowBook: borrowBook,
            bookData: bookData,
          });
          // console.log(borrowBook, "borrowBook");
        });
    } catch (error) {
      console.log(error);
    }
  };

  static getFormReturnBook = async (req, res) => {
    try {
      const result = await BorrowBookModel.findById(req.params.id)
        .populate("bookName")
        .then((borrowBook) => {
          console.log(borrowBook);
          res.render("returnBook", {
            borrowBook: borrowBook,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = BorrowBookController;
