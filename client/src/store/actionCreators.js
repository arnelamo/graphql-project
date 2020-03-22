export const addBookActions = (book, dispatch) => {
  dispatch({ 
    type: 'ADD_BOOK',
    payload: {
      name: book.name,
      genre: book.genre,
      authorId: book.authorId
    }
  })
  dispatch({
    type: 'ADD_OPERATION',
    payload: 'addBookMutation'
  })
}

export const getBookActions = (id, dispatch) => {
  dispatch({
    type: 'GET_BOOK',
    payload: { bookId: id }
  })
  dispatch({
    type: 'ADD_OPERATION',
    payload: 'getBookQuery'
  })
}

export const deleteBookActions = (id, dispatch) => {
  dispatch({
    type: 'DELETE_BOOK',
    payload: { bookId: id }
  })
  dispatch({
    type: 'ADD_OPERATION',
    payload: 'deleteBookMutation'
  })
}