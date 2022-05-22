const express = require('express');
const router = express.Router();
const borrowBookController = require('../controllers/borrowBook.controller');

router.get("/", borrowBookController.getBorrowBookList);

module.exports = router;



