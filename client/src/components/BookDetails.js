import React, { useEffect } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import { getBookQuery } from '../queries/queries'

const BookDetails = ({ bookId }) => {

  const [getBook, { loading, error, data }] = useLazyQuery(getBookQuery, {
    variables: { id: bookId }
  })

  useEffect(() => {
    bookId && getBook({ variables: { id: bookId }})
  }, [bookId])

  if (loading) return 'Loading...';
  if (error) return `BookList Error! ${error.message}`
  
  const renderContent = () => {
    if (data) {

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
        </>
      )
    } else {
      return <p>No book selected</p>
    }
  }

  return (
    <div id="book-details">
      {renderContent()}
    </div>
  )
}

export default BookDetails