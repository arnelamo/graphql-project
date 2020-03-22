import React, { useState, useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { getBooksQuery } from '../queries/queries'
import { Context } from '../store/Store'

import BookDetails from '../components/BookDetails'

const BookList = () => {
  const [selectedBookId, setSelectedBookId] = useState(null)
  const [state, dispatch] = useContext(Context)
  const { loading, error, data } = useQuery(getBooksQuery)

  if (loading) return 'Loading...';
  if (error) return `BookList Error! ${error.message}`

console.log('BookList state', state)

  const updatedList = data.books.map(book => {
  return <li key={book.id} onClick={() => setSelectedBookId(book.id)}>{book.name}</li>
  })

  return (
    <div>
      <ul id="book-list">
        {updatedList}
      </ul>
      <BookDetails bookId={selectedBookId}/>
    </div>
  )
}

export default BookList