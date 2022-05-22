const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const librarySchema = new Schema({
  name: { type: String, required: true },
  librarian: { type: String, required: true },
});

const LibraryModel = mongoose.model("Library", librarySchema);
module.exports = LibraryModel;
