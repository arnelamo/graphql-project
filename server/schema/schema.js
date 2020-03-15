const graphql = require('graphql')
const Book = require('../models/book')
const Author = require('../models/author')

const { GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
 } = graphql

/* Here we define our first Object type */
const BookType = new GraphQLObjectType({
  name: 'Book',
    fields: () => ({ 
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      genre: { type: GraphQLString },
      author: {
        type: AuthorType,
        resolve(parent, args) { // the parent object here is the books data
          return Author.findById(parent.authorId)
        }
      }
    })
})

const AuthorType = new GraphQLObjectType({
  name: 'Author',
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      age: { type: GraphQLInt },
      books: {
        type: new GraphQLList(BookType),
        resolve(parent, args) { 
          return Book.find({ authorId: parent.id })
        }
      }
    })
})

/* Defining the Root queries, that determines how we jump into the graph, to query data.
Notice we don't need to wrap 'fields' inside i function in this case, because 
we don't need to worry about the order of the fields in this case. */
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID }},
      resolve(parent, args) {
        /* code to get data from DB / other resource */
        return Book.findById(args.id)
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID }},
      resolve(parent, args) {
        return Author.findById(args.id)
      }
    },
    books: { 
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        // return books
        return Book.find({}) // When we pass an empty object, all will match and we get all books.
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        // return authors
        return Author.find({})
      }
    }
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve(parent, args) {
        let author = new Author({ // creating an local instance of the Author model (Mongoose)
          name: args.name,
          age: args.age
        })
        /* save() is a Mongoose method that saves our information in the DB. It does not only save though,
        it also returns the same object we just saved. So by entering 'return' in front of the save(), we
        get the saved result sent back to us as well. */
        return author.save() 
      }
    },
    addBook: {
      type: BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        let book = new Book({
          name: args.name,
          genre:  args.genre,
          authorId: args.authorId
        })
        return book.save()
      }
    },
    deleteBook: {
      type: BookType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        return Book.findOneAndRemove({ _id: args.id })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})