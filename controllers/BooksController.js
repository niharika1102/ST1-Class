// const {response} = require('express')
// const Books = require('../model/Books')

// const index = (req, res, next) => {
//     Books.find()

//     //This is a promise
//     .then(response => {
//         res.json({
//             response
//         })
//     })

//     .catch(error => {
//         res.json({
//             message: '404 not found'
//         })
//     })
// }

// const show = (req, res, next) => {
//     let bookID = req.body.bookID
//     Books.findById(bookID)
//     .then (response => {
//         res.json({
//             response
//         })
//     })

//     .catch(error => {
//         res.json ({
//             message: "404 not found"
//         })
//     })
// }

// const store = (req, res, next) => {
//     let book = new Books ({
//         title: req.body.title,
//         author: req.body.author,
//         genre: req.body.genre,
//         publicationYear: req.body.publicationYear,
//         ISBN: req.body.ISBN
//     })

//     book.save()
//     //A promise to check if the book is saved successfully
//     .then(response => {
//         res.json ({
//             message: "Added successfully!"
//         })
//     })

//     .catch(error => {
//         res.json({
//             message: "An error occured!",
//         })
//     })
// }

// const update = (req, res, next) => {
//     let bookID = req.body.bookID

//     let updatedData = {   //Changed data
//         title: req.body.title,
//         author: req.body.author,
//         genre: req.body.genre,
//         publicationYear: req.body.publicationYear,
//         ISBN: req.body.ISBN
//     }

//     Books.findByIdAndUpdate(bookID, {$set: updatedData})
//     .then(() => {
//         res.json({
//             message: "Updated successfully!"
//         })
//     })

//     .catch (error => {
//         res.json({
//             message: "An error occured!"
//         })
//     })
// }

// //Deleting an employee
// const destroy = (req, res, next) => {
//     let bookID = req.body.bookID

//     Books.findOneAndDelete(bookID)
//     .then (() => {
//         res.json({
//             message: 'Deleted successfully!'
//         })
//     })

//     .catch(error => {
//         res.json({
//             message: "404 not found"
//         })
//     })
// }

// //Exporting functions
// module.exports = {
//     index, show, store, update, destroy
// }

// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
const Book = require("../model/Books");

const addBooks = async (req, res) => {
  const { title, author, genre, publicationYear, ISBN } = req.body;
  let books;
  try {
    books = new Book({ title, author, genre, publicationYear, ISBN });
  } catch {
    (err) => console.log(err);
  }
  if (!books) {
    return res.status(500).json({ message: "Unable to Add" });
  }
  return res.status(201).json({ books});
};

const getAllBooks = async (req, res) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }

  if (!books) {
    return res.status(404).json({ message: "No Products found" });
  }
  return res.status(200).json({ books });
};

const getByID = async (req, res) => {
  const id = req.params.id;
  let books;
  try {
    books = await Book.findById(id);
  } catch {
    (err) => console.log(err);
  }
  if (!books) {
    return res.status(404).json({ message: "No Products found" });
  }
  return res.status(200).json({ books });
};

const updateBook = async (req, res) => {
  const id = req.params.id;
  const { title, author, genre, publicationYear, ISBN} = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      title,
      author,
      genre,
      publicationYear,
      ISBN,
    });
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "404 Not Found" });
  }
  return res.status(200).json({ book });
};

const deleteBook = async (req, res) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "404 Not Found" });
  }
  return res.status(200).json({ message: "Book successfully deleted!" });
};

exports.getAllBooks = getAllBooks;
exports.addBooks = addBooks;
exports.getByID = getByID;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;