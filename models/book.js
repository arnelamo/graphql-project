const mongoose = require('mongoose')
const Schema = mongoose.Schema

/* Notice we don't add an id - that's because the mLab database is automatically assigning
an id to every file we add to the db. */
const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String
})

/* Here, we're effectively exporting a model (which is a collection in MongoDB). The collection name, or model name,
is going to be "Book", and the schema we base that model on is 'bookSchema'. */
module.exports = mongoose.model('Book', bookSchema)