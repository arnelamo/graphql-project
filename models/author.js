const mongoose = require('mongoose')
const Schema = mongoose.Schema

/* Notice we don't add an id - that's because the mLab database is automatically assigning
an id to every file we add to the db. */
const authorSchema = new Schema({
  name: String,
  age: Number
})

/* Here, we're effectively exporting a model (which is a collection in MongoDB). The collection name, or model name,
is going to be "Author", and the schema we base that model on is 'authorSchema'. */
module.exports = mongoose.model('Author', authorSchema)