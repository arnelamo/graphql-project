export const updateState = (state, values) => {
  return {
    ...state,
    currentBook: values.bookDetails,
    operation: values.operationType
  }
}

export const findString = (currentBook, operation) => {
  const queries = {
  addBook: `
  mutation {
    addBook(name: "${currentBook.name}", genre: "${currentBook.genre}", authorId: "${currentBook.authorId}") {
      name
      id
    }
  }
  `,
  getBook: `
  query {
    book(id: "${currentBook.bookId}") {
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
  `,
  deleteBook: `
  mutation {
    deleteBook(id: "${currentBook.bookId}"){
      name
      id
    }
  }
`
}

  switch (operation) {
    case 'addBookMutation': return queries.addBook
    case 'getBookQuery': return queries.getBook
    case 'deleteBookMutation': return queries.deleteBook
    default:
      return null
  } 
}