const express = require('express');
const BookController = require('../controllers/book.controller');
const router = express.Router();

router.get("/", BookController.getAllBook);
router.post("/", BookController.createBook);
router.get("/edit/:id", BookController.editBook);
router.post("/update/:id", BookController.updateBookById);
router.post("/delete/:id", BookController.deleteBookById);

module.exports = router;
