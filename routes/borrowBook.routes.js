const express = require('express');
const router = express.Router();
const borrowBookController = require('../controllers/borrowBook.controller');

router.get("/", borrowBookController.getBorrowBookList);
router.post("/", borrowBookController.borrowBook);
router.get("/returnBook/:id", borrowBookController.getFormReturnBook);


module.exports = router;



