import React, { useState, useContext } from 'react'
import { Context } from '../store/Store'

import { useQuery, useMutation } from '@apollo/react-hooks';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries'
import { addBook } from '../store/actions'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'


const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 250,
    },
  },
}));

const AuthorsList = () => {
  const classes = useStyles();
  const [, dispatch] = useContext(Context)

  const [book, setBook] = useState({
    name: '',
    genre: '',
    authorId: ''
  })
  
  // QUERIES + MUTATIONS
  const { loading, error, data } = useQuery(getAuthorsQuery)
  const [ mutate ] = useMutation(addBookMutation)
  
  if (loading) return <option disabled>'Loading...'</option>
  if (error) return `AddBook Error! ${error.message}`
  
  const handleChange = (e) => {
    setBook({...book, [e.target.name]: e.target.value})
  }

  const submitForm = (e) => {
    e.preventDefault()
    // Using our custom actioncreator to update state
    addBook(book, dispatch)
    mutate({
      // The variables option is an object that contains all of the variables we want to pass to our GraphQL query
      variables: {
        name: book.name,
        genre: book.genre,
        authorId: book.authorId
      },
      // use this to refetch and update the list
      refetchQueries: [{ query: getBooksQuery }]
    })
    // refetch() to update list
    setBook({
      name: '',
      genre: '',
      authorId: ''
    })
  }

  const authorsList = data.authors.map(author => {
    return <MenuItem key={author.id} value={author.id}>{author.name}</MenuItem>
  })

  return (
    <form className={classes.root} onSubmit={submitForm}>
      <div id="form-fields">
        <TextField
          variant="outlined"
          size="small"
          label="Title"
          id="standard-size-small" 
          name="name"
          onChange={handleChange}
          value={book.name}
        />
        <TextField
          variant="outlined"
          size="small"
          label="Genre"
          id="standard-size-small" 
          name="genre"
          onChange={handleChange}
          value={book.genre}
        />
        <TextField
          select
          variant="outlined"
          size="small"
          label="Author"
          id="standard-size-small" 
          name="authorId"
          onChange={handleChange}
          value={book.authorId}
        >
          {authorsList}
        </TextField>
      </div>
      <button>ADD BOOK</button>
    </form>
  )
}

export default AuthorsList