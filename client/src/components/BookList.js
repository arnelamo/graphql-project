import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { getBooksQuery } from '../queries/queries'

import BookDetails from '../components/BookDetails'

const BookList = () => {
  const [selectedBookId, setSelectedBookId] = useState(null)
  const { loading, error, data } = useQuery(getBooksQuery)

  useEffect(() => {

  })

  if (loading) return 'Loading...';
  if (error) return `BookList Error! ${error.message}`

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