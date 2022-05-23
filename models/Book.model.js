const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const LibraryModel = require('./Library.model');

const bookSchema = new Schema({
  name: { type: String, required: true },
  library: { type: Schema.Types.ObjectId, ref: "Library" },
  author: { type: String, required: true },
  quantity: { type: Number, required: true },
  borrowedBook: Number,
});

const BookModel = mongoose.model("Book", bookSchema);
module.exports = BookModel;


