export const addBook = (book, dispatch) => {
  dispatch({ 
    type: 'ADD_BOOK',
    payload: {
      bookDetails: {
        name: book.name,
        genre: book.genre,
        authorId: book.authorId
      },
      operationType: 'addBookMutation'
    }
  })
}

export const getBookDetails = (id, dispatch) => {
  dispatch({
    type: 'GET_BOOK',
    payload: {
      bookDetails: { bookId: id },
      operationType: 'getBookQuery'
    }
  })
}

export const deleteBook = (id, dispatch) => {
  dispatch({
    type: 'DELETE_BOOK',
    payload: {
      bookDetails: { bookId: id },
      operationType: 'deleteBookMutation'
    }
  })
}