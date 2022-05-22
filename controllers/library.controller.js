const LibraryModel = require("../models/Library.model");
class LibraryController {
  static createLibrary = async (req, res) => {
    try {
      // console.log(req.body);
      const { name, librarian } = req.body;
      const doc = new LibraryModel({
        name: name,
        librarian: librarian,
      });
      // Saving document
      const result = await doc.save();
      // console.log(result);
      res.redirect("/library");
    } catch (error) {
      console.log(error);
    }
  };

  static getAllLibrary = async (req, res) => {
    try {
      const result = await LibraryModel.find();
      console.log(result);
      res.render("listLibrary", { data: result });
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = LibraryController;
