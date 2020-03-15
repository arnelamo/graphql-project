import React, { useState, useEffect } from 'react'
import { useLazyQuery, useMutation } from '@apollo/react-hooks'
import { getBookQuery, getBooksQuery, deleteBookMutation } from '../queries/queries'

const BookDetails = ({ bookId }) => {
  
  const [removeBook, setRemoveBook] = useState(false)
  const [getBook, { loading, error, data }] = useLazyQuery(getBookQuery, {
    variables: { id: bookId }
  })
  const [ mutate ] = useMutation(deleteBookMutation)

  useEffect(() => {
    bookId && getBook({ variables: { id: bookId }})
    setRemoveBook(false)
  }, [setRemoveBook, bookId, getBook])

  if (loading) return 'Loading...';
  if (error) return `BookList Error! ${error.message}`

  const handleDelete = (id) => {
    setRemoveBook(true)
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
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{author.name}</p>
          <p>All books by this author:</p>
          <ul>
            {list}
          </ul>
          <button id="delete-book-button" onClick={() => handleDelete(book.id)}>-</button>
        </>
      )
    } else {
      return <h2>No book selected</h2>
    }
  }

  return (
    <div id="book-details">
      {renderContent()}
    </div>
  )
}

export default BookDetails