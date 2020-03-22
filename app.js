/* These consts become functions */
const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

// import files
const url = require('./config')

// defining global variables
const port = process.env.PORT || 4000
const app = express()

// allow cross-origin requests. Basically, allowing other servers to request data from our express server
app.use(cors())

// Connect to mongoose db. Replace the url with your own. mLab (MongoDB) is a good option.
mongoose.connect(process.env.MONGODB_URI || url)
// connection.once() is a event listener, that fires a callback (second arg) when connection is 'open'
mongoose.connection.once('open', () => {
  console.log('Connected to database')
})


/* Important! Don't mix up the GraphQL schema with the Mongoose schema. The Mongoose schema is the schema
that defines the schema for the database.  The models for the DB is stored in the 'models' folder. */

/* The graphqlHTTP function takes an object as an argument, with options
 ES6 allows us to write 'schema: schema' as just 'schema', since the names are similar */
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

// Check if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('/client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(port, () => {
    console.log('now listening for requests on port' +port)
})