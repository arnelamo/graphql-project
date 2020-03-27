import React from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import Store  from './store/Store'

/* Components */
import BookList from './components/BookList'
import AddBook from './components/AddBook'
import Console from './components/Console'

if (process.env.NODE_ENV === 'development') {
  console.log('development')
} else {
  console.log('prod')
}

const url = 'http://localhost:4000/graphql'
const client = new ApolloClient({
  uri: url
})

const  App = () => {
  return (
    <ApolloProvider client={client}>
      <Store>      
        <BookList/>
        <AddBook/> 
        <Console />
      </Store>
    </ApolloProvider>
  );
}

export default App;
