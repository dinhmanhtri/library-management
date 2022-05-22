const express = require('express');
const LibraryController = require('../controllers/library.controller');
const router = express.Router();

router.get("/", LibraryController.getAllLibrary);
router.post("/", LibraryController.createLibrary);


module.exports = router;