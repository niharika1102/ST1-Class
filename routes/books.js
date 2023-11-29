const express = require('express')
const router = express.Router()

const BooksController = require('../controllers/BooksController')

// router.get('/', BooksController.index)    //show all
// router.get(`/:${bookID}`, BooksController.show)    //show one
// router.post('/', BooksController.store)    //create
// router.post(`/:${bookID}`, BooksController.update)   //update
// router.delete(`/:${bookID}`, BooksController.destroy)   //delete

router.get('/', BooksController.index)
router.post('/show', BooksController.show)
router.post('/store', BooksController.store)
router.post('/update', BooksController.update)
router.post('/delete', BooksController.destroy)

module.exports = router