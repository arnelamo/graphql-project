import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../store/Store'

import { useLazyQuery, useMutation } from '@apollo/react-hooks'
import { getBookQuery, getBooksQuery, deleteBookMutation } from '../queries/queries'
import { getBookActions, deleteBookActions } from '../store/actionCreators'

const BookDetails = ({ bookId }) => {
  
  const [removeBook, setRemoveBook] = useState(false)
  const [state, dispatch] = useContext(Context)
  const [getBook, { loading, error, data }] = useLazyQuery(getBookQuery, {
    variables: { id: bookId }
  })
  const [ mutate ] = useMutation(deleteBookMutation)

  useEffect(() => {
    bookId && getBook({ variables: { id: bookId }})
    bookId && getBookActions(bookId, dispatch)
    setRemoveBook(false)
  }, [setRemoveBook, bookId, getBook])

  if (loading) return 'Loading...';
  if (error) return `BookList Error! ${error.message}`

  const handleDelete = (id) => {
    setRemoveBook(true)
    deleteBookActions(id, dispatch)
    mutate({
      variables: {
        id: id 
      },
      refetchQueries: [{ query: getBooksQuery }]
    })
  }
  
  const renderContent = () => {
    if (data && !removeBook) {

      const { book } = data
      const { author } = book

      const list = author.books.map(book => {
        return <li key={book.id}>{book.name}</li>
      })

      return (
        <>
          <h2>Title: "{book.name}"</h2>
          <p><i>{book.genre}</i></p>
          <p>Author: {author.name}</p>
          <p>All books by this author:</p>
          <ul>
            {list}
          </ul>
          <button id="delete-book-button" onClick={() => handleDelete(book.id)}>DELETE BOOK</button>
        </>
      )
    } else {
      return <h2>No book selected</h2>
    }
  }

  return (
    <div id="right-side">
      <div id="book-details">
        {renderContent()}
      </div>
    </div>
  )
}

export default BookDetails