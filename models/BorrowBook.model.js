const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BookModel = require("../models/Book.model");

const borrowBookSchema = new Schema({
  studentName: { type: String, required: true },
  studentId: { type: String, required: true },
  bookName: { type: Schema.Types.ObjectId, ref: "Book" },
  borrowDate: { type: Date, required: true },
  returnDate: Date,
});

const BorrowBookModel = mongoose.model("BorrowBook", borrowBookSchema);
module.exports = BorrowBookModel;
