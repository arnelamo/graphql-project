import  gql  from 'graphql-tag'

const getBooksQuery = gql`
{
  books {
    name
    id
  }
}
`

const getAuthorsQuery = gql`
{
  authors {
    name
    id
  }
}
`

const addBookMutation = gql`
mutation($name: String!, $genre: String!, $authorId: ID!) {
  addBook(name: $name, genre: $genre, authorId: $authorId) {
    name
    id
  }
}
`

const getBookQuery = gql`
query($id: ID!) {
  book(id: $id) {
    id
    name
    genre
    author {
      id
      name
      age
      books{
        id
        name
      }
    }
  }
}
`

const deleteBookMutation = gql`
  mutation ($id: ID!){
    deleteBook(id: $id){
      name
      id
    }
  }
`

export {
  getBooksQuery,
  getAuthorsQuery,
  addBookMutation,
  getBookQuery,
  deleteBookMutation
}