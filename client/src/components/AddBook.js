import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries'


const AuthorsList = () => {
  const [book, setBook] = useState({
    name: '',
    genre: '',
    authorId: ''
  })
  
  const { loading, error, data } = useQuery(getAuthorsQuery)
  const { refetch } = useQuery(getBooksQuery)
  const [ mutate ] = useMutation(addBookMutation)

  if (loading) return <option disabled>'Loading...'</option>
  if (error) return `AddBook Error! ${error.message}`

  const submitForm = () => {
    mutate({
      // The variables option is an object that contains all of the variables we want to pass to our GraphQL query
      variables: {
        name: book.name,
        genre: book.genre,
        authorId: book.authorId
      },
    })
    refetch()
  }

  const authorsList = data.authors.map(author => {
    return <option key={author.id} value={author.id}>{author.name}</option>
  })

  return (
    <form id="add-book" onSubmit={submitForm}>
      <div className="field">
          <label>Book name:</label>
          <input type="text" onChange={e => setBook({...book, name: e.target.value})}/>
      </div>
      <div className="field">
          <label>Genre:</label>
          <input type="text" onChange={e => setBook({...book, genre: e.target.value})}/>
      </div>
      <div className="field">
          <label>Author:</label>
          <select onChange={e => setBook({...book, authorId: e.target.value})}>
              <option>Select author</option>
              { authorsList }
          </select>
      </div>
      <button>+</button>
    </form>
  )
}

export default AuthorsList