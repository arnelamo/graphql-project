import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../store/Store'

import { useLazyQuery, useMutation } from '@apollo/react-hooks'
import { getBookQuery, getBooksQuery, deleteBookMutation } from '../queries/queries'
import { getBookDetails, deleteBook } from '../store/actions'

const BookDetails = ({ bookId }) => {
  
  const [removeBook, setRemoveBook] = useState(false)
  const [, dispatch] = useContext(Context)
  const [getBook, { loading, error, data }] = useLazyQuery(getBookQuery, {
    variables: { id: bookId }
  })
  const [ mutate ] = useMutation(deleteBookMutation)

  useEffect(() => {
    bookId && getBook({ variables: { id: bookId }})
    bookId && getBookDetails(bookId, dispatch)
    setRemoveBook(false)
  }, [setRemoveBook, bookId, getBook, dispatch])

  if (loading) return <div id="spinner"></div>
  if (error) return `BookList Error! ${error.message}`

  const handleDelete = (id) => {
    setRemoveBook(true)
    deleteBook(id, dispatch)
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
          <h2>"{book.name}"</h2>
          <span>by {author.name}</span>
          <p><i>{book.genre}</i></p>
          <br/>
          <br/>
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
      <div>
        {renderContent()}
      </div>
  )
}

export default BookDetails