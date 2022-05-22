class BorrowBookController {
  static borrowBook = (req, res) => {
    res.redirect("/borrow");
  };

  static getBorrowBookList = (req, res) => {
    res.render("listBorrowBook");
  };
  static returnBook = (req, res) => {
    res.render("returnBook");
  } ;
}

module.exports = BorrowBookController;
