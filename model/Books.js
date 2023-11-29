const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    genre: {
        type: String
    },
    publicationYear: {
        type: Number
    },
    ISBN: {
        type: Number
    }
}, {timestamps: true})

const Books = mongoose.model('Books', bookSchema)
module.exports = Books