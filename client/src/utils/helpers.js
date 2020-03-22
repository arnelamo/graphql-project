export const getLinesAndSpaces = (part) => {
  const regEx = /02/g
  const number = part.match(regEx).length * 2
  const line = part.replace(regEx, "")
  let spaces = ""
  for (let i=0; i < number; i++) {
    spaces = spaces.concat(" ")
  }
  return [line, spaces]
}

export const findString = (currentBook, operation) => {
  const queries = {
  addBook: `
  mutation {
    addBook(name: ${currentBook.name}, genre: ${currentBook.genre}, authorId: ${currentBook.authorId}) {
      name
      id
    }
  }
  `,
  getBook: `
  query {
    book(id: ${currentBook.bookId}) {
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
    deleteBook(id: ${currentBook.bookId}){
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