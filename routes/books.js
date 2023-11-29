const express = require("express");
const router = express.Router();
const Book = require("../model/Books");

const booksController = require("../controllers/BooksController");

router.get("/api/books", booksController.getAllBooks);
router.post("/api/books", booksController.addBooks);
router.get("/api/books/:id", booksController.getByID);
router.put("/api/books/:id", booksController.updateBook);
router.delete("/api/books/:id", booksController.deleteBook);
module.exports = router;
