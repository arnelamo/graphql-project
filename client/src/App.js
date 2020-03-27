import React from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import Store  from './store/Store'

/* Components */
import BookList from './components/BookList'
import AddBook from './components/AddBook'
import Console from './components/Console'

let url
if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:4000/graphql'
} else {
  url = 'mongodb://Bob2:Test123@ds137863.mlab.com:37863/heroku_ctnfnnqv'
}


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
